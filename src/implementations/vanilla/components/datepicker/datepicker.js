/* eslint-disable class-methods-use-this */
import Pikaday from 'pikaday';

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
      format = 'DD-MM-YYYY',
      theme = 'ecl-datepicker-theme',
      yearRange = 40,
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
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
      showDaysInNextAndPreviousMonths = true,
      enableSelectionDaysInNextAndPreviousMonths = true,
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
    this.direction = getComputedStyle(this.element).direction;

    const picker = new Pikaday({
      field: this.element,
      format: this.format,
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
      onOpen() {
        this.direction = getComputedStyle(this.el).direction;

        // Extend picker size on mobile
        const vw = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        );
        const elRect = this.el.getBoundingClientRect();
        const pickerMargin =
          this.direction === 'rtl' ? vw - elRect.right : elRect.left;

        if (vw < 768) {
          this.el.style.width = 'auto';
          this.el.style.left = `${pickerMargin}px`;
          this.el.style.right = `${pickerMargin}px`;
        }
      },
    });

    return picker;
  }
}

export default Datepicker;
