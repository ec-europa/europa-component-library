import { queryOne } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.bannerContainer Selector for the banner content
 * @param {String} options.bannerVPadding Optional additional padding
 * @param {String} options.bannerPicture Selector for the banner picture
 * @param {String} options.bannerVideo Selector for the banner video
 * @param {String} options.bannerPlay Selector for the banner play button
 * @param {String} options.bannerPause Selector for the banner pause button
 * @param {String} options.maxIterations Used to limit the number of iterations when looking for css values
 * @param {String} options.breakpoint Breakpoint from which the script starts operating
 * @param {Boolean} options.attachResizeListener Whether to attach a listener on resize
 */
export class BannerInpage {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {BannerInpage} An instance of BannerInpage.
   */
  static autoInit(root, { BANNER_INPAGE: defaultOptions = {} } = {}) {
    const bannerInpage = new BannerInpage(root, defaultOptions);
    bannerInpage.init();
    root.ECLBannerInpage = bannerInpage;
    return bannerInpage;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event BannerInpage#onPlayClick
   * @event BannerInpage#onPauseClick
   * @memberof BannerInpage
   */
  supportedEvents = ['onPlayClick', 'onPauseClick'];

  constructor(
    element,
    {
      bannerContainer = '[data-ecl-banner-inpage-container]',
      bannerVPadding = '8',
      bannerPicture = '[data-ecl-banner-inpage-image]',
      bannerVideo = '[data-ecl-banner-inpage-video]',
      bannerPlay = '[data-ecl-banner-inpage-play]',
      bannerPause = '[data-ecl-banner-inpage-pause]',
      breakpoint = '996',
      attachResizeListener = true,
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
    this.bannerVideo = queryOne(bannerVideo, this.element);
    this.bannerPlay = queryOne(bannerPlay, this.element);
    this.bannerPause = queryOne(bannerPause, this.element);
    this.bannerImage = this.bannerPicture
      ? queryOne('img', this.bannerPicture)
      : false;
    this.breakpoint = breakpoint;
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

    this.defaultRatio = () => {
      return '4/1';
    };

    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    if (this.bannerPlay) {
      this.bannerPlay.addEventListener('click', (e) => this.handlePlayClick(e));
      this.bannerPlay.style.display = 'none';
    }
    if (this.bannerPause) {
      this.bannerPause.addEventListener('click', (e) =>
        this.handlePauseClick(e),
      );
      this.bannerPause.style.display = 'flex';
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
   * @memberof BannerInpage
   * @instance
   *
   * @example
   * // Registering a callback for the 'onPlayClick' event
   * bannerInpage.on('onPlayClick', (event) => {
   *   console.log('The play button was clicked', event);
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
   * @memberof BannerInpage
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Retrieve the value of the aspect ratio in the styles.
   */
  waitForAspectRatioToBeDefined() {
    this.attemptCounter = (this.attemptCounter || 0) + 1;
    const aspectRatio = getComputedStyle(this.element).getPropertyValue(
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
    if (this.bannerContainer) {
      const bannerHeight =
        this.bannerContainer.offsetHeight +
        2 * parseInt(this.bannerVPadding, 10);
      const bannerWidth = parseInt(
        getComputedStyle(this.element).getPropertyValue('width'),
        10,
      );
      const [denominator, numerator] = ratio.split('/').map(Number);
      const currentHeight = (bannerWidth * numerator) / denominator;
      if (bannerHeight > currentHeight) {
        this.element.style.aspectRatio = 'auto';
        this.element.style.height = `${bannerHeight}px`;
      } else {
        this.resetBannerHeight();
      }
    }
  }

  /**
   * Prepare to set the banner height
   */
  setBannerHeight() {
    if (this.bannerImage || this.bannerVideo) {
      this.waitForAspectRatioToBeDefined();
    } else {
      this.setHeight(this.defaultRatio());
    }
  }

  /**
   * Remove any override and get back the css
   */
  resetBannerHeight() {
    this.element.style.removeProperty('aspect-ratio');
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
   * Triggers a custom event when clicking on the play button.
   *
   * @param {e} Event
   * @fires BannerInpage#onPlayClick
   */
  handlePlayClick() {
    if (this.bannerVideo) {
      this.bannerVideo.play();
    }

    this.bannerPlay.style.display = 'none';
    if (this.bannerPause) {
      this.bannerPause.style.display = 'flex';
      this.bannerPause.focus();
    }

    const eventData = { item: this.bannerPlay };
    this.trigger('onPlayClick', eventData);
  }

  /**
   * Triggers a custom event when clicking on the pause button.
   *
   * @param {e} Event
   * @fires BannerInpage#onPauseClick
   */
  handlePauseClick() {
    if (this.bannerVideo) {
      this.bannerVideo.pause();
    }

    this.bannerPause.style.display = 'none';
    if (this.bannerPlay) {
      this.bannerPlay.style.display = 'flex';
      this.bannerPlay.focus();
    }

    const eventData = { item: this.bannerPause };
    this.trigger('onPauseClick', eventData);
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
    if (this.bannerPlay) {
      this.bannerPlay.removeEventListener('click', this.handlePlayClick);
    }
    if (this.bannerPause) {
      this.bannerPause.removeEventListener('click', this.handlePauseClick);
    }
  }
}

export default BannerInpage;
