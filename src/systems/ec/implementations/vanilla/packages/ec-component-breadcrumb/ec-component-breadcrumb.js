import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

class Breadcrumb {
  constructor(
    element,
    {
      ellipsisButtonSelector: ellipsisButtonSelector = '[data-ecl-breadcrumb-ellipsis-button]',
      ellipsisSelector: ellipsisSelector = '[data-ecl-breadcrumb-ellipsis]',
      segmentSelector: segmentSelector = '[data-ecl-breadcrumb-item]',
      expandableItemsSelector: expandableItemsSelector = '[data-ecl-breadcrumb-item="expandable"]',
      staticItemsSelector: staticItemsSelector = '[data-ecl-breadcrumb-item="static"]',
      onResize: onResize = null,
      onExpand: onExpand = null,
      attachClickListener: attachClickListener = true,
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
    this.onResize = onResize;
    this.onExpand = onExpand;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.ellipsisButton = null;
    this.itemsElements = null;
    this.staticElements = null;
    this.expandableElements = null;

    // Bind
    this.init = this.init.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
    this.handleClickOnEllipsis = this.handleClickOnEllipsis.bind(this);
    this.computeVisibilityMap = this.computeVisibilityMap.bind(this);
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

    const visibilityMap = this.computeVisibilityMap();

    if (visibilityMap) {
      if (this.onResize) {
        this.onResize(visibilityMap);
      } else {
        this.expandSome(visibilityMap);
      }
    }
  }

  destroy() {
    if (this.attachClickListener && this.ellipsisButton) {
      this.ellipsisButton.removeEventListener(
        'click',
        this.handleClickOnEllipsis
      );
    }
  }

  update() {
    this.destroy();
    this.init();
  }

  handleClickOnEllipsis(e) {
    if (this.onExpand) {
      return this.onExpand(e);
    }

    return this.expandAll();
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

  showSomeItems(isItemVisible) {
    if (isItemVisible && Array.isArray(isItemVisible)) {
      this.expandableElements.forEach((item, index) => {
        item.setAttribute(
          'aria-hidden',
          isItemVisible[index] ? 'false' : 'true'
        );
      });
    }
  }

  showAllItems() {
    this.expandableElements.forEach(item =>
      item.setAttribute('aria-hidden', 'false')
    );
  }

  expandSome(visibilityMap) {
    if (!visibilityMap) return null;

    if (visibilityMap.expanded === true) {
      return this.expandAll();
    }

    return this.showSomeItems(visibilityMap.isItemVisible);
  }

  expandAll() {
    this.hideEllipsis();
    this.showAllItems();
  }

  computeVisibilityMap() {
    // Ignore if there are no expandableElements
    if (!this.expandableElements || this.expandableElements.length === 0) {
      return { expanded: true };
    }

    // get wrapper width
    const wrapperWidth = Math.floor(this.element.getBoundingClientRect().width);

    // Get the sum of all items' width
    const allItemsWidth = this.itemsElements
      .map(breadcrumbSegment => breadcrumbSegment.getBoundingClientRect().width)
      .reduce((a, b) => a + b);

    if (allItemsWidth <= wrapperWidth) {
      return { expanded: true };
    }

    const ellipsisSegment = queryOne(this.ellipsisSelector, this.element);
    const ellipsisSegmentWidth = ellipsisSegment.getBoundingClientRect().width;

    const uncompressibleWidth =
      ellipsisSegmentWidth +
      this.staticElements.reduce(
        (sum, currentItem) => sum + currentItem.getBoundingClientRect().width,
        0
      );

    if (uncompressibleWidth >= wrapperWidth) {
      return {
        expanded: false,
        isItemVisible: [...this.expandableElements.map(() => false)],
      };
    }

    let previousItemsWidth = 0;
    let isPreviousItemVisible = true;

    // Careful: reverse() is destructive, that's why we make a copy of the array
    const isOtherSegmentVisible = [...this.expandableElements]
      .reverse()
      .map(otherSegment => {
        if (!isPreviousItemVisible) return false;

        previousItemsWidth += otherSegment.getBoundingClientRect().width;

        const isVisible =
          previousItemsWidth + uncompressibleWidth <= wrapperWidth;

        if (!isVisible) isPreviousItemVisible = false;

        return isVisible;
      })
      .reverse();

    return {
      expanded: false,
      isItemVisible: isOtherSegmentVisible,
    };
  }
}

export default Breadcrumb;
