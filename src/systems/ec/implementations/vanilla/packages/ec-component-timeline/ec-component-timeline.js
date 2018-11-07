import { queryOne } from '@ecl/ec-base/helpers/dom';

class Timeline {
  constructor(
    element,
    {
      buttonSelector: buttonSelector = '[data-ecl-timeline-button]',
      listSelector: listSelector = '[data-ecl-timeline-list]',
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
    this.buttonSelector = buttonSelector;
    this.listSelector = listSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.button = null;
    this.list = null;

    // Bind `this` for use in callbacks
    this.handleClickOnButton = this.handleClickOnButton.bind(this);
  }

  init() {
    // Query elements
    this.button = queryOne(this.buttonSelector, this.element);
    this.list = queryOne(this.listSelector, this.element);

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
    this.list.setAttribute('aria-expanded', 'true');

    return this;
  }
}

export default Timeline;
