import { queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.tooltipSelector Selector for tooltip triggers (requires data-ecl-tooltip attribute and could use title attribute)
 * @param {String} options.tooltipPopupSelector Selector for tooltip popup element
 * @param {String} options.tooltipInvertedSelector Selector to use inverted tooltip
 * @param {Boolean} options.attachHoverListener Whether or not to bind hover events on tooltip triggers
 * @param {Boolean} options.attachResizeListener Whether or not to bind resize events
 * @param {Boolean} options.attachScrollListener Whether or not to bind scroll events
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
      tooltipSelector = '[data-ecl-tooltip]',
      tooltipPopupSelector = '[data-ecl-tooltip-popup]',
      tooltipInverted = 'data-ecl-tooltip-inverted',
      attachHoverListener = true,
      attachResizeListener = true,
      attachScrollListener = true,
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
    this.tooltipPopupSelector = tooltipPopupSelector;
    this.tooltipInverted = tooltipInverted;
    this.attachHoverListener = attachHoverListener;
    this.attachResizeListener = attachResizeListener;
    this.attachScrollListener = attachScrollListener;

    // Private variables
    this.popup = null;
    this.currentTrigger = null;
    this.isMouseTriggered = false;
    this.removedTitle = null;
    this.usePopoverApi = 'popover' in HTMLElement.prototype;

    // Bind `this` for use in callbacks
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
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

    // Create tooltip popup, if not already existing
    this.popup = queryOne(this.tooltipPopupSelector, document.body);

    if (!this.popup) {
      const markup = document.createElement('span');
      markup.classList.add('ecl-tooltip');
      const attributeName = this.tooltipPopupSelector.replace(/[[\]]/g, '');
      markup.setAttribute(attributeName, '');
      markup.setAttribute('aria-hidden', true);

      // Use Popover API if supported for proper layering above modals
      if (this.usePopoverApi) {
        markup.setAttribute('popover', 'manual');
      } else {
        markup.style.display = 'none';
      }

      document.body.append(markup);
      this.popup = markup;
    }

    // Attach delegated event listeners to the root element
    if (this.attachHoverListener) {
      this.element.addEventListener('mouseover', this.handleMouseOver);
      this.element.addEventListener('mouseout', this.handleMouseOut);
      this.element.addEventListener('focusin', this.handleFocusIn);
      this.element.addEventListener('focusout', this.handleFocusOut);
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
    // Restore title if tooltip is currently showing and was removed
    if (this.currentTrigger && this.removedTitle) {
      this.currentTrigger.setAttribute('title', this.removedTitle);
    }

    // Remove delegated event listeners
    if (this.attachHoverListener) {
      this.element.removeEventListener('mouseover', this.handleMouseOver);
      this.element.removeEventListener('mouseout', this.handleMouseOut);
      this.element.removeEventListener('focusin', this.handleFocusIn);
      this.element.removeEventListener('focusout', this.handleFocusOut);
    }

    // Remove resize event listener
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.hideTooltip);
    }

    // Remove scroll event listener
    if (this.attachScrollListener) {
      window.removeEventListener('scroll', this.hideTooltip, { capture: true });
    }

    // Remove popup from DOM
    if (this.popup && this.popup.parentNode) {
      this.popup.parentNode.removeChild(this.popup);
    }

    // Clean up references
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Handle mouseover event (delegated).
   *
   * @param {Event} e
   */
  handleMouseOver(e) {
    const trigger = e.target.closest(this.tooltipSelector);
    if (!trigger || trigger === this.currentTrigger) return;

    this.displayTooltip(trigger, true);
  }

  /**
   * Handle mouseout event.
   *
   * @param {Event} e
   */
  handleMouseOut(e) {
    if (!this.currentTrigger) return;

    // Check if mouse is moving to an element still within the trigger
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && this.currentTrigger.contains(relatedTarget)) return;

    this.hideTooltip();
  }

  /**
   * Handle focusin event.
   *
   * @param {Event} e
   */
  handleFocusIn(e) {
    const trigger = e.target.closest(this.tooltipSelector);
    if (!trigger) return;

    this.displayTooltip(trigger, false);
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
   * Position tooltip relative to the trigger element.
   *
   * @param {HTMLElement} trigger
   */
  positionTooltip(trigger) {
    const triggerRect = trigger.getBoundingClientRect();
    const gap = 8; // Gap between trigger and tooltip

    // Use fixed positioning at off-screen location for accurate measurement
    this.popup.style.position = 'fixed';
    this.popup.style.left = '-9999px';
    this.popup.style.top = '-9999px';
    const tooltipRect = this.popup.getBoundingClientRect();

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
    this.popup.style.setProperty('--ecl-tooltip-arrow-left', `${arrowLeft}px`);

    // Apply position modifier class for arrow direction
    this.popup.classList.toggle('ecl-tooltip--bottom', positionBottom);

    this.popup.style.top = `${top}px`;
    this.popup.style.left = `${left}px`;
  }

  /**
   * Display tooltip
   *
   * @param {HTMLElement} trigger
   * @param {Boolean} isMouseTriggered
   */
  displayTooltip(trigger, isMouseTriggered) {
    // Use data-ecl-tooltip value if provided, otherwise fall back to title
    const content =
      trigger.getAttribute('data-ecl-tooltip') || trigger.getAttribute('title');
    if (!content) return;

    // Store current trigger reference
    this.currentTrigger = trigger;
    this.isMouseTriggered = isMouseTriggered;

    // Copy content to tooltip
    this.popup.textContent = content;

    // Use inverted if needed
    const isInverted = trigger.getAttribute(this.tooltipInverted);
    if (isInverted !== null && isInverted !== false) {
      this.popup.classList.add('ecl-tooltip--inverted');
    } else {
      this.popup.classList.remove('ecl-tooltip--inverted');
    }

    // Only remove title on mouse hover to prevent browser's default tooltip
    // Keep title for keyboard focus so screen readers can access it
    if (isMouseTriggered && trigger.hasAttribute('title')) {
      this.removedTitle = trigger.getAttribute('title');
      trigger.removeAttribute('title');
    }

    // Show tooltip
    if (this.usePopoverApi) {
      this.popup.showPopover();
    } else {
      this.popup.style.display = 'block';
    }

    // Position tooltip
    this.positionTooltip(trigger);
  }

  /**
   * Hide tooltip
   */
  hideTooltip() {
    if (this.usePopoverApi) {
      this.popup.hidePopover();
    } else {
      this.popup.style.display = 'none';
    }

    // Restore title if it was removed
    if (this.currentTrigger && this.removedTitle) {
      this.currentTrigger.setAttribute('title', this.removedTitle);
    }

    this.currentTrigger = null;
    this.isMouseTriggered = false;
    this.removedTitle = null;
  }
}

export default Tooltip;
