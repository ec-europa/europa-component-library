/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.format dateAdapter object with functions
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

  constructor(element, { format = '', localization = {} } = {}) {
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
    this.localization = {
      ...Datepicker.defaults.localization,
      ...localization,
    };

    // Bind `this` for use in callbacks
    this.normalizeDate = this.normalizeDate.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!customElements.get('duet-date-picker')) {
      throw new TypeError(
        'Duet datepicker is not available. Make sure to include the duet datepicker js in your project if you want to use the ECL datepicker',
      );
    }
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    Datepicker.applyCustomizations = () => {
      this.picker = this.element.querySelector('duet-date-picker');

      // Convert ISO 8601 format YYYY-MM-DD into EU format DD-MM-YYYY
      const DEFAULT_DATE_ADAPTER = {
        parse(value = '', createDate) {
          const DATE_FORMAT_EU = /^(\d{2})-(\d{2})-(\d{4})$/;
          const matches = value.match(DATE_FORMAT_EU);
          if (matches) {
            return createDate(matches[3], matches[2], matches[1]);
          }
        },
        format(date) {
          const pad = (n) => String(n).padStart(2, '0');
          return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`;
        },
      };

      this.direction = getComputedStyle(this.element).direction;

      if (!this.picker) return;

      if (!this.picker.identifier) {
        this.picker.identifier = `ecl-datepicker-${Math.random().toString(36).substr(2, length)}`;
      }

      if (this.element.dataset.value) {
        this.picker.value = this.normalizeDate(this.element.dataset.value);
      }

      this.picker.direction = this.direction === 'ltr' ? 'right' : 'left';

      this.picker.localization = this.localization;

      if (this.element.dataset.placeholder) {
        this.picker.localization.placeholder = this.element.dataset.placeholder;
      }

      // Prevent errors if a simple string is used in this option
      this.picker.dateAdapter =
        this.format && typeof this.format === 'object'
          ? this.format
          : DEFAULT_DATE_ADAPTER;
    };

    setTimeout(Datepicker.applyCustomizations, 50);

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);

    return this.picker;
  }

  /**
   * Normalize the default value when it contains extra info.
   */
  normalizeDate(value) {
    if (typeof value !== 'string') return value;
    const match = value.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return '';

    // return YYYY-MM-DD
    return `${match[1]}-${match[2]}-${match[3]}`;
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }
}

Datepicker.defaults = {
  localization: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
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
    monthNames: [
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
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    placeholder: 'DD-MM-YYYY',
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
    monthSelectLabel: 'Month',
    yearSelectLabel: 'Year',
    closeLabel: 'Close window',
    calendarHeading: 'Choose a date',
    selectedDateMessage: 'Selected date is',
    buttonLabel: 'Choose date',
  },
};

export default Datepicker;
