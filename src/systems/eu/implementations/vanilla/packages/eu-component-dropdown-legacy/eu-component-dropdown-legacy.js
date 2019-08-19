import { queryOne } from '@ecl/eu-base/helpers/dom';

export class DropdownLegacy {
  static autoInit(root, { EXPANDABLE: defaultOptions = {} } = {}) {
    const dropdownLegacy = new DropdownLegacy(root, defaultOptions);
    dropdownLegacy.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLDropdownLegacy = dropdownLegacy;
    return dropdownLegacy;
  }

  constructor(
    element,
    {
      toggleSelector: toggleSelector = '[data-ecl-dropdown-legacy-toggle]',
      attachClickListener: attachClickListener = true,
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

  destroy() {
    if (this.attachClickListener && this.toggle) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
      document.removeEventListener('click', this.handleClickOnDocument);
    }
  }

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

  handleClickOnToggle() {
    // Get current status
    const isExpanded =
      this.forceClose === true ||
      this.toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the dropdown-legacy
    this.toggle.setAttribute('aria-expanded', !isExpanded);
    if (isExpanded) {
      this.target.setAttribute('hidden', true);
    } else {
      this.target.removeAttribute('hidden');
    }

    return this;
  }
}

export default DropdownLegacy;
