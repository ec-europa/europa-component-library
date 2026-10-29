import { queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.itemSelector Selector for the items
 * @param {String} options.detailsSelector Selector for the details elements wrapping the parent items
 * @param {String} options.expandAllSelector Selector for the expand all button
 * @param {String} options.collapseAllSelector Selector for the collapse all button
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
      detailsSelector = '.ecl-category-filter__details',
      expandAllSelector = '[data-ecl-category-filter-expand-all]',
      collapseAllSelector = '[data-ecl-category-filter-collapse-all]',
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
    this.detailsSelector = detailsSelector;
    this.expandAllSelector = expandAllSelector;
    this.collapseAllSelector = collapseAllSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.items = null;
    this.details = null;
    this.expandAllButton = null;
    this.collapseAllButton = null;

    // Bind `this` for use in callbacks
    this.handleClickItem = this.handleClickItem.bind(this);
    this.handleToggleDetails = this.handleToggleDetails.bind(this);
    this.expandParents = this.expandParents.bind(this);
    this.handleClickExpandAll = this.handleClickExpandAll.bind(this);
    this.handleClickCollapseAll = this.handleClickCollapseAll.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();
    // Query elements
    this.items = queryAll(this.itemSelector, this.element);
    this.details = queryAll(this.detailsSelector, this.element);
    this.expandAllButton = this.element.querySelector(this.expandAllSelector);
    this.collapseAllButton = this.element.querySelector(
      this.collapseAllSelector,
    );

    // Keep the deprecated open class in sync with the details state
    this.details.forEach((details) => {
      details.addEventListener('toggle', this.handleToggleDetails);
    });

    // Expand the needed items if there is a current item set
    const currentItem = this.items.find((item) =>
      item.getAttribute('aria-current'),
    );
    this.expandParents(currentItem);

    // Bind click events
    if (this.attachClickListener && this.items) {
      this.items.forEach((item) => {
        item.addEventListener('click', this.handleClickItem);
      });
    }
    if (this.attachClickListener && this.expandAllButton) {
      this.expandAllButton.addEventListener('click', this.handleClickExpandAll);
    }
    if (this.attachClickListener && this.collapseAllButton) {
      this.collapseAllButton.addEventListener(
        'click',
        this.handleClickCollapseAll,
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
        item.removeEventListener('click', this.handleClickItem, false);
      });
    }
    if (this.details) {
      this.details.forEach((details) => {
        details.removeEventListener('toggle', this.handleToggleDetails);
      });
    }
    if (this.attachClickListener && this.expandAllButton) {
      this.expandAllButton.removeEventListener(
        'click',
        this.handleClickExpandAll,
      );
    }
    if (this.attachClickListener && this.collapseAllButton) {
      this.collapseAllButton.removeEventListener(
        'click',
        this.handleClickCollapseAll,
      );
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Open the details containing the given item (including its own, for parent items).
   * @param {Node} item
   */
  expandParents(item) {
    if (!item) return;
    let details = item.closest(this.detailsSelector);
    while (details && this.element.contains(details)) {
      details.open = true;
      details = details.parentElement.closest(this.detailsSelector);
    }
  }

  /**
   * Mark the clicked item as current. Opening/closing is handled natively by details.
   * @param {Event} e
   */
  handleClickItem(e) {
    // Get item even if we clicked on the icon
    const treeItem = e.target.closest(this.itemSelector);
    this.items.forEach((item) => {
      if (item === treeItem) {
        item.setAttribute('aria-current', true);
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }

  /**
   * Toggle the open class on the list item wrapping the details.
   * @deprecated The `ecl-category-filter__list-item--open` class will be removed in ECL v6, use the details `open` attribute instead
   * @param {Event} e
   */
  handleToggleDetails(e) {
    e.target.parentElement.classList.toggle(
      'ecl-category-filter__list-item--open',
      e.target.open,
    );
  }

  /**
   * Set the expanded state of all the items having children.
   * @param {Boolean} expanded
   */
  setAllExpandedState(expanded) {
    if (!this.details) return;
    this.items.forEach((item) => {
      item.removeAttribute('aria-current');
    });
    this.details.forEach((details) => {
      details.open = expanded;
    });
  }

  /**
   * Expand all the items.
   */
  handleClickExpandAll() {
    this.setAllExpandedState(true);
  }

  /**
   * Collapse all the items.
   */
  handleClickCollapseAll() {
    this.setAllExpandedState(false);
  }
}

export default CategoryFilter;
