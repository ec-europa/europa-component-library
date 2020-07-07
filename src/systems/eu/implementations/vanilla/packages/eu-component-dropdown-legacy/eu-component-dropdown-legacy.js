import { queryOne } from '@ecl/eu-base/helpers/dom';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for toggling element
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 */
export class DropdownLegacy {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {DropdownLegacy} An instance of DropdownLegacy.
   */
  static autoInit(root, { DROPDOWN_LEGACY: defaultOptions = {} } = {}) {
    const dropdownLegacy = new DropdownLegacy(root, defaultOptions);
    dropdownLegacy.init();
    root.ECLDropdownLegacy = dropdownLegacy;
    return dropdownLegacy;
  }

  constructor(
    element,
    {
      toggleSelector = '[data-ecl-dropdown-legacy-toggle]',
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
    this.forceClose = false;
    this.target = null;
    this.label = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleClickOnDocument = this.handleClickOnDocument.bind(this);
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
        'Target has to be provided for dropdown-legacy (aria-controls)'
      );
    }

    // Bind click event on toggle
    if (this.attachClickListener && this.toggle) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
      document.addEventListener('click', this.handleClickOnDocument);
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.toggle) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
      document.removeEventListener('click', this.handleClickOnDocument);
    }
  }

  /**
   * @param {Event} event
   */
  handleClickOnDocument(event) {
    if (
      !this.target ||
      !this.toggle ||
      this.toggle.getAttribute('aria-expanded') !== 'true'
    )
      return;

    if (
      !this.target.contains(event.target) &&
      !this.toggle.contains(event.target)
    ) {
      this.handleClickOnToggle();
    }
  }

  /**
   * Toggle visibility.
   */
  handleClickOnToggle() {
    // Get current status
    const isExpanded =
      this.forceClose === true ||
      this.toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the dropdown-legacy
    this.toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    if (isExpanded) {
      this.target.hidden = true;
    } else {
      this.target.hidden = false;
    }

    return this;
  }
}

export default DropdownLegacy;
