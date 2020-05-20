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
      selectMultipleCssSelector = 'ecl-select__multiple',
      selectTextDefaultDataSelector = 'data-ecl-select-default',
      selectTextSearchDataSelector = 'data-ecl-select-search',
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
    this.selectMultipleCssSelector = selectMultipleCssSelector;
    this.selectTextDefaultDataSelector = selectTextDefaultDataSelector;
    this.selectTextSearchDataSelector = selectTextSearchDataSelector;

    // Private variables
    this.id = 0;
    this.selector = null;
    this.selectIcon = null;
    this.selectMultiple = null;
    this.inputContainer = null;
    this.input = null;
    this.searchContainer = null;
    this.textDefalt = null;
    this.textSearch = null;
    this.selectAll = null;
    this.selectorStyleDisplay = null;

    // Bind `this` for use in callbacks
  }

  /**
   * Initialise component.
   */
  init() {
    this.id += 1; // Ensures unique elements in the markup even when multiple instances.
    this.textDefalt = this.element.getAttribute(
      this.selectTextDefaultDataSelector
    );
    this.textSearch = this.element.getAttribute(
      this.selectTextSearchDataSelector
    );

    this.selector = queryOne(`[${this.selectDataSelector}]`);
    this.selectorStyleDisplay = this.selector.style.display;
    if (this.selector.nextSibling.classList.contains('ecl-select__icon')) {
      this.selectIcon = this.selector.nextSibling;
    }

    this.selectMultiple = document.createElement('div');
    this.selectMultiple.classList.add(this.selectMultipleCssSelector);
    this.selectMultiple.setAttribute(
      'id',
      `${this.selectIdSelector}-${this.id}`
    );

    this.inputContainer = document.createElement('div');
    this.inputContainer.classList.add(
      'ecl-select__container',
      'ecl-select__container--m'
    );
    this.selectMultiple.append(this.inputContainer);

    this.input = document.createElement('input');
    this.input.classList.add('ecl-select', 'ecl-select__multiple-toggle');
    this.input.setAttribute('id', `select-multiple-toggle-${this.id}`);
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('placeholder', this.textDefalt || '');
    this.input.setAttribute('readonly', true);
    this.inputContainer.append(this.input);
    this.inputContainer.append(this.selectIcon);

    this.searchContainer = document.createElement('div');
    this.searchContainer.classList.add(
      'ecl-select__container',
      'ecl-select__container--m',
      'ecl-select__multiple-dropdown'
    );
    this.selectMultiple.append(this.searchContainer);

    this.search = document.createElement('input');
    this.search.classList.add('ecl-text-input', 'ecl-text-input--m');
    this.search.setAttribute('id', `select-multiple-search-${this.id}`);
    this.search.setAttribute('type', 'text');
    this.search.setAttribute('placeholder', this.textSearch || '');
    this.searchContainer.append(this.search);

    this.selectAll = createCheckbox('select-multiple-all', 'Select all');
    this.searchContainer.append(this.selectAll);

    if (this.selector.options && this.selector.options.length > 0) {
      this.selector.options.forEach(option => {
        this.searchContainer.append(
          createCheckbox(`select-multiple-item-${option.value}`, option.text)
        );
      });
    }

    this.selector.parentNode.parentNode.insertBefore(
      this.selectMultiple,
      this.selector.parentNode.nextSibling
    );

    this.selector.style.display = 'none';
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.selectMultiple) {
      this.selectMultiple.remove();
    }
    this.selector.style.display = this.selectorStyleDisplay;
  }
}

export default Select;
