import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

class Breadcrumb {
  constructor(
    element,
    {
      ellipsisButtonSelector: ellipsisButtonSelector = '[data-ecl-breadcrumb-ellipsis-button]',
      ellipsisSelector: ellipsisSelector = '[data-ecl-breadcrumb-ellipsis]',
      segmentSelector: segmentSelector = '[data-ecl-breadcrumb-item]',
      onResize: onResize = null,
      onExpand: onExpand = null,
      attachClickListener: attachClickListener = true,
      minItemsLeft: minItemsLeft = 1,
      minItemsRight: minItemsRight = 2,
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
    this.onResize = onResize;
    this.onExpand = onExpand;
    this.minItemsLeft = minItemsLeft;
    this.minItemsRight = minItemsRight;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.ellipsisButton = null;
    this.itemsElements = null;

    // Bind
    this.init = this.init.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
    this.handleClickOnEllipsis = this.handleClickOnEllipsis.bind(this);
    this.computeVisibilityMap = this.computeVisibilityMap.bind(this);
  }

  init() {
    this.ellipsisButton = queryOne(this.ellipsisButtonSelector, this.element);

    // Bind click event for expand
    if (this.attachClickListener && this.ellipsisButton) {
      this.ellipsisButton.addEventListener('click', this.handleClickOnEllipsis);
    }

    this.itemsElements = queryAll(this.segmentSelector, this.element);

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
    if (!isItemVisible) return null;

    return this.itemsElements.map((item, index) =>
      item.setAttribute('aria-hidden', isItemVisible[index] ? 'false' : 'true')
    );
  }

  showAllItems() {
    this.itemsElements.map(item => item.setAttribute('aria-hidden', 'false'));
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
    // Ignore if there are `minItemsLeft + minItemsRight` segments or less
    if (
      !this.itemsElements ||
      this.itemsElements.length <= this.minItemsLeft + this.minItemsRight
    ) {
      return { expanded: true };
    }

    // get wrapper width
    const wrapperWidth = Math.floor(this.element.getBoundingClientRect().width);

    // get segments width
    const segmentsWidth = this.itemsElements.map(breadcrumbSegment =>
      Math.ceil(breadcrumbSegment.getBoundingClientRect().width)
    );

    const sumSegmentsWidth = segmentsWidth.reduce((a, b) => a + b);

    if (sumSegmentsWidth <= wrapperWidth) {
      return { expanded: true };
    }

    const ellipsisSegment = queryOne(this.ellipsisSelector, this.element);
    const ellipsisSegmentWidth = ellipsisSegment.getBoundingClientRect().width;

    const leftSegmentsWidth = segmentsWidth
      .slice(0, this.minItemsLeft)
      .reduce((a, b) => a + b);
    const rightSegmentsWidth = segmentsWidth
      .slice(-this.minItemsRight)
      .reduce((a, b) => a + b);

    const uncompressibleWidth =
      leftSegmentsWidth + rightSegmentsWidth + ellipsisSegmentWidth;

    const middleItems = this.itemsElements.slice(
      this.minItemsLeft,
      -this.minItemsRight
    );

    if (uncompressibleWidth >= wrapperWidth) {
      // stop here
      return {
        expanded: false,
        isItemVisible: [
          // Display left items
          ...this.itemsElements.slice(0, this.minItemsLeft).map(() => true),
          // Hide other items
          ...middleItems.map(() => false),
          // Display right items
          ...this.itemsElements.slice(-this.minItemsRight).map(() => true),
        ],
      };
    }

    const otherSegments = middleItems.reverse();
    let previousSegmentsWidth = 0;

    const isOtherSegmentVisible = otherSegments.map(otherSegment => {
      previousSegmentsWidth += otherSegment.getBoundingClientRect().width;
      return previousSegmentsWidth + uncompressibleWidth <= wrapperWidth;
    });

    return {
      expanded: false,
      isItemVisible: [
        // Display left items
        ...this.itemsElements.slice(0, this.minItemsLeft).map(() => true),
        // Pass visibility of other items
        ...isOtherSegmentVisible.reverse(),
        // Display right items
        ...this.itemsElements.slice(-this.minItemsRight).map(() => true),
      ],
    };
  }
}

export default Breadcrumb;
