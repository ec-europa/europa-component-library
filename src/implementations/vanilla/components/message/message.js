import { queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.closeSelector Selector for closing the message
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 */
export class Message {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Message} An instance of Message.
   */
  static autoInit(root, { MESSAGE: defaultOptions = {} } = {}) {
    const message = new Message(root, defaultOptions);
    message.init();
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

  /**
   * Initialise component.
   */
  init() {
    this.close = queryOne(this.closeSelector, this.element);

    // Bind click event on close
    if (this.attachClickListener && this.close) {
      this.close.addEventListener('click', this.handleClickOnClose);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.close) {
      this.close.removeEventListener('click', this.handleClickOnClose);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }

  /**
   * Remove the message component.
   */
  handleClickOnClose() {
    // IE way to remove a node...
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }

    return this;
  }
}

export default Message;
