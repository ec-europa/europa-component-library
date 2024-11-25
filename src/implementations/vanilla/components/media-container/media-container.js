import { queryOne } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.iframeSelector Selector for iframe element
 * @param {boolean} options.useAutomaticRatio Toggle automatic ratio calculus
 * @param {String} options.videoTitleSelector Selector for video title
 * @param {String} options.videoPlay Selector for the video play button
 * @param {String} options.videoPause Selector for the video pause button
 */
export class MediaContainer {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {MediaContainer} An instance of MediaContainer.
   */
  static autoInit(root, { MEDIA_CONTAINER: defaultOptions = {} } = {}) {
    const mediaContainer = new MediaContainer(root, defaultOptions);
    mediaContainer.init();
    root.ECLMediaContainer = mediaContainer;
    return mediaContainer;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event MediaContainer#onPlayClick
   * @event MediaContainer#onPauseClick
   * @memberof Media container
   */
  supportedEvents = ['onPlayClick', 'onPauseClick'];

  constructor(
    element,
    {
      iframeSelector = 'iframe',
      useAutomaticRatio = true,
      videoTitleSelector = 'data-ecl-media-container-video-title',
      videoPlay = '[data-ecl-media-container-play]',
      videoPause = '[data-ecl-media-container-pause]',
      mediaVideo = '[data-ecl-media-container-video]',
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
    this.iframeSelector = iframeSelector;
    this.useAutomaticRatio = useAutomaticRatio;
    this.videoTitleSelector = videoTitleSelector;
    this.mediaVideo = queryOne(mediaVideo, this.element);
    this.videoPlay = queryOne(videoPlay, this.element);
    this.videoPause = queryOne(videoPause, this.element);
    // Private variables
    this.iframe = null;
    this.videoTitle = '';

    // Bind `this` for use in callbacks
    this.calculateRatio = this.calculateRatio.bind(this);
    this.handleParameters = this.handleParameters.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    // Get elements
    this.videoTitle = this.element.getAttribute(this.videoTitleSelector);

    // Check if a ratio has been set manually
    const media = queryOne('.ecl-media-container__media', this.element);
    if (media && !/ecl-media-container__media--ratio/.test(media.className)) {
      // Get the iframe
      this.iframe = queryOne(this.iframeSelector, this.element);

      // Check if there is an iframe to handle
      if (this.iframe) {
        this.handleParameters();
        if (this.useAutomaticRatio) this.calculateRatio();
      }
    }

    if (this.videoPlay) {
      this.videoPlay.addEventListener('click', (e) => this.handlePlayClick(e));
      this.videoPlay.style.display = 'none';
    }
    if (this.videoPause) {
      this.videoPause.addEventListener('click', (e) =>
        this.handlePauseClick(e),
      );
      this.videoPause.style.display = 'flex';
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
   * @memberof Banner
   * @instance
   *
   * @example
   * // Registering a callback for the 'onPauseClick' event
   * mediaContainer.on('onPauseClick', (event) => {
   *   console.log('The pause button was clicked', event);
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
   * Destroy component.
   */
  destroy() {
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }

    if (this.videoPlay) {
      this.videoPlay.removeEventListener('click', this.handlePlayClick);
      this.videoPlay.style.display = 'none';
    }
    if (this.videoPause) {
      this.videoPause.remveEventListener('click', this.handlePauseClick);
      this.videoPause.style.display = 'flex';
    }
  }

  /**
   * Handle the parameters of the iframe video.
   */
  handleParameters() {
    const iframeUrl = new URL(this.iframe.src);

    // Youtube
    if (iframeUrl.host.includes('youtube')) {
      this.iframe.src = iframeUrl;
    }

    // Update iframe title
    if (this.videoTitle) {
      this.iframe.setAttribute('title', this.videoTitle);
    }
  }

  /**
   * Calculate the ratio of the iframe video.
   */
  calculateRatio() {
    // Get dimension if they are provided
    let iframeWidth = this.iframe.width;
    let iframeHeight = this.iframe.height;

    // If at least one dimension in not provided, calculate them (less reliable)
    if (!iframeWidth || !iframeHeight) {
      iframeWidth = this.iframe.offsetWidth;
      iframeHeight = this.iframe.offsetHeight;
    }

    // Set aspect ratio
    this.iframe.style.aspectRatio = `${iframeWidth}/${iframeHeight}`;
  }

  /**
   * Triggers a custom event when clicking on the play button.
   *
   * @param {e} Event
   * @fires MediaContainer#onPlayClick
   */
  handlePlayClick(e) {
    if (this.mediaVideo) {
      this.mediaVideo.play();
    }

    this.videoPlay.style.display = 'none';
    if (this.videoPause) {
      this.videoPause.style.display = 'flex';
      this.videoPause.focus();
    }

    const eventData = { ...e, status: 'Playing' };
    this.trigger('onPlayClick', eventData);
  }

  /**
   * Triggers a custom event when clicking on the pause button.
   *
   * @param {e} Event
   * @fires MediaContainer#onPauseClick
   */
  handlePauseClick(e) {
    if (this.mediaVideo) {
      this.mediaVideo.pause();
    }

    this.videoPause.style.display = 'none';
    if (this.videoPlay) {
      this.videoPlay.style.display = 'flex';
      this.videoPlay.focus();
    }

    const eventData = { ...e, status: 'Paused' };
    this.trigger('onPauseClick', eventData);
  }
}

export default MediaContainer;
