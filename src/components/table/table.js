import { queryAll, queryOne } from '@ecl/dom-utils';
import * as getSystem from '@ecl/builder/utils/getSystem';

const system = getSystem();
const iconSvgAllArrowSize = system === 'eu' ? 'm' : 'xs';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.sortSelector Selector for toggling element
 * @param {String} options.sortLabelSelectorAsc Selector for sorting button label ascending
 * @param {String} options.sortLabelSelectorDesc Selector for sorting button label descending
 * @param {String} options.sortLabelSelectorDefault Selector for sorting button label default
 * @param {Boolean} options.attachClickListener
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
    root.ECLTable = table;
    return table;
  }

  constructor(
    element,
    {
      sortSelector = '[data-ecl-table-sort-toggle]',
      sortLabelSelectorAsc = 'data-ecl-table-sort-label-asc',
      sortLabelSelectorDesc = 'data-ecl-table-sort-label-desc',
      sortLabelSelectorDefault = 'data-ecl-table-sort-label-default',
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
    this.sortSelector = sortSelector;
    this.sortLabelSelectorAsc = sortLabelSelectorAsc;
    this.sortLabelSelectorDesc = sortLabelSelectorDesc;
    this.sortLabelSelectorDefault = sortLabelSelectorDefault;

    // Private variables
    this.sortLabelAsc = '';
    this.sortLabelDesc = '';
    this.sortHeadings = null;
    this.sortButtons = [];

    // Bind `this` for use in callbacks
    this.handleClickOnSort = this.handleClickOnSort.bind(this);
  }

  /**
   * @returns {HTMLElement}
   */
  static createSortIcon(customClass) {
    const markup = document.createElement('span');
    markup.setAttribute(
      'class',
      `wt-icon--solid-arrow ecl-table__icon ecl-icon--${iconSvgAllArrowSize} ${customClass}`,
    );

    return markup;
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.sortHeadings = queryAll(this.sortSelector, this.element);

    // Get labels
    if (this.element.hasAttribute(this.sortLabelSelectorAsc)) {
      this.sortLabelAsc = this.element.getAttribute(this.sortLabelSelectorAsc);
    }
    if (this.element.hasAttribute(this.sortLabelSelectorDesc)) {
      this.sortLabelDesc = this.element.getAttribute(
        this.sortLabelSelectorDesc,
      );
    }
    if (this.element.hasAttribute(this.sortLabelSelectorDefault)) {
      this.sortLabelDefault = this.element.getAttribute(
        this.sortLabelSelectorDefault,
      );
    }

    // Add sort arrows and bind click event on toggles.
    if (this.sortHeadings) {
      this.sortHeadings.forEach((tr) => {
        const sort = document.createElement('button');
        sort.classList.add('ecl-table__arrow');
        if (this.sortLabelAsc) {
          sort.setAttribute('aria-label', this.sortLabelAsc);
        }
        sort.appendChild(Table.createSortIcon('ecl-table__icon-up'));
        sort.appendChild(Table.createSortIcon('ecl-table__icon-down'));
        tr.appendChild(sort);
        tr.addEventListener('click', (e) => this.handleClickOnSort(tr)(e));

        this.sortButtons.push(sort);
      });

      // Set initial heading aria-sort attr.
      this.sortHeadings.forEach((th) => {
        th.setAttribute('aria-sort', 'none');
      });
    }

    // Set default row order via dataset.
    const tbody = queryOne('tbody', this.element);
    [...queryAll('tr', tbody)].forEach((tr, index) => {
      tr.setAttribute('data-ecl-table-order', index);
    });

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.sortHeadings) {
      this.sortHeadings.forEach((tr) => {
        tr.removeEventListener('click', (e) => this.handleClickOnSort(tr)(e));
      });
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * @param {HTMLElement} toggle Target element to toggle.
   */
  handleClickOnSort = (toggle) => (event) => {
    event.preventDefault();
    const table = toggle.closest('table');
    const tbody = queryOne('tbody', table);
    let order = toggle.getAttribute('aria-sort');

    // Get current column index, taking into account the colspan.
    let colIndex = 0;
    let prev = toggle.previousElementSibling;
    while (prev) {
      colIndex += prev.getAttribute('colspan')
        ? Number(prev.getAttribute('colspan'))
        : 1;
      prev = prev.previousElementSibling;
    }

    // Cell comparer function.
    const comparer = (idx, asc) => (a, b) =>
      ((v1, v2) =>
        v1 !== '' && v2 !== '' && !Number.isNaN(+v1) && !Number.isNaN(+v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2))(
        (asc ? a : b).children[idx].textContent,
        (asc ? b : a).children[idx].textContent,
      );

    if (order === 'descending') {
      // If current order is 'descending' reset column filter sort rows by default order.
      [...queryAll('tr', tbody)].forEach((tr, index) => {
        const defaultTr = queryOne(`[data-ecl-table-order='${index}']`, tbody);
        tbody.appendChild(defaultTr);
      });
      order = null;
    } else {
      // Otherwise we sort the rows and set new order.
      [...queryAll('tr', tbody)]
        .sort(comparer(colIndex, order !== 'ascending'))
        .forEach((tr) => tbody.appendChild(tr));
      order = order === 'ascending' ? 'descending' : 'ascending';
    }

    // Change heading aria-sort attr.
    this.sortHeadings.forEach((th) => {
      if (order && th === toggle) {
        th.setAttribute('aria-sort', order);
      } else {
        th.setAttribute('aria-sort', 'none');
      }
    });

    // Change aria label
    let label = '';
    this.sortButtons.forEach((button) => {
      switch (order) {
        case 'ascending':
          label = this.sortLabelDesc ? this.sortLabelDesc : '';
          break;

        case 'descending':
          label = this.sortLabelDefault ? this.sortLabelDefault : '';
          break;

        default:
          label = this.sortLabelAsc ? this.sortLabelAsc : '';
          break;
      }

      if (label) {
        button.setAttribute('aria-label', label);
      }
    });
  };
}

export default Table;
