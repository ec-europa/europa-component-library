/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 */
export class Indicator {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Indicator} An instance of Indicator.
   */
  static autoInit(root, { INDICATOR: defaultOptions = {} } = {}) {
    const indicator = new Indicator(root, defaultOptions);
    indicator.init();
    root.ECLIndicator = indicator;
    return indicator;
  }

  constructor(element) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;

    // Options

    // Private variables
    this.value = 0;

    // Bind `this` for use in callbacks
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.clearValue = this.clearValue.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    // Get current value
    this.getValue();

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    this.element.removeAttribute('data-ecl-auto-initialized');
    ECL.components.delete(this.element);
  }

  /**
   * Get current value
   */
  getValue() {
    if (this.element.innerHTML.trim() === '') {
      this.value = '';
    } else {
      this.value = parseInt(this.element.innerHTML, 10);
    }
  }

  /**
   * Increment the indicator value.
   *
   * @param {int} modifier: value to be added
   */
  increment(modifier = 1) {
    if (this.value === '' || Number.isNaN(this.value)) return false;

    this.value += modifier;
    this.element.innerHTML = this.value;
    return true;
  }

  /**
   * Decrement the indicator value.
   *
   * @param {int} modifier: value to be substracted
   */
  decrement(modifier = 1) {
    if (this.value === '' || Number.isNaN(this.value)) return false;

    this.value -= modifier;
    this.element.innerHTML = this.value;
    return true;
  }

  /**
   * Set a specific value.
   *
   * @param {int} target: value to be used
   */
  setValue(target) {
    if (Number.isNaN(target)) return false;

    this.value = target;
    this.element.innerHTML = this.value;
    return true;
  }

  /**
   * Remove the indicator value.
   */
  clearValue() {
    this.value = '';
    this.element.innerHTML = this.value;
  }
}

export default Indicator;
