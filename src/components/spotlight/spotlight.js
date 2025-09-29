import { queryOne } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.pictureSelector Selector for the picture element
 * @param {Boolean} options.attachResizeListener Whether to attach a resize observer
 */
export class Spotlight {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Spotlight} An instance of Spotlight.
   */
  static autoInit(root, { SPOTLIGHT: defaultOptions = {} } = {}) {
    const spotlight = new Spotlight(root, defaultOptions);
    spotlight.init();
    root.ECLSpotlight = spotlight;
    return spotlight;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event Spotlight#onImageChange
   * @memberof Spotlight
   */
  supportedEvents = ['onImageChange'];

  constructor(
    element,
    {
      pictureSelector = '[data-ecl-spotlight-image]',
      attachResizeListener = true,
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
    this.pictureSelector = pictureSelector;
    this.attachResizeListener = attachResizeListener;
    this.resizeTimer = null;

    // Private variables
    this.picture = null;
    this.img = null;

    // Bind `this` for use in callbacks
    this.handleResize = this.handleResize.bind(this);
    this.updateImageSources = this.updateImageSources.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Initial setup - hide image first, and use requestAnimationFrame to ensure element is rendered
    this.picture = queryOne(this.pictureSelector, this.element);
    this.img = this.picture.querySelector('img');
    if (this.picture && this.img) {
      this.img.classList.add('ecl-spotlight__image--hidden');
      requestAnimationFrame(() => {
        this.updateImageSources(this.element.offsetWidth);
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
   * @memberof Spotlight
   * @instance
   *
   * @example
   * // Registering a callback for the 'onImageChange' event
   * spotlight.on('onImageChange', (event) => {
   *   console.log('Image changed!', event);
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
   * @memberof Spotlight
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Handle resize events
   * Uses a debounce, for performance
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      const picture = queryOne(this.pictureSelector, this.element);
      if (picture) {
        this.updateImageSources(this.element.offsetWidth);
      }
    }, 200);
  }

  /**
   * Update image sources based on container width
   *
   * @param {number} containerWidth - Container width in pixels
   * @fires Spotlight#onImageChange
   */
  updateImageSources(containerWidth) {
    const sources = this.picture.querySelectorAll(
      'source[data-container-width]',
    );
    if (!this.img) return;

    // Store the original src if not already stored
    if (!this.img.dataset.originalSrc) {
      this.img.dataset.originalSrc = this.img.src;
    }

    // Sort sources by container width (descending)
    const sortedSources = Array.from(sources).sort((a, b) => {
      const widthA = parseInt(a.dataset.containerWidth, 10);
      const widthB = parseInt(b.dataset.containerWidth, 10);
      return widthB - widthA;
    });

    // Find the appropriate source based on container width
    let selectedSource = null;
    let newSrc = this.img.dataset.originalSrc; // Default to original src

    for (const source of sortedSources) {
      const minWidth = parseInt(source.dataset.containerWidth, 10);
      if (containerWidth >= minWidth) {
        selectedSource = source;
        newSrc = selectedSource.dataset.src;
        break;
      }
    }

    // Update the img src if it's different
    if (this.img.src !== newSrc) {
      const oldSrc = this.img.src;

      // Wait for the new image to load before showing it
      // eslint-disable-next-line no-undef
      const tempImg = new Image();
      tempImg.onload = () => {
        this.img.src = newSrc;
        this.img.classList.remove('ecl-spotlight__image--hidden');
      };
      tempImg.src = newSrc;

      const eventData = {
        element: this.img,
        oldSrc,
        newSrc,
        containerWidth,
      };
      this.trigger('onImageChange', eventData);
    } else {
      // If src is the same, just remove the hidden class
      this.img.classList.remove('ecl-spotlight__image--hidden');
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }
}

export default Spotlight;
