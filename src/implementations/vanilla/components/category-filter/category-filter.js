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
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();
    // Query elementslur
    this.items = queryAll(this.itemSelector, this.element);

    // Bind click event on open
    if (this.attachClickListener && this.items) {
      this.items.forEach((item) =>
        item.addEventListener('click', this.handleClickExpand),
      );
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
   * Expand tree list item.
   * @param {Event} e
   */
  handleClickExpand(e) {
    e.preventDefault();

    // Get item even if we clicked on the icon
    const treeItem = e.target.closest('.ecl-category-filter__item');

    // Toggle current item
    this.items.forEach((item) => {
      if (item === treeItem) {
        item.setAttribute('aria-current', true);
      } else {
        item.removeAttribute('aria-current');
      }
    });

    // Toggle expanded
    const isExpanded = treeItem.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      treeItem.setAttribute('aria-expanded', 'false');
      treeItem.parentElement.classList.remove(
        'ecl-category-filter__list-item--open',
      );
    } else {
      treeItem.setAttribute('aria-expanded', 'true');
      treeItem.parentElement.classList.add(
        'ecl-category-filter__list-item--open',
      );
    }

    // For first level, keep only one item open
    if (treeItem.classList.contains('ecl-category-filter__item--level-1')) {
      this.items.forEach((item) => {
        if (item !== treeItem) {
          item.parentElement.classList.remove(
            'ecl-category-filter__list-item--open',
          );
          item.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }
}

export default CategoryFilter;
