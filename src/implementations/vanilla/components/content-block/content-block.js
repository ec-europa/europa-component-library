import { queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options#
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param (String) options.dataSelector The selector of the element where to attach the click listener
 * @param (String) options.dataTitle  The selector of the element containing the link
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
      dataSelector = '.ecl-picture',
      dataTitle = '[data-ecl-title-link]',
      attachClickListener = true,
      maxIterations = 2,
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
    this.dataSelector = dataSelector;
    this.dataTitle = dataTitle;
    this.attachClickListener = attachClickListener;
    this.maxIterations = maxIterations;

    // Bind `this` for use in callbacks
    this.linkTo = this.linkTo.bind(this);
    this.findElementInCommonAncestor =
      this.findElementInCommonAncestor.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.picture = this.findElementInCommonAncestor(
      this.element,
      this.dataSelector,
      this.maxIterations,
    );

    // Exit early if no picture is present.
    if (!this.picture) {
      return;
    }

    this.title = queryOne(this.dataTitle, this.element);
    this.linkEl = this.title ? queryOne('a', this.title) : false;
    if (this.linkEl) {
      this.picture.style.cursor = 'pointer';

      if (this.attachClickListener) {
        this.picture.addEventListener('click', this.linkTo);
      }
    }

    this.element.setAttribute('data-ecl-auto-initialized', true);
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
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.picture) {
      this.picture.removeEventListener('click', this.linkto);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }
}

export default ContentBlock;
