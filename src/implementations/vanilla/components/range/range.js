import { queryOne, queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.rangeInputSelector Selector for the range input
 * @param {String} options.currentValueSelector Selector for the current value area
 * @param {String} options.bubbleSelector Selector for the value bubble
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
      bubbleSelector = '[data-ecl-range-bubble]',
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
    this.bubbleSelector = bubbleSelector;
    this.attachChangeListener = attachChangeListener;

    // Private variables
    this.rangeInput = null;
    this.currentValue = null;
    this.bubble = null;

    // Bind `this` for use in callbacks
    this.placeBubble = this.placeBubble.bind(this);
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
    this.currentValue = queryAll(this.currentValueSelector, this.element);
    this.bubble = queryOne(this.bubbleSelector, this.element);

    if (this.rangeInput && this.currentValue) {
      // Display default value
      this.currentValue.forEach((element) => {
        element.innerHTML = this.rangeInput.value;
      });

      // Place bubble
      setTimeout(() => {
        this.placeBubble();
      }, 500);

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
   * Place value bubble
   */
  placeBubble() {
    // Quite complex calculus here
    // see https://stackoverflow.com/questions/46448994/get-the-offset-position-of-an-html5-range-slider-handle

    // Fixed values
    const halfThumbWidth = 8; // 1rem / 2
    const halfLabelWidth = this.bubble.offsetWidth / 2;

    // Get range input width
    const rect = this.rangeInput.getBoundingClientRect();
    const center = rect.width / 2;

    // Get position from center
    const percentOfRange =
      this.rangeInput.value / (this.rangeInput.max - this.rangeInput.min);
    const valuePxPosition = percentOfRange * rect.width;
    const distFromCenter = valuePxPosition - center;
    const percentDistFromCenter = distFromCenter / center;

    // Calculate bubble position
    const offset = percentDistFromCenter * halfThumbWidth;
    const left = rect.left + valuePxPosition - halfLabelWidth - offset;

    this.bubble.style.left = `${left}px`;
  }

  /**
   * Display value when changed
   */
  handleChange() {
    // Update value
    this.currentValue.forEach((element) => {
      element.innerHTML = this.rangeInput.value;
    });

    this.placeBubble();
  }
}

export default Range;
