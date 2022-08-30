import { queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for toggling element
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
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
      attachClickListener = true,
    } = {}
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.'
      );
    }

    this.element = element;

    // Options
    this.toggleSelector = toggleSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.toggle = null;
    this.target = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.toggle = queryOne(this.toggleSelector, this.element);

    // Get target element
    this.target = document.querySelector(
      `#${this.toggle.getAttribute('aria-controls')}`
    );

    // Exit if no target found
    if (!this.target) {
      throw new TypeError(
        'Target has to be provided for popover (aria-controls)'
      );
    }

    // Bind click event on toggle
    if (this.attachClickListener && this.toggle) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.toggle) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
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
    this.toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    if (isExpanded) {
      this.target.hidden = true;
    } else {
      this.target.hidden = false;
    }

    // Check available space
    const toggleRect = this.toggle.getBoundingClientRect();
    const popoverRect = this.target.getBoundingClientRect();
    const popoverHeight = this.target.clientHeight;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    if (popoverHeight > 0) {
      if (screenHeight - toggleRect.top < popoverHeight) {
        this.element.classList.add('ecl-popover--top');
      } else {
        this.element.classList.remove('ecl-popover--top');
      }
    }

    if (popoverRect.left < 0) {
      this.element.classList.add('ecl-popover--left');
    } else {
      this.element.classList.remove('ecl-popover--left');
    }

    if (popoverRect.right > screenWidth) {
      this.element.classList.add('ecl-popover--right');
    } else {
      this.element.classList.remove('ecl-popover--right');
    }

    return this;
  }
}

export default Popover;
