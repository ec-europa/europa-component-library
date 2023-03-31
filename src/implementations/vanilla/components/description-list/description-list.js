import { queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.moreItemSelector Selector for more button
 * @param {String} options.listSelector Selector for list element
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 */
export class DescriptionList {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {DescriptionList} An instance of DescriptionList.
   */
  static autoInit(root, { DESCRIPTION_LIST: defaultOptions = {} } = {}) {
    const descriptionList = new DescriptionList(root, defaultOptions);
    descriptionList.init();
    root.ECLDescriptionList = descriptionList;
    return descriptionList;
  }

  constructor(
    element,
    {
      listsSelector = '.ecl-description-list__definition--taxonomy',
      visibleItemsSelector = 'data-ecl-description-list-visible-items',
      moreItemLabelSelector = 'data-ecl-description-list-more-label',
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
    this.moreItemLabelSelector = moreItemLabelSelector;
    this.listsSelector = listsSelector;
    this.attachClickListener = attachClickListener;
    this.visibleItemsSelector = visibleItemsSelector;

    // Private variables
    this.moreItemLabel = null;
    this.lists = null;
    this.handleClickOnMore = this.handleClickOnMore.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.moreItemLabel = this.element.getAttribute(this.moreItemLabelSelector);
    this.visibleItems = this.element.getAttribute(this.visibleItemsSelector);
    this.lists = queryAll(this.listsSelector, this.element);
    // Add see more button in each list and bind click event on it
    if (this.lists[0] && this.visibleItems > 0 && this.moreItemLabel) {
      this.lists.forEach((list) => {
        if (list.children && list.children.length > this.visibleItems) {
          this.showHide(list.children);
          const button = document.createElement('button');
          button.classList.add(
            'ecl-button',
            'ecl-button--ghost',
            'ecl-description-list__see_more'
          );
          button.innerHTML = this.moreItemLabel;
          list.appendChild(button);
          if (this.attachClickListener) {
            button.addEventListener('click', this.handleClickOnMore);
          }
        }
      });
    }
  }

  /**
   * showHide elements basing on user preference.
   */
  showHide(elements) {
    if (elements) {
      Array.from(elements).forEach((el, i) => {
        if (i < this.visibleItems) {
          el.classList.remove('ecl-description-list__definition-item--hidden');
        } else {
          el.classList.add('ecl-description-list__definition-item--hidden');
        }
      });
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.visibleItems > 0) {
      const moreItems = queryAll('.ecl-description-list__see_more');
      if (moreItems[0]) {
        moreItems.forEach((item) => {
          item.removeEventListener('click', this.handleClickOnMore);
        });
      }
    }
  }

  /**
   * Expands the list of items.
   * @param {Event} e
   */
  handleClickOnMore(e) {
    e.preventDefault();

    const parent = e.target.parentNode;
    if (this.element.contains(parent)) {
      [...parent.children].forEach((item) => {
        item.classList.remove('ecl-description-list__definition-item--hidden');
      });
      e.target.remove();
    }
  }
}

export default DescriptionList;
