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
 * @param {String} scope
 * @returns {HTMLElement}
 */
function createCheckbox(id, text, scope) {
  if (!id || !text) return '';
  const checkbox = document.createElement('div');
  checkbox.classList.add('ecl-checkbox');
  checkbox.setAttribute('data-select-multiple-id', scope);
  checkbox.setAttribute('data-select-multiple-value', id);
  const input = document.createElement('input');
  input.classList.add('ecl-checkbox__input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `${scope}-${id}`);
  checkbox.append(input);
  const label = document.createElement('label');
  label.classList.add('ecl-checkbox__label');
  label.setAttribute('for', `${scope}-${id}`);
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
 * @param {String} options.selectMultipleId The id attribute of the select multiple
 * @param {String} options.selectMultipleSelector The data attribute selector of the select multiple
 * @param {String} options.defaultTextAttribute The data attribute for the default placeholder text
 * @param {String} options.searchTextAttribute The data attribute for the default search text
 * @param {String} options.selectAllTextAttribute The data attribute for the select all text
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
      selectMultipleId = 'select-multiple',
      selectMultipleSelector = '[data-ecl-select-multiple]',
      defaultTextAttribute = 'data-ecl-select-default',
      searchTextAttribute = 'data-ecl-select-search',
      selectAllTextAttribute = 'data-ecl-select-all',
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
    this.selectMultipleId = selectMultipleId;
    this.selectMultipleSelector = selectMultipleSelector;
    this.defaultTextAttribute = defaultTextAttribute;
    this.searchTextAttribute = searchTextAttribute;
    this.selectAllTextAttribute = selectAllTextAttribute;

    // Private variables
    this.input = null;
    this.search = null;
    this.select = null;
    this.selectIcon = null;
    this.textDefault = null;
    this.textSearch = null;
    this.textSelectAll = null;
    this.selectMultiple = null;
    this.inputContainer = null;
    this.searchContainer = null;

    // Bind `this` for use in callbacks
    this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    const containerClasses = [
      'ecl-select__container',
      'ecl-select__container--m',
    ];
    this.textDefault = this.element.getAttribute(this.defaultTextAttribute);
    this.textSearch = this.element.getAttribute(this.searchTextAttribute);
    this.textSelectAll = this.element.getAttribute(this.selectAllTextAttribute);

    this.select = queryOne(this.selectMultipleSelector);

    if (this.select.nextSibling.classList.contains('ecl-select__icon')) {
      this.selectIcon = this.select.nextSibling;
    }

    this.selectMultiple = document.createElement('div');
    this.selectMultiple.classList.add('ecl-select__multiple');

    this.inputContainer = document.createElement('div');
    this.inputContainer.classList.add(...containerClasses);
    this.selectMultiple.append(this.inputContainer);

    this.input = document.createElement('input');
    this.input.classList.add('ecl-select', 'ecl-select__multiple-toggle');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('placeholder', this.textDefault || '');
    this.input.setAttribute('readonly', true);
    this.inputContainer.append(this.input);
    this.inputContainer.append(this.selectIcon);

    this.searchContainer = document.createElement('div');
    this.searchContainer.classList.add(
      'ecl-select__multiple-dropdown',
      ...containerClasses
    );
    this.selectMultiple.append(this.searchContainer);

    this.search = document.createElement('input');
    this.search.classList.add('ecl-text-input', 'ecl-text-input--m');
    this.search.setAttribute('type', 'text');
    this.search.setAttribute('placeholder', this.textSearch || '');
    this.searchContainer.append(this.search);

    this.searchContainer.append(
      createCheckbox(
        'select-multiple-all',
        this.textSelectAll,
        this.selectMultipleId
      )
    );

    if (this.select.options && this.select.options.length > 0) {
      this.select.options.forEach(option => {
        const checkbox = createCheckbox(
          option.value,
          option.text,
          this.selectMultipleId
        );
        checkbox.addEventListener('click', this.handleClickCheckbox);
        this.searchContainer.append(checkbox);
      });
    }

    this.select.parentNode.parentNode.insertBefore(
      this.selectMultiple,
      this.select.parentNode.nextSibling
    );

    // this.select.parentNode.classList.add('ecl-select__container--hidden');
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.selectMultiple) {
      this.selectMultiple.remove();
    }

    this.select.parentNode.classList.remove('ecl-select__container--hidden');
  }

  /**
   * @param {Event} e
   */
  handleClickCheckbox(e) {
    e.preventDefault();
    const checkbox = e.target.parentNode;
    const option = checkbox.getAttribute('data-select-multiple-value');
    this.element.options[option].selected = 'selected';
    return this;
  }
}

export default Select;
