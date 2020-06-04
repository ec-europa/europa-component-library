/* eslint-disable no-return-assign */
import { queryOne } from '@ecl/ec-base/helpers/dom';
import iconSvgUiCheck from '@ecl/ec-resources-icons/dist/svg/ui/check.svg';

// Polyfill for closest (support for IE11)
if (!Element.prototype.matches)
  Element.prototype.matches = Element.prototype.msMatchesSelector;
if (!Element.prototype.closest)
  Element.prototype.closest = function poly(selector) {
    let el = this;
    while (el) {
      if (el.matches(selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };

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
    this.checkboxes = null;
    this.select = null;
    this.selectAll = null;
    this.selectIcon = null;
    this.textDefault = null;
    this.textSearch = null;
    this.textSelectAll = null;
    this.selectMultiple = null;
    this.inputContainer = null;
    this.searchContainer = null;

    // Bind `this` for use in callbacks
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClickOption = this.handleClickOption.bind(this);
    this.handleClickSelectAll = this.handleClickSelectAll.bind(this);
    this.handleFocusout = this.handleFocusout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  /**
   * @returns {HTMLElement}
   */
  static createCheckboxIcon() {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = iconSvgUiCheck; // avoiding the use of not-so-stable createElementNs
    const svg = tempElement.children[0];
    svg.removeAttribute('height');
    svg.removeAttribute('width');
    svg.setAttribute('focusable', false);
    svg.setAttribute('aria-hidden', true);
    // The following element is <path> which does not support classList API as others.
    svg.setAttribute('class', 'ecl-icon ecl-icon--s ecl-checkbox__icon');
    return svg;
  }

  /**
   * @param {String} id
   * @param {String} text
   * @param {String} scope
   * @param {Function} clickHandler
   * @returns {HTMLElement}
   */
  static createCheckbox(id, text, scope) {
    if (!id || !text || !scope) return '';
    const checkbox = document.createElement('div');
    checkbox.classList.add('ecl-checkbox');
    checkbox.setAttribute('data-select-multiple-value', text);
    const input = document.createElement('input');
    input.classList.add('ecl-checkbox__input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', `${scope}-${id}`);
    checkbox.appendChild(input);
    const label = document.createElement('label');
    label.classList.add('ecl-checkbox__label');
    label.setAttribute('for', `${scope}-${id}`);
    const box = document.createElement('span');
    box.classList.add('ecl-checkbox__box');
    box.appendChild(Select.createCheckboxIcon());
    label.appendChild(box);
    label.appendChild(document.createTextNode(text));
    checkbox.appendChild(label);
    return checkbox;
  }

  /**
   * Manually checks an ECL-specific checkbox when previously defualt has been prevented.
   * @param {Event} e
   */
  static checkCheckbox(e) {
    const input = e.target.closest('.ecl-checkbox').querySelector('input');
    input.checked = !input.checked;
  }

  /**
   * Initialise component.
   */
  init() {
    this.select = queryOne(this.selectMultipleSelector);
    const containerClasses = Array.from(this.select.parentElement.classList);
    this.textDefault = this.element.getAttribute(this.defaultTextAttribute);
    this.textSearch = this.element.getAttribute(this.searchTextAttribute);
    this.textSelectAll = this.element.getAttribute(this.selectAllTextAttribute);

    if (this.select.nextSibling.classList.contains('ecl-select__icon')) {
      this.selectIcon = this.select.nextSibling;
    }

    this.selectMultiple = document.createElement('div');
    this.selectMultiple.classList.add('ecl-select__multiple');
    // Close the searchContainer when tabbing out of the selectMultple
    this.selectMultiple.addEventListener('focusout', this.handleFocusout);

    this.inputContainer = document.createElement('div');
    this.inputContainer.classList.add(...containerClasses);
    this.selectMultiple.appendChild(this.inputContainer);

    this.input = document.createElement('input');
    this.input.classList.add('ecl-select', 'ecl-select__multiple-toggle');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('placeholder', this.textDefault || '');
    this.input.setAttribute('readonly', true);
    if (containerClasses.find(c => c.includes('disabled'))) {
      this.input.setAttribute('disabled', true);
    }
    this.input.addEventListener('keypress', this.handleToggle);
    this.input.addEventListener('click', this.handleToggle);
    this.inputContainer.appendChild(this.input);
    this.inputContainer.appendChild(this.selectIcon);

    this.searchContainer = document.createElement('div');
    this.searchContainer.style.display = 'none';
    this.searchContainer.classList.add(
      'ecl-select__multiple-dropdown',
      ...containerClasses
    );

    this.selectMultiple.appendChild(this.searchContainer);

    this.search = document.createElement('input');
    this.search.classList.add('ecl-text-input', 'ecl-text-input--m');
    this.search.setAttribute('type', 'text');
    this.search.setAttribute('placeholder', this.textSearch || '');
    this.search.addEventListener('keyup', this.handleSearch);
    this.searchContainer.appendChild(this.search);

    this.selectAll = Select.createCheckbox(
      'all',
      this.textSelectAll,
      this.selectMultipleId
    );
    this.selectAll.addEventListener('click', this.handleClickSelectAll);
    this.selectAll.addEventListener('keypress', this.handleClickSelectAll);
    this.searchContainer.appendChild(this.selectAll);

    if (this.select.options && this.select.options.length > 0) {
      this.checkboxes = Array.from(this.select.options).map(option => {
        const checkbox = Select.createCheckbox(
          option.value,
          option.text,
          this.selectMultipleId
        );
        checkbox.addEventListener('click', this.handleClickOption);
        checkbox.addEventListener('keypress', this.handleClickOption);
        this.searchContainer.appendChild(checkbox);
        return checkbox;
      });
    }

    this.select.parentNode.parentNode.insertBefore(
      this.selectMultiple,
      this.select.parentNode.nextSibling
    );

    document.addEventListener('click', this.handleClickOutside);

    this.select.parentNode.classList.add('ecl-select__container--hidden');
  }

  /**
   * Destroy component.
   */
  destroy() {
    this.selectMultiple.removeEventListener('focusout', this.handleFocusout);
    this.input.removeEventListener('keypress', this.handleToggle);
    this.input.removeEventListener('click', this.handleToggle);
    this.search.removeEventListener('keyup', this.handleSearch);
    this.selectAll.removeEventListener('click', this.handleClickSelectAll);
    this.selectAll.removeEventListener('keypress', this.handleClickSelectAll);
    this.checkboxes.forEach(checkbox => {
      checkbox.removeEventListener('click', this.handleClickSelectAll);
      checkbox.removeEventListener('click', this.handleClickOption);
    });
    document.removeEventListener('click', this.handleClickOutside);

    if (this.selectMultiple) {
      this.selectMultiple.remove();
    }

    this.select.parentNode.classList.remove('ecl-select__container--hidden');
  }

  updateInputValue() {
    this.input.value = Array.from(this.select.options)
      .filter(option => option.getAttribute('selected'))
      .map(option => option.text)
      .join(', ');
  }

  /**
   * @param {Event} e
   */
  handleToggle(e) {
    e.preventDefault();

    if (this.searchContainer.style.display === 'none') {
      this.searchContainer.style.display = 'block';
    } else {
      this.searchContainer.style.display = 'none';
    }
  }

  /**
   * @param {Event} e
   */
  handleClickOption(e) {
    e.preventDefault();
    Select.checkCheckbox(e);

    // Toggle values
    const checkbox = e.target.closest('.ecl-checkbox');
    this.select.options.forEach(option => {
      if (option.text === checkbox.getAttribute('data-select-multiple-value')) {
        if (option.getAttribute('selected')) {
          option.removeAttribute('selected');
          // Uncheck select all when a single option has been unchecked.
          this.selectAll.querySelector('input').checked = false;
          this.select.setAttribute('data-all-checked', false);
        } else {
          option.setAttribute('selected', 'selected');
        }
      }
    });

    this.updateInputValue();
  }

  /**
   * @param {Event} e
   */
  handleClickSelectAll(e) {
    e.preventDefault();
    Select.checkCheckbox(e);

    if (this.select.getAttribute('data-all-checked') === 'true') {
      this.select.options.forEach(option => option.removeAttribute('selected'));
      this.checkboxes.map(
        checkbox => (checkbox.querySelector('input').checked = false)
      );
      this.select.setAttribute('data-all-checked', false);
    } else {
      this.select.options.forEach(option =>
        option.setAttribute('selected', 'selected')
      );
      this.checkboxes.map(
        checkbox => (checkbox.querySelector('input').checked = true)
      );
      this.select.setAttribute('data-all-checked', true);
    }

    this.updateInputValue();
  }

  /**
   * @param {Event} e
   */
  handleFocusout(e) {
    if (
      e.relatedTarget &&
      this.selectMultiple &&
      !this.selectMultiple.contains(e.relatedTarget) &&
      this.searchContainer.style.display === 'block'
    ) {
      this.searchContainer.style.display = 'none';
    }
  }

  /**
   * @param {Event} e
   */
  handleSearch(e) {
    const keyword = e.target.value;
    if (keyword.length > 2) {
      this.checkboxes.forEach(checkbox => {
        if (
          !checkbox
            .getAttribute('data-select-multiple-value')
            .toLocaleLowerCase()
            .includes(keyword)
        ) {
          checkbox.style.display = 'none';
        } else {
          checkbox.style.display = 'flex';
        }
      });
    }
    // reset
    if (keyword.length === 0) {
      this.checkboxes.forEach(checkbox => (checkbox.style.display = 'flex'));
    }
  }

  /**
   * @param {Event} e
   */
  handleClickOutside(e) {
    if (
      e.target &&
      this.selectMultiple &&
      !this.selectMultiple.contains(e.target) &&
      this.searchContainer.style.display === 'block'
    ) {
      this.searchContainer.style.display = 'none';
    }
  }
}

export default Select;
