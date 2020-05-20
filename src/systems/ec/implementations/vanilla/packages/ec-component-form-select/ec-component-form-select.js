import { queryOne } from '@ecl/ec-base/helpers/dom';
import iconSvgUiCheck from '@ecl/ec-resources-icons/dist/svg/ui/check.svg';

/**
 * @returns {HTMLElement}
 */
function createCheckboxIcon() {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = iconSvgUiCheck; // avoiding the use of not-so-stable createElementNs
  const svg = tempElement.childNodes[0];
  svg.removeAttribute('height');
  svg.removeAttribute('width');
  svg.setAttribute('focusable', false);
  svg.setAttribute('aria-hidden', true);
  svg.classList.add('ecl-icon', 'ecl-icon--s', 'ecl-checkbox__icon');
  return svg;
}

/**
 * @param {String} id
 * @param {String} text
 * @returns {HTMLElement}
 */
function createCheckbox(id, text) {
  if (!id || !text) return '';
  const checkbox = document.createElement('div');
  checkbox.classList.add('ecl-checkbox');
  const input = document.createElement('input');
  input.classList.add('ecl-checkbox__input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', id);
  checkbox.append(input);
  const label = document.createElement('label');
  label.classList.add('ecl-checkbox__label');
  label.setAttribute('for', id);
  const box = document.createElement('span');
  box.classList.add('ecl-checkbox__box');
  box.append(createCheckboxIcon());
  label.append(box);
  label.append(document.createTextNode(text));
  checkbox.append(label);
  return checkbox;
}

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
      selectIdSelector = 'select-multiple',
      selectDataSelector = 'data-ecl-select-multiple',
      multiselectCssSelector = 'ecl-select__multiple',
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
    this.selectIdSelector = selectIdSelector;
    this.selectDataSelector = selectDataSelector;
    this.multiselectCssSelector = multiselectCssSelector;
    this.defaultPlaceholderSelector = defaultPlaceholderSelector;
    this.searchPlaceholderSelector = searchPlaceholderSelector;

    // Private variables
    this.instanceId = 0;
    this.selector = null;
    this.selectIcon = null;
    this.copyWrapper = null;
    this.copyInputWrapper = null;
    this.copyInput = null;
    this.copySearchWrapper = null;
    this.defaultPlaceholder = null;
    this.searchPlaceholder = null;
    this.selectAll = null;
    this.selectorStyleDisplay = null;

    // Bind `this` for use in callbacks
  }

  /**
   * Initialise component.
   */
  init() {
    this.instanceId += 1; // Ensures unique elements in the markup even when multiple instances.
    this.defaultPlaceholder = this.element.getAttribute(
      this.defaultPlaceholderSelector
    );
    this.searchPlaceholder = this.element.getAttribute(
      this.searchPlaceholderSelector
    );

    this.selector = queryOne(`[${this.selectDataSelector}]`);
    this.selectorStyleDisplay = this.selector.style.display;
    if (this.selector.nextSibling.classList.contains('ecl-select__icon')) {
      this.selectIcon = this.selector.nextSibling;
    }

    this.copyWrapper = document.createElement('div');
    this.copyWrapper.classList.add(this.multiselectCssSelector);
    this.copyWrapper.setAttribute(
      'id',
      `${this.selectIdSelector}-${this.instanceId}`
    );

    this.copyInputWrapper = document.createElement('div');
    this.copyInputWrapper.classList.add(
      'ecl-select__container',
      'ecl-select__container--m'
    );
    this.copyWrapper.append(this.copyInputWrapper);

    this.copyInput = document.createElement('input');
    this.copyInput.classList.add('ecl-select', 'ecl-select__multiple-toggle');
    this.copyInput.setAttribute(
      'id',
      `select-multiple-toggle-${this.instanceId}`
    );
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
      `select-multiple-search-${this.instanceId}`
    );
    this.copySearchInput.setAttribute('type', 'text');
    this.copySearchInput.setAttribute(
      'placeholder',
      this.searchPlaceholder || ''
    );
    this.copySearchWrapper.append(this.copySearchInput);

    this.selectAll = createCheckbox('select-multiple-all', 'Select all');
    this.copySearchWrapper.append(this.selectAll);

    if (this.selector.options && this.selector.options.length > 0) {
      this.selector.options.forEach(option => {
        this.copySearchWrapper.append(
          createCheckbox(`select-multiple-item-${option.value}`, option.text)
        );
      });
    }

    this.selector.parentNode.parentNode.insertBefore(
      this.copyWrapper,
      this.selector.parentNode.nextSibling
    );

    this.selector.style.display = 'none';
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.copyWrapper) {
      this.copyWrapper.remove();
    }
    this.selector.style.display = this.selectorStyleDisplay;
  }
}

export default Select;
