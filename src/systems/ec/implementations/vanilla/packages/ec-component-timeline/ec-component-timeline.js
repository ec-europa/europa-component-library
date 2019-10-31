import { queryOne } from '@ecl/ec-base/helpers/dom';

export class Timeline {
  static autoInit(root, { TIMELINE: defaultOptions = {} } = {}) {
    const timeline = new Timeline(root, defaultOptions);
    timeline.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLTimeline = timeline;
    return timeline;
  }

  constructor(
    element,
    {
      buttonSelector = '[data-ecl-timeline-button]',
      labelSelector = '[data-ecl-label]',
      labelExpanded = 'data-ecl-label-expanded',
      labelCollapsed = 'data-ecl-label-collapsed',
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
    this.buttonSelector = buttonSelector;
    this.labelSelector = labelSelector;
    this.labelExpanded = labelExpanded;
    this.labelCollapsed = labelCollapsed;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.button = null;
    this.label = null;

    // Bind `this` for use in callbacks
    this.handleClickOnButton = this.handleClickOnButton.bind(this);
  }

  init() {
    // Query elements
    this.button = queryOne(this.buttonSelector, this.element);

    // Get label, if any
    this.label = queryOne(this.labelSelector, this.element);

    // Bind click event on button
    if (this.attachClickListener && this.button) {
      this.button.addEventListener('click', this.handleClickOnButton);
    }
  }

  destroy() {
    if (this.attachClickListener && this.button) {
      this.button.removeEventListener('click', this.handleClickOnButton);
    }
  }

  handleClickOnButton() {
    // Get current status
    const isExpanded = this.button.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    this.button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    if (isExpanded) {
      this.element.removeAttribute('data-ecl-timeline-expanded');
      // Scroll up to the button
      this.button.blur();
      this.button.focus();
    } else {
      this.element.setAttribute('data-ecl-timeline-expanded', 'true');
    }

    // Toggle label if possible
    if (
      this.label &&
      !isExpanded &&
      this.button.hasAttribute(this.labelExpanded)
    ) {
      this.label.innerHTML = this.button.getAttribute(this.labelExpanded);
    } else if (
      this.label &&
      isExpanded &&
      this.button.hasAttribute(this.labelCollapsed)
    ) {
      this.label.innerHTML = this.button.getAttribute(this.labelCollapsed);
    }

    // Retro compatibility
    this.element.setAttribute('aria-expanded', 'true');

    return this;
  }
}

export default Timeline;
