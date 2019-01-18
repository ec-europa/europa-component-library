import { queryOne } from '@ecl/ec-base/helpers/dom';

class Accordion {
  constructor(
    element,
    {
      toggleSelector: toggleSelector = '[data-ecl-accordion-toggle]',
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
  }

  init() {
    this.toggle = queryOne(this.toggleSelector, this.element);

    // Get target element
    this.target = document.getElementById(
      this.toggle.getAttribute('aria-controls')
    );

    // Get label, if any
    this.label = queryOne(this.labelSelector, this.element);

    // Exit if no target found
    if (!this.target) {
      throw new TypeError(
        'Target has to be provided for accordion (aria-controls)'
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

    return this;
  }
}

export default Accordion;
