/* eslint-disable no-return-assign */
import { queryOne } from '@ecl/eu-base/helpers/dom';
import iconSvgUiCheck from '@ecl/eu-resources-icons/dist/svg/ui/check.svg';
import iconSvgUiCornerArrow from '@ecl/eu-resources-icons/dist/svg/ui/corner-arrow.svg';

/**
 * There are multiple labels contained in this component. You can set them in 2 ways: directly as a string or through data attributes.
 * Textual values have precedence and if they are not provided, then DOM data attributes are used.
 *
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.defaultText The default placeholder
 * @param {String} options.searchText The label for search
 * @param {String} options.selectAllText The label for select all
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
  static autoInit(root, defaultOptions = {}) {
    const select = new Select(root, defaultOptions);

    select.init();
    root.ECLSelect = select;
    return select;
  }

  constructor(
    element,
    {
      defaultText = '',
      searchText = '',
      selectAllText = '',
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
    this.defaultText = defaultText;
    this.searchText = searchText;
    this.selectAllText = selectAllText;

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
    this.updateCurrentValue = this.updateCurrentValue.bind(this);
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
  static createSvgIcon(icon, classes) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = icon; // avoiding the use of not-so-stable createElementNs
    const svg = tempElement.children[0];
    svg.removeAttribute('height');
    svg.removeAttribute('width');
    svg.setAttribute('focusable', false);
    svg.setAttribute('aria-hidden', true);
    // The following element is <path> which does not support classList API as others.
    svg.setAttribute('class', classes);
    return svg;
  }

  /**
   * @param {String} id
   * @param {String} text
   * @param {String} scope
   * @param {Function} clickHandler
   * @returns {HTMLElement}
   */
  static createCheckbox(id, text, scope, extraClass) {
    if (!id || !text || !scope) return '';
    const checkbox = document.createElement('div');
    checkbox.classList.add('ecl-checkbox');
    if (extraClass) checkbox.classList.add(extraClass);
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
    box.appendChild(
      Select.createSvgIcon(
        iconSvgUiCheck,
        'ecl-icon ecl-icon--s ecl-checkbox__icon'
      )
    );
    label.appendChild(box);
    label.appendChild(document.createTextNode(text));
    checkbox.appendChild(label);
    return checkbox;
  }

  /**
   * @returns {HTMLElement}
   */
  static createSelectIcon() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('ecl-select__icon');
    const icon = Select.createSvgIcon(
      iconSvgUiCornerArrow,
      'ecl-icon ecl-icon--s ecl-select__icon-shape ecl-icon--rotate-180'
    );
    wrapper.appendChild(icon);
    return wrapper;
  }

  /**
   * Manually checks an ECL-specific checkbox when previously defualt has been prevented.
   * @param {Event} e
   */
  static checkCheckbox(e) {
    const input = e.target.closest('.ecl-checkbox').querySelector('input');
    input.checked = !input.checked;
    return input.checked;
  }

  /**
   * Initialise component.
   */
  init() {
    this.select = queryOne(this.selectMultipleSelector);
    const containerClasses = Array.from(this.select.parentElement.classList);
    this.textDefault =
      this.defaultText || this.element.getAttribute(this.defaultTextAttribute);
    this.textSearch =
      this.searchText || this.element.getAttribute(this.searchTextAttribute);
    this.textSelectAll =
      this.selectAllText ||
      this.element.getAttribute(this.selectAllTextAttribute);

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
    if (containerClasses.find((c) => c.includes('disabled'))) {
      this.input.setAttribute('disabled', true);
    }
    this.input.addEventListener('keypress', this.handleToggle);
    this.input.addEventListener('click', this.handleToggle);

    this.inputContainer.appendChild(this.input);
    this.inputContainer.appendChild(Select.createSelectIcon());

    this.searchContainer = document.createElement('div');
    this.searchContainer.style.display = 'none';
    this.searchContainer.classList.add(
      'ecl-select__multiple-dropdown',
      ...containerClasses
    );

    this.selectMultiple.appendChild(this.searchContainer);

    this.search = document.createElement('input');
    this.search.classList.add('ecl-text-input');
    this.search.setAttribute('type', 'text');
    this.search.setAttribute('placeholder', this.textSearch || '');
    this.search.addEventListener('keyup', this.handleSearch);
    this.searchContainer.appendChild(this.search);

    if (this.textSelectAll) {
      this.selectAll = Select.createCheckbox(
        'all',
        this.textSelectAll,
        this.selectMultipleId,
        'ecl-select__multiple-all'
      );
      this.selectAll.addEventListener('click', this.handleClickSelectAll);
      this.selectAll.addEventListener('keypress', this.handleClickSelectAll);
      this.searchContainer.appendChild(this.selectAll);
    }

    if (this.select.options && this.select.options.length > 0) {
      this.checkboxes = Array.from(this.select.options).map((option) => {
        const checkbox = Select.createCheckbox(
          option.value,
          option.text,
          this.selectMultipleId
        );
        checkbox.setAttribute('data-visible', true);
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
    this.checkboxes.forEach((checkbox) => {
      checkbox.removeEventListener('click', this.handleClickSelectAll);
      checkbox.removeEventListener('click', this.handleClickOption);
    });
    document.removeEventListener('click', this.handleClickOutside);

    if (this.selectMultiple) {
      this.selectMultiple.remove();
    }

    this.select.parentNode.classList.remove('ecl-select__container--hidden');
  }

  updateCurrentValue() {
    this.input.value = Array.from(this.select.options)
      .filter((option) => option.getAttribute('selected'))
      .map((option) => option.text)
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
    Array.from(this.select.options).forEach((option) => {
      if (option.text === checkbox.getAttribute('data-select-multiple-value')) {
        if (option.getAttribute('selected')) {
          option.removeAttribute('selected');
          // Uncheck select all when a single option has been unchecked.
          this.selectAll.querySelector('input').checked = false;
        } else {
          option.setAttribute('selected', 'selected');
        }
      }
    });

    this.updateCurrentValue();
  }

  /**
   * @param {Event} e
   */
  handleClickSelectAll(e) {
    e.preventDefault();
    const checked = Select.checkCheckbox(e);
    const options = Array.from(this.select.options);
    const checkboxes = Array.from(
      this.searchContainer.querySelectorAll('[data-visible="true"]')
    );

    checkboxes.forEach((checkbox) => {
      checkbox.querySelector('input').checked = checked;
      const option = options.find(
        (o) => o.text === checkbox.getAttribute('data-select-multiple-value')
      );

      if (option) {
        if (checked) {
          option.setAttribute('selected', 'selected');
        } else {
          option.removeAttribute('selected', 'selected');
        }
      }
    });

    this.updateCurrentValue();
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
    const visible = [];
    const keyword = e.target.value.toLowerCase();
    this.checkboxes.forEach((checkbox) => {
      if (
        !checkbox
          .getAttribute('data-select-multiple-value')
          .toLocaleLowerCase()
          .includes(keyword)
      ) {
        checkbox.setAttribute('data-visible', false);
        checkbox.style.display = 'none';
      } else {
        checkbox.setAttribute('data-visible', true);
        checkbox.style.display = 'flex';
        visible.push(checkbox);
      }
    });
    // Select all checkbox follows along.
    const checked = visible.filter((c) => c.querySelector('input').checked);
    if (visible.length !== checked.length) {
      this.selectAll.querySelector('input').checked = false;
    } else {
      this.selectAll.querySelector('input').checked = true;
    }
    // reset
    if (keyword.length === 0) {
      this.checkboxes.forEach((checkbox) => {
        checkbox.setAttribute('data-visible', true);
        checkbox.style.display = 'flex';
      });
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
