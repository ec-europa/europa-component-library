import { queryOne } from '@ecl/eu-base/helpers/dom';

export class Expandable {
  static autoInit(root, { EXPANDABLE: defaultOptions = {} } = {}) {
    const expandable = new Expandable(root, defaultOptions);
    expandable.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLExpandable = expandable;
    return expandable;
  }

  constructor(
    element,
    {
      toggleSelector: toggleSelector = '[data-ecl-expandable-toggle]',
      labelSelector: labelSelector = '[data-ecl-label]',
      labelExpanded: labelExpanded = 'data-ecl-label-expanded',
      labelCollapsed: labelCollapsed = 'data-ecl-label-collapsed',
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
    this.labelSelector = labelSelector;
    this.labelExpanded = labelExpanded;
    this.labelCollapsed = labelCollapsed;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.toggle = null;
    this.forceClose = false;
    this.target = null;
    this.label = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
  }

  init() {
    this.toggle = queryOne(this.toggleSelector, this.element);

    // Get target element
    this.target = document.querySelector(
      `#${this.toggle.getAttribute('aria-controls')}`
    );

    // Get label, if any
    this.label = queryOne(this.labelSelector, this.element);

    // Exit if no target found
    if (!this.target) {
      throw new TypeError(
        'Target has to be provided for expandable (aria-controls)'
      );
    }

    // Bind click event on toggle
    if (this.attachClickListener && this.toggle) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
    }
  }

  destroy() {
    if (this.attachClickListener && this.toggle) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
    }
  }

  handleClickOnToggle() {
    // Get current status
    const isExpanded =
      this.forceClose === true ||
      this.toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    this.toggle.setAttribute('aria-expanded', !isExpanded);
    if (isExpanded) {
      this.target.setAttribute('hidden', true);
    } else {
      this.target.removeAttribute('hidden');
    }

    // Toggle label if possible
    if (
      this.label &&
      !isExpanded &&
      this.toggle.hasAttribute(this.labelExpanded)
    ) {
      this.label.innerHTML = this.toggle.getAttribute(this.labelExpanded);
    } else if (
      this.label &&
      isExpanded &&
      this.toggle.hasAttribute(this.labelCollapsed)
    ) {
      this.label.innerHTML = this.toggle.getAttribute(this.labelCollapsed);
    }

    return this;
  }
}

export default Expandable;
