import { queryOne } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.bannerContainer Selector for the banner content
 * @param {String} options.bannerVPadding Optional additional padding
 * @param {String} options.bannerPicture Selector for the banner picture
 * @param {String} options.defaultRatio Set the default aspect ratio
 * @param {String} options.maxIterations Used to limit the number of iterations when looking for css values
 * @param {String} options.breakpoint Breakpoint from which the script starts operating
 * @param {Boolean} options.attachResizeListener Whether to attach a listener on resize
 */
export class Banner {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Banner} An instance of Banner.
   */
  static autoInit(root, { BANNER: defaultOptions = {} } = {}) {
    const banner = new Banner(root, defaultOptions);
    banner.init();
    root.ECLBanner = banner;
    return banner;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event onCtaClick
   *   Triggered when the call-to-action (CTA) is clicked.
   * @memberof Banner
   */
  supportedEvents = ['onCtaClick'];

  constructor(
    element,
    {
      bannerContainer = '[data-ecl-banner-container]',
      bannerVPadding = '8',
      bannerPicture = '[data-ecl-banner-image]',
      breakpoint = '996',
      attachResizeListener = true,
      defaultRatio = '4/1',
      maxIterations = 10,
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

    this.bannerVPadding = bannerVPadding;
    this.resizeTimer = null;
    this.bannerContainer = queryOne(bannerContainer, this.element);
    this.bannerPicture = queryOne(bannerPicture, this.element);
    this.bannerImage = this.bannerPicture
      ? queryOne('img', this.bannerPicture)
      : false;
    this.bannerCTA = this.bannerPicture
      ? queryOne('.ecl-banner__cta', this.element)
      : false;
    this.breakpoint = breakpoint;
    this.defaultRatio = defaultRatio;
    this.attachResizeListener = attachResizeListener;
    this.maxIterations = maxIterations;

    // Bind `this` for use in callbacks
    this.setBannerHeight = this.setBannerHeight.bind(this);
    this.checkViewport = this.checkViewport.bind(this);
    this.resetBannerHeight = this.resetBannerHeight.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.waitForAspectRatioToBeDefined =
      this.waitForAspectRatioToBeDefined.bind(this);
    this.setHeight = this.setHeight.bind(this);
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

    if (this.bannerCTA) {
      this.bannerCTA.addEventListener('click', (e) => this.handleCtaClick(e));
    }

    this.checkViewport();
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   * @memberof Banner
   * @instance
   *
   * @example
   * // Registering a callback for the 'onCtaClick' event
   * banner.on('onCtaClick', (event) => {
   *   console.log('The cta was clicked', event);
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
   * @memberof Banner
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Retrieve the value of the aspect ratio in the styles.
   */
  waitForAspectRatioToBeDefined() {
    this.attemptCounter = (this.attemptCounter || 0) + 1;
    const aspectRatio = getComputedStyle(this.bannerImage).getPropertyValue(
      '--css-aspect-ratio',
    );

    if (
      (typeof aspectRatio === 'undefined' || aspectRatio === '') &&
      this.maxIterations > this.attemptCounter
    ) {
      setTimeout(() => this.waitForAspectRatioToBeDefined(), 100);
    } else {
      this.setHeight(aspectRatio);
    }
  }

  /**
   * Sets or resets the banner height
   *
   * @param {string} aspect ratio
   */
  setHeight(ratio) {
    const bannerHeight =
      this.bannerContainer.offsetHeight + 2 * parseInt(this.bannerVPadding, 10);
    const bannerWidth = parseInt(
      getComputedStyle(this.element).getPropertyValue('width'),
      10,
    );
    const [denominator, numerator] = ratio.split('/').map(Number);
    const currentHeight = (bannerWidth * numerator) / denominator;

    if (bannerHeight > currentHeight) {
      if (this.bannerImage) {
        this.bannerImage.style.aspectRatio = 'auto';
      }
      this.element.style.height = `${bannerHeight}px`;
    } else {
      this.resetBannerHeight();
    }
  }

  /**
   * Prepare to set the banner height
   */
  setBannerHeight() {
    if (this.bannerImage) {
      this.waitForAspectRatioToBeDefined();
    } else {
      this.setHeight(this.defaultRatio);
    }
  }

  /**
   * Remove any override and get back the css
   */
  resetBannerHeight() {
    if (this.bannerImage) {
      const computedStyle = getComputedStyle(this.bannerImage);
      this.bannerImage.style.aspectRatio =
        computedStyle.getPropertyValue('--css-aspect-ratio');
    }

    this.element.style.height = 'auto';
  }

  /**
   * Check the current viewport width and act accordingly.
   */
  checkViewport() {
    if (window.innerWidth > this.breakpoint) {
      this.setBannerHeight();
    } else {
      this.resetBannerHeight();
    }
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.checkViewport();
    }, 200);
  }

  /**
   * Triggers a custom event when clicking on the cta.
   *
   * @param {e} Event
   */
  handleCtaClick(e) {
    let href = null;
    const anchor = e.target.closest('a');
    if (anchor) {
      href = anchor.getAttribute('href');
    }

    const eventData = { item: this.bannerCTA, target: href || e.target };
    this.trigger('onCtaClick', eventData);
  }

  /**
   * Destroy component.
   */
  destroy() {
    this.resetBannerHeight();
    this.element.removeAttribute('data-ecl-auto-initialized');
    ECL.components.delete(this.element);
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.bannerCTA) {
      this.bannerCTA.removeEventListener('click', this.handleCtaClick);
    }
  }
}

export default Banner;
