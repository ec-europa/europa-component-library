import { queryOne } from '@ecl/ec-base/helpers/dom';

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
      originalDataSelector = 'data-ecl-select-multiple',
      copyCssSelector = 'ecl-select__multiple',
      defaultPlaceholderSelector = 'data-ecl-select-default',
      searchPlaceholderSelector = 'data-ecl-select-search',
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
    this.originalDataSelector = originalDataSelector;
    this.copyCssSelector = copyCssSelector;
    this.defaultPlaceholderSelector = defaultPlaceholderSelector;
    this.searchPlaceholderSelector = searchPlaceholderSelector;

    // Private variables
    this.id = 0;
    this.original = null;
    this.copy = null;
    this.defaultPlaceholder = null;
    this.searchPlaceholder = null;

    // Bind `this` for use in callbacks
  }

  /**
   * Initialise component.
   */
  init() {
    this.id += 1;
    this.defaultPlaceholder = this.element.getAttribute(
      this.defaultPlaceholderSelector
    );
    this.searchPlaceholder = this.element.getAttribute(
      this.searchPlaceholderSelector
    );

    this.original = queryOne(`[${this.originalDataSelector}]`);
    this.copy = document.createElement('div');
    this.copy.classList.add(this.copyCssSelector);
    this.copy.setAttribute('id', `${this.copyCssSelector}-${this.id}`);

    this.original.parentNode.parentNode.insertBefore(
      this.copy,
      this.original.parentNode.nextSibling
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
