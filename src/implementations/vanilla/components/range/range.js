import { queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.rangeInputSelector Selector for the range input
 * @param {String} options.currentValueSelector Selector for the current value area
 * @param {Boolean} options.attachChangeListener Whether or not to bind change events on range
 */
export class Range {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Range} An instance of Range.
   */
  static autoInit(root, { RANGE: defaultOptions = {} } = {}) {
    const range = new Range(root, defaultOptions);
    range.init();
    root.ECLRange = range;
    return range;
  }

  constructor(
    element,
    {
      rangeInputSelector = '[data-ecl-range-input]',
      currentValueSelector = '[data-ecl-range-value-current]',
      attachChangeListener = true,
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
    this.rangeInputSelector = rangeInputSelector;
    this.currentValueSelector = currentValueSelector;
    this.attachChangeListener = attachChangeListener;

    // Private variables
    this.rangeInput = null;
    this.currentValue = null;

    // Bind `this` for use in callbacks
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.rangeInput = queryOne(this.rangeInputSelector, this.element);
    this.currentValue = queryOne(this.currentValueSelector, this.element);

    if (this.rangeInput && this.currentValue) {
      // Display default value
      this.currentValue.innerHTML = this.rangeInput.value;

      // Bind change event on range
      if (this.attachChangeListener) {
        this.rangeInput.addEventListener('input', this.handleChange);
      }
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachChangeListener && this.rangeInput && this.currentValue) {
      this.rangeInput.removeEventListener('input', this.handleChange);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Display value when changed
   */
  handleChange() {
    // Update value
    this.currentValue.innerHTML = this.rangeInput.value;
  }
}

export default Range;
