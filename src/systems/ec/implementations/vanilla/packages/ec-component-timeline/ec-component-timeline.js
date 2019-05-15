import { queryOne } from '@ecl/ec-base/helpers/dom';

export class Timeline {
  constructor(
    element,
    {
      toggleSelector: toggleSelector = '[data-ecl-timeline-button]',
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
    this.label = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
  }

  init() {
    // Query elements
    this.toggle = queryOne(this.toggleSelector, this.element);

    // Get label, if any
    this.label = queryOne(this.labelSelector, this.element);

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
    const isExpanded = this.toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    this.toggle.setAttribute('aria-expanded', !isExpanded);
    if (isExpanded) {
      this.element.removeAttribute('data-ecl-timeline-expanded');
    } else {
      this.element.setAttribute('data-ecl-timeline-expanded', true);
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

    // Retro compatibility
    this.element.setAttribute('aria-expanded', 'true');

    return this;
  }
}

export default Timeline;
