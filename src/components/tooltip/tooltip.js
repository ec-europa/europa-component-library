import { queryAll } from '@ecl/dom-utils';

let tooltipCounter = 0;

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.tooltipSelector Selector for tooltip triggers (uses data-ecl-tooltip or data-ecl-tooltip-inverted attribute, with optional title fallback)
 * @param {Boolean} options.attachHoverListener Whether or not to bind hover events on tooltip triggers
 * @param {Boolean} options.attachResizeListener Whether or not to bind resize events
 * @param {Boolean} options.attachScrollListener Whether or not to bind scroll events
 * @param {Boolean} options.attachKeyListener Whether or not to bind keyboard events
 * @param {Number} options.hideDelay Delay in ms before hiding the tooltip when the mouse leaves, giving time to cross the gap between trigger and tooltip
 */
export class Tooltip {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Tooltip} An instance of Tooltip.
   */
  static autoInit(root, { TOOLTIP: defaultOptions = {} } = {}) {
    const tooltip = new Tooltip(root, defaultOptions);
    tooltip.init();
    root.ECLTooltip = tooltip;
    return tooltip;
  }

  constructor(
    element,
    {
      tooltipSelector = '[data-ecl-tooltip], [data-ecl-tooltip-inverted]',
      attachHoverListener = true,
      attachResizeListener = true,
      attachScrollListener = true,
      attachKeyListener = true,
      hideDelay = 300,
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;

    // Options
    this.tooltipSelector = tooltipSelector;
    this.attachHoverListener = attachHoverListener;
    this.attachResizeListener = attachResizeListener;
    this.attachScrollListener = attachScrollListener;
    this.attachKeyListener = attachKeyListener;
    this.hideDelay = hideDelay;

    // Private variables
    this.popups = new Map(); // trigger → popup element
    this.currentTrigger = null;
    this.currentPopup = null;
    this.usePopoverApi = 'popover' in HTMLElement.prototype;
    this.hideTimeoutId = null;

    // Bind `this` for use in callbacks
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
    this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.positionTooltip = this.positionTooltip.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    // Create tooltips for triggers already present in the DOM.
    queryAll(this.tooltipSelector, this.element).forEach((trigger) => {
      this.getOrCreatePopup(trigger);
    });

    // Attach delegated event listeners to the root element
    if (this.attachHoverListener) {
      this.element.addEventListener('mouseover', this.handleMouseOver);
      this.element.addEventListener('mouseout', this.handleMouseOut);
      this.element.addEventListener('focusin', this.handleFocusIn);
      this.element.addEventListener('focusout', this.handleFocusOut);
    }

    // Bind global keyboard events.
    // Also listen on the parent frame when running inside an iframe (e.g.
    // Storybook), so ESC works even when the iframe has not received focus yet.
    if (this.attachKeyListener) {
      document.addEventListener('keyup', this.handleKeyboardGlobal);
      try {
        if (window.parent !== window) {
          window.parent.document.addEventListener(
            'keyup',
            this.handleKeyboardGlobal,
          );
        }
      } catch {
        // Cross-origin parent frame — silently skip
      }
    }

    // Attach resize event listener
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.hideTooltip);
    }

    // Attach scroll event listener
    if (this.attachScrollListener) {
      window.addEventListener('scroll', this.hideTooltip, { capture: true });
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    // Remove delegated event listeners
    if (this.attachHoverListener) {
      this.element.removeEventListener('mouseover', this.handleMouseOver);
      this.element.removeEventListener('mouseout', this.handleMouseOut);
      this.element.removeEventListener('focusin', this.handleFocusIn);
      this.element.removeEventListener('focusout', this.handleFocusOut);
    }

    // Remove global keyboard listener (both own frame and parent frame)
    if (this.attachKeyListener) {
      document.removeEventListener('keyup', this.handleKeyboardGlobal);
      try {
        if (window.parent !== window) {
          window.parent.document.removeEventListener(
            'keyup',
            this.handleKeyboardGlobal,
          );
        }
      } catch {
        // Cross-origin parent frame — silently skip
      }
    }

    // Remove resize event listener
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.hideTooltip);
    }

    // Remove scroll event listener
    if (this.attachScrollListener) {
      window.removeEventListener('scroll', this.hideTooltip, { capture: true });
    }

    // Cancel any pending timeouts
    this.clearHideTimeout();

    // Remove all popup elements and clean up aria attributes on triggers
    this.popups.forEach((popup, trigger) => {
      trigger.removeAttribute('aria-describedby');
      if (popup.parentNode) {
        popup.parentNode.removeChild(popup);
      }
    });
    this.popups.clear();

    // Clean up references
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Return the popup element linked to a trigger, creating it if needed.
   * This allows triggers added to the DOM after init() to work correctly.
   *
   * @param {HTMLElement} trigger
   * @returns {HTMLElement} popup
   */
  getOrCreatePopup(trigger) {
    if (this.popups.has(trigger)) return this.popups.get(trigger);

    const id = `ecl-tooltip-${tooltipCounter++}`;

    const popup = document.createElement('span');
    popup.classList.add('ecl-tooltip');
    popup.setAttribute('id', id);
    popup.setAttribute('role', 'tooltip');
    popup.setAttribute('aria-hidden', 'true');

    if (this.usePopoverApi) {
      popup.setAttribute('popover', 'manual');
    } else {
      popup.style.display = 'none';
    }

    // Keep tooltip open while hovering over it; use a delay to handle the gap
    popup.addEventListener('mouseover', () => this.clearHideTimeout());
    popup.addEventListener('mouseout', (e) => {
      const { relatedTarget } = e;
      if (relatedTarget && trigger.contains(relatedTarget)) return;
      if (relatedTarget && popup.contains(relatedTarget)) return;
      this.scheduleHide();
    });

    trigger.insertAdjacentElement('afterend', popup);
    trigger.setAttribute('aria-describedby', id);

    // The title attribute is inaccessible (hover-only, poor screen reader
    // support). Transfer its value to the data attribute if needed, then
    // remove it permanently — aria-describedby covers screen readers.
    const titleValue = trigger.getAttribute('title');
    if (titleValue) {
      if (
        !trigger.getAttribute('data-ecl-tooltip') &&
        !trigger.getAttribute('data-ecl-tooltip-inverted')
      ) {
        const attr = trigger.hasAttribute('data-ecl-tooltip-inverted')
          ? 'data-ecl-tooltip-inverted'
          : 'data-ecl-tooltip';
        trigger.setAttribute(attr, titleValue);
      }
      trigger.removeAttribute('title');
    }

    // Pre-populate content so the tooltip is not empty when first created
    popup.textContent =
      trigger.getAttribute('data-ecl-tooltip') ||
      trigger.getAttribute('data-ecl-tooltip-inverted') ||
      '';

    this.popups.set(trigger, popup);

    return popup;
  }

  /**
   * Handle mouseover event (delegated).
   *
   * @param {Event} e
   */
  handleMouseOver(e) {
    const trigger = e.target.closest(this.tooltipSelector);
    if (!trigger) return;

    this.clearHideTimeout();
    if (trigger === this.currentTrigger) return;

    this.displayTooltip(trigger);
  }

  /**
   * Handle mouseout event.
   *
   * @param {Event} e
   */
  handleMouseOut(e) {
    if (!this.currentTrigger) return;

    const { relatedTarget } = e;
    if (relatedTarget && this.currentTrigger.contains(relatedTarget)) return;
    // Optimisation: if moving directly to the popup, cancel immediately
    if (
      relatedTarget &&
      this.currentPopup &&
      this.currentPopup.contains(relatedTarget)
    ) {
      return;
    }

    // Delay to let the mouse cross the visual gap between trigger and tooltip
    this.scheduleHide();
  }

  /**
   * Handle focusin event.
   *
   * @param {Event} e
   */
  handleFocusIn(e) {
    const trigger = e.target.closest(this.tooltipSelector);
    if (!trigger) return;

    this.displayTooltip(trigger);
  }

  /**
   * Handle focusout event.
   */
  handleFocusOut() {
    if (this.currentTrigger) {
      this.hideTooltip();
    }
  }

  /**
   * Schedule a delayed hide, giving the mouse time to cross the gap between
   * the trigger and the tooltip without closing it prematurely.
   */
  scheduleHide() {
    this.clearHideTimeout();
    this.hideTimeoutId = setTimeout(() => this.hideTooltip(), this.hideDelay);
  }

  /**
   * Cancel a previously scheduled hide.
   */
  clearHideTimeout() {
    if (this.hideTimeoutId !== null) {
      clearTimeout(this.hideTimeoutId);
      this.hideTimeoutId = null;
    }
  }

  /**
   * Handles global keyboard events, triggered outside of the tooltip.
   *
   * @param {Event} e
   */
  handleKeyboardGlobal(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.hideTooltip();
    }
  }

  /**
   * Position tooltip relative to the trigger element.
   *
   * @param {HTMLElement} trigger
   * @param {HTMLElement} popup
   */
  positionTooltip(trigger, popup) {
    const triggerRect = trigger.getBoundingClientRect();
    const gap = 8; // Gap between trigger and tooltip

    // Use fixed positioning at off-screen location for accurate measurement
    popup.style.position = 'fixed';
    popup.style.left = '-9999px';
    popup.style.top = '-9999px';
    const tooltipRect = popup.getBoundingClientRect();

    // Calculate horizontal position (centered on trigger)
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    let left = triggerCenter - tooltipRect.width / 2;

    // Default: position top
    let top = triggerRect.top - tooltipRect.height - gap;
    let positionBottom = false;

    // Not enough space on top: position bottom
    if (top < 0) {
      top = triggerRect.bottom + gap;
      positionBottom = true;
    }

    // Not enough space on left: push right
    if (left < 0) {
      left = 0;
    }

    // Not enough space on right: push left
    // Use clientWidth to exclude scrollbar
    const viewportWidth = document.documentElement.clientWidth;
    if (left + tooltipRect.width > viewportWidth) {
      left = viewportWidth - tooltipRect.width;
    }

    // Calculate arrow position to point at trigger center
    const arrowLeft = triggerCenter - left;
    popup.style.setProperty('--ecl-tooltip-arrow-left', `${arrowLeft}px`);

    // Apply position modifier class for arrow direction
    popup.classList.toggle('ecl-tooltip--bottom', positionBottom);

    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
  }

  /**
   * Display tooltip
   *
   * @param {HTMLElement} trigger
   */
  displayTooltip(trigger) {
    // getOrCreatePopup() ensures title has already been transferred to the
    // data attribute and removed, so only data attributes need to be read.
    const popup = this.getOrCreatePopup(trigger);

    const content =
      trigger.getAttribute('data-ecl-tooltip') ||
      trigger.getAttribute('data-ecl-tooltip-inverted');
    if (!content) return;

    // Hide previously visible tooltip when switching triggers
    if (this.currentPopup && this.currentPopup !== popup) {
      this.hideTooltip();
    }

    // Store current trigger and popup references
    this.currentTrigger = trigger;
    this.currentPopup = popup;

    // Copy content to tooltip
    popup.textContent = content;

    // Use inverted style if needed
    popup.classList.toggle(
      'ecl-tooltip--inverted',
      trigger.hasAttribute('data-ecl-tooltip-inverted'),
    );

    // Show tooltip
    popup.removeAttribute('aria-hidden');
    if (this.usePopoverApi) {
      popup.showPopover();
    } else {
      popup.style.display = 'block';
    }

    // Position tooltip
    this.positionTooltip(trigger, popup);
  }

  /**
   * Hide tooltip
   */
  hideTooltip() {
    this.clearHideTimeout();
    if (!this.currentPopup) return;

    if (this.usePopoverApi) {
      this.currentPopup.hidePopover();
    } else {
      this.currentPopup.style.display = 'none';
    }
    this.currentPopup.setAttribute('aria-hidden', 'true');

    this.currentTrigger = null;
    this.currentPopup = null;
  }
}

export default Tooltip;
