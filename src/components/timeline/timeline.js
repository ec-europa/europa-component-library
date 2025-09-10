import { queryOne, queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.buttonSelector
 * @param {String} options.labelSelector
 * @param {String} options.labelExpanded
 * @param {String} options.labelCollapsed
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param {Boolean} options.attachResizeListener Whether or not to bind resize events
 */
export class Timeline {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Timeline} An instance of Timeline.
   */
  static autoInit(root, { TIMELINE: defaultOptions = {} } = {}) {
    const timeline = new Timeline(root, defaultOptions);
    timeline.init();
    root.ECLTimeline = timeline;
    return timeline;
  }

  constructor(
    element,
    {
      buttonSelector = '[data-ecl-timeline-button]',
      labelSelector = '[data-ecl-label]',
      labelExpanded = 'data-ecl-label-expanded',
      labelCollapsed = 'data-ecl-label-collapsed',
      attachClickListener = true,
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
    this.buttonSelector = buttonSelector;
    this.labelSelector = labelSelector;
    this.labelExpanded = labelExpanded;
    this.labelCollapsed = labelCollapsed;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.button = null;
    this.label = null;
    this.timelineItems = null;
    this.resizeTimer = null;

    // Bind `this` for use in callbacks
    this.handleClickOnButton = this.handleClickOnButton.bind(this);
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
    // Query elements
    this.button = queryOne(this.buttonSelector, this.element);
    this.timelineItems = queryAll('.ecl-timeline__item', this.element);

    // Get label, if any
    this.label = queryOne(this.labelSelector, this.element);

    // Bind click event on button
    if (this.attachClickListener && this.button) {
      this.button.addEventListener('click', this.handleClickOnButton);
    }

    // Bind resize event
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Initial height adjustment
    setTimeout(() => {
      this.adjustLabelHeights();
    }, 100);

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.button) {
      this.button.removeEventListener('click', this.handleClickOnButton);
    }
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Expand timeline if not such already.
   */
  handleClickOnButton() {
    // Get current status
    const isExpanded = this.button.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    this.button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    if (isExpanded) {
      this.element.removeAttribute('data-ecl-timeline-expanded');
      // Scroll up to the button
      this.button.blur();
      this.button.focus();
    } else {
      this.element.setAttribute('data-ecl-timeline-expanded', 'true');

      // Focus first expanded item
      const item = queryOne('.ecl-timeline__item--collapsed', this.element);
      if (item) {
        item.setAttribute('tabindex', '-1');
        item.focus({ focusVisible: false });
        item.removeAttribute('tabindex');
      }
    }

    // Toggle label if possible
    if (
      this.label &&
      !isExpanded &&
      this.button.hasAttribute(this.labelExpanded)
    ) {
      this.label.innerHTML = this.button.getAttribute(this.labelExpanded);
    } else if (
      this.label &&
      isExpanded &&
      this.button.hasAttribute(this.labelCollapsed)
    ) {
      this.label.innerHTML = this.button.getAttribute(this.labelCollapsed);
    }

    this.adjustLabelHeights();

    return this;
  }

  /**
   * Handle resize events with debounce.
   */
  handleResize() {
    clearTimeout(this.resizeTimer);

    this.resizeTimer = setTimeout(() => {
      this.adjustLabelHeights();
    }, 250);
  }

  /**
   * Adjust timeline item heights to accommodate absolutely positioned labels.
   */
  adjustLabelHeights() {
    if (!this.timelineItems) return;

    this.timelineItems.forEach((item) => {
      const label = queryOne('.ecl-timeline__label', item);
      const title = queryOne('.ecl-timeline__title', item);
      const content = queryOne('.ecl-timeline__content', item);

      // Reset CSS variable to get accurate measurements
      item.style.removeProperty('--ecl-timeline-label-height');

      // Only adjust height for items with labels but no title/content
      if (label && !title && !content) {
        const labelHeight = label.getBoundingClientRect().height;

        // Set CSS variable with the measured label height
        item.style.setProperty(
          '--ecl-timeline-label-height',
          `${labelHeight}px`,
        );
      }
    });
  }
}

export default Timeline;
