import { queryAll, queryOne } from '@ecl/dom-utils';
import * as getSystem from '@ecl/builder/utils/getSystem';

const system = getSystem();
const iconSvgAllArrowSize = system === 'eu' ? 'm' : 'xs';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.sortAttribute Attribute flagging the table as sortable
 * @param {String} options.sortSelector Selector for toggling element
 * @param {String} options.sortLabelSelectorAsc Selector for sorting button label ascending
 * @param {String} options.sortLabelSelectorDesc Selector for sorting button label descending
 * @param {String} options.sortLabelSelectorDefault Selector for sorting button label default
 * @param {String} options.filterAttribute Attribute flagging the table as filterable
 * @param {String} options.filterSelector Selector for headings to add a filter field to
 * @param {String} options.filterLabelSelector Selector for filter field label
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
      sortAttribute = 'data-ecl-table-sort',
      sortSelector = '[data-ecl-table-sort-toggle]',
      sortLabelSelectorAsc = 'data-ecl-table-sort-label-asc',
      sortLabelSelectorDesc = 'data-ecl-table-sort-label-desc',
      sortLabelSelectorDefault = 'data-ecl-table-sort-label-default',
      filterAttribute = 'data-ecl-table-filter',
      filterSelector = '[data-ecl-table-filter-toggle]',
      filterLabelSelector = 'data-ecl-table-filter-label',
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
    this.sortAttribute = sortAttribute;
    this.sortSelector = sortSelector;
    this.sortLabelSelectorAsc = sortLabelSelectorAsc;
    this.sortLabelSelectorDesc = sortLabelSelectorDesc;
    this.sortLabelSelectorDefault = sortLabelSelectorDefault;
    this.filterAttribute = filterAttribute;
    this.filterSelector = filterSelector;
    this.filterLabelSelector = filterLabelSelector;

    // Private variables
    this.isSortable = false;
    this.sortLabelAsc = '';
    this.sortLabelDesc = '';
    this.sortHeadings = null;
    this.sortButtons = [];
    this.isFilterable = false;
    this.filterLabel = '';
    this.filterHeadings = null;
    this.filterInputs = [];
    this.filterTimer = null;
    this.columnIndexes = new Map();

    // Bind `this` for use in callbacks
    this.handleClickOnSort = this.handleClickOnSort.bind(this);
    this.handleFilterInput = this.handleFilterInput.bind(this);
  }

  /**
   * Map every heading cell of a thead to its actual column index, taking
   * rowspan and colspan into account (a cell on a second heading row, under
   * a rowspanned cell, does not start at column 0).
   *
   * @param {HTMLElement} thead
   * @returns {Map<HTMLElement, Number>}
   */
  static mapColumnIndexes(thead) {
    const columnIndexes = new Map();
    const rowSpans = [];

    queryAll('tr', thead).forEach((row) => {
      let col = 0;

      [...row.children].forEach((cell) => {
        while (rowSpans[col] > 0) {
          col += 1;
        }

        columnIndexes.set(cell, col);

        const colspan = Number(cell.getAttribute('colspan')) || 1;
        const rowspan = Number(cell.getAttribute('rowspan')) || 1;
        for (let i = col; i < col + colspan; i += 1) {
          rowSpans[i] = rowspan;
        }

        col += colspan;
      });

      for (let i = 0; i < rowSpans.length; i += 1) {
        if (rowSpans[i] > 0) {
          rowSpans[i] -= 1;
        }
      }
    });

    return columnIndexes;
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
   * Build a filter field: a wrapper containing a visually hidden <label>
   * (read by screen readers, and still picked up by page translation tools,
   * unlike an aria-label attribute) and its text input.
   *
   * @param {String} label
   * @param {String} inputId
   * @returns {HTMLElement}
   */
  static createFilterField(label, inputId) {
    const wrapper = document.createElement('span');
    wrapper.classList.add('ecl-table__filter');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', inputId);
    input.classList.add('ecl-table__filter-input', 'ecl-text-input');

    if (label) {
      const labelMarkup = document.createElement('label');
      labelMarkup.classList.add('ecl-table__filter-label');
      labelMarkup.setAttribute('for', inputId);
      labelMarkup.textContent = label;
      wrapper.appendChild(labelMarkup);
    }

    wrapper.appendChild(input);

    return wrapper;
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.isSortable = this.element.hasAttribute(this.sortAttribute);
    this.isFilterable = this.element.hasAttribute(this.filterAttribute);

    const thead = queryOne('thead', this.element);
    if (thead && (this.isSortable || this.isFilterable)) {
      this.columnIndexes = Table.mapColumnIndexes(thead);
    }

    if (this.isSortable) {
      this.initSort();
    }

    if (this.isFilterable) {
      this.initFilter();
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Initialise sorting behaviour.
   */
  initSort() {
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
  }

  /**
   * Initialise filtering behaviour.
   */
  initFilter() {
    this.filterHeadings = queryAll(this.filterSelector, this.element);

    // Get label
    if (this.element.hasAttribute(this.filterLabelSelector)) {
      this.filterLabel = this.element.getAttribute(this.filterLabelSelector);
    }

    // Add a filter field under each filterable heading.
    if (this.filterHeadings) {
      this.filterHeadings.forEach((th) => {
        const columnIndex = this.columnIndexes.get(th);
        const inputId = `${this.element.id}-filter-${columnIndex}`;
        const field = Table.createFilterField(this.filterLabel, inputId);
        const input = queryOne('input', field);
        input.dataset.eclTableFilterColumn = columnIndex;
        input.addEventListener('input', this.handleFilterInput);
        th.appendChild(field);

        this.filterInputs.push(input);
      });
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.isSortable && this.sortHeadings) {
      this.sortHeadings.forEach((tr) => {
        tr.removeEventListener('click', (e) => this.handleClickOnSort(tr)(e));
      });
    }
    if (this.isFilterable && this.filterInputs) {
      clearTimeout(this.filterTimer);
      this.filterInputs.forEach((input) => {
        input.removeEventListener('input', this.handleFilterInput);
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

    // Get current column index, taking into account rowspan and colspan.
    const colIndex = this.columnIndexes.get(toggle);

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
      const rowCount = queryAll('tr', tbody).length;
      for (let index = 0; index < rowCount; index += 1) {
        const defaultTr = queryOne(`[data-ecl-table-order='${index}']`, tbody);
        tbody.appendChild(defaultTr);
      }
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

  /**
   * Event callback triggered when a filter field value changes.
   * Shows/hides rows depending on the current value of every filter field;
   * a row stays visible only if it matches all active filters.
   * Uses a debounce, for performance.
   */
  handleFilterInput() {
    clearTimeout(this.filterTimer);
    this.filterTimer = setTimeout(() => {
      const tbody = queryOne('tbody', this.element);

      queryAll('tr', tbody).forEach((row) => {
        const isVisible = this.filterInputs.every((input) => {
          const keyword = input.value.trim().toLowerCase();
          if (!keyword) {
            return true;
          }
          const colIndex = Number(input.dataset.eclTableFilterColumn);
          const cell = row.children[colIndex];
          return !!cell && cell.textContent.toLowerCase().includes(keyword);
        });

        row.hidden = !isVisible;
      });
    }, 300);
  }
}

export default Table;
