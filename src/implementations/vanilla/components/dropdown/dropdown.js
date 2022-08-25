/* eslint-disable no-console */
import { queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for toggling element
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
 */
export class Dropdown {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Dropdown} An instance of Dropdown.
   */
  static autoInit(root, { DROPDOWN: defaultOptions = {} } = {}) {
    const dropdown = new Dropdown(root, defaultOptions);
    dropdown.init();
    root.ECLDropdown = dropdown;
    return dropdown;
  }

  constructor(
    element,
    {
      toggleSelector = '[data-ecl-dropdown-toggle]',
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
        'Target has to be provided for dropdown (aria-controls)'
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

    // Toggle the dropdown
    this.toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    if (isExpanded) {
      this.target.hidden = true;
    } else {
      this.target.hidden = false;
    }

    // Check available space
    const toggleRect = this.toggle.getBoundingClientRect();
    const dropdownRect = this.target.getBoundingClientRect();
    const dropdownHeight = this.target.clientHeight;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    if (dropdownHeight > 0) {
      if (screenHeight - toggleRect.top < dropdownHeight) {
        this.element.classList.add('ecl-dropdown--top');
      } else {
        this.element.classList.remove('ecl-dropdown--top');
      }
    }

    if (dropdownRect.left < 0) {
      this.element.classList.add('ecl-dropdown--left');
    } else {
      this.element.classList.remove('ecl-dropdown--left');
    }

    if (dropdownRect.right > screenWidth) {
      this.element.classList.add('ecl-dropdown--right');
    } else {
      this.element.classList.remove('ecl-dropdown--right');
    }

    return this;
  }
}

export default Dropdown;
