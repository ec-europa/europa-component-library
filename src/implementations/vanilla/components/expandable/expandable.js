import { queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for toggling element
 * @param {String} options.labelSelector Selector for label
 * @param {String} options.labelExpanded Label state
 * @param {String} options.labelCollapsed Label collapsed state
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
 */
export class Expandable {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Expandable} An instance of Expandable.
   */
  static autoInit(root, { EXPANDABLE: defaultOptions = {} } = {}) {
    const expandable = new Expandable(root, defaultOptions);
    expandable.init();
    root.ECLExpandable = expandable;
    return expandable;
  }

  constructor(
    element,
    {
      toggleSelector = '[data-ecl-expandable-toggle]',
      labelSelector = '[data-ecl-label]',
      labelExpanded = 'data-ecl-label-expanded',
      labelCollapsed = 'data-ecl-label-collapsed',
      attachClickListener = true,
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
    this.toggleSelector = toggleSelector;
    this.labelSelector = labelSelector;
    this.labelExpanded = labelExpanded;
    this.labelCollapsed = labelCollapsed;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.toggle = null;
    this.forceClose = false;
    this.target = null;
    this.label = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.toggle = queryOne(this.toggleSelector, this.element);

    // Get target element
    this.target = document.querySelector(
      `#${this.toggle.getAttribute('aria-controls')}`
    );

    // Get label, if any
    this.label = queryOne(this.labelSelector, this.element);

    // Exit if no target found
    if (!this.target) {
      throw new TypeError(
        'Target has to be provided for expandable (aria-controls)'
      );
    }

    // Bind click event on toggle
    if (this.attachClickListener && this.toggle) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.toggle) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }

  /**
   * Toggles between collapsed/expanded states.
   */
  handleClickOnToggle() {
    // Get current status
    const isExpanded =
      this.forceClose === true ||
      this.toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    this.toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    if (isExpanded) {
      this.target.hidden = true;
    } else {
      this.target.hidden = false;
    }

    // Toggle label if possible
    if (
      this.label &&
      !isExpanded &&
      this.toggle.hasAttribute(this.labelExpanded)
    ) {
      this.label.innerHTML = this.toggle.getAttribute(this.labelExpanded);
    } else if (
      this.label &&
      isExpanded &&
      this.toggle.hasAttribute(this.labelCollapsed)
    ) {
      this.label.innerHTML = this.toggle.getAttribute(this.labelCollapsed);
    }

    return this;
  }
}

export default Expandable;
