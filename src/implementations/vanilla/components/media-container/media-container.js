import { queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.iframeSelector Selector for iframe element
 * @param {boolean} options.useAutomaticRatio Toggle automatic ratio calculus
 * @param {String} options.videoPlayerLabelSelector Selector for video player label
 * @param {String} options.titleSelector Selector for media title
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

  constructor(
    element,
    {
      iframeSelector = 'iframe',
      useAutomaticRatio = true,
      videoPlayerLabelSelector = 'data-ecl-media-container-player-label',
      titleSelector = 'data-ecl-media-container-title',
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;

    // Options
    this.iframeSelector = iframeSelector;
    this.useAutomaticRatio = useAutomaticRatio;
    this.videoPlayerLabelSelector = videoPlayerLabelSelector;
    this.titleSelector = titleSelector;

    // Private variables
    this.iframe = null;
    this.videoPlayerLabel = null;
    this.title = '';

    // Bind `this` for use in callbacks
    this.calculateRatio = this.calculateRatio.bind(this);
    this.handleParameters = this.handleParameters.bind(this);
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
    this.videoPlayerLabel = this.element.getAttribute(
      this.videoPlayerLabelSelector,
    );
    this.title = this.element.getAttribute(this.titleSelector);

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

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Handle the parameters of the iframe video.
   */
  handleParameters() {
    const iframeUrl = new URL(this.iframe.src);

    // Youtube
    if (iframeUrl.host.includes('youtube')) {
      iframeUrl.searchParams.set('disablekb', 1);
      this.iframe.src = iframeUrl;
    }

    // Update iframe title
    let videoTitle = '';
    if (this.title) {
      videoTitle = this.title;
    }
    if (this.videoPlayerLabel) {
      videoTitle = videoTitle
        ? `${videoTitle} - ${this.videoPlayerLabel}`
        : this.videoPlayerLabel;
    }
    if (videoTitle) {
      this.iframe.setAttribute('title', videoTitle);
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
}

export default MediaContainer;
