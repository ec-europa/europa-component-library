import { queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.numberSelector
 * @param {Boolean} options.animateOnVisible
 * @param {Number} options.animationDuration
 * @param {String} options.animationStyle - 'linear' or 'random'
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
      numberSelector = '[data-ecl-animated-numbers-value]',
      animateOnVisible = true,
      animationDuration = 1000,
      animationStyle = 'linear', // 'linear' or 'random'
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
    this.animateOnVisible = animateOnVisible;
    this.animationDuration = animationDuration;
    this.animationStyle = animationStyle;

    // Private variables
    this.intersectionObserver = null;
    this.animatedElements = new Map();

    // Bind `this` for use in callbacks
    this.animateNumber = this.animateNumber.bind(this);
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }

    ECL.components = ECL.components || new Map();

    this.itemsElements = queryAll(this.numberSelector, this.element);

    // Initialize animated elements map with original values
    this.itemsElements.forEach((element) => {
      const cleaned = element.textContent.replace(/[^\d.-]/g, '');
      const originalValue = cleaned ? parseFloat(cleaned) : 0;

      this.animatedElements.set(element, {
        originalValue,
        isAnimating: false,
        animationId: null,
      });
      // Set initial display to 0
      element.textContent = '0';
    });

    // Set up Intersection Observer for viewport visibility
    if (this.animateOnVisible && window.IntersectionObserver) {
      this.intersectionObserver = new IntersectionObserver(
        this.handleIntersection,
        {
          threshold: 0.1, // Trigger when 10% visible
        },
      );

      this.itemsElements.forEach((element) => {
        this.intersectionObserver.observe(element);
      });
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    // Stop all ongoing animations and restore original widths
    this.animatedElements.forEach((data, element) => {
      if (data.animationId) {
        cancelAnimationFrame(data.animationId);
      }
      // Reset to original value and restore original width
      const originalValue = data.originalValue;
      element.textContent = originalValue.toString();
      element.style.width = data.originalWidth || '';
    });

    // Clean up Intersection Observer
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }

    this.animatedElements.clear();
  }

  /**
   * Handle intersection observer events for viewport visibility
   */
  handleIntersection(entries) {
    entries.forEach((entry) => {
      const element = entry.target;
      const data = this.animatedElements.get(element);

      if (entry.isIntersecting && !data.isAnimating) {
        // Element became visible, start animation
        this.startAnimation(element);
      }
    });
  }

  /**
   * Start animation for an element
   */
  startAnimation(element) {
    const data = this.animatedElements.get(element);

    if (data.animationId) {
      cancelAnimationFrame(data.animationId);
    }

    data.isAnimating = true;

    // Calculate and set fixed width to prevent layout shift
    const finalValue = data.originalValue.toString();
    const tempText = element.textContent;
    element.textContent = finalValue;
    const finalWidth = element.offsetWidth;
    element.textContent = tempText;

    // Store original width and set fixed width
    data.originalWidth = element.style.width;
    element.style.width = `${finalWidth}px`;

    this.animateNumber({
      element,
      from: 0,
      to: data.originalValue,
      duration: this.animationDuration,
      onUpdate: (value) => {
        element.textContent = value;
      },
      onComplete: () => {
        // Restore original width
        element.style.width = data.originalWidth || '';
        data.isAnimating = false;
        data.animationId = null;
      },
    });
  }

  /**
   * Animate number from a starting value to an ending value over a duration, with optional easing and randomization.
   */
  animateNumber({
    element,
    from = 0,
    to,
    duration = 1000,
    onUpdate,
    onComplete,
  }) {
    const data = this.animatedElements.get(element);

    if (!data) return;

    // Cancel any existing animation
    if (data.animationId) {
      cancelAnimationFrame(data.animationId);
    }

    let startTime = null;
    let lastUpdateTime = 0;
    let lastValue = null;

    const tick = (now) => {
      if (startTime === null) {
        startTime = now;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Throttle updates (~every 50ms)
      if (now - lastUpdateTime < 50 && progress < 1) {
        data.animationId = requestAnimationFrame(tick);
        return;
      }

      lastUpdateTime = now;

      let value;

      if (this.animationStyle === 'random') {
        value = Math.floor(Math.random() * (to + 1));
      } else {
        const eased = 1 - Math.pow(1 - progress, 3);
        value = from + (to - from) * eased;
      }

      const rounded = Math.floor(value);

      // Only update DOM if value actually changed
      if (rounded !== lastValue) {
        onUpdate(rounded);
        lastValue = rounded;
      }

      if (progress < 1) {
        data.animationId = requestAnimationFrame(tick);
      } else {
        onUpdate(to);
        data.animationId = null;

        if (onComplete) {
          onComplete();
        }
      }
    };

    // Start animation
    data.animationId = requestAnimationFrame(tick);
  }
}

export default AnimatedNumbers;
