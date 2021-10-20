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
      attachKeyDownListener = true,
      attachKeyUpListener = true,
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
    this.attachKeyDownListener = attachKeyDownListener;
    this.attachKeyUpListener = attachKeyUpListener;

    // Private variables
    this.pickerInput = null;

    // Bind `this` for input
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.pickerInput = this.element;

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

    // Bind key events on input
    if (this.pickerInput) {
      if (this.attachKeyDownListener) {
        this.pickerInput.addEventListener('keydown', this.handleKeyDown);
      }
      if (this.attachKeyUpListener) {
        this.pickerInput.addEventListener('keyup', this.handleKeyUp);
      }
    }

    return picker;
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.pickerInput) {
      if (this.attachKeyDownListener) {
        this.pickerInput.removeEventListener('keydown', this.handleKeyDown);
      }
      if (this.attachKeyUpListener) {
        this.pickerInput.removeEventListener('keyup', this.handleKeyUp);
      }
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyDown(e) {
    // Allow digits from 0 to 9 and limit input value to 10 char
    const { key } = e;
    const inputValue = e.target.value.trim();
    if (inputValue.length >= 10 || '0123456789'.indexOf(key) < 0) {
      e.preventDefault();
      return false;
    }

    return true;
  }

  /**
   * @param {Event} e
   */
  handleKeyUp(e) {
    // Auto-formatting numeric value to DD-MM-YYYY by adding dashes
    const inputValue = e.target.value.trim();
    let value = inputValue.replace(/-/g, '');

    if (value.length > 2 && value.length <= 4) {
      value = `${value.slice(0, 2)}-${value.slice(2)}`;
    } else if (value.length > 4) {
      value = `${value.slice(0, 2)}-${value.slice(2, 4)}-${value.slice(4)}`;
    }

    this.pickerInput.value = value;

    return value;
  }
}

export default Datepicker;
