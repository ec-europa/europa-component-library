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
      yearRange = 4,
      reposition = false,
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
    this.format = format;
    this.theme = theme;
    this.yearRange = yearRange;
    this.i18n = i18n;
    this.showDaysInNextAndPreviousMonths = showDaysInNextAndPreviousMonths;
    this.enableSelectionDaysInNextAndPreviousMonths =
      enableSelectionDaysInNextAndPreviousMonths;
    this.reposition = reposition;
    this.direction = 'ltr';
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
      onOpen() {
        this.direction = getComputedStyle(this.el).direction;

        // Extend picker size on mobile
        const vw = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0,
        );
        const elRect = this.el.getBoundingClientRect();

        if (this.direction === 'rtl') {
          const pickerMargin = vw - elRect.right;
          if (vw < 768) {
            this.el.style.left = `${pickerMargin}px`;
          } else {
            this.el.style.left = 'auto';
          }
        } else {
          const pickerMargin = elRect.left;
          if (vw < 768) {
            this.el.style.right = `${pickerMargin}px`;
          } else {
            this.el.style.right = 'auto';
          }
        }
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
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }
}

export default Datepicker;
