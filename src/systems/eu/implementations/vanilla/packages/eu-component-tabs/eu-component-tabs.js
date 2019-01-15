import { queryOne, queryAll } from '@ecl/eu-base/helpers/dom';

class Tabs {
  constructor(
    element,
    {
      moreItemSelector: moreItemSelector = '[data-ecl-tabs-more]',
      moreButtonSelector: moreButtonSelector = '[data-ecl-tabs-more-button]',
      moreContentSelector: moreContentSelector = '[data-ecl-tabs-more-content]',
      itemSelector: itemSelector = '[data-ecl-tabs-item]',
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
    this.moreItemSelector = moreItemSelector;
    this.moreButtonSelector = moreButtonSelector;
    this.moreContentSelector = moreContentSelector;
    this.itemSelector = itemSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.moreItem = null;
    this.moreButton = null;
    this.moreContent = null;
    this.itemsElements = null;

    // Bind `this` for use in callbacks
    this.handleClickOnMore = this.handleClickOnMore.bind(this);
  }

  init() {
    this.moreItem = queryOne(this.moreItemSelector, this.element);
    this.moreButton = queryOne(this.moreButtonSelector, this.moreItem);
    this.moreContent = queryOne(this.moreContentSelector, this.moreItem);
    this.itemsElements = queryAll(this.itemSelector, this.element);

    // Bind click event on more
    if (this.attachClickListener && this.moreButton) {
      this.moreButton.addEventListener('click', this.handleClickOnMore);
    }

    this.check();
  }

  destroy() {
    if (this.attachClickListener && this.moreButton) {
      this.moreButton.removeEventListener('click', this.handleClickOnMore);
    }
  }

  handleClickOnMore() {
    if (this.moreItem.getAttribute('aria-expanded') === 'true') {
      this.moreItem.setAttribute('aria-expanded', 'false');
    } else {
      this.moreItem.setAttribute('aria-expanded', 'true');
    }
  }

  hideMore() {
    // Hide more item
    if (this.moreItem) {
      this.moreItem.setAttribute('aria-hidden', 'true');
    }

    // Remove event listener
    if (this.attachClickListener && this.moreButton) {
      this.moreButton.removeEventListener('click', this.handleClickOnMore);
    }
  }

  putInDropdown(item) {
    item.classList.add('ecl-tabs__more-item');
    item.classList.remove('ecl-tabs__item');

    // Report active status if any
    if (item.classList.contains('ecl-tabs__item--active')) {
      item.classList.add('ecl-tabs__more-item--active');
      item.classList.remove('ecl-tabs__item--active');
      this.moreItem.classList.add('ecl-tabs__more--active');
    }

    this.moreContent.appendChild(item);
  }

  check() {
    // Get wrapper width
    const wrapperWidth = Math.floor(this.element.getBoundingClientRect().width);

    // Get the sum of all items' width
    const allItemsWidth = this.itemsElements
      .map(breadcrumbSegment => {
        let width = breadcrumbSegment.offsetWidth;
        const style = getComputedStyle(breadcrumbSegment);

        width +=
          parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
        return width;
      })
      .reduce((a, b) => a + b);

    // If there is enough space, just don't display the "more" button
    if (allItemsWidth <= wrapperWidth) {
      this.hideMore();
      return;
    }

    // Get width of the "more" button
    const moreWidth = this.moreButton.getBoundingClientRect().width;

    let previousItemsWidth = 0;
    let isPreviousItemVisible = true;

    // Hide elements until there is enough space
    this.itemsElements.map(otherItem => {
      // If previous item has been put in dropdown, do the same here
      if (!isPreviousItemVisible) {
        this.putInDropdown(otherItem);
        return true;
      }

      // Get cumulated width of previous elements
      previousItemsWidth += otherItem.offsetWidth;
      const style = getComputedStyle(otherItem);
      previousItemsWidth +=
        parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);

      // Check if we reached the limit
      if (previousItemsWidth + moreWidth > wrapperWidth) {
        this.putInDropdown(otherItem);
        isPreviousItemVisible = false;
      }

      return true;
    });
  }
}

export default Tabs;
