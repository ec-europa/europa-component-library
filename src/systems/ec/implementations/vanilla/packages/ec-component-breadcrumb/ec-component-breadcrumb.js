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

    if (this.attachClickListener && this.ellipsisButton) {
      // bind click event for expand
      this.ellipsisButton.addEventListener('click', this.handleClickOnEllipsis);
    }

    this.itemsElements = queryAll(this.segmentSelector, this.element);

    const visibilityMap = this.computeVisibilityMap();

    if (visibilityMap && this.onResize) {
      this.onResize(visibilityMap);
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

    return null;
  }

  computeVisibilityMap() {
    // get segments
    // Ignore if there are 3 segments or less
    if (!this.itemsElements || this.itemsElements.length <= 3) {
      return false;
    }

    // get wrapper width
    const wrapperWidth = Math.floor(this.element.getBoundingClientRect().width);

    // get segments width
    const segmentsWidth = this.itemsElements.map(breadcrumbSegment =>
      Math.ceil(breadcrumbSegment.getBoundingClientRect().width)
    );

    const sumSegmentsWidth = segmentsWidth.reduce((a, b) => a + b);

    if (sumSegmentsWidth <= wrapperWidth) {
      return {
        expanded: true,
        isItemVisible: [
          // Display first item
          true,
          // Show other items
          ...this.itemsElements.slice(3).map(() => true),
          // Display last 2 items
          true,
          true,
        ],
      };
    }

    const ellipsisSegment = queryOne(this.ellipsisSelector, this.element);
    const ellipsisSegmentWidth = ellipsisSegment.getBoundingClientRect().width;

    const firstSegmentWidth = segmentsWidth[0];
    const sumLast2SegmentsWidth = segmentsWidth
      .slice(-2)
      .reduce((a, b) => a + b);

    const uncompressibleWidth =
      firstSegmentWidth + sumLast2SegmentsWidth + ellipsisSegmentWidth;

    if (uncompressibleWidth >= wrapperWidth) {
      // stop here
      return {
        expanded: false,
        isItemVisible: [
          // Display first item
          true,
          // Hide other items
          ...this.itemsElements.slice(3).map(() => false),
          // Display last 2 items
          true,
          true,
        ],
      };
    }

    const otherSegments = this.itemsElements.slice(1, -2).reverse();
    let previousSegmentsWidth = 0;
    const isOtherSegmentVisible = otherSegments.map(otherSegment => {
      previousSegmentsWidth += otherSegment.getBoundingClientRect().width;
      return previousSegmentsWidth + uncompressibleWidth <= wrapperWidth;
    });

    return {
      expanded: false,
      isItemVisible: [
        // Display first item
        true,
        // Pass visibility of other items
        ...isOtherSegmentVisible.reverse(),
        // Display last 2 items
        true,
        true,
      ],
    };
  }
}

export default Breadcrumb;
