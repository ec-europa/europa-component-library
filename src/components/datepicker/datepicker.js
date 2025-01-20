/* global moment */

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.datepickerFormat Format for dates
 */
export class Datepicker {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Datepicker} An instance of Datepicker.
   */
  static autoInit(root, { DATEPICKER: defaultOptions = {} } = {}) {
    const datepicker = new Datepicker(root, defaultOptions);
    datepicker.init();
    root.ECLDatepicker = datepicker;
    return datepicker;
  }

  constructor(
    element,
    {
      format = '',
      theme = 'ecl-datepicker-theme',
      yearRange = 40,
      reposition = false,
      attachResizeListener = true,
      i18n = {
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        weekdays: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      },
      showDaysInNextAndPreviousMonths = true,
      enableSelectionDaysInNextAndPreviousMonths = true,
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
    this.picker = null;
    this.resizeTimer = null;
    this.pikadayEl = null;
    this.format = format;
    this.theme = theme;
    this.yearRange = yearRange;
    this.i18n = i18n;
    this.showDaysInNextAndPreviousMonths = showDaysInNextAndPreviousMonths;
    this.enableSelectionDaysInNextAndPreviousMonths =
      enableSelectionDaysInNextAndPreviousMonths;
    this.reposition = reposition;
    this.direction = 'ltr';
    this.attachResizeListener = attachResizeListener;

    // Bindings
    this.handleResize = this.handleResize.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (typeof window.Pikaday === 'undefined') {
      throw new TypeError(
        'Pikaday is not available. Make sure to include Pikaday in your project if you want to use the ECL datepicker',
      );
    }
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.direction = getComputedStyle(this.element).direction;

    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    /**
     * Resize logic.
     *
     * @param {HTMLElement} el - The pikaday dropdown.
     */
    Datepicker.resizeLogic = (el) => {
      this.pikadayEl = el;
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
      );
      const { direction } = getComputedStyle(el);
      const elRect = el.getBoundingClientRect();

      if (direction === 'rtl') {
        const pickerMargin = vw - elRect.right;
        if (vw < 768) {
          el.style.left = `${pickerMargin}px`;
        } else {
          el.style.left = 'auto';
        }
      } else {
        const pickerMargin = elRect.left;
        if (vw < 768) {
          el.style.right = `${pickerMargin}px`;
        } else {
          el.style.right = 'auto';
        }
      }
    };

    const options = {
      field: this.element,
      yearRange: this.yearRange,
      firstDay: 1,
      i18n: this.i18n,
      theme: this.theme,
      reposition: this.reposition,
      isRTL: this.direction === 'rtl',
      position: this.direction === 'rtl' ? 'bottom right' : 'bottom left',
      showDaysInNextAndPreviousMonths: this.showDaysInNextAndPreviousMonths,
      enableSelectionDaysInNextAndPreviousMonths:
        this.enableSelectionDaysInNextAndPreviousMonths,
    };

    if (this.format !== '') {
      options.format = this.format;
    } else {
      options.toString = (date) => {
        const day = `0${date.getDate()}`.slice(-2);
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
      };
    }
    // eslint-disable-next-line no-undef
    this.picker = new Pikaday({
      ...options,
      parse(input, format) {
        if (!options.format) {
          // Here we are using the default DD-MM-YYYY
          const [day, month, year] = input.split('-').map(Number);
          const fullYear = year < 100 ? 2000 + year : year;
          return new Date(fullYear, month - 1, day);
        }
        // If we have a custom format we rely on moment.js
        if (typeof moment !== 'undefined' && input !== '') {
          const parsedDate = moment(input, format, false);

          if (parsedDate.isValid()) {
            return parsedDate.toDate();
          }
        }

        return input;
      },
      onOpen() {
        // Call the static method to check styles.
        Datepicker.resizeLogic(this.el);
      },
    });

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);

    return this.picker;
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.picker) {
      this.picker.destroy();
      this.picker = null;
    }
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Instance method to handle resizing with debouncing
   */
  handleResize() {
    clearTimeout(this.resizeTimer);

    this.resizeTimer = setTimeout(() => {
      if (this.pikadayEl) {
        Datepicker.resizeLogic(this.pikadayEl);
      }
    }, 150);
  }
}

export default Datepicker;
