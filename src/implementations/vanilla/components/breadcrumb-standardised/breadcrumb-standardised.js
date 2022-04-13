import { queryAll, queryOne } from '@ecl/dom-utils';

export class BreadcrumbStandardised {
  static autoInit(root, { BREADCRUMB_STANDARDISED: defaultOptions = {} } = {}) {
    const breadcrumbStandardised = new BreadcrumbStandardised(
      root,
      defaultOptions
    );
    breadcrumbStandardised.init();
    root.ECLBreadcrumbStandardised = breadcrumbStandardised;
    return breadcrumbStandardised;
  }

  constructor(
    element,
    {
      ellipsisButtonSelector = '[data-ecl-breadcrumb-standardised-ellipsis-button]',
      ellipsisSelector = '[data-ecl-breadcrumb-standardised-ellipsis]',
      segmentSelector = '[data-ecl-breadcrumb-standardised-item]',
      expandableItemsSelector = '[data-ecl-breadcrumb-standardised-item="expandable"]',
      staticItemsSelector = '[data-ecl-breadcrumb-standardised-item="static"]',
      onPartialExpand = null,
      onFullExpand = null,
      attachClickListener = true,
    } = {}
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.'
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

    // Private variables
    this.ellipsisButton = null;
    this.itemsElements = null;
    this.staticElements = null;
    this.expandableElements = null;

    // Bind `this` for use in callbacks
    this.handleClickOnEllipsis = this.handleClickOnEllipsis.bind(this);
  }

  init() {
    this.ellipsisButton = queryOne(this.ellipsisButtonSelector, this.element);

    // Bind click event on ellipsis
    if (this.attachClickListener && this.ellipsisButton) {
      this.ellipsisButton.addEventListener('click', this.handleClickOnEllipsis);
    }

    this.itemsElements = queryAll(this.segmentSelector, this.element);
    this.staticElements = queryAll(this.staticItemsSelector, this.element);
    this.expandableElements = queryAll(
      this.expandableItemsSelector,
      this.element
    );

    this.check();

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  destroy() {
    if (this.attachClickListener && this.ellipsisButton) {
      this.ellipsisButton.removeEventListener(
        'click',
        this.handleClickOnEllipsis
      );
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }

  handleClickOnEllipsis() {
    return this.handleFullExpand();
  }

  check() {
    const visibilityMap = this.computeVisibilityMap();

    if (!visibilityMap) return;

    if (visibilityMap.expanded === true) {
      this.handleFullExpand();
    } else {
      this.handlePartialExpand(visibilityMap);
    }
  }

  hideEllipsis() {
    // Hide ellipsis
    const ellipsis = queryOne(this.ellipsisSelector, this.element);
    if (ellipsis) {
      ellipsis.setAttribute('aria-hidden', 'true');
    }

    // Remove event listener
    if (this.attachClickListener && this.ellipsisButton) {
      this.ellipsisButton.removeEventListener(
        'click',
        this.handleClickOnEllipsis
      );
    }
  }

  showAllItems() {
    this.expandableElements.forEach((item) =>
      item.setAttribute('aria-hidden', 'false')
    );
  }

  handlePartialExpand(visibilityMap) {
    if (!visibilityMap) return;

    const { isItemVisible } = visibilityMap;
    if (!isItemVisible || !Array.isArray(isItemVisible)) return;

    if (this.onPartialExpand) {
      this.onPartialExpand(isItemVisible);
    } else {
      this.expandableElements.forEach((item, index) => {
        item.setAttribute(
          'aria-hidden',
          isItemVisible[index] ? 'false' : 'true'
        );
      });
    }
  }

  handleFullExpand() {
    if (this.onFullExpand) {
      this.onFullExpand();
    } else {
      this.hideEllipsis();
      this.showAllItems();
    }
  }

  computeVisibilityMap() {
    // Ignore if there are no expandableElements
    if (!this.expandableElements || this.expandableElements.length === 0) {
      return { expanded: true };
    }

    const wrapperWidth = Math.floor(this.element.getBoundingClientRect().width);

    // Get the sum of all items' width
    const allItemsWidth = this.itemsElements
      .map(
        (breadcrumbStandardisedSegment) =>
          breadcrumbStandardisedSegment.getBoundingClientRect().width
      )
      .reduce((a, b) => a + b);

    if (allItemsWidth <= wrapperWidth) {
      return { expanded: true };
    }

    const ellipsisItem = queryOne(this.ellipsisSelector, this.element);
    const ellipsisItemWidth = ellipsisItem.getBoundingClientRect().width;

    const incompressibleWidth =
      ellipsisItemWidth +
      this.staticElements.reduce(
        (sum, currentItem) => sum + currentItem.getBoundingClientRect().width,
        0
      );

    if (incompressibleWidth >= wrapperWidth) {
      return {
        expanded: false,
        isItemVisible: [...this.expandableElements.map(() => false)],
      };
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

    return {
      expanded: false,
      isItemVisible,
    };
  }
}

export default BreadcrumbStandardised;
