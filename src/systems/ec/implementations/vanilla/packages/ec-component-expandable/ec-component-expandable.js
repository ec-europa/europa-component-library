import { queryOne } from '@ecl/ec-base/helpers/dom';

class Expandable {
  constructor(
    element,
    {
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
    this.labelSelector = labelSelector;
    this.labelExpanded = labelExpanded;
    this.labelCollapsed = labelCollapsed;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.forceClose = false;
    this.target = null;
    this.label = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
  }

  init() {
    // Get target element
    this.target = document.getElementById(
      this.element.getAttribute('aria-controls')
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
    if (this.attachClickListener && this.element) {
      this.element.addEventListener('click', this.handleClickOnToggle);
    }
  }

  destroy() {
    if (this.attachClickListener && this.element) {
      this.element.removeEventListener('click', this.handleClickOnToggle);
    }
  }

  handleClickOnToggle(e) {
    e.preventDefault();

    // Get current status
    const isExpanded =
      this.forceClose === true ||
      this.element.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    this.element.setAttribute('aria-expanded', !isExpanded);
    this.target.setAttribute('aria-hidden', isExpanded);

    // Toggle label if possible
    if (
      this.label &&
      !isExpanded &&
      this.element.hasAttribute(this.labelExpanded)
    ) {
      this.label.innerHTML = this.element.getAttribute(this.labelExpanded);
    } else if (
      this.label &&
      isExpanded &&
      this.element.hasAttribute(this.labelCollapsed)
    ) {
      this.label.innerHTML = this.element.getAttribute(this.labelCollapsed);
    }

    return this;
  }
}

export default Expandable;
