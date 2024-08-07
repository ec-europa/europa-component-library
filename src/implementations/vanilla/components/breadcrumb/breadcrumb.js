import { queryAll, queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.ellipsisButtonSelector
 * @param {String} options.ellipsisSelector
 * @param {String} options.segmentSelector
 * @param {String} options.expandableItemsSelector
 * @param {String} options.staticItemsSelector
 * @param {Function} options.onPartialExpand
 * @param {Function} options.onFullExpand
 * @param {Boolean} options.attachClickListener
 */
export class Breadcrumb {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Breadcrumb} An instance of Breadcrumb.
   */
  static autoInit(root, { BREADCRUMB: defaultOptions = {} } = {}) {
    const breadcrumb = new Breadcrumb(root, defaultOptions);
    breadcrumb.init();
    root.ECLBreadcrumb = breadcrumb;
    return breadcrumb;
  }

  constructor(
    element,
    {
      ellipsisButtonSelector = '[data-ecl-breadcrumb-ellipsis-button]',
      ellipsisSelector = '[data-ecl-breadcrumb-ellipsis]',
      segmentSelector = '[data-ecl-breadcrumb-item]',
      expandableItemsSelector = '[data-ecl-breadcrumb-item="expandable"]',
      staticItemsSelector = '[data-ecl-breadcrumb-item="static"]',
      onPartialExpand = null,
      onFullExpand = null,
      attachClickListener = true,
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

    // Options
    this.ellipsisButtonSelector = ellipsisButtonSelector;
    this.ellipsisSelector = ellipsisSelector;
    this.segmentSelector = segmentSelector;
    this.expandableItemsSelector = expandableItemsSelector;
    this.staticItemsSelector = staticItemsSelector;
    this.onPartialExpand = onPartialExpand;
    this.onFullExpand = onFullExpand;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.ellipsisButton = null;
    this.itemsElements = null;
    this.staticElements = null;
    this.expandableElements = null;
    this.resizeTimer = null;

    // Bind `this` for use in callbacks
    this.handleClickOnEllipsis = this.handleClickOnEllipsis.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }

    ECL.components = ECL.components || new Map();

    this.ellipsisButton = queryOne(this.ellipsisButtonSelector, this.element);

    // Bind click event on ellipsis
    if (this.attachClickListener && this.ellipsisButton) {
      this.ellipsisButton.addEventListener('click', this.handleClickOnEllipsis);
    }

    this.itemsElements = queryAll(this.segmentSelector, this.element);
    this.staticElements = queryAll(this.staticItemsSelector, this.element);
    this.expandableElements = queryAll(
      this.expandableItemsSelector,
      this.element,
    );

    this.check();

    // Bind resize events
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }
    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.ellipsisButton) {
      this.ellipsisButton.removeEventListener(
        'click',
        this.handleClickOnEllipsis,
      );
    }
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      this.element.classList.remove('ecl-breadcrumb--wrap');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Invoke event listener attached on the elipsis. Traslates to a full expand.
   */
  handleClickOnEllipsis() {
    return this.handleFullExpand();
  }

  /**
   * Apply partial or full expand.
   */
  async check() {
    const visibilityMap = await this.computeVisibilityMap();
    if (!visibilityMap) return;

    if (visibilityMap.expanded === true) {
      this.handleFullExpand();
    } else {
      this.handlePartialExpand(visibilityMap);
    }
  }

  /**
   * Removes the elipsis element and its event listeners.
   */
  hideEllipsis() {
    // Hide ellipsis
    const ellipsis = queryOne(this.ellipsisSelector, this.element);
    if (ellipsis) {
      ellipsis.setAttribute('aria-hidden', 'true');
    }
  }

  /**
   * Show all expandable elements.
   */
  showAllItems() {
    this.expandableElements.forEach((item) =>
      item.setAttribute('aria-hidden', 'false'),
    );
  }

  /**
   * @param {Object} visibilityMap
   */
  handlePartialExpand(visibilityMap) {
    if (!visibilityMap) return;

    this.element.classList.add('ecl-breadcrumb--collapsed');

    const { isItemVisible } = visibilityMap;
    if (!isItemVisible || !Array.isArray(isItemVisible)) return;

    if (this.onPartialExpand) {
      this.onPartialExpand(isItemVisible);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (Math.floor(this.element.getBoundingClientRect().width) > 767) {
        const ellipsis = queryOne(this.ellipsisSelector, this.element);
        if (ellipsis) {
          ellipsis.setAttribute('aria-hidden', 'false');
        }
        this.expandableElements.forEach((item, index) => {
          item.setAttribute(
            'aria-hidden',
            isItemVisible[index] ? 'false' : 'true',
          );
        });
      } else {
        this.expandableElements.forEach((item) => {
          item.setAttribute('aria-hidden', 'true');
        });
      }
    }
  }

  /**
   * Display all elements.
   */
  handleFullExpand() {
    this.element.classList.remove('ecl-breadcrumb--collapsed');
    this.element.classList.add('ecl-breadcrumb--wrap');

    if (this.onFullExpand) {
      this.onFullExpand();
    } else {
      this.hideEllipsis();
      this.showAllItems();
    }
  }

  /**
   * Trigger events on resize
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.check();
    }, 200);
  }

  /**
   * Measure/evaluate which elements can be displayed and toggle those who don't fit.
   */
  computeVisibilityMap() {
    return new Promise((resolve) => {
      // Ignore if there are no expandableElements
      if (!this.expandableElements || this.expandableElements.length === 0) {
        resolve({ expanded: true });
        return;
      }

      const wrapperWidth = Math.floor(
        this.element.getBoundingClientRect().width,
      );

      setTimeout(() => {
        // Get the sum of all items' width
        const allItemsWidth = this.itemsElements
          .map((breadcrumbSegment) => {
            let segmentWidth = breadcrumbSegment.getBoundingClientRect().width;
            // Current page can have a display none set via the css.
            if (segmentWidth === 0) {
              breadcrumbSegment.style.display = 'inline-flex';
              segmentWidth = breadcrumbSegment.getBoundingClientRect().width;
              breadcrumbSegment.style.cssText = '';
            }
            return segmentWidth;
          })
          .reduce((a, b) => a + b);
        // This calculation is not always 100% reliable, we add a 10% to limit the risk.
        if (allItemsWidth * 1.1 <= wrapperWidth) {
          resolve({ expanded: true });
          return;
        }

        const ellipsisItem = queryOne(this.ellipsisSelector, this.element);
        const ellipsisItemWidth = ellipsisItem.getBoundingClientRect().width;

        const incompressibleWidth =
          ellipsisItemWidth +
          this.staticElements.reduce(
            (sum, currentItem) =>
              sum + currentItem.getBoundingClientRect().width,
            0,
          );

        if (incompressibleWidth >= wrapperWidth) {
          resolve({
            expanded: false,
            isItemVisible: [...this.expandableElements.map(() => false)],
          });
          return;
        }

        let previousItemsWidth = 0;
        let isPreviousItemVisible = true;

        // Careful: reverse() is destructive, that's why we make a copy of the array
        const isItemVisible = [...this.expandableElements]
          .reverse()
          .map((otherSegment) => {
            if (!isPreviousItemVisible) return false;

            previousItemsWidth += otherSegment.getBoundingClientRect().width;

            const isVisible =
              previousItemsWidth + incompressibleWidth <= wrapperWidth;

            if (!isVisible) isPreviousItemVisible = false;

            return isVisible;
          })
          .reverse();

        resolve({
          expanded: false,
          isItemVisible,
        });
      }, 150);
    });
  }
}

export default Breadcrumb;
