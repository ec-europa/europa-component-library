import { queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.itemSelector Selector for the tree parent items
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 */
export class CategoryFilter {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {CategoryFilter} An instance of CategoryFilter.
   */
  static autoInit(root, { CATEGORY_FILTER: defaultOptions = {} } = {}) {
    const categoryFilter = new CategoryFilter(root, defaultOptions);
    categoryFilter.init();
    root.ECLCategoryFilter = categoryFilter;
    return categoryFilter;
  }

  constructor(
    element,
    {
      itemSelector = '.ecl-category-filter__item--has-children',
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
    this.itemSelector = itemSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.items = null;

    // Bind `this` for use in callbacks
    this.handleClickExpand = this.handleClickExpand.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    // Query elements
    this.items = queryAll(this.itemSelector, this.element);

    // Bind click event on open
    if (this.attachClickListener && this.items) {
      this.items.forEach((item) =>
        item.addEventListener('click', this.handleClickExpand)
      );
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.items) {
      this.items.forEach((item) => {
        item.removeEventListener('click', this.handleClickExpand, false);
      });
    }
  }

  /**
   * Expand tree list item.
   * @param {Event} e
   */
  handleClickExpand(e) {
    e.preventDefault();

    const treeItem = e.target.closest('.ecl-category-filter__item');

    treeItem.blur();

    if (treeItem.classList.contains('ecl-category-filter__item--level-1')) {
      this.items.forEach((item) => {
        if (item !== treeItem) {
          item.parentElement.setAttribute('aria-expanded', 'false');
        }
      });

      if (treeItem.parentElement.getAttribute('aria-expanded') === 'true') {
        treeItem.parentElement.setAttribute('aria-expanded', 'false');
        treeItem.classList.remove('ecl-category-filter__item--current');
        return;
      }
    }

    this.items.forEach((item) => {
      if (item === treeItem) {
        item.classList.add('ecl-category-filter__item--current');
      } else {
        item.classList.remove('ecl-category-filter__item--current');
      }
    });

    const ariaExpanded = treeItem.parentElement.getAttribute('aria-expanded');
    treeItem.parentElement.setAttribute(
      'aria-expanded',
      ariaExpanded === 'false' ? 'true' : 'false'
    );
  }
}

export default CategoryFilter;
