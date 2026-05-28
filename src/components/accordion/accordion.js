/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.sidebarItemSelector Selector for sidebar items that open on desktop
 * @param {String} options.sidebarBreakpoint Media query for the desktop breakpoint
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
      sidebarItemSelector = '[data-desktop-open]',
      sidebarBreakpoint = '(min-width: 996px)',
    } = {},
  ) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;
    this.sidebarItemSelector = sidebarItemSelector;
    this.sidebarBreakpoint = sidebarBreakpoint;
    this.mediaQuery = null;
    this.sidebarItems = null;

    this.syncSidebarItems = this.syncSidebarItems.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    // Sidebar variant: keep items open on desktop, collapsed on mobile
    this.sidebarItems = this.element.querySelectorAll(this.sidebarItemSelector);
    if (this.sidebarItems.length > 0) {
      this.mediaQuery = window.matchMedia(this.sidebarBreakpoint);
      this.mediaQuery.addEventListener('change', this.syncSidebarItems);
      this.syncSidebarItems();
    }

    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.syncSidebarItems);
      this.mediaQuery = null;
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Set each sidebar item's open state based on the current breakpoint.
   */
  syncSidebarItems() {
    this.sidebarItems.forEach((item) => {
      item.open = this.mediaQuery.matches;
    });
  }
}

export default Accordion;
