import { queryAll, queryOne } from '@ecl/dom-utils';
import getSystem from '@ecl/builder/utils/getSystem';
import iconSvgAllArrowEc from '@ecl/resources-ec-icons/dist/svg/all/solid-arrow.svg';
import iconSvgAllArrowEu from '@ecl/resources-eu-icons/dist/svg/all/solid-arrow.svg';

const system = getSystem();
const iconSvgAllArrow = system === 'eu' ? iconSvgAllArrowEu : iconSvgAllArrowEc;
const iconSvgAllArrowSize = system === 'eu' ? 'm' : 'xs';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.sortSelector Selector for toggling element
 * @param {String} options.sortLabelSelector Selector for sorting button label
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
      sortLabelSelector = 'data-ecl-table-sort-label',
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
    this.sortLabelSelector = sortLabelSelector;

    // Private variables
    this.sortHeadings = null;

    // Bind `this` for use in callbacks
    this.handleClickOnSort = this.handleClickOnSort.bind(this);
  }

  /**
   * @returns {HTMLElement}
   */
  static createSortIcon(customClass) {
    const tempElement = document.createElement('span');
    tempElement.innerHTML = iconSvgAllArrow; // avoiding the use of not-so-stable createElementNs
    const svg = tempElement.children[0];
    svg.removeAttribute('height');
    svg.removeAttribute('width');
    svg.setAttribute('focusable', false);
    svg.setAttribute('aria-hidden', true);
    // The following element is <path> which does not support classList API as others.
    svg.setAttribute(
      'class',
      `ecl-table__icon ecl-icon ecl-icon--${iconSvgAllArrowSize} ${customClass}`,
    );
    return svg;
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

    // Add sort arrows and bind click event on toggles.
    if (this.sortHeadings) {
      this.sortHeadings.forEach((tr) => {
        const sort = document.createElement('button');
        sort.classList.add('ecl-table__arrow');
        if (this.element.hasAttribute(this.sortLabelSelector)) {
          sort.setAttribute(
            'aria-label',
            this.element.getAttribute(this.sortLabelSelector),
          );
        }
        sort.appendChild(Table.createSortIcon('ecl-table__icon-up'));
        sort.appendChild(Table.createSortIcon('ecl-table__icon-down'));
        tr.appendChild(sort);
        tr.addEventListener('click', (e) => this.handleClickOnSort(tr)(e));
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
        const defaultTr = queryOne(`[data-ecl-table-order='${index}']`);
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
        th.removeAttribute('aria-sort');
      }
    });
  };
}

export default Table;
