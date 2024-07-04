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
   * @event Banner#onCtaClick
   * @event Banner#onPlayClick
   * @event Banner#onPauseClick
   * @memberof Banner
   */
  supportedEvents = ['onCtaClick', 'onPlayClick', 'onPauseClick'];

  constructor(
    element,
    {
      bannerContainer = '[data-ecl-banner-container]',
      bannerVPadding = '8',
      bannerPicture = '[data-ecl-banner-image]',
      bannerVideo = '[data-ecl-banner-video]',
      bannerPlay = '[data-ecl-banner-play]',
      bannerPause = '[data-ecl-banner-pause]',
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
    this.bannerCTA = this.bannerPicture
      ? queryOne('.ecl-banner__cta', this.element)
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
      if (this.element.classList.contains('ecl-banner--xs')) {
        return '6/1';
      }
      if (this.element.classList.contains('ecl-banner--s')) {
        return '5/1';
      }
      if (this.element.classList.contains('ecl-banner--l')) {
        return '3/1';
      }
      return '4/1';
    };

    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    if (this.bannerCTA) {
      this.bannerCTA.addEventListener('click', (e) => this.handleCtaClick(e));
    }
    if (this.bannerPlay) {
      this.bannerPlay.addEventListener('click', (e) => this.handlePlayClick(e));
      this.bannerPlay.style.display = 'block';
    }
    if (this.bannerPause) {
      this.bannerPause.addEventListener('click', (e) =>
        this.handlePauseClick(e),
      );
      this.bannerPause.style.display = 'none';
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
    let aspectRatio = '';
    if (this.bannerVideo) {
      // Ensure that the video is loaded (width > 0) before passing the ratio
      if (this.bannerVideo.videoWidth > 0) {
        aspectRatio = this.defaultRatio();
      }
    } else if (this.bannerImage) {
      aspectRatio = getComputedStyle(this.bannerImage).getPropertyValue(
        '--css-aspect-ratio',
      );
    }

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
      if (this.bannerVideo) {
        this.bannerVideo.style.aspectRatio = 'auto';
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
    if (this.bannerImage) {
      const computedStyle = getComputedStyle(this.bannerImage);
      this.bannerImage.style.aspectRatio =
        computedStyle.getPropertyValue('--css-aspect-ratio');
    }
    if (this.bannerVideo) {
      this.bannerVideo.style.aspectRatio = this.defaultRatio();
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
   * @fires Banner#onCtaClick
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
   * Triggers a custom event when clicking on the play button.
   *
   * @param {e} Event
   * @fires Banner#onPlayClick
   */
  handlePlayClick() {
    if (this.bannerVideo) {
      this.bannerVideo.play();
    }

    this.bannerPlay.style.display = 'none';
    if (this.bannerPause) {
      this.bannerPause.style.display = 'block';
      this.bannerPause.focus();
    }

    const eventData = { item: this.bannerPlay };
    this.trigger('onPlayClick', eventData);
  }

  /**
   * Triggers a custom event when clicking on the pause button.
   *
   * @param {e} Event
   * @fires Banner#onPauseClick
   */
  handlePauseClick() {
    if (this.bannerVideo) {
      this.bannerVideo.pause();
    }

    this.bannerPause.style.display = 'none';
    if (this.bannerPlay) {
      this.bannerPlay.style.display = 'block';
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
    if (this.bannerCTA) {
      this.bannerCTA.removeEventListener('click', this.handleCtaClick);
    }
    if (this.bannerPlay) {
      this.bannerPlay.removeEventListener('click', this.handlePlayClick);
    }
    if (this.bannerPause) {
      this.bannerPause.removeEventListener('click', this.handlePauseClick);
    }
  }
}

export default Banner;
