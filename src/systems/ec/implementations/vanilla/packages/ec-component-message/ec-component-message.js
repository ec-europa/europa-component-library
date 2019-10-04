import { queryOne } from '@ecl/ec-base/helpers/dom';

export class Message {
  static autoInit(root, { MESSAGE: defaultOptions = {} } = {}) {
    const message = new Message(root, defaultOptions);
    message.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLMessage = message;
    return message;
  }

  constructor(
    element,
    {
      closeSelector = '[data-ecl-message-close]',
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
    this.closeSelector = closeSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.close = null;

    // Bind `this` for use in callbacks
    this.handleClickOnClose = this.handleClickOnClose.bind(this);
  }

  init() {
    this.close = queryOne(this.closeSelector, this.element);

    // Bind click event on close
    if (this.attachClickListener && this.close) {
      this.close.addEventListener('click', this.handleClickOnClose);
    }
  }

  destroy() {
    if (this.attachClickListener && this.close) {
      this.close.removeEventListener('click', this.handleClickOnClose);
    }
  }

  handleClickOnClose() {
    // IE way to remove a node...
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }

    return this;
  }
}

export default Message;
