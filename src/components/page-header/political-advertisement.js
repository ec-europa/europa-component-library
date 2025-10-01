import { queryOne } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Element used to toggle the visibility of the panel
 * @param {String} options.headerSelector Element always visible
 * @param {String} options.linkSelector Link inside the header of the component
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 */
export class PoliticalAdv {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {PoliticalAdv} An instance of PoliticalAdv.
   */
  static autoInit(root, { POLITICALADV: defaultOptions = {} } = {}) {
    const politicalAdv = new PoliticalAdv(root, defaultOptions);
    politicalAdv.init();
    root.ECLPoliticalAdv = politicalAdv;
    return politicalAdv;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event PoliticalAdv#onToggle
   * @memberof PoliticalAdv
   */
  supportedEvents = ['onToggle'];

  constructor(
    element,
    {
      headerSelector = '[data-ecl-political-adv-header]',
      toggleSelector = '[data-ecl-political-adv-toggle]',
      linkSelector = '[data-ecl-political-adv-header-link]',
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
    this.toggleSelector = toggleSelector;
    this.headerSelector = headerSelector;
    this.linkSelector = linkSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.toggle = null;
    this.target = null;
    this.header = null;

    // Bind `this` for use in callbacks
    this.handleClickOnHeader = this.handleClickOnHeader.bind(this);
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.toggle = queryOne(this.toggleSelector, this.element);
    this.header = queryOne(this.headerSelector, this.element);
    this.target = document.querySelector(
      `#${this.toggle.getAttribute('aria-controls')}`,
    );

    if (!this.target) {
      throw new TypeError('Target has to be provided. (aria-controls)');
    }

    // Bind click event on toggle
    if (this.attachClickListener && this.toggle) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
    }

    if (this.attachClickListener && this.header) {
      this.header.addEventListener('click', this.handleClickOnHeader);
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
   * @memberof PoliticalAdv
   * @instance
   *
   * @example
   * // Registering a callback for the 'toggle' event
   * politicalAdv.on('onToggle', (event) => {
   *   console.log('Toggle event occurred!', event);
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
   * @memberof PoliticalAdv
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.toggle) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
    }
    if (this.attachClickListener && this.header) {
      this.toggle.removeEventListener('click', this.handleClickOnHeader);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Clicks the toggle button.
   *
   * @param {Event} e
   */
  handleClickOnHeader(e) {
    // If the click is not coming from the link or the button
    if (e.target.closest(`${this.toggleSelector}, ${this.linkSelector}`)) {
      return;
    }
    // click the toggle
    this.handleClickOnToggle(e);
  }

  /**
   * Toggles the visibility of the main panel.
   *
   * @param {Event} e
   *
   * @fires PoliticalAdv#onToggle
   */
  handleClickOnToggle(e) {
    // Get current status
    const isExpanded = this.toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the panel visibility
    this.toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    if (isExpanded) {
      this.target.hidden = true;
    } else {
      this.target.hidden = false;
    }

    const eventData = { expanded: !isExpanded, e };
    this.trigger('onToggle', eventData);
  }
}

export default PoliticalAdv;
