/* eslint-disable unicorn/consistent-function-scoping, no-unused-vars */
import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';
import iconSvgUiArrow from '@ecl/ec-resources-icons/dist/svg/ui/solid-arrow.svg';

// Polyfill for closest (support for IE11)
if (!Element.prototype.matches)
  Element.prototype.matches = Element.prototype.msMatchesSelector;
if (!Element.prototype.closest)
  Element.prototype.closest = function poly(selector) {
    let el = this;
    while (el) {
      if (el.matches(selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };

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

  constructor(element, { sortSelector = '[data-ecl-tablesort-toggle]' } = {}) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.'
      );
    }

    this.element = element;

    // Options
    this.sortSelector = sortSelector;

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
    tempElement.innerHTML = iconSvgUiArrow; // avoiding the use of not-so-stable createElementNs
    const svg = tempElement.children[0];
    svg.removeAttribute('height');
    svg.removeAttribute('width');
    svg.setAttribute('focusable', false);
    svg.setAttribute('aria-hidden', true);
    // The following element is <path> which does not support classList API as others.
    svg.setAttribute('class', `ecl-icon ecl-icon--2xs ${customClass}`);
    return svg;
  }

  /**
   * Initialise component.
   */
  init() {
    this.sortHeadings = queryAll(this.sortSelector, this.element);

    // Bind click event on toggles
    if (this.sortHeadings) {
      this.sortHeadings.forEach(tr => {
        const sort = document.createElement('span');
        sort.classList.add('ecl-table__arrow');
        sort.append(Table.createSortIcon('ecl-table__icon-up'));
        sort.append(Table.createSortIcon('ecl-table__icon-down'));
        tr.prepend(sort);
        tr.addEventListener('click', this.handleClickOnSort.bind(this, tr));
      });
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.sortHeadings) {
      this.sortHeadings.forEach(tr => {
        tr.removeEventListener('click', this.handleClickOnSort);
      });
    }
  }

  /**
   * @param {HTMLElement} toggle Target element to toggle.
   */
  handleClickOnSort(toggle) {
    const table = toggle.closest('table');
    const tbody = queryOne('tbody', table);

    let colIndex = 0;
    let prev = toggle.previousElementSibling;
    while (prev) {
      colIndex += prev.getAttribute('colspan')
        ? Number(prev.getAttribute('colspan'))
        : 1;
      prev = prev.previousElementSibling;
    }

    const comparer = (idx, asc) => (a, b) =>
      ((v1, v2) =>
        v1 !== '' && v2 !== '' && !Number.isNaN(+v1) && !Number.isNaN(+v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2))(
        (asc ? a : b).children[idx].textContent,
        (asc ? b : a).children[idx].textContent
      );

    [...queryAll('tr', tbody)]
      .sort(comparer(colIndex, (this.asc = !this.asc)))
      .forEach(tr => tbody.append(tr));

    this.sortHeadings.forEach(th => {
      const order = this.asc ? 'asc' : 'desc';
      if (th === toggle) {
        th.setAttribute('data-ecl-tablesort-toggle', order);
      } else {
        th.setAttribute('data-ecl-tablesort-toggle', true);
      }
    });
  }
}

export default Table;
