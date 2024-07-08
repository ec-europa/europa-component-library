import { queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.itemSelector Selector for the items
 * @param {String} options.parentItemSelector Selector for the parent items
 * @param {String} options.listSelector Selector for the lists
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
      itemSelector = '.ecl-category-filter__item',
      parentItemSelector = 'ecl-category-filter__item--has-children',
      listSelector = '.ecl-category-filter__list',
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
    this.itemSelector = itemSelector;
    this.parentItemSelector = parentItemSelector;
    this.listSelector = listSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.items = null;

    // Bind `this` for use in callbacks
    this.handleClickExpand = this.handleClickExpand.bind(this);
    this.expandParents = this.expandParents.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();
    // Query elementslur
    this.items = queryAll(this.itemSelector, this.element);
    const e = { preventDefault: () => null };
    // Bind click event on open
    if (this.attachClickListener && this.items) {
      this.items.forEach((item) => {
        item.addEventListener('click', this.handleClickExpand);
        // Epand the needed items if there is a current item set
        if (item.getAttribute('aria-current')) {
          e.target = item;
          this.handleClickExpand(e);
          this.expandParents.call(this, item);
        }
      });
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
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
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Expand parents of the given item.
   * @param {Node} item
   */
  expandParents(item) {
    if (!item) return;
    const e = { preventDefault: () => null };
    const parent = item.closest(this.listSelector)?.previousElementSibling;
    if (parent && parent.classList.contains(this.parentItemSelector)) {
      e.target = parent;
      this.handleClickExpand(e);
      this.expandParents.call(this, parent);
    }
  }

  /**
   * Expand tree list item.
   * @param {Event} e
   */
  handleClickExpand(e) {
    // Get item even if we clicked on the icon
    const treeItem = e.target.closest(this.itemSelector);
    const isNotInit = typeof e.stopPropagation === 'function';
    // Toggle current item
    if (isNotInit) {
      this.items.forEach((item) => {
        if (item === treeItem) {
          item.setAttribute('aria-current', true);
        } else {
          item.removeAttribute('aria-current');
        }
      });
    }

    // Toggle expanded
    const isExpanded = treeItem.getAttribute('aria-expanded');
    if (isExpanded && isExpanded === 'true') {
      e.preventDefault();
      treeItem.setAttribute('aria-expanded', 'false');
      treeItem.parentElement.classList.remove(
        'ecl-category-filter__list-item--open',
      );
    } else if (isExpanded && isExpanded === 'false') {
      e.preventDefault();
      treeItem.setAttribute('aria-expanded', 'true');
      treeItem.parentElement.classList.add(
        'ecl-category-filter__list-item--open',
      );
    }

    if (isExpanded && isNotInit) {
      // For first level, keep only one item open
      if (treeItem.classList.contains('ecl-category-filter__item--level-1')) {
        this.items.forEach((item) => {
          if (item !== treeItem) {
            item.parentElement.classList.remove(
              'ecl-category-filter__list-item--open',
            );
            if (item.classList.contains(this.parentItemSelector)) {
              item.setAttribute('aria-expanded', 'false');
            }
          }
        });
      }
    }
  }
}

export default CategoryFilter;
