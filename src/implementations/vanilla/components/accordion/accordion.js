import { queryAll, queryOne } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for toggling element
 * @param {String} options.iconSelector Selector for icon element
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
 */
export class Accordion {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Accordion} An instance of Accordion.
   */
  static autoInit(root, { ACCORDION: defaultOptions = {} } = {}) {
    const accordion = new Accordion(root, defaultOptions);
    accordion.init();
    root.ECLAccordion = accordion;
    return accordion;
  }

  constructor(
    element,
    {
      toggleSelector = '[data-ecl-accordion-toggle]',
      iconSelector = '[data-ecl-accordion-icon]',
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
    this.iconSelector = iconSelector;
    this.attachClickListener = attachClickListener;
    this.labelExpanded = labelExpanded;
    this.labelCollapsed = labelCollapsed;

    // Private variables
    this.toggles = null;
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
    this.toggles = queryAll(this.toggleSelector, this.element);

    // Get label, if any
    this.label = queryOne(this.labelSelector, this.element);

    // Bind click event on toggles
    if (this.attachClickListener && this.toggles) {
      this.toggles.forEach((toggle) => {
        toggle.addEventListener(
          'click',
          this.handleClickOnToggle.bind(this, toggle)
        );
      });
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.toggles) {
      this.toggles.forEach((toggle) => {
        toggle.removeEventListener('click', this.handleClickOnToggle);
      });
    }
  }

  /**
   * @param {HTMLElement} toggle Target element to toggle.
   */
  handleClickOnToggle(toggle) {
    // Get target element
    const target = queryOne(
      `#${toggle.getAttribute('aria-controls')}`,
      this.element
    );

    // Exit if no target found
    if (!target) {
      throw new TypeError(
        'Target has to be provided for accordion (aria-controls)'
      );
    }

    // Get current status
    const isExpanded =
      this.forceClose === true ||
      toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    if (isExpanded) {
      target.hidden = true;
    } else {
      target.hidden = false;
    }

    // Toggle icon
    const iconElement = queryOne(this.iconSelector, toggle);
    if (iconElement) {
      const useNode = queryOne('use', iconElement);
      if (useNode) {
        const originalXlinkHref = useNode.getAttribute('xlink:href');
        let newXlinkHref = '';
        if (isExpanded) {
          newXlinkHref = originalXlinkHref.replace('minus', 'plus');
        } else {
          newXlinkHref = originalXlinkHref.replace('plus', 'minus');
        }
        useNode.setAttribute('xlink:href', newXlinkHref);
      }
    }

    // Toggle icon label
    const iconLabelElement = queryOne('.ecl-accordion__toggle-label', toggle);
    if (iconLabelElement) {
      if (isExpanded) {
        iconLabelElement.textContent = toggle.getAttribute(this.labelCollapsed);
      } else {
        iconLabelElement.textContent = toggle.getAttribute(this.labelExpanded);
      }
    }

    return this;
  }
}

export default Accordion;
