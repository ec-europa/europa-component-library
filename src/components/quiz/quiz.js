import { queryAll } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.itemSelector Element used to toggle the visibility of the panel
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 */
export class Quiz {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Quiz} An instance of Quiz.
   */
  static autoInit(root, { QUIZ: defaultOptions = {} } = {}) {
    const quiz = new Quiz(root, defaultOptions);
    quiz.init();
    root.ECLQuiz = quiz;
    return quiz;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event Quiz#onClick
   * @memberof Quiz
   */
  supportedEvents = ['onClick'];

  constructor(
    element,
    {
      itemSelector = '[data-ecl-quiz-card-flip]',
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
    this.itemSelector = itemSelector;
    this.attachClickListener = attachClickListener;

    // Bind `this` for use in callbacks
    this.handleClickOnItem = this.handleClickOnItem.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.items = queryAll(this.itemSelector, this.element);

    // Bind click event on toggle
    if (this.attachClickListener && this.items.length > 0) {
      this.items.forEach((item) => {
        item.addEventListener('click', this.handleClickOnItem);
      });
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
   * @memberof Quiz
   * @instance
   *
   * @example
   * // Registering a callback for the 'toggle' event
   * quiz.on('onClick', (event) => {
   *   console.log('Click event occurred!', event);
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
   * @memberof PageHeaderExpandable
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.items) {
      this.items.forEach((item) => {
        item.removeEventListener('click', this.handleClickOnItem);
      });
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Flips the card.
   *
   * @param {Event} e
   *
   * @fires Quiz#onClick
   */
  handleClickOnItem(e) {
    const card = e.target.closest('.ecl-quiz-card');
    console.log(card);
    if (card) {
      const isFlipped = card.classList.toggle('ecl-quiz-card__flipped');

      const eventData = { expanded: !isFlipped, e };
      this.trigger('onClick', eventData);
    }
  }
}

export default Quiz;
