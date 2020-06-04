/* eslint-disable unicorn/consistent-function-scoping */
import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.sortSelector Selector for toggling element
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
 */
export class Table {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Table} An instance of table.
   */
  static autoInit(root, { TABLE: defaultOptions = {} } = {}) {
    const table = new Table(root, defaultOptions);
    table.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLTable = table;
    return table;
  }

  constructor(
    element,
    {
      sortSelector = '[data-ecl-tablesort-toggle]',
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
    this.sortSelector = sortSelector;
    this.attachClickListener = attachClickListener;

    // Bind `this` for use in callbacks
    this.handleClickOnSort = this.handleClickOnSort.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.toggles = queryAll(this.sortSelector, this.element);

    // Bind click event on toggles
    if (this.attachClickListener && this.toggles) {
      this.toggles.forEach(toggle => {
        toggle.addEventListener(
          'click',
          this.handleClickOnSort.bind(this, toggle)
        );
      });
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.order) {
      this.order.removeEventListener('click', this.handleClickOnSort);
    }
  }

  /**
   * @param {HTMLElement} toggle Target element to toggle.
   */
  handleClickOnSort(toggle) {
    const comparer = (idx, asc) => (a, b) =>
      ((v1, v2) =>
        v1 !== '' && v2 !== '' && !Number.isNaN(+v1) && !Number.isNaN(+v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2))(
        (asc ? a : b).children[idx].textContent,
        (asc ? b : a).children[idx].textContent
      );

    const table = toggle.closest('table');
    const tbody = queryOne('tbody', table);

    [...queryAll('tr', tbody)]
      .sort(
        comparer(
          // eslint-disable-next-line unicorn/prefer-spread
          Array.from(toggle.parentNode.children).indexOf(toggle),
          (this.asc = !this.asc)
        )
      )
      .forEach(tr => tbody.append(tr));
  }
}

export default Table;
