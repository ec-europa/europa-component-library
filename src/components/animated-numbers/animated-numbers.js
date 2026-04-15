import { queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.numberSelector
 * @param {Boolean} options.attachHoverListener
 * @param {Boolean} options.attachResizeListener
 * @param {Boolean} options.animateOnHover
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
      attachHoverListener = true,
      attachResizeListener = true,
      animateOnHover = true,
      animateOnVisible = true,
      animationDuration = 1000,
      animationStyle = 'random', // 'linear' or 'random'
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
    this.animateOnHover = animateOnHover;
    this.animateOnVisible = animateOnVisible;
    this.animationDuration = animationDuration;
    this.animationStyle = animationStyle;

    // Private variables
    this.intersectionObserver = null;
    this.animatedElements = new Map();

    // Bind `this` for use in callbacks
    this.animateNumber = this.animateNumber.bind(this);
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleHoverStart = this.handleHoverStart.bind(this);
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

    if (this.animateOnHover) {
      this.itemsElements.forEach((element) => {
        element.addEventListener('mouseenter', this.handleHoverStart);
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

    // Clean up hover listeners
    if (this.animateOnHover && this.itemsElements) {
      this.itemsElements.forEach((element) => {
        element.removeEventListener('mouseenter', this.handleHoverStart);
      });
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
   * Handle mouse enter for hover animation
   */
  handleHoverStart(event) {
    const element = event.currentTarget;
    const data = this.animatedElements.get(element);

    if (!data.isAnimating) {
      this.startAnimation(element);
    }
  }

  /**
   * Start animation for an element
   */
  startAnimation(element) {
    const data = this.animatedElements.get(element);
    if (data.isAnimating) return;

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
      from: 0,
      to: data.originalValue,
      duration: this.animationDuration,
      onUpdate: (value) => {
        element.textContent = value.toString();
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
  animateNumber({ from = 0, to, duration = 1000, onUpdate, onComplete }) {
    const data = this.animatedElements.get(
      Array.from(this.animatedElements.keys()).find((el) =>
        el.contains(onUpdate ? null : document.activeElement),
      ),
    );

    if (data) {
      data.animationId = null;
    }

    let startTime = null;

    const tick = (now) => {
      if (startTime === null) {
        startTime = now;
      }

      const progress = Math.min((now - startTime) / duration, 1);

      let value;
      if (this.animationStyle === 'random') {
        // Random animation: show random numbers between 0 and final value
        value = Math.floor(Math.random() * (to + 1));
      } else {
        // Linear animation: smooth progression from 0 to final value
        const eased = 1 - Math.pow(1 - progress, 3);
        value = from + (to - from) * eased;
      }

      onUpdate(Math.floor(value));

      if (progress < 1) {
        const animationId = requestAnimationFrame(tick);
        if (data) {
          data.animationId = animationId;
        }
      } else {
        onUpdate(to);
        if (onComplete) {
          onComplete();
        }
      }
    };

    requestAnimationFrame(tick);
  }

  /**
   * Check if element is in viewport
   */
  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

export default AnimatedNumbers;
