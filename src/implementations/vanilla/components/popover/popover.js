import { queryOne } from '@ecl/dom-utils';

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

    // Bind `this` for use in callbacks
    this.openPopover = this.openPopover.bind(this);
    this.closePopover = this.closePopover.bind(this);
    this.positionPopover = this.positionPopover.bind(this);
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this);
    this.handleClickGlobal = this.handleClickGlobal.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    this.resetStyles = this.resetStyles.bind(this);

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
      this.closePopover();
      return;
    }

    this.openPopover();
    this.positionPopover();
  }

  /**
   * Open the popover.
   */
  openPopover() {
    this.toggle.setAttribute('aria-expanded', 'true');
    this.target.hidden = false;
  }

  /**
   * Close the popover.
   */
  closePopover() {
    this.toggle.setAttribute('aria-expanded', 'false');
    // Reset all the selectors and styles
    this.resetStyles();
    this.target.hidden = true;
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
  }

  /**
   * Manage popover position.
   */
  positionPopover() {
    this.resetStyles();

    const toggleRect = this.toggle.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    // Calculate available space in each direction
    const spaceTop = toggleRect.top;
    const spaceBottom = screenHeight - toggleRect.bottom;
    const spaceLeft = toggleRect.left;
    const spaceRight = screenWidth - toggleRect.right;

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
    this.handlePushClass(screenWidth, screenHeight, direction);
  }

  handlePushClass(screenWidth, screenHeight, direction) {
    const toggleRect = this.toggle.getBoundingClientRect();
    const popoverRect = this.target.getBoundingClientRect();

    if (direction === 'left' || direction === 'right') {
      if (popoverRect.top < 0) {
        this.element.classList.add(this.POPOVER_CLASSES.PUSH_TOP);
        this.container.style.top = `-${Math.round(toggleRect.top)}px`;
        this.container.style.bottom = '';
        this.container.style.transform = '';
      } else if (popoverRect.bottom > screenHeight) {
        this.element.classList.add(this.POPOVER_CLASSES.PUSH_BOTTOM);
        // We add 0.5rem to the calculus to avoid vertical scrollbars.
        this.container.style.bottom = `-${Math.round(
          screenHeight - (toggleRect.bottom + 8),
        )}px`;
        this.container.style.top = '';
        this.container.style.transform = '';
      }
    } else {
      if (popoverRect.left < 0) {
        this.element.classList.add(this.POPOVER_CLASSES.PUSH_LEFT);
        this.container.style.left = `-${toggleRect.left}px`;
        this.container.style.right = 'auto';
        this.container.style.transform = 'none';
      }
      if (popoverRect.right > screenWidth) {
        this.element.classList.add(this.POPOVER_CLASSES.PUSH_RIGHT);
        this.container.style.right = `-${screenWidth - toggleRect.right}px`;
        this.container.style.left = 'auto';
        this.container.style.transform = 'none';
      }
    }

    this.handleArrowPosition(direction);
  }

  handleArrowPosition(direction) {
    const toggleRect = this.toggle.getBoundingClientRect();
    const popoverRect = this.target.getBoundingClientRect();

    if (direction === 'left' || direction === 'right') {
      if (this.element.classList.contains(this.POPOVER_CLASSES.PUSH_BOTTOM)) {
        this.target.style.setProperty(
          '--ecl-popover-position',
          `${Math.round(
            toggleRect.top - popoverRect.top + toggleRect.height / 2,
          )}px`,
        );
      } else if (
        this.element.classList.contains(this.POPOVER_CLASSES.PUSH_TOP)
      ) {
        this.target.style.setProperty(
          '--ecl-popover-position',
          `${Math.round(
            popoverRect.top + toggleRect.top + toggleRect.height / 2,
          )}px`,
        );
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (this.element.classList.contains(this.POPOVER_CLASSES.PUSH_RIGHT)) {
        this.target.style.setProperty(
          '--ecl-popover-position',
          `${Math.round(
            popoverRect.right - (toggleRect.right - toggleRect.width / 2),
          )}px`,
        );
      } else if (
        this.element.classList.contains(this.POPOVER_CLASSES.PUSH_LEFT)
      ) {
        this.target.style.setProperty(
          '--ecl-popover-position',
          `${Math.round(
            popoverRect.left + toggleRect.left + toggleRect.width / 2,
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
