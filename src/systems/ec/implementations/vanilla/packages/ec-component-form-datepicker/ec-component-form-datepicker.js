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
    // eslint-disable-next-line no-param-reassign
    root.ECLDatepicker = datepicker;
    return datepicker;
  }

  constructor(
    element,
    {
      datepickerFormat = 'YYYY-MM-DD',
      datepickerTheme = 'ecl-datepicker-theme',
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
    this.datepickerFormat = datepickerFormat;
    this.datepickerTheme = datepickerTheme;
  }

  /**
   * Initialise component.
   */
  init() {
    const picker = new Pikaday({
      field: this.element,
      format: this.datepickerFormat,
      theme: this.datepickerTheme,
    });

    return picker;
  }
}

export default Datepicker;
