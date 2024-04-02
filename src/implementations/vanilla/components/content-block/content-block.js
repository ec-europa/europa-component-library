import { queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param (String) options.targetSelector The selector of the element where to attach the click listener
 * @param (String) options.titleSelector  The selector of the element containing the link
 * @param (Integer) options.maxIterations Maximum number of ancestors to look for the element
 */
export class ContentBlock {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {ContentBlock} An instance of ContentBlock.
   */
  static autoInit(root, { CONTENT_BLOCK: defaultOptions = {} } = {}) {
    const contentBlock = new ContentBlock(root, defaultOptions);
    contentBlock.init();
    root.ECLContentBlock = contentBlock;
    return contentBlock;
  }

  constructor(
    element,
    {
      targetSelector = '[data-ecl-picture-link]',
      titleSelector = '[data-ecl-title-link]',
      attachClickListener = true,
      maxIterations = 1,
      withTitleAttr = false,
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
    this.targetSelector = targetSelector;
    this.titleSelector = titleSelector;
    this.attachClickListener = attachClickListener;
    this.maxIterations = maxIterations;
    this.withTitleAttr = withTitleAttr;

    // Bind `this` for use in callbacks
    this.linkTo = this.linkTo.bind(this);
    this.findElementInCommonAncestor =
      this.findElementInCommonAncestor.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.picture = this.findElementInCommonAncestor(
      this.element,
      this.targetSelector,
      this.maxIterations,
    );

    // Exit early if no picture is present.
    if (!this.picture) {
      return;
    }

    this.title = queryOne(this.titleSelector, this.element);
    this.linkEl = this.title ? queryOne('a', this.title) : false;
    if (this.linkEl) {
      this.picture.style.cursor = 'pointer';
      const img = queryOne('img', this.picture);
      if (img && this.withTitleAttr) {
        img.title = this.constructor.convertToFullURL(
          this.linkEl.getAttribute('href'),
        );
      }

      if (this.attachClickListener) {
        this.picture.addEventListener('click', this.linkTo);
      }
    }

    this.element.setAttribute('data-ecl-auto-initialized', true);
    ECL.components.set(this.element, this);
  }

  /**
   * Redirect the user to the desired url.
   */
  linkTo() {
    if (this.linkEl) {
      // Click the linking element.
      this.linkEl.click();
    }
  }

  /**
   * Find an element in a common ancestor.
   *
   * @param {HTMLElement} element
   * @param {string} selector
   */
  findElementInCommonAncestor(element, selector, maxIterations) {
    const eureka = queryOne(selector, element);
    if (eureka) {
      return eureka;
    }

    if (element.classList.contains('ecl-card__body')) {
      maxIterations += 1;
    }

    if (element === document.documentElement || maxIterations <= 0) {
      return null;
    }

    return this.findElementInCommonAncestor(
      element.parentElement,
      selector,
      maxIterations - 1,
    );
  }

  /**
   * Convert a path to a full url.
   *
   * @param {String} href
   */
  static convertToFullURL(href) {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return href;
    }

    const baseUrl = new URL(window.location.href);
    const fullUrl = new URL(href, baseUrl);
    return fullUrl.href;
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.picture) {
      this.picture.removeEventListener('click', this.linkto);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }
}

export default ContentBlock;
