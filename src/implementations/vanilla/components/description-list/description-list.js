import { queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.moreItemLabelSelector Selector for more button label attribute
 * @param {String} options.listsSelector Selector for list element
 * @param {String} options.visibleItemsSelector Selector to retrieve the number of visible items
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
      listsSelector = '[data-ecl-description-list-collapsible]',
      visibleItemsSelector = 'data-ecl-description-list-visible-items',
      moreItemLabelSelector = 'data-ecl-description-list-more-label',
      attachClickListener = true,
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
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.moreItemLabel = this.element.getAttribute(this.moreItemLabelSelector);
    this.visibleItems = this.element.getAttribute(this.visibleItemsSelector);
    this.lists = queryAll(this.listsSelector, this.element);

    // Add see more button in each list and bind click event on it
    if (this.lists[0] && this.visibleItems > 0 && this.moreItemLabel) {
      this.lists.forEach((list) => {
        if (list.children && list.children.length > this.visibleItems) {
          const listItem = document.createElement('li');
          listItem.classList.add('ecl-description-list__see_more');

          const button = document.createElement('a');
          button.classList.add('ecl-link', 'ecl-link--standalone');
          button.href = '#';
          button.innerHTML = this.moreItemLabel;
          listItem.appendChild(button);
          list.appendChild(listItem);

          this.showHide(
            queryAll('.ecl-description-list__definition-item', list),
          );
          if (this.attachClickListener) {
            button.addEventListener('click', this.handleClickOnMore);
          }
        }
      });

      // Set ecl initialized attribute
      this.element.setAttribute('data-ecl-auto-initialized', 'true');
      ECL.components.set(this.element, this);
    }
  }

  /**
   * showHide elements basing on user preference.
   */
  showHide(elements) {
    if (elements) {
      const items = Array.from(elements);
      const baseClass = 'ecl-description-list__definition-item';
      const hiddenClass = `${baseClass}--hidden`;
      const lastVisibleClass = `${baseClass}--last-visible`;

      for (let i = 0; i < items.length; i += 1) {
        const el = items[i];

        if (i < this.visibleItems) {
          el.classList.remove(hiddenClass);
          el.classList.remove(lastVisibleClass);
        } else if (i >= this.visibleItems) {
          el.classList.add(hiddenClass);
        }

        if (i === this.visibleItems - 1) {
          el.classList.add(lastVisibleClass);
        } else {
          el.classList.remove(lastVisibleClass);
        }
      }
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
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Expands the list of items.
   * @param {Event} e
   */
  handleClickOnMore(e) {
    e.preventDefault();

    const listItem = e.target.parentNode;
    const list = listItem.parentNode;
    if (this.element.contains(list)) {
      const parentChildren = Array.from(list.children);
      parentChildren.forEach((item) => {
        item.classList.remove('ecl-description-list__definition-item--hidden');
        item.classList.remove(
          'ecl-description-list__definition-item--last-visible',
        );
      });
      // Remove the button
      listItem.remove();
    }
  }
}

export default DescriptionList;
