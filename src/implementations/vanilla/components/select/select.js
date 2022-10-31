/* eslint-disable no-return-assign */
import getSystem from '@ecl/builder/utils/getSystem';
import iconSvgAllCheckEc from '@ecl/resources-ec-icons/dist/svg/all/check.svg';
import iconSvgAllCheckEu from '@ecl/resources-eu-icons/dist/svg/all/check.svg';
import iconSvgAllCornerArrowEc from '@ecl/resources-ec-icons/dist/svg/all/corner-arrow.svg';
import iconSvgAllCornerArrowEu from '@ecl/resources-eu-icons/dist/svg/all/corner-arrow.svg';

const system = getSystem();
const iconSvgAllCheck = system === 'eu' ? iconSvgAllCheckEu : iconSvgAllCheckEc;
const iconSvgAllCornerArrow =
  system === 'eu' ? iconSvgAllCornerArrowEu : iconSvgAllCornerArrowEc;

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
 * @param {String} options.noResultsTextAttribute The data attribute for the no results options text
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
      noResultsText = '',
      selectMultipleId = 'select-multiple',
      selectMultipleSelector = '[data-ecl-select-multiple]',
      defaultTextAttribute = 'data-ecl-select-default',
      searchTextAttribute = 'data-ecl-select-search',
      selectAllTextAttribute = 'data-ecl-select-all',
      noResultsTextAttribute = 'data-ecl-select-no-results',
      closeLabelAttribute = 'data-ecl-select-close',
      clearAllLabelAttribute = 'data-ecl-select-clear-all',
      selectMultiplesSelectionCountSelector = 'ecl-select-multiple-selections-counter',
      closeButtonLabel = '',
      clearAllButtonLabel = '',
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
    this.selectMultiplesSelectionCountSelector =
      selectMultiplesSelectionCountSelector;
    this.defaultTextAttribute = defaultTextAttribute;
    this.searchTextAttribute = searchTextAttribute;
    this.selectAllTextAttribute = selectAllTextAttribute;
    this.noResultsTextAttribute = noResultsTextAttribute;
    this.defaultText = defaultText;
    this.searchText = searchText;
    this.selectAllText = selectAllText;
    this.noResultsText = noResultsText;
    this.clearAllButtonLabel = clearAllButtonLabel;
    this.closeButtonLabel = closeButtonLabel;
    this.closeLabelAttribute = closeLabelAttribute;
    this.clearAllLabelAttribute = clearAllLabelAttribute;

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
    this.textNoResults = null;
    this.selectMultiple = null;
    this.inputContainer = null;
    this.optionsContainer = null;
    this.searchContainer = null;
    this.countSelections = null;
    this.form = null;

    // Bind `this` for use in callbacks
    this.updateCurrentValue = this.updateCurrentValue.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClickOption = this.handleClickOption.bind(this);
    this.handleClickSelectAll = this.handleClickSelectAll.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
    this.handleFocusout = this.handleFocusout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.moveFocus = this.moveFocus.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleClickOnClearAll = this.handleClickOnClearAll.bind(this);
    this.handleKeyboardOnSelect = this.handleKeyboardOnSelect.bind(this);
    this.handleKeyboardOnSelectAll = this.handleKeyboardOnSelectAll.bind(this);
    this.handleKeyboardOnSearch = this.handleKeyboardOnSearch.bind(this);
    this.handleKeyboardOnOptions = this.handleKeyboardOnOptions.bind(this);
    this.handleKeyboardOnOption = this.handleKeyboardOnOption.bind(this);
    this.handleKeyboardOnClearAll = this.handleKeyboardOnClearAll.bind(this);
    this.handleKeyboardOnClose = this.handleKeyboardOnClose.bind(this);
    this.updateSelectionsCount = this.updateSelectionsCount.bind(this);
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
   * @param {Object} options
   * @param {String} options.id
   * @param {String} options.text
   * @param {String} [options.extraClass] - additional CSS class
   * @param {String} [options.disabled] - relevant when re-creating an option
   * @param {String} [options.selected] - relevant when re-creating an option
   * @param {String} ctx
   * @returns {HTMLElement}
   */
  static createCheckbox(options, ctx) {
    // Early returns.
    if (!options || !ctx) return '';
    const { id, text, disabled, selected, extraClass } = options;
    if (!id || !text) return '';

    // Elements to work with.
    const checkbox = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const box = document.createElement('span');

    // Respect optional input parameters.
    if (extraClass) {
      checkbox.classList.add(extraClass);
    }
    if (selected) {
      input.setAttribute('checked', true);
    }
    if (disabled) {
      checkbox.classList.add('ecl-checkbox--disabled');
      input.setAttribute('disabled', disabled);
    }

    // Imperative work follows.
    checkbox.classList.add('ecl-checkbox');
    checkbox.setAttribute('data-select-multiple-value', text);
    input.classList.add('ecl-checkbox__input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', `${ctx}-${id}`);
    checkbox.appendChild(input);
    label.classList.add('ecl-checkbox__label');
    label.setAttribute('for', `${ctx}-${id}`);
    box.classList.add('ecl-checkbox__box');
    box.appendChild(
      Select.createSvgIcon(
        iconSvgAllCheck,
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
      iconSvgAllCornerArrow,
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
    this.select = this.element;
    const containerClasses = Array.from(this.select.parentElement.classList);
    this.textDefault =
      this.defaultText || this.element.getAttribute(this.defaultTextAttribute);
    this.textSearch =
      this.searchText || this.element.getAttribute(this.searchTextAttribute);
    this.textSelectAll =
      this.selectAllText ||
      this.element.getAttribute(this.selectAllTextAttribute);
    this.textNoResults =
      this.noResultsText ||
      this.element.getAttribute(this.noResultsTextAttribute);
    this.closeButtonLabel =
      this.closeButtonLabel ||
      this.element.getAttribute(this.closeLabelAttribute);
    this.clearAllButtonLabel =
      this.clearAllButtonLabel ||
      this.element.getAttribute(this.clearAllLabelAttribute);
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
    this.input.addEventListener('keydown', this.handleKeyboardOnSelect);

    this.input.addEventListener('click', this.handleToggle);

    this.selectionCount = document.createElement('div');
    this.selectionCount.classList.add(
      this.selectMultiplesSelectionCountSelector
    );
    this.selectionCountText = document.createElement('span');
    this.selectionCount.appendChild(this.selectionCountText);

    this.inputContainer.appendChild(this.selectionCount);
    this.inputContainer.appendChild(this.input);
    this.inputContainer.appendChild(Select.createSelectIcon());

    this.searchContainer = document.createElement('div');
    this.searchContainer.classList.add(
      'ecl-select__multiple-dropdown',
      'hidden',
      ...containerClasses
    );

    this.selectMultiple.appendChild(this.searchContainer);

    this.search = document.createElement('input');
    this.search.classList.add('ecl-text-input');
    this.search.setAttribute('type', 'search');
    this.search.setAttribute('placeholder', this.textSearch || '');
    this.search.addEventListener('keyup', this.handleSearch);
    this.search.addEventListener('search', this.handleSearch);
    this.searchContainer.appendChild(this.search);

    if (this.textSelectAll) {
      const optionsCount = Array.from(this.select.options).filter(
        (option) => !option.disabled
      ).length;

      this.selectAll = Select.createCheckbox(
        {
          id: 'all',
          text: `${this.textSelectAll} (${optionsCount})`,
          extraClass: 'ecl-select__multiple-all',
        },
        this.selectMultipleId
      );
      this.selectAll.addEventListener('click', this.handleClickSelectAll);
      this.selectAll.addEventListener('keypress', this.handleClickSelectAll);
      this.selectAll.addEventListener('change', this.handleClickSelectAll);
      this.searchContainer.appendChild(this.selectAll);
    }

    this.search.addEventListener('keydown', this.handleKeyboardOnSearch);
    this.optionsContainer = document.createElement('div');
    this.optionsContainer.classList.add('ecl-select__multiple-options');
    this.searchContainer.appendChild(this.optionsContainer);
    // Toolbar
    if (this.clearAllButtonLabel || this.closeButtonLabel) {
      this.dropDownToolbar = document.createElement('div');
      this.dropDownToolbar.classList.add('ecl-select-multiple-toolbar');

      if (this.clearAllButtonLabel) {
        this.clearAllButton = document.createElement('button');
        this.clearAllButton.textContent = this.clearAllButtonLabel;
        this.clearAllButton.classList.add('ecl-button', 'ecl-button--ghost');
        this.clearAllButton.addEventListener(
          'click',
          this.handleClickOnClearAll
        );
        this.clearAllButton.addEventListener(
          'keydown',
          this.handleKeyboardOnClearAll
        );
        this.dropDownToolbar.appendChild(this.clearAllButton);
      }

      if (this.closeButtonLabel) {
        this.closeButton = document.createElement('button');
        this.closeButton.textContent = this.closeButtonLabel;
        this.closeButton.classList.add('ecl-button', 'ecl-button--primary');
        this.closeButton.addEventListener('click', this.handleEsc);
        this.closeButton.addEventListener(
          'keydown',
          this.handleKeyboardOnClose
        );

        if (this.dropDownToolbar) {
          this.dropDownToolbar.appendChild(this.closeButton);
          this.searchContainer.appendChild(this.dropDownToolbar);
          this.dropDownToolbar.style.display = 'none';
        }
      }
    }

    this.selectAll.addEventListener('keydown', this.handleKeyboardOnSelectAll);
    this.optionsContainer.addEventListener(
      'keydown',
      this.handleKeyboardOnOptions
    );

    if (this.select.options && this.select.options.length > 0) {
      this.checkboxes = Array.from(this.select.options).map((option) => {
        if (option.selected) {
          this.updateSelectionsCount(1);
          if (this.dropDownToolbar) {
            this.dropDownToolbar.style.display = 'flex';
          }
        }
        const checkbox = Select.createCheckbox(
          {
            // spread operator does not work in storybook context so we map 1:1
            id: option.value,
            text: option.text,
            disabled: option.disabled,
            selected: option.selected,
          },
          this.selectMultipleId
        );
        checkbox.setAttribute('data-visible', true);
        if (!checkbox.classList.contains('ecl-checkbox--disabled')) {
          checkbox.addEventListener('click', this.handleClickOption);
          checkbox.addEventListener('keydown', this.handleKeyboardOnOption);
        }
        this.optionsContainer.appendChild(checkbox);
        return checkbox;
      });
    }

    this.select.parentNode.parentNode.insertBefore(
      this.selectMultiple,
      this.select.parentNode.nextSibling
    );

    document.addEventListener('click', this.handleClickOutside);

    this.select.parentNode.classList.add('ecl-select__container--hidden');

    // Respect default selected options.
    this.updateCurrentValue();

    this.form = this.element.closest('form');
    if (this.form) {
      this.form.addEventListener('reset', this.resetForm);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  /**
   * Destroy component.
   */
  destroy() {
    this.selectMultiple.removeEventListener('focusout', this.handleFocusout);
    this.input.removeEventListener('keydown', this.handleKeyboardOnSelect);
    this.input.removeEventListener('click', this.handleToggle);
    this.search.removeEventListener('keyup', this.handleSearch);
    this.search.removeEventListener('keydown', this.handleKeyboardOnSearch);
    this.selectAll.removeEventListener('click', this.handleClickSelectAll);
    this.selectAll.removeEventListener('keypress', this.handleClickSelectAll);
    this.selectAll.removeEventListener(
      'keydown',
      this.handleKeyboardOnSelectAll
    );
    this.optionsContainer.removeEventListener(
      'keydown',
      this.handleKeyboardOnOptions
    );
    this.checkboxes.forEach((checkbox) => {
      checkbox.removeEventListener('click', this.handleClickSelectAll);
      checkbox.removeEventListener('click', this.handleClickOption);
      checkbox.removeEventListener('keydown', this.handleKeyboardOnOption);
    });
    document.removeEventListener('click', this.handleClickOutside);
    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.handleEsc);
      this.closeButton.removeEventListener(
        'keydown',
        this.handleKeyboardOnClose
      );
    }
    if (this.clearAllButton) {
      this.clearAllButton.removeEventListener(
        'click',
        this.handleClickOnClearAll
      );
      this.clearAllButton.removeEventListener(
        'keydown',
        this.handleKeyboardOnClearAll
      );
    }
    if (this.selectMultiple) {
      this.selectMultiple.remove();
    }

    this.select.parentNode.classList.remove('ecl-select__container--hidden');

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }

  /**
   * @param {Integer} i
   */
  updateSelectionsCount(i) {
    let selectedOptionsCount = 0;

    if (i > 0) {
      this.selectionCount.querySelector('span').innerHTML += i;
    } else {
      selectedOptionsCount = Array.from(this.select.options).filter(
        (option) => option.selected
      ).length;
    }
    if (selectedOptionsCount > 0) {
      this.selectionCount.querySelector('span').innerHTML =
        selectedOptionsCount;
      this.selectionCount.classList.add(
        'ecl-select-multiple-selections-counter--visible'
      );
      if (this.dropDownToolbar) {
        this.dropDownToolbar.style.display = 'flex';
      }
    } else {
      this.selectionCount.classList.remove(
        'ecl-select-multiple-selections-counter--visible'
      );
      if (this.dropDownToolbar) {
        this.dropDownToolbar.style.display = 'none';
      }
    }

    if (selectedOptionsCount >= 100) {
      this.selectionCount.classList.add(
        'ecl-select-multiple-selections-counter--xxl'
      );
    }
  }

  updateCurrentValue() {
    this.input.value = Array.from(this.select.options)
      .filter((option) => option.selected) // do not rely on getAttribute as it does not work in all cases
      .map((option) => option.text)
      .join(', ');
    // Dispatch a change event once the value of the select has changed.
    this.select.dispatchEvent(new window.Event('change', { bubbles: true }));
  }

  /**
   * @param {Event} e
   */
  handleToggle(e) {
    e.preventDefault();
    if (this.searchContainer.classList.contains('hidden')) {
      this.searchContainer.classList.remove('hidden');
    } else {
      this.searchContainer.classList.add('hidden');
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
        if (option.getAttribute('selected') || option.selected) {
          option.removeAttribute('selected');
          option.selected = false;
          this.selectAll.querySelector('input').checked = false;
        } else {
          option.setAttribute('selected', 'selected');
          option.selected = true;
        }
      }
    });

    this.updateCurrentValue();
    this.updateSelectionsCount();
  }

  /**
   * @param {Event} e
   */
  handleClickSelectAll(e) {
    e.preventDefault();
    // Early returns.
    if (this.selectAll.querySelector('input').disabled) {
      return;
    }
    const checked = Select.checkCheckbox(e);
    const options = Array.from(this.select.options).filter((o) => !o.disabled);
    const checkboxes = Array.from(
      this.searchContainer.querySelectorAll('[data-visible="true"]')
    ).filter((checkbox) => !checkbox.querySelector('input').disabled);

    checkboxes.forEach((checkbox) => {
      checkbox.querySelector('input').checked = checked;
      const option = options.find(
        (o) => o.text === checkbox.getAttribute('data-select-multiple-value')
      );

      if (option) {
        if (checked) {
          option.setAttribute('selected', 'selected');
          option.selected = true;
        } else {
          option.removeAttribute('selected', 'selected');
          option.selected = false;
        }
      }
    });

    this.updateCurrentValue();
    this.updateSelectionsCount();
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
    const dropDownHeight = this.optionsContainer.offsetHeight;
    const visible = [];
    const keyword = e.target.value.toLowerCase();
    if (dropDownHeight > 0) {
      this.optionsContainer.style.height = `${dropDownHeight}px`;
    }
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
        // Highlight keyword in checkbox label.
        const checkboxElement = checkbox.querySelector('.ecl-checkbox__box');
        const checkboxLabel = checkbox.querySelector('.ecl-checkbox__label');
        if (keyword) {
          checkboxLabel.innerHTML =
            checkboxElement.outerHTML +
            checkboxLabel.textContent.replace(
              new RegExp(`${keyword}(?!([^<]+)?<)`, 'gi'),
              '<b>$&</b>'
            );
        } else {
          checkboxLabel.innerHTML =
            checkboxElement.outerHTML + checkboxLabel.textContent;
        }
        visible.push(checkbox);
      }
    });
    // Select all checkbox follows along.
    const checked = visible.filter((c) => c.querySelector('input').checked);
    if (visible.length === 0 || visible.length !== checked.length) {
      this.selectAll.querySelector('input').checked = false;
    } else {
      this.selectAll.querySelector('input').checked = true;
    }
    // Display no-results message.
    const noResultsElement = this.searchContainer.querySelector(
      '.ecl-select__multiple-no-results'
    );
    if (visible.length === 0 && !noResultsElement) {
      // Create no-results element.
      const noResultsContainer = document.createElement('div');
      const noResultsLabel = document.createElement('span');
      noResultsContainer.classList.add('ecl-select__multiple-no-results');
      noResultsLabel.innerHTML = this.textNoResults;
      noResultsContainer.appendChild(noResultsLabel);
      this.optionsContainer.appendChild(noResultsContainer);
    } else if (visible.length > 0 && noResultsElement !== null) {
      noResultsElement.parentNode.removeChild(noResultsElement);
    }
    // reset
    if (keyword.length === 0) {
      this.checkboxes.forEach((checkbox) => {
        checkbox.setAttribute('data-visible', true);
        checkbox.style.display = 'flex';
      });
      // Enable select all checkbox.
      this.selectAll.classList.remove('ecl-checkbox--disabled');
      this.selectAll.querySelector('input').disabled = false;
    } else {
      // Disable select all checkbox.
      this.selectAll.classList.add('ecl-checkbox--disabled');
      this.selectAll.querySelector('input').disabled = true;
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

  /**
   * @param {Event} e
   */
  handleKeyboardOnSelect(e) {
    switch (e.key) {
      case 'Escape':
        this.handleEsc();
        break;

      case ' ':
      case 'ArrowDown':
        this.handleToggle(e);
        this.search.focus();
        break;

      default:
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboardOnSelectAll(e) {
    switch (e.key) {
      case 'Escape':
        this.handleEsc();
        break;

      case 'ArrowDown':
        this.optionsContainer.querySelectorAll('input')[0].focus();
        e.preventDefault();
        break;

      case 'ArrowUp':
        this.search.focus();
        break;

      default:
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboardOnOptions(e) {
    switch (e.key) {
      case 'Escape':
        this.handleEsc();
        break;

      case 'ArrowDown':
        this.moveFocus('down');
        break;

      case 'ArrowUp':
        this.moveFocus('up');
        break;

      case 'Tab':
        e.preventDefault();
        this.moveFocus('down');
        break;

      default:
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboardOnSearch(e) {
    switch (e.key) {
      case 'Escape':
        this.handleEsc();
        break;

      case 'ArrowDown':
        if (this.selectAll.querySelector('input').disabled) {
          const firstAvailable = Array.from(
            this.optionsContainer.querySelectorAll('.ecl-checkbox')
          ).filter((el) => el.style.display !== 'none');
          if (firstAvailable[0]) {
            firstAvailable[0].querySelector('input').focus();
          }
        } else {
          this.selectAll.querySelector('input').focus();
        }
        break;

      case 'ArrowUp':
        this.input.focus();
        this.handleToggle(e);
        break;

      default:
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboardOnOption(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.handleClickOption(e);
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboardOnClearAll(e) {
    switch (e.key) {
      case 'Enter':
      case ' ':
        this.handleClickOnClearAll();
        this.input.focus();
        break;

      case 'ArrowRight':
        this.clearAllButton.nextSibling.focus();
        break;

      case 'ArrowUp':
        this.optionsContainer.lastChild.querySelector('input').focus();
        break;

      default:
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboardOnClose(e) {
    switch (e.key) {
      case 'ArrowLeft':
        this.closeButton.previousSibling.focus();
        break;

      case 'ArrowUp':
        this.optionsContainer.lastChild.querySelector('input').focus();
        break;

      case 'Tab':
        e.preventDefault();
        this.input.focus();
        break;

      default:
    }
  }

  handleEsc() {
    this.searchContainer.classList.add('hidden');
  }

  /**
   * @param {upOrDown}
   */
  moveFocus(upOrDown) {
    const activeEl = document.activeElement;
    const options = Array.from(
      activeEl.parentElement.parentElement.querySelectorAll(
        '.ecl-checkbox__input'
      )
    );
    const activeIndex = options.indexOf(activeEl);
    if (upOrDown === 'down') {
      const nextSiblings = options
        .splice(activeIndex + 1, options.length)
        .filter(
          (el) => !el.disabled && el.parentElement.style.display !== 'none'
        );
      if (nextSiblings.length > 0) {
        nextSiblings[0].focus();
      } else {
        // eslint-disable-next-line no-lonely-if
        if (
          this.dropDownToolbar &&
          this.dropDownToolbar.style.display === 'flex'
        ) {
          this.dropDownToolbar.firstChild.focus();
        } else {
          this.input.focus();
        }
      }
    } else {
      const previousSiblings = options
        .splice(0, activeIndex)
        .filter(
          (el) => !el.disabled && el.parentElement.style.display !== 'none'
        );
      if (previousSiblings.length > 0) {
        previousSiblings.pop().focus();
      } else {
        this.optionsContainer.scrollTop = 0;
        if (!this.selectAll.querySelector('input').disabled) {
          this.selectAll.querySelector('input').focus();
        } else {
          this.search.focus();
        }
      }
    }
  }

  /**
   * Reset values of the Multiselect.
   */
  handleClickOnClearAll() {
    Array.from(this.select.options).forEach((option) => {
      const checkbox = this.selectMultiple.querySelector(
        `[data-select-multiple-value="${option.text}"]`
      );
      const input = checkbox.querySelector('.ecl-checkbox__input');
      input.checked = false;
      option.removeAttribute('selected', 'selected');
      option.selected = false;
    });

    this.selectAll.querySelector('.ecl-checkbox__input').checked = false;
    this.updateCurrentValue();
    this.updateSelectionsCount(0);
  }

  /**
   * Reset Multiselect.
   */
  resetForm() {
    // A slight timeout is necessary to execute the function just after the original reset of the form.
    setTimeout(() => {
      Array.from(this.select.options).forEach((option) => {
        const checkbox = this.selectMultiple.querySelector(
          `[data-select-multiple-value="${option.text}"]`
        );
        const input = checkbox.querySelector('.ecl-checkbox__input');
        if (input.checked) {
          option.setAttribute('selected', 'selected');
          option.selected = true;
        } else {
          option.removeAttribute('selected', 'selected');
          option.selected = false;
        }
      });
      this.updateCurrentValue();
    }, 10);
  }
}

export default Select;
