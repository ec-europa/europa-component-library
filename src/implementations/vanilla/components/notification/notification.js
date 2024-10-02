import { queryOne } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.closeSelector Selector for closing the notification
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 */
export class Notification {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Notification} An instance of Notification.
   */
  static autoInit(root, { NOTIFICATION: defaultOptions = {} } = {}) {
    const notification = new Notification(root, defaultOptions);
    notification.init();
    root.ECLNotification = notification;
    return notification;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event Notification#onClose
   * @memberof Notification
   */
  supportedEvents = ['onClose'];

  constructor(
    element,
    {
      closeSelector = '[data-ecl-notification-close]',
      attachClickListener = true,
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;
    this.eventManager = new EventManager();

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
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.close = queryOne(this.closeSelector, this.element);

    // Bind click event on close
    if (this.attachClickListener && this.close) {
      this.close.addEventListener('click', this.handleClickOnClose);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   * @memberof Notification
   * @instance
   *
   * @example
   * // Registering a callback for the 'close' event
   * notification.on('onClose', (event) => {
   *   console.log('Close event occurred!', event);
   * });
   */
  on(eventName, callback) {
    this.eventManager.on(eventName, callback);
  }

  /**
   * Trigger a component event.
   *
   * @param {string} eventName - The name of the event to trigger.
   * @param {any} eventData - Data associated with the event.
   *
   * @memberof Notification
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
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
      ECL.components.delete(this.element);
    }
  }

  /**
   * Remove the notification component.
   *
   * @param {Event} e
   *
   * @fires Notification#onClose
   */
  handleClickOnClose(e) {
    // IE way to remove a node...
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }

    this.trigger('onClose', e);

    return this;
  }
}

export default Notification;
