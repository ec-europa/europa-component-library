import { queryAll, queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.numberSelector
 * @param {Boolean} options.attachHoverListener
 */
export class AnimatedNumbers {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {AnimatedNumbers} An instance of AnimatedNumbers.
   */
  static autoInit(root, { AnimatedNumbers: defaultOptions = {} } = {}) {
    const animatedNumbers = new AnimatedNumbers(root, defaultOptions);
    animatedNumbers.init();
    root.ECLAnimatedNumbers = animatedNumbers;
    return animatedNumbers;
  }

  constructor(
    element,
    {
      numberSelector = '[data-ecl-animated-number]',
      attachHoverListener = true,
      attachResizeListener = true,
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
    this.numberSelector = numberSelector;
    this.attachHoverListener = attachHoverListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.resizeTimer = null;

    // Bind `this` for use in callbacks
    this.animateNumber = this.animateNumber.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }

    ECL.components = ECL.components || new Map();

    this.ellipsisButton = queryOne(this.ellipsisButtonSelector, this.element);

    // Bind click event on ellipsis
    if (this.attachClickListener && this.ellipsisButton) {
      this.ellipsisButton.addEventListener('click', this.handleClickOnEllipsis);
    }

    this.itemsElements = queryAll(this.numberSelector, this.element);

    // Bind resize events
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }
    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachHoverListener && this.itemsElements) {
      this.itemsElements.forEach((number) => {
        number.removeEventListener('hover', this.animateNumber);
      });
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
   *
   */
  animateNumber({ from = 0, to, duration = 1000, onUpdate }) {
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);

      // easeOut (optional but nicer)
      const eased = 1 - Math.pow(1 - progress, 3);

      const value = from + (to - from) * eased;

      onUpdate(Math.floor(value));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        onUpdate(to);
      }
    }

    requestAnimationFrame(tick);
  }

  /**
   * Trigger events on resize
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.check();
    }, 200);
  }
}

export default AnimatedNumbers;
