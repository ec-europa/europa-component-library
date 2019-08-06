import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

export class Accordion {
  static autoInit(root, { ACCORDION: defaultOptions = {} } = {}) {
    const accordion = new Accordion(root, defaultOptions);
    accordion.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLAccordion = accordion;
    return accordion;
  }

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
    this.toggles = null;
    this.forceClose = false;
    this.target = null;
    this.label = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
  }

  init() {
    this.toggles = queryAll(this.toggleSelector, this.element);

    // Get label, if any
    this.label = queryOne(this.labelSelector, this.element);

    // Bind click event on toggles
    if (this.attachClickListener && this.toggles) {
      this.toggles.forEach(toggle => {
        toggle.addEventListener(
          'click',
          this.handleClickOnToggle.bind(this, toggle)
        );
      });
    }
  }

  destroy() {
    if (this.attachClickListener && this.toggles) {
      this.toggles.forEach(toggle => {
        toggle.removeEventListener('click', this.handleClickOnToggle);
      });
    }
  }

  handleClickOnToggle(toggle) {
    // Get target element
    const target = queryOne(`#${toggle.getAttribute('aria-controls')}`);

    // Exit if no target found
    if (!target) {
      throw new TypeError(
        'Target has to be provided for accordion (aria-controls)'
      );
    }

    // Get current status
    const isExpanded =
      this.forceClose === true ||
      toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    toggle.setAttribute('aria-expanded', !isExpanded);
    if (isExpanded) {
      target.setAttribute('hidden', true);
    } else {
      target.removeAttribute('hidden');
    }

    return this;
  }
}

export default Accordion;
