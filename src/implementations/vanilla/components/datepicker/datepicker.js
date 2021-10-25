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
    this.showDaysInNextAndPreviousMonths = showDaysInNextAndPreviousMonths;
    this.enableSelectionDaysInNextAndPreviousMonths =
      enableSelectionDaysInNextAndPreviousMonths;
    this.reposition = reposition;
  }

  /**
   * Initialise component.
   */
  init() {
    const picker = new Pikaday({
      field: this.element,
      format: this.format,
      yearRange: this.yearRange,
      firstDay: 1,
      theme: this.theme,
      reposition: this.reposition,
      showDaysInNextAndPreviousMonths: this.showDaysInNextAndPreviousMonths,
      enableSelectionDaysInNextAndPreviousMonths:
        this.enableSelectionDaysInNextAndPreviousMonths,
      onOpen() {
        // Fix picker size that exceeds vw on mobile
        const vw = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        );
        const elRect = this.el.getBoundingClientRect();

        if (elRect.width >= vw) {
          this.el.style.width = 'auto';
          this.el.style.right = `${elRect.left}px`;
        }
      },
    });

    return picker;
  }
}

export default Datepicker;
