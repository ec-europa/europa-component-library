import { queryOne } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for toggling element
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
 * @param {Boolean} options.attachKeyListener Whether or not to bind keyboard events
 */
export class Popover {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Popover} An instance of Popover.
   */
  static autoInit(root, { POPOVER: defaultOptions = {} } = {}) {
    const popover = new Popover(root, defaultOptions);
    popover.init();
    root.ECLPopover = popover;
    return popover;
  }

  /**
   *   @event Popover#onOpen
   */
  /**
   *   @event Popover#onClose
   */

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @memberof Popover
   */
  supportedEvents = ['onOpen', 'onClose'];

  constructor(
    element,
    {
      toggleSelector = '[data-ecl-popover-toggle]',
      closeSelector = '[data-ecl-popover-close]',
      attachClickListener = true,
      attachKeyListener = true,
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;
    this.eventManager = new EventManager();

    // Options
    this.toggleSelector = toggleSelector;
    this.closeSelector = closeSelector;
    this.attachClickListener = attachClickListener;
    this.attachKeyListener = attachKeyListener;

    // Private variables
    this.toggle = null;
    this.close = null;
    this.target = null;
    this.container = null;
    this.resizeTimer = null;
    this.scrollableParent = null;
    this.toggleRect = null;
    this.scrollable = null;

    // Bind `this` for use in callbacks
    this.openPopover = this.openPopover.bind(this);
    this.closePopover = this.closePopover.bind(this);
    this.positionPopover = this.positionPopover.bind(this);
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this);
    this.handleClickGlobal = this.handleClickGlobal.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    this.resetStyles = this.resetStyles.bind(this);
    this.getClosestScrollableParent =
      this.getClosestScrollableParent.bind(this);
    this.calculateAvailableSpace = this.calculateAvailableSpace.bind(this);

    this.POPOVER_CLASSES = {
      TOP: 'ecl-popover--top',
      BOTTOM: 'ecl-popover--bottom',
      LEFT: 'ecl-popover--left',
      RIGHT: 'ecl-popover--right',
      PUSH_TOP: 'ecl-popover--push-top',
      PUSH_BOTTOM: 'ecl-popover--push-bottom',
      PUSH_LEFT: 'ecl-popover--push-left',
      PUSH_RIGHT: 'ecl-popover--push-right',
    };
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.toggle = queryOne(this.toggleSelector, this.element);
    this.close = queryOne(this.closeSelector, this.element);
    this.container = queryOne('.ecl-popover__container', this.element);
    this.scrollableParent = this.getClosestScrollableParent(this.toggle);

    // Bind global events
    if (this.attachKeyListener) {
      document.addEventListener('keyup', this.handleKeyboardGlobal);
    }
    if (this.attachClickListener) {
      document.addEventListener('click', this.handleClickGlobal);
      if (this.close) {
        this.close.addEventListener('click', this.handleClickOnToggle);
      }
    }

    // Get target element
    this.target = document.querySelector(
      `#${this.toggle.getAttribute('aria-controls')}`,
    );

    // Exit if no target found
    if (!this.target) {
      throw new TypeError(
        'Target has to be provided for popover (aria-controls)',
      );
    }

    this.scrollable = this.target.firstElementChild;

    window.addEventListener('resize', this.checkPosition);
    document.addEventListener('scroll', this.checkPosition);

    // Bind click event on toggle
    if (this.attachClickListener && this.toggle) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   * @memberof Popover
   * @instance
   *
   * @example
   * // Registering a callback for the 'onOpen' event
   * popover.on('onOpen', (event) => {
   *   console.log('Open event occurred!', event);
   * });
   */
  on(eventName, callback) {
    this.eventManager.on(eventName, callback);
  }

  /**
   * Trigger a component event.
   *
   * @param {string} eventName - The name of the event to trigger.
   * @param {any} eventData - Data associated with the event.
   * @memberof Popover
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.toggle) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
    }
    if (this.attachClickListener && this.close) {
      this.close.removeEventListener('click', this.handleClickOnToggle);
    }
    window.removeEventListener('resize', this.checkPosition);
    document.removeEventListener('scroll', this.checkPosition);

    if (this.attachKeyListener) {
      document.removeEventListener('keyup', this.handleKeyboardGlobal);
    }
    if (this.attachClickListener) {
      document.removeEventListener('click', this.handleClickGlobal);
    }

    if (this.toggle.getAttribute('aria-expanded') === 'true') {
      this.closePopover();
    }

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Toggles between collapsed/expanded states.
   *
   * @param {Event} e
   */
  handleClickOnToggle(e) {
    e.preventDefault();

    // Get current status
    const isExpanded = this.toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the popover
    if (isExpanded) {
      this.closePopover(e);
      return;
    }

    this.openPopover(e);
    this.positionPopover();
  }

  /**
   * Open the popover.
   *
   * @param {Event} e
   */
  openPopover(e) {
    this.toggle.setAttribute('aria-expanded', 'true');
    this.target.hidden = false;
    this.trigger('onOpen', { event: e, target: this.target });
  }

  /**
   * Close the popover.
   *
   * @param {Event} e
   */
  closePopover(e) {
    this.toggle.setAttribute('aria-expanded', 'false');
    // Reset all the selectors and styles
    this.resetStyles();
    this.target.hidden = true;
    this.trigger('onClose', { event: e, target: this.target });
  }

  /**
   * Find the closest scrollable parent.
   *
   * @param {Node} element
   */

  getClosestScrollableParent(element) {
    let parent = element.parentElement;

    while (parent) {
      const { overflowY, overflowX } = getComputedStyle(parent);
      const isScrollableY =
        (overflowY === 'auto' || overflowY === 'scroll') &&
        parent.scrollHeight > parent.clientHeight;
      const isScrollableX =
        (overflowX === 'auto' || overflowX === 'scroll') &&
        parent.scrollWidth > parent.clientWidth;

      if (isScrollableY || isScrollableX) {
        return parent; // Found the closest scrollable parent
      }

      parent = parent.parentElement;
    }

    return document.body;
  }

  /**
   * Calculate available space for the popover
   *
   * @param {Node} toggleElement
   * @param {Node} scrollableParent
   */
  calculateAvailableSpace(toggleElement, scrollableParent = null) {
    // Get the bounding rect for the toggle element
    this.toggleRect = toggleElement.getBoundingClientRect();

    // If no scrollable parent is provided, use the viewport
    const containerRect = scrollableParent
      ? scrollableParent.getBoundingClientRect()
      : {
          top: 0,
          left: 0,
          right: window.innerWidth,
          bottom: window.innerHeight,
        };
    const containerWidth = containerRect.right - containerRect.left;
    const containerHeight = containerRect.bottom - containerRect.top;
    // Calculate the space available in the four directions
    const containerBottom = Math.max(
      0,
      window.innerHeight - containerRect.bottom,
    );
    const toggleBottom = Math.max(
      0,
      window.innerHeight - this.toggleRect.bottom,
    );
    const spaceBottom = Math.max(0, toggleBottom - containerBottom);

    // Top Space (from toggle's top to container's top)
    const containerTop = Math.max(0, containerRect.top);
    const toggleTop = Math.max(0, this.toggleRect.top);
    const spaceTop = Math.max(0, toggleTop - containerTop);

    // Right Space (from toggle's right to container's right)
    const containerRight = Math.max(0, window.innerWidth - containerRect.right);
    const toggleRight = Math.max(0, window.innerWidth - this.toggleRect.right);
    const spaceRight = Math.max(0, toggleRight - containerRight);

    // Left Space (from toggle's left to container's left)
    const containerLeft = Math.max(0, containerRect.left);
    const toggleLeft = Math.max(0, this.toggleRect.left);
    const spaceLeft = Math.max(0, toggleLeft - containerLeft);

    return {
      containerWidth,
      containerHeight,
      spaceTop,
      spaceBottom,
      spaceLeft,
      spaceRight,
    };
  }

  /**
   * Resets the popover selectors and styles.
   */
  resetStyles() {
    Object.keys(this.POPOVER_CLASSES).forEach((className) => {
      if (
        Object.prototype.hasOwnProperty.call(this.POPOVER_CLASSES, className)
      ) {
        this.element.classList.remove(this.POPOVER_CLASSES[className]);
      }
    });

    this.target.style.setProperty('--ecl-popover-position', '');
    this.container.style.left = '';
    this.container.style.right = '';
    this.container.style.top = '';
    this.container.style.bottom = '';
    this.container.style.transform = '';
    this.scrollable.style.width = '';
  }

  /**
   * Manage popover position.
   */
  positionPopover() {
    this.resetStyles();

    const { containerWidth, spaceTop, spaceBottom, spaceLeft, spaceRight } =
      this.calculateAvailableSpace(this.toggle, this.scrollableParent);

    // Find the direction with the most available space
    const positioningClass = 'ecl-popover--';
    let direction = '';

    if (
      spaceTop > spaceBottom &&
      spaceTop > spaceLeft &&
      spaceTop > spaceRight
    ) {
      direction = 'top';
    } else if (spaceBottom > spaceLeft && spaceBottom > spaceRight) {
      direction = 'bottom';
    } else if (spaceLeft > spaceRight) {
      direction = 'left';
    } else {
      direction = 'right';
    }

    this.element.classList.add(`${positioningClass}${direction}`);

    // Try to use as much of the available width, respecting the max-width set.
    const styles = window.getComputedStyle(this.scrollable);
    const maxWidth = parseInt(styles.getPropertyValue('max-width'), 10);
    const minWidth = parseInt(styles.getPropertyValue('min-width'), 10);
    const padding = parseInt(styles.getPropertyValue('padding-left'), 10) * 2;

    // We consider 90% of the biggest space available
    const horizontalSpace = Math.max(spaceLeft, spaceRight) * 0.9;
    let targetWidth;

    // If the available space is larger than maxWidth (plus padding), set to maxWidth
    if (
      maxWidth + padding < horizontalSpace ||
      (direction !== 'left' &&
        direction !== 'right' &&
        containerWidth > maxWidth)
    ) {
      targetWidth = maxWidth;
    } else if (horizontalSpace < minWidth + padding) {
      // If the available space is smaller than minWidth (plus padding), set to minWidth
      targetWidth = minWidth;
    } else if (direction === 'left' || direction === 'right') {
      // Otherwise, set the width to the available space minus the padding
      targetWidth = horizontalSpace - padding;
    } else {
      targetWidth = (horizontalSpace - padding) * 2;
    }

    // Ensure the width does not exceed available space
    this.scrollable.style.width = `${targetWidth}px`;

    this.handlePushClass(direction);
  }

  /**
   * Check whether the popover is going out of its scrollable container and apply the needed repositioning.
   *
   * @param {string} direction
   */
  handlePushClass(direction) {
    requestAnimationFrame(() => {
      const popoverRect = this.target.getBoundingClientRect();
      const scrollableRect = this.scrollableParent.getBoundingClientRect();
      const containerBottom =
        scrollableRect.bottom > window.innerHeight
          ? 0
          : window.innerHeight - scrollableRect.bottom;
      const containerTop =
        scrollableRect.top > window.innerHeight ? 0 : scrollableRect.top;
      const leftOverflow = scrollableRect.left > popoverRect.left;
      const rightOverflow = scrollableRect.right < popoverRect.right;
      const topOverflow = popoverRect.top < containerTop;
      const bottomOverflow =
        containerBottom > window.innerHeight - popoverRect.bottom;

      if (direction === 'left' || direction === 'right') {
        if (topOverflow) {
          this.element.classList.add(this.POPOVER_CLASSES.PUSH_TOP);
          // Push the popover to the top edge of the container
          this.container.style.top = `-${Math.round(this.toggleRect.top)}px`;
          this.container.style.bottom = '';
          this.container.style.transform = '';
        }
        if (bottomOverflow) {
          this.element.classList.add(this.POPOVER_CLASSES.PUSH_BOTTOM);
          // Push the popover to the bottom edge of the container
          this.container.style.bottom = `-${window.innerHeight - this.toggleRect.bottom - containerBottom}px`;
          this.container.style.top = '';
          this.container.style.transform = '';
        }
      } else {
        if (leftOverflow) {
          this.element.classList.add(this.POPOVER_CLASSES.PUSH_LEFT);
          // Push the popover 8px to the left edge of the container
          this.container.style.left = `-${this.toggleRect.left - scrollableRect.left - 8}px`;
          this.container.style.right = 'auto';
        }
        if (rightOverflow) {
          this.element.classList.add(this.POPOVER_CLASSES.PUSH_RIGHT);
          // Push the popover 8px to the right edge of the container
          this.container.style.right = `-${scrollableRect.right - this.toggleRect.right - 8}px`;
          this.container.style.left = 'auto';
        }
      }

      this.handleArrowPosition(direction);
    });
  }

  /**
   * Reposition the arrow in case a push class is being used
   *
   * @param {string} direction
   */
  handleArrowPosition(direction) {
    const popoverRect = this.target.getBoundingClientRect();

    if (direction === 'left' || direction === 'right') {
      if (this.element.classList.contains(this.POPOVER_CLASSES.PUSH_BOTTOM)) {
        this.target.style.setProperty(
          '--ecl-popover-position',
          `${Math.round(
            this.toggleRect.top - popoverRect.top + this.toggleRect.height / 2,
          )}px`,
        );
      } else if (
        this.element.classList.contains(this.POPOVER_CLASSES.PUSH_TOP)
      ) {
        this.target.style.setProperty(
          '--ecl-popover-position',
          `${Math.round(
            popoverRect.top + this.toggleRect.top + this.toggleRect.height / 2,
          )}px`,
        );
      }
    } else {
      if (this.element.classList.contains(this.POPOVER_CLASSES.PUSH_RIGHT)) {
        this.target.style.setProperty(
          '--ecl-popover-position',
          `${Math.round(
            popoverRect.right -
              (this.toggleRect.right - this.toggleRect.width / 2),
          )}px`,
        );
      } else if (
        this.element.classList.contains(this.POPOVER_CLASSES.PUSH_LEFT)
      ) {
        this.target.style.setProperty(
          '--ecl-popover-position',
          `${Math.round(
            this.toggleRect.left - popoverRect.left + this.toggleRect.width / 2,
          )}px`,
        );
      }
    }
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   */
  checkPosition() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      if (this.toggle.getAttribute('aria-expanded') === 'true') {
        this.positionPopover();
      }
    }, 200);
  }

  /**
   * Handles global keyboard events, triggered outside of the popover.
   *
   * @param {Event} e
   */
  handleKeyboardGlobal(e) {
    if (!this.target) return;

    // Detect press on Escape
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.closePopover();
    }
  }

  /**
   * Handles global click events, triggered outside of the popover.
   *
   * @param {Event} e
   */
  handleClickGlobal(e) {
    if (!this.target) return;

    // Check if the popover is open
    if (this.toggle.getAttribute('aria-expanded') === 'true') {
      // Check if the click occured on the popover
      if (!this.target.contains(e.target) && !this.toggle.contains(e.target)) {
        this.closePopover();
      }
    }
  }
}

export default Popover;
