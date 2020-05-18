/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 */
export class Select {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Select} An instance of Select.
   */
  static autoInit(root, { SELECT: defaultOptions = {} } = {}) {
    const select = new Select(root, defaultOptions);

    select.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLSelect = select;
    return select;
  }

  constructor(
    element,
    {
      copySelector = 'ecl-select__multiple',
      defaultPlaceholderSelector = 'data-ecl-select-default',
      searchPlaceholderSelector = 'data-ecl-select-search',
      showSearch = true,
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
    this.showSearch = showSearch;
    this.copySelector = copySelector;
    this.defaultPlaceholderSelector = defaultPlaceholderSelector;
    this.searchPlaceholderSelector = searchPlaceholderSelector;

    // Private variables
    this.copy = null;
    this.defaultPlaceholder = null;
    this.searchPlaceholder = null;

    // Bind `this` for use in callbacks
  }

  /**
   * Initialise component.
   */
  init() {
    this.defaultPlaceholder = this.element.getAttribute(
      this.defaultPlaceholderSelector
    );
    this.searchPlaceholder = this.element.getAttribute(
      this.searchPlaceholderSelector
    );
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.copy) {
      this.copy.remove();
    }
  }
}

export default Select;
