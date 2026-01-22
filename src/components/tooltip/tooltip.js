import { queryOne, queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.tooltipSelector Selector for tooltip triggers (requires both data-ecl-tooltip attribute and title attribute)
 * @param {String} options.tooltipPopupSelector Selector for tooltip popup element
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
    this.attachHoverListener = attachHoverListener;
    this.attachResizeListener = attachResizeListener;
    this.attachScrollListener = attachScrollListener;

    // Private variables
    this.popup = null;
    this.tooltipTriggers = null;
    this.observer = null;
    this.currentTrigger = null;
    this.isMouseTriggered = false;
    this.usePopoverApi = 'popover' in HTMLElement.prototype;

    // Bind `this` for use in callbacks
    this.displayTooltip = this.displayTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.handleMutations = this.handleMutations.bind(this);
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

    // Initial scan for tooltip triggers
    this.scanForTriggers();

    // Set up MutationObserver to watch for dynamically added elements
    this.observer = new MutationObserver(this.handleMutations);
    this.observer.observe(this.element, {
      childList: true,
      subtree: true,
    });

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
   * Scan for tooltip triggers and attach event listeners.
   */
  scanForTriggers() {
    // Find all tooltip triggers
    const triggers = queryAll(this.tooltipSelector, this.element);

    // Attach event listeners to triggers
    if (this.attachHoverListener && triggers.length > 0) {
      triggers.forEach((trigger) => {
        // Check if already has listeners (avoid duplicates)
        if (!trigger.hasAttribute('data-ecl-tooltip-initialized')) {
          trigger.setAttribute('data-ecl-tooltip-initialized', 'true');
          trigger.addEventListener('mouseenter', this.displayTooltip);
          trigger.addEventListener('mouseleave', this.hideTooltip);
          trigger.addEventListener('focus', this.displayTooltip);
          trigger.addEventListener('blur', this.hideTooltip);
        }
      });
    }

    // Update the triggers list
    this.tooltipTriggers = triggers;
  }

  /**
   * Handle DOM mutations to detect new tooltip triggers.
   *
   * @param {MutationRecord[]} mutations
   */
  handleMutations(mutations) {
    let shouldRescan = false;

    mutations.forEach((mutation) => {
      // Check if any added nodes contain or are tooltip triggers
      if (mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          // Only check element nodes
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the node itself is a trigger
            if (node.matches && node.matches(this.tooltipSelector)) {
              shouldRescan = true;
            }
            // Check if the node contains triggers
            if (
              node.querySelector &&
              node.querySelector(this.tooltipSelector)
            ) {
              shouldRescan = true;
            }
          }
        });
      }
    });

    // Rescan if new tooltip triggers were detected
    if (shouldRescan) {
      this.scanForTriggers();
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    // Restore title if tooltip is currently showing and was removed (mouse trigger)
    if (
      this.currentTrigger &&
      this.popup.textContent &&
      this.isMouseTriggered
    ) {
      this.currentTrigger.setAttribute('title', this.popup.textContent);
    }

    // Disconnect MutationObserver
    if (this.observer) {
      this.observer.disconnect();
    }

    // Remove resize event listener
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.hideTooltip);
    }

    // Remove scroll event listener
    if (this.attachScrollListener) {
      window.removeEventListener('scroll', this.hideTooltip, { capture: true });
    }

    // Remove event listeners from triggers
    if (this.attachHoverListener && this.tooltipTriggers) {
      this.tooltipTriggers.forEach((trigger) => {
        trigger.removeEventListener('mouseenter', this.displayTooltip);
        trigger.removeEventListener('mouseleave', this.hideTooltip);
        trigger.removeEventListener('focus', this.displayTooltip);
        trigger.removeEventListener('blur', this.hideTooltip);
        trigger.removeAttribute('data-ecl-tooltip-initialized');
      });
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
   * @param {Event} e
   */
  displayTooltip(e) {
    const trigger = e.currentTarget;

    // Element must have data-ecl-tooltip attribute AND title attribute
    if (!trigger.hasAttribute('data-ecl-tooltip')) return;

    const content = trigger.getAttribute('title');
    if (!content) return;

    // Store current trigger reference
    this.currentTrigger = trigger;

    // Check if triggered by mouse or keyboard
    this.isMouseTriggered = e.type === 'mouseenter';

    // Copy title content to tooltip
    this.popup.textContent = content;

    // Only remove title on mouse hover to prevent browser's default tooltip
    // Keep title for keyboard focus so screen readers can access it
    if (this.isMouseTriggered) {
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

    // Only restore title if it was removed (mouse trigger)
    // For keyboard focus, title was never removed
    if (
      this.currentTrigger &&
      this.popup.textContent &&
      this.isMouseTriggered
    ) {
      this.currentTrigger.setAttribute('title', this.popup.textContent);
    }

    this.currentTrigger = null;
    this.isMouseTriggered = false;
  }
}

export default Tooltip;
