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
      originalId = 'select-multiple',
      copyWrapperCssSelector = 'ecl-select__multiple',
      originalDataSelector = 'data-ecl-select-multiple',
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
    this.originalId = originalId;
    this.copyWrapperCssSelector = copyWrapperCssSelector;
    this.originalDataSelector = originalDataSelector;
    this.defaultPlaceholderSelector = defaultPlaceholderSelector;
    this.searchPlaceholderSelector = searchPlaceholderSelector;

    // Private variables
    this.id = 0;
    this.original = null;
    this.selectIcon = null;
    this.copyWrapper = null;
    this.copyInputWrapper = null;
    this.copyInput = null;
    this.copySearchWrapper = null;
    this.defaultPlaceholder = null;
    this.searchPlaceholder = null;

    // Bind `this` for use in callbacks
  }

  /**
   * Initialise component.
   */
  init() {
    this.id += 1; // Ensures unique elements in the markup even when multiple instances.
    this.defaultPlaceholder = this.element.getAttribute(
      this.defaultPlaceholderSelector
    );
    this.searchPlaceholder = this.element.getAttribute(
      this.searchPlaceholderSelector
    );

    this.original = queryOne(`[${this.originalDataSelector}]`);
    if (this.original.nextSibling.classList.contains('ecl-select__icon')) {
      this.selectIcon = this.original.nextSibling;
    }

    this.copyWrapper = document.createElement('div');
    this.copyWrapper.classList.add(this.copyWrapperCssSelector);
    this.copyWrapper.setAttribute('id', `${this.originalId}-${this.id}`);

    this.copyInputWrapper = document.createElement('div');
    this.copyInputWrapper.classList.add(
      'ecl-select__container',
      'ecl-select__container--m'
    );
    this.copyWrapper.append(this.copyInputWrapper);

    this.copyInput = document.createElement('input');
    this.copyInput.classList.add('ecl-select', 'ecl-select__multiple-toggle');
    this.copyInput.setAttribute('id', `select-multiple-toggle-${this.id}`);
    this.copyInput.setAttribute('type', 'text');
    this.copyInput.setAttribute('placeholder', this.defaultPlaceholder || '');
    this.copyInput.setAttribute('readonly', true);
    this.copyInputWrapper.append(this.copyInput);
    this.copyInputWrapper.append(this.selectIcon);

    this.copySearchWrapper = document.createElement('div');
    this.copySearchWrapper.classList.add(
      'ecl-select__container',
      'ecl-select__multiple-dropdown',
      'ecl-select__container--m'
    );
    this.copyWrapper.append(this.copySearchWrapper);

    this.copySearchInput = document.createElement('input');
    this.copySearchInput.classList.add('ecl-text-input', 'ecl-text-input--m');
    this.copySearchInput.setAttribute(
      'id',
      `select-multiple-search-${this.id}`
    );
    this.copySearchInput.setAttribute('type', 'text');
    this.copySearchInput.setAttribute(
      'placeholder',
      this.searchPlaceholder || ''
    );
    this.copySearchWrapper.append(this.copySearchInput);

    this.original.parentNode.parentNode.insertBefore(
      this.copyWrapper,
      this.original.parentNode.nextSibling
    );
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.copyWrapper) {
      this.copyWrapper.remove();
    }
  }
}

export default Select;
