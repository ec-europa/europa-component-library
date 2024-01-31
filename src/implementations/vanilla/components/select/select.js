/* eslint-disable no-return-assign */
import { queryOne } from '@ecl/dom-utils';
import getSystem from '@ecl/builder/utils/getSystem';
import EventManager from '@ecl/event-manager';
import iconSvgAllCheckEc from '@ecl/resources-ec-icons/dist/svg/all/check.svg';
import iconSvgAllCheckEu from '@ecl/resources-eu-icons/dist/svg/all/check.svg';
import iconSvgAllCornerArrowEc from '@ecl/resources-ec-icons/dist/svg/all/corner-arrow.svg';
import iconSvgAllCornerArrowEu from '@ecl/resources-eu-icons/dist/svg/all/corner-arrow.svg';

const system = getSystem();
const iconSvgAllCheck = system === 'eu' ? iconSvgAllCheckEu : iconSvgAllCheckEc;
const iconSvgAllCornerArrow =
  system === 'eu' ? iconSvgAllCornerArrowEu : iconSvgAllCornerArrowEc;
const iconSize = system === 'eu' ? 's' : 'xs';

/**
 * This API mostly refers to the multiple select, in the default select only three methods are actually used:
 * handleToggle(), handleKeyboardOnSelect() and handleEsc().
 *
 * For the multiple select there are multiple labels contained in this component. You can set them in 2 ways:
 * directly as a string or through data attributes.
 * Textual values have precedence and if they are not provided, then DOM data attributes are used.
 *
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.defaultText The default placeholder
 * @param {String} options.searchText The label for search
 * @param {String} options.selectAllText The label for select all
 * @param {String} options.selectMultipleSelector The data attribute selector of the select multiple
 * @param {String} options.defaultTextAttribute The data attribute for the default placeholder text
 * @param {String} options.searchTextAttribute The data attribute for the default search text
 * @param {String} options.selectAllTextAttribute The data attribute for the select all text
 * @param {String} options.noResultsTextAttribute The data attribute for the no results options text
 * @param {String} options.closeLabelAttribute The data attribute for the close button
 * @param {String} options.clearAllLabelAttribute The data attribute for the clear all button
 * @param {String} options.selectMultiplesSelectionCountSelector The selector for the counter of selected options
 * @param {String} options.closeButtonLabel The label of the close button
 * @param {String} options.clearAllButtonLabel The label of the clear all button
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

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event onToggle
   *   Triggered when the dropdown is toggled
   * @event onSelection
   *   Triggered when a selection is made or removed
   * @event onSelectAll
   *   Triggered when the select all checkbox is clicked
   * @event onReset
   *   Triggered when the select values are reset
   * @event onSearch
   *   Triggered when the user types in the search box
   * @memberof Select
   */
  supportedEvents = [
    'onToggle',
    'onSelection',
    'onSelectAll',
    'onReset',
    'onSearch',
  ];

  constructor(
    element,
    {
      defaultText = '',
      searchText = '',
      selectAllText = '',
      noResultsText = '',
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
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;
    this.eventManager = new EventManager();

    // Options
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
    this.visibleOptions = null;
    this.searchContainer = null;
    this.countSelections = null;
    this.form = null;
    this.formGroup = null;
    this.label = null;
    this.helper = null;
    this.invalid = null;
    this.selectMultipleId = null;
    this.multiple =
      queryOne(this.selectMultipleSelector, this.element.parentNode) || false;
    this.isOpen = false;

    // Bind `this` for use in callbacks
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClickOption = this.handleClickOption.bind(this);
    this.handleClickSelectAll = this.handleClickSelectAll.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
    this.handleFocusout = this.handleFocusout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleClickOnClearAll = this.handleClickOnClearAll.bind(this);
    this.handleKeyboardOnSelect = this.handleKeyboardOnSelect.bind(this);
    this.handleKeyboardOnSelectAll = this.handleKeyboardOnSelectAll.bind(this);
    this.handleKeyboardOnSearch = this.handleKeyboardOnSearch.bind(this);
    this.handleKeyboardOnOptions = this.handleKeyboardOnOptions.bind(this);
    this.handleKeyboardOnOption = this.handleKeyboardOnOption.bind(this);
    this.handleKeyboardOnClearAll = this.handleKeyboardOnClearAll.bind(this);
    this.handleKeyboardOnClose = this.handleKeyboardOnClose.bind(this);
    this.setCurrentValue = this.setCurrentValue.bind(this);
    this.update = this.update.bind(this);
  }

  /**
   * Static method to create an svg icon.
   *
   * @static
   * @private
   * @returns {HTMLElement}
   */
  static #createSvgIcon(icon, classes) {
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
   * Static method to create a checkbox element.
   *
   * @static
   * @param {Object} options
   * @param {String} options.id
   * @param {String} options.text
   * @param {String} [options.extraClass] - additional CSS class
   * @param {String} [options.disabled] - relevant when re-creating an option
   * @param {String} [options.selected] - relevant when re-creating an option
   * @param {String} ctx
   * @private
   * @returns {HTMLElement}
   */
  static #createCheckbox(options, ctx) {
    // Early returns.
    if (!options || !ctx) return '';
    const { id, text, disabled, selected, extraClass } = options;
    if (!id || !text) return '';

    // Elements to work with.
    const checkbox = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const box = document.createElement('span');
    const labelText = document.createElement('span');

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
    input.setAttribute('name', `${ctx}-${id}`);
    checkbox.appendChild(input);
    label.classList.add('ecl-checkbox__label');
    label.setAttribute('for', `${ctx}-${id}`);
    box.classList.add('ecl-checkbox__box');
    box.setAttribute('aria-hidden', true);
    box.appendChild(
      Select.#createSvgIcon(
        iconSvgAllCheck,
        'ecl-icon ecl-icon--s ecl-checkbox__icon',
      ),
    );
    label.appendChild(box);
    labelText.classList.add('ecl-checkbox__label-text');
    labelText.innerHTML = text;
    label.appendChild(labelText);
    checkbox.appendChild(label);
    return checkbox;
  }

  /**
   * Static method to generate the select icon
   *
   * @static
   * @private
   * @returns {HTMLElement}
   */
  static #createSelectIcon() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('ecl-select__icon');
    const button = document.createElement('button');
    button.classList.add(
      'ecl-button',
      'ecl-button--ghost',
      'ecl-button--icon-only',
    );
    button.setAttribute('tabindex', '-1');
    const labelWrapper = document.createElement('span');
    labelWrapper.classList.add('ecl-button__container');
    const label = document.createElement('span');
    label.classList.add('ecl-button__label');
    label.textContent = 'Toggle dropdown';
    labelWrapper.appendChild(label);
    const icon = Select.#createSvgIcon(
      iconSvgAllCornerArrow,
      `ecl-icon ecl-icon--${iconSize} ecl-icon--rotate-180`,
    );
    labelWrapper.appendChild(icon);
    button.appendChild(labelWrapper);
    wrapper.appendChild(button);
    return wrapper;
  }

  /**
   * Static method to programmatically check an ECL-specific checkbox when previously default has been prevented.
   *
   * @static
   * @param {Event} e
   * @private
   */
  static #checkCheckbox(e) {
    const input = e.target.closest('.ecl-checkbox').querySelector('input');
    input.checked = !input.checked;

    return input.checked;
  }

  /**
   * Static method to generate a random string
   *
   * @static
   * @param {number} length
   * @private
   */
  static #generateRandomId(length) {
    return Math.random().toString(36).substr(2, length);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.select = this.element;

    if (this.multiple) {
      const containerClasses = Array.from(this.select.parentElement.classList);
      this.textDefault =
        this.defaultText ||
        this.element.getAttribute(this.defaultTextAttribute);
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
      // Retrieve the id from the markup or generate one.
      this.selectMultipleId =
        this.element.id || `select-multiple-${Select.#generateRandomId(4)}`;
      this.element.id = this.selectMultipleId;

      this.formGroup = this.element.closest('.ecl-form-group');
      if (this.formGroup) {
        this.formGroup.setAttribute('role', 'application');
        this.label = queryOne('.ecl-form-label', this.formGroup);
        this.helper = queryOne('.ecl-help-block', this.formGroup);
        this.invalid = queryOne('.ecl-feedback-message', this.formGroup);
      }

      // Disable focus on default select
      this.select.setAttribute('tabindex', '-1');

      this.selectMultiple = document.createElement('div');
      this.selectMultiple.classList.add('ecl-select__multiple');
      // Close the searchContainer when tabbing out of the selectMultiple
      this.selectMultiple.addEventListener('focusout', this.handleFocusout);

      this.inputContainer = document.createElement('div');
      this.inputContainer.classList.add(...containerClasses);
      this.selectMultiple.appendChild(this.inputContainer);

      this.input = document.createElement('button');
      this.input.classList.add('ecl-select', 'ecl-select__multiple-toggle');
      this.input.setAttribute('type', 'button');
      this.input.setAttribute(
        'aria-controls',
        `${this.selectMultipleId}-dropdown`,
      );
      this.input.setAttribute('id', `${this.selectMultipleId}-toggle`);
      this.input.setAttribute('aria-expanded', false);
      if (containerClasses.find((c) => c.includes('disabled'))) {
        this.input.setAttribute('disabled', true);
      }

      // Add accessibility attributes
      if (this.label) {
        this.label.setAttribute('for', `${this.selectMultipleId}-toggle`);
        this.input.setAttribute('aria-labelledby', this.label.id);
      }
      let describedby = '';
      if (this.helper) {
        describedby = this.helper.id;
      }
      if (this.invalid) {
        describedby = describedby
          ? `${describedby} ${this.invalid.id}`
          : this.invalid.id;
      }
      if (describedby) {
        this.input.setAttribute('aria-describedby', describedby);
      }

      this.input.addEventListener('keydown', this.handleKeyboardOnSelect);
      this.input.addEventListener('click', this.handleToggle);
      this.selectionCount = document.createElement('div');
      this.selectionCount.classList.add(
        this.selectMultiplesSelectionCountSelector,
      );
      this.selectionCountText = document.createElement('span');
      this.selectionCount.appendChild(this.selectionCountText);

      this.inputContainer.appendChild(this.selectionCount);
      this.inputContainer.appendChild(this.input);
      this.inputContainer.appendChild(Select.#createSelectIcon());

      this.searchContainer = document.createElement('div');
      this.searchContainer.style.display = 'none';
      this.searchContainer.classList.add(
        'ecl-select__multiple-dropdown',
        ...containerClasses,
      );

      this.searchContainer.setAttribute(
        'id',
        `${this.selectMultipleId}-dropdown`,
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
          (option) => !option.disabled,
        ).length;

        this.selectAll = Select.#createCheckbox(
          {
            id: `all-${Select.#generateRandomId(4)}`,
            text: `${this.textSelectAll} (${optionsCount})`,
            extraClass: 'ecl-select__multiple-all',
          },
          this.selectMultipleId,
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

        if (this.closeButtonLabel) {
          this.closeButton = document.createElement('button');
          this.closeButton.textContent = this.closeButtonLabel;
          this.closeButton.classList.add('ecl-button', 'ecl-button--primary');
          this.closeButton.addEventListener('click', this.handleEsc);
          this.closeButton.addEventListener(
            'keydown',
            this.handleKeyboardOnClose,
          );

          if (this.dropDownToolbar) {
            this.dropDownToolbar.appendChild(this.closeButton);
            this.searchContainer.appendChild(this.dropDownToolbar);
            this.dropDownToolbar.style.display = 'none';
          }
        }

        if (this.clearAllButtonLabel) {
          this.clearAllButton = document.createElement('button');
          this.clearAllButton.textContent = this.clearAllButtonLabel;
          this.clearAllButton.classList.add(
            'ecl-button',
            'ecl-button--secondary',
          );
          this.clearAllButton.addEventListener(
            'click',
            this.handleClickOnClearAll,
          );
          this.clearAllButton.addEventListener(
            'keydown',
            this.handleKeyboardOnClearAll,
          );
          this.dropDownToolbar.appendChild(this.clearAllButton);
        }
      }

      this.selectAll.addEventListener(
        'keydown',
        this.handleKeyboardOnSelectAll,
      );
      this.optionsContainer.addEventListener(
        'keydown',
        this.handleKeyboardOnOptions,
      );

      if (this.select.options && this.select.options.length > 0) {
        this.checkboxes = Array.from(this.select.options).map((option) => {
          let optgroup = '';
          let checkbox = '';
          if (option.parentNode.tagName === 'OPTGROUP') {
            if (
              !queryOne(
                `fieldset[data-ecl-multiple-group="${option.parentNode.getAttribute(
                  'label',
                )}"]`,
                this.optionsContainer,
              )
            ) {
              optgroup = document.createElement('fieldset');
              const title = document.createElement('legend');
              title.classList.add('ecl-select__multiple-group__title');
              title.innerHTML = option.parentNode.getAttribute('label');
              optgroup.appendChild(title);
              optgroup.setAttribute(
                'data-ecl-multiple-group',
                option.parentNode.getAttribute('label'),
              );
              optgroup.classList.add('ecl-select__multiple-group');
              this.optionsContainer.appendChild(optgroup);
            } else {
              optgroup = queryOne(
                `fieldset[data-ecl-multiple-group="${option.parentNode.getAttribute(
                  'label',
                )}"]`,
                this.optionsContainer,
              );
            }
          }

          if (option.selected) {
            this.#updateSelectionsCount(1);
            if (this.dropDownToolbar) {
              this.dropDownToolbar.style.display = 'flex';
            }
          }
          checkbox = Select.#createCheckbox(
            {
              // spread operator does not work in storybook context so we map 1:1
              id: option.value,
              text: option.text,
              disabled: option.disabled,
              selected: option.selected,
            },
            this.selectMultipleId,
          );

          checkbox.setAttribute('data-visible', true);
          if (!checkbox.classList.contains('ecl-checkbox--disabled')) {
            checkbox.addEventListener('click', this.handleClickOption);
            checkbox.addEventListener('keydown', this.handleKeyboardOnOption);
          }
          if (optgroup) {
            optgroup.appendChild(checkbox);
          } else {
            this.optionsContainer.appendChild(checkbox);
          }

          return checkbox;
        });
      } else {
        this.checkboxes = [];
      }
      this.visibleOptions = this.checkboxes;

      this.select.parentNode.parentNode.insertBefore(
        this.selectMultiple,
        this.select.parentNode.nextSibling,
      );

      this.select.parentNode.classList.add('ecl-select__container--hidden');

      // Respect default selected options.
      this.#updateCurrentValue();

      this.form = this.element.closest('form');
      if (this.form) {
        this.form.addEventListener('reset', this.resetForm);
      }
    } else {
      this.shouldHandleClick = true;
      this.select.addEventListener('keydown', this.handleKeyboardOnSelect);
      this.select.addEventListener('blur', this.handleEsc);
      this.select.addEventListener('click', this.handleToggle, true);
      this.select.addEventListener('mousedown', this.handleToggle, true);
    }

    document.addEventListener('click', this.handleClickOutside);

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Update instance.
   *
   * @param {Integer} i
   */
  update(i) {
    this.#updateCurrentValue();
    this.#updateSelectionsCount(i);
  }

  /**
   * Set the selected value(s) programmatically.
   *
   * @param {string | Array<string>} values - A string or an array of values or labels to set as selected.
   * @param {string} [op='replace'] - The operation mode. Use 'add' to keep the previous selections.
   * @throws {Error} Throws an error if an invalid operation mode is provided.
   *
   * @example
   * // Replace current selection with new values
   * setCurrentValue(['value1', 'value2']);
   *
   * // Add to current selection without clearing previous selections
   * setCurrentValue(['value3', 'value4'], 'add');
   *
   */
  setCurrentValue(values, op = 'replace') {
    if (op !== 'replace' && op !== 'add') {
      throw new Error('Invalid operation mode. Use "replace" or "add".');
    }

    const valuesArray = typeof values === 'string' ? [values] : values;

    Array.from(this.select.options).forEach((option) => {
      if (op === 'replace') {
        option.selected = false;
      }
      if (
        valuesArray.includes(option.value) ||
        valuesArray.includes(option.label)
      ) {
        option.selected = true;
      }
    });

    this.update();
  }

  /**
   * Event callback to show/hide the dropdown
   *
   * @param {Event} e
   * @callback
   */
  handleToggle(e) {
    if (this.multiple) {
      e.preventDefault();
      this.input.classList.toggle('ecl-select--active');
      if (this.searchContainer.style.display === 'none') {
        this.searchContainer.style.display = 'block';
        this.input.setAttribute('aria-expanded', true);
        this.isOpen = true;
      } else {
        this.searchContainer.style.display = 'none';
        this.input.setAttribute('aria-expanded', false);
        this.isOpen = false;
      }
    } else if (e.type === 'click' && !this.shouldHandleClick) {
      this.shouldHandleClick = true;
      this.select.classList.toggle('ecl-select--active');
    } else if (e.type === 'mousedown' && this.shouldHandleClick) {
      this.shouldHandleClick = false;
      this.select.classList.toggle('ecl-select--active');
    } else if (e.type === 'keydown') {
      this.shouldHandleClick = false;
      this.select.classList.toggle('ecl-select--active');
    }

    const eventData = { opened: this.isOpen, e };
    this.trigger('onToggle', eventData);
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   * @memberof Select
   * @instance
   *
   * @example
   * // Registering a callback for the 'onToggle' event
   * select.on('onToggle', (event) => {
   *   console.log('Toggle event occurred!', event);
   * });
   */
  on(eventName, callback) {
    this.eventManager.on(eventName, callback);
  }

  /**
   * Trigger a component event.
   *
   * @param {string} eventName - The name of the event to trigger.
   * @param {any} eventData - Data associated with the event.
   * @memberof Select
   * @instance
   *
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Destroy the component instance.
   */
  destroy() {
    if (this.multiple) {
      this.selectMultiple.removeEventListener('focusout', this.handleFocusout);
      this.input.removeEventListener('keydown', this.handleKeyboardOnSelect);
      this.input.removeEventListener('click', this.handleToggle);
      this.search.removeEventListener('keyup', this.handleSearch);
      this.search.removeEventListener('keydown', this.handleKeyboardOnSearch);
      this.selectAll.removeEventListener('click', this.handleClickSelectAll);
      this.selectAll.removeEventListener('keypress', this.handleClickSelectAll);
      this.selectAll.removeEventListener(
        'keydown',
        this.handleKeyboardOnSelectAll,
      );
      this.optionsContainer.removeEventListener(
        'keydown',
        this.handleKeyboardOnOptions,
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
          this.handleKeyboardOnClose,
        );
      }
      if (this.clearAllButton) {
        this.clearAllButton.removeEventListener(
          'click',
          this.handleClickOnClearAll,
        );
        this.clearAllButton.removeEventListener(
          'keydown',
          this.handleKeyboardOnClearAll,
        );
      }
      if (this.selectMultiple) {
        this.selectMultiple.remove();
      }

      this.select.parentNode.classList.remove('ecl-select__container--hidden');
    } else {
      this.select.removeEventListener('focus', this.handleToggle);
    }

    this.select.removeEventListener('blur', this.handleToggle);
    document.removeEventListener('click', this.handleClickOutside);

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Private method to handle the update of the selected options counter.
   *
   * @param {Integer} i
   * @private
   */
  #updateSelectionsCount(i) {
    let selectedOptionsCount = 0;

    if (i > 0) {
      this.selectionCount.querySelector('span').innerHTML += i;
    } else {
      selectedOptionsCount = Array.from(this.select.options).filter(
        (option) => option.selected,
      ).length;
    }
    if (selectedOptionsCount > 0) {
      this.selectionCount.querySelector('span').innerHTML =
        selectedOptionsCount;
      this.selectionCount.classList.add(
        'ecl-select-multiple-selections-counter--visible',
      );
      if (this.dropDownToolbar) {
        this.dropDownToolbar.style.display = 'flex';
      }
    } else {
      this.selectionCount.classList.remove(
        'ecl-select-multiple-selections-counter--visible',
      );
      if (this.dropDownToolbar) {
        this.dropDownToolbar.style.display = 'none';
      }
    }

    if (selectedOptionsCount >= 100) {
      this.selectionCount.classList.add(
        'ecl-select-multiple-selections-counter--xxl',
      );
    }
  }

  /**
   * Private method to update the select value.
   *
   * @private
   */
  #updateCurrentValue() {
    const optionSelected = Array.from(this.select.options)
      .filter((option) => option.selected) // do not rely on getAttribute as it does not work in all cases
      .map((option) => option.text)
      .join(', ');

    this.input.innerHTML = optionSelected || this.textDefault || '';

    if (optionSelected !== '' && this.label) {
      this.label.setAttribute(
        'aria-label',
        `${this.label.innerText} ${optionSelected}`,
      );
    } else if (optionSelected === '' && this.label) {
      this.label.removeAttribute('aria-label');
    }

    this.trigger('onSelection', { selected: optionSelected });
    // Dispatch a change event once the value of the select has changed.
    this.select.dispatchEvent(new window.Event('change', { bubbles: true }));
  }

  /**
   * Private method to handle the focus switch.
   *
   * @param {upOrDown}
   * @private
   */
  #moveFocus(upOrDown) {
    const activeEl = document.activeElement;
    const hasGroups = activeEl.parentElement.parentElement.classList.contains(
      'ecl-select__multiple-group',
    );
    const options = !hasGroups
      ? Array.from(
          activeEl.parentElement.parentElement.querySelectorAll(
            '.ecl-checkbox__input',
          ),
        )
      : Array.from(
          activeEl.parentElement.parentElement.parentElement.querySelectorAll(
            '.ecl-checkbox__input',
          ),
        );
    const activeIndex = options.indexOf(activeEl);
    if (upOrDown === 'down') {
      const nextSiblings = options
        .splice(activeIndex + 1, options.length)
        .filter(
          (el) => !el.disabled && el.parentElement.style.display !== 'none',
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
          (el) => !el.disabled && el.parentElement.style.display !== 'none',
        );
      if (previousSiblings.length > 0) {
        previousSiblings[previousSiblings.length - 1].focus();
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
   * Event callback to handle the click on a checkbox.
   *
   * @param {Event} e
   * @callback
   */
  handleClickOption(e) {
    e.preventDefault();
    Select.#checkCheckbox(e);

    // Toggle values
    const checkbox = e.target.closest('.ecl-checkbox');
    Array.from(this.select.options).forEach((option) => {
      if (option.text === checkbox.getAttribute('data-select-multiple-value')) {
        if (option.getAttribute('selected') || option.selected) {
          option.selected = false;
          this.selectAll.querySelector('input').checked = false;
        } else {
          option.selected = true;
        }
      }
    });

    this.update();
  }

  /**
   * Event callback to handle the click on the select all checkbox.
   *
   * @param {Event} e
   * @callback
   */
  handleClickSelectAll(e) {
    e.preventDefault();
    // Early returns.
    if (this.selectAll.querySelector('input').disabled) {
      return;
    }
    const checked = Select.#checkCheckbox(e);
    const options = Array.from(this.select.options).filter((o) => !o.disabled);
    const checkboxes = Array.from(
      this.searchContainer.querySelectorAll('[data-visible="true"]'),
    ).filter((checkbox) => !checkbox.querySelector('input').disabled);

    checkboxes.forEach((checkbox) => {
      checkbox.querySelector('input').checked = checked;
      const option = options.find(
        (o) => o.text === checkbox.getAttribute('data-select-multiple-value'),
      );

      if (option) {
        if (checked) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
    });

    this.update();
    this.trigger('onSelectAll', { selected: options });
  }

  /**
   * Event callback to handle moving the focus out of the select.
   *
   * @param {Event} e
   * @callback
   */
  handleFocusout(e) {
    if (
      e.relatedTarget &&
      this.selectMultiple &&
      !this.selectMultiple.contains(e.relatedTarget) &&
      this.searchContainer.style.display === 'block'
    ) {
      this.searchContainer.style.display = 'none';
      this.input.classList.remove('ecl-select--active');
      this.input.setAttribute('aria-expanded', false);
    } else if (
      e.relatedTarget &&
      !this.selectMultiple &&
      !this.select.parentNode.contains(e.relatedTarget)
    ) {
      this.select.blur();
    }
  }

  /**
   * Event callback to handle the user typing in the search field.
   *
   * @param {Event} e
   * @callback
   */
  handleSearch(e) {
    const dropDownHeight = this.optionsContainer.offsetHeight;
    this.visibleOptions = [];
    const keyword = e.target.value.toLowerCase();
    let eventDetails = {};
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
        checkbox.removeAttribute('data-visible');
        checkbox.style.display = 'none';
      } else {
        checkbox.setAttribute('data-visible', true);
        checkbox.style.display = 'flex';
        // Highlight keyword in checkbox label.
        const checkboxLabelText = checkbox.querySelector(
          '.ecl-checkbox__label-text',
        );
        checkboxLabelText.textContent = checkboxLabelText.textContent.replace(
          '.cls-1{fill:none}',
          '',
        );
        if (keyword) {
          checkboxLabelText.innerHTML = checkboxLabelText.textContent.replace(
            new RegExp(`${keyword}(?!([^<]+)?<)`, 'gi'),
            '<b>$&</b>',
          );
        }
        this.visibleOptions.push(checkbox);
      }
    });
    // Select all checkbox follows along.
    const checked = this.visibleOptions.filter(
      (c) => c.querySelector('input').checked,
    );
    if (
      this.visibleOptions.length === 0 ||
      this.visibleOptions.length !== checked.length
    ) {
      this.selectAll.querySelector('input').checked = false;
    } else {
      this.selectAll.querySelector('input').checked = true;
    }
    // Display no-results message.
    const noResultsElement = this.searchContainer.querySelector(
      '.ecl-select__multiple-no-results',
    );
    const groups = this.optionsContainer.getElementsByClassName(
      'ecl-select__multiple-group',
    );
    // eslint-disable-next-line no-restricted-syntax
    for (const group of groups) {
      group.style.display = 'none';
      // eslint-disable-next-line no-restricted-syntax
      const groupedCheckboxes = [...group.children].filter((node) =>
        node.classList.contains('ecl-checkbox'),
      );
      groupedCheckboxes.forEach((single) => {
        if (single.hasAttribute('data-visible')) {
          single.closest('.ecl-select__multiple-group').style.display = 'block';
        }
      });
    }

    if (this.visibleOptions.length === 0 && !noResultsElement) {
      // Create no-results element.
      const noResultsContainer = document.createElement('div');
      const noResultsLabel = document.createElement('span');
      noResultsContainer.classList.add('ecl-select__multiple-no-results');
      noResultsLabel.innerHTML = this.textNoResults;
      noResultsContainer.appendChild(noResultsLabel);
      this.optionsContainer.appendChild(noResultsContainer);
    } else if (this.visibleOptions.length > 0 && noResultsElement !== null) {
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
    if (this.visibleOptions.length > 0) {
      const visibleLabels = this.visibleOptions.map((option) => {
        let label = null;
        const labelEl = queryOne('.ecl-checkbox__label-text', option);
        if (labelEl) {
          label = labelEl.innerHTML.replace(/<\/?b>/g, '');
        }
        return label || '';
      });
      eventDetails = {
        results: visibleLabels,
        text: e.target.value.toLowerCase(),
      };
    } else {
      eventDetails = { results: 'none', text: e.target.value.toLowerCase() };
    }
    this.trigger('onSearch', eventDetails);
  }

  /**
   * Event callback to handle the click outside the select.
   *
   * @param {Event} e
   * @callback
   */
  handleClickOutside(e) {
    if (
      e.target &&
      this.selectMultiple &&
      !this.selectMultiple.contains(e.target) &&
      this.searchContainer.style.display === 'block'
    ) {
      this.searchContainer.style.display = 'none';
      this.input.classList.remove('ecl-select--active');
      this.input.setAttribute('aria-expanded', false);
    } else if (
      e.target &&
      !this.selectMultiple &&
      !this.select.parentNode.contains(e.target)
    ) {
      this.select.classList.remove('ecl-select--active');
    }
  }

  /**
   * Event callback to handle keyboard events on the select.
   *
   * @param {Event} e
   * @callback
   */
  handleKeyboardOnSelect(e) {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        this.handleEsc(e);
        break;

      case ' ':
      case 'Enter':
        this.handleToggle(e);
        if (this.multiple) {
          e.preventDefault();
          this.search.focus();
        }
        break;

      case 'ArrowDown':
        if (this.multiple) {
          e.preventDefault();
          this.handleToggle(e);
        }
        break;

      default:
    }
  }

  /**
   * Event callback to handle keyboard events on the select all checkbox.
   *
   * @param {Event} e
   * @callback
   */
  handleKeyboardOnSelectAll(e) {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        this.handleEsc(e);
        break;

      case 'ArrowDown':
        e.preventDefault();
        if (this.visibleOptions.length > 0) {
          this.visibleOptions[0].querySelector('input').focus();
        } else {
          this.input.focus();
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        this.search.focus();
        break;

      case 'Tab':
        e.preventDefault();
        if (e.shiftKey) {
          this.search.focus();
        } else if (this.visibleOptions.length > 0) {
          this.visibleOptions[0].querySelector('input').focus();
        } else {
          this.input.focus();
        }
        break;

      default:
    }
  }

  /**
   * Event callback to handle keyboard events on the dropdown.
   *
   * @param {Event} e
   * @callback
   */
  handleKeyboardOnOptions(e) {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        this.handleEsc(e);
        break;

      case 'ArrowDown':
        e.preventDefault();
        this.#moveFocus('down');
        break;

      case 'ArrowUp':
        e.preventDefault();
        this.#moveFocus('up');
        break;

      case 'Tab':
        e.preventDefault();
        if (e.shiftKey) {
          this.#moveFocus('up');
        } else {
          this.#moveFocus('down');
        }
        break;

      default:
    }
  }

  /**
   * Event callback to handle keyboard events
   *
   * @param {Event} e
   * @callback
   */
  handleKeyboardOnSearch(e) {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        this.handleEsc(e);
        break;

      case 'ArrowDown':
        e.preventDefault();
        if (this.selectAll.querySelector('input').disabled) {
          if (this.visibleOptions.length > 0) {
            this.visibleOptions[0].querySelector('input').focus();
          } else {
            this.input.focus();
          }
        } else {
          this.selectAll.querySelector('input').focus();
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        this.input.focus();
        this.handleToggle(e);
        break;

      default:
    }
  }

  /**
   * Event callback to handle the click on an option.
   *
   * @param {Event} e
   * @callback
   */
  handleKeyboardOnOption(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.handleClickOption(e);
    }
  }

  /**
   * Event callback to handle keyboard events on the clear all button.
   *
   * @param {Event} e
   * @callback
   */
  handleKeyboardOnClearAll(e) {
    e.preventDefault();

    switch (e.key) {
      case 'Enter':
      case ' ':
        this.handleClickOnClearAll(e);
        this.trigger('onReset', e);
        this.input.focus();
        break;

      case 'ArrowDown':
        this.input.focus();
        break;

      case 'ArrowUp':
        if (this.closeButton) {
          this.closeButton.focus();
        } else {
          // eslint-disable-next-line no-lonely-if
          if (this.visibleOptions.length > 0) {
            this.visibleOptions[this.visibleOptions.length - 1]
              .querySelector('input')
              .focus();
          } else {
            this.search.focus();
          }
        }
        break;

      case 'Tab':
        if (e.shiftKey) {
          if (this.closeButton) {
            this.closeButton.focus();
          } else {
            // eslint-disable-next-line no-lonely-if
            if (this.visibleOptions.length > 0) {
              this.visibleOptions[this.visibleOptions.length - 1]
                .querySelector('input')
                .focus();
            } else {
              this.search.focus();
            }
          }
        } else {
          this.input.focus();
          this.handleToggle(e);
        }
        break;

      default:
    }
  }

  /**
   * Event callback for handling keyboard events in the close button.
   *
   * @param {Event} e
   * @callback
   */
  handleKeyboardOnClose(e) {
    e.preventDefault();

    switch (e.key) {
      case 'Enter':
      case ' ':
        this.handleEsc(e);
        this.input.focus();
        break;

      case 'ArrowUp':
        if (this.visibleOptions.length > 0) {
          this.visibleOptions[this.visibleOptions.length - 1]
            .querySelector('input')
            .focus();
        } else {
          this.input.focus();
          this.handleToggle(e);
        }
        break;

      case 'ArrowDown':
        if (this.clearAllButton) {
          this.clearAllButton.focus();
        } else {
          this.input.focus();
          this.handleToggle(e);
        }
        break;

      case 'Tab':
        if (!e.shiftKey) {
          if (this.clearAllButton) {
            this.clearAllButton.focus();
          } else {
            this.input.focus();
            this.handleToggle(e);
          }
        } else {
          // eslint-disable-next-line no-lonely-if
          if (this.visibleOptions.length > 0) {
            this.visibleOptions[this.visibleOptions.length - 1]
              .querySelector('input')
              .focus();
          } else {
            this.input.focus();
            this.handleToggle(e);
          }
        }
        break;

      default:
    }
  }

  /**
   * Event callback to handle different events which will close the dropdown.
   *
   * @param {Event} e
   * @callback
   */
  handleEsc(e) {
    if (this.multiple) {
      e.preventDefault();
      this.searchContainer.style.display = 'none';
      this.input.setAttribute('aria-expanded', false);
      this.input.blur();
      this.input.classList.remove('ecl-select--active');
    } else {
      this.select.classList.remove('ecl-select--active');
    }
  }

  /**
   * Event callback to handle the click on the clear all button.
   *
   * @param {Event} e
   * @callback
   */
  handleClickOnClearAll(e) {
    e.preventDefault();
    Array.from(this.select.options).forEach((option) => {
      const checkbox = this.selectMultiple.querySelector(
        `[data-select-multiple-value="${option.text}"]`,
      );
      const input = checkbox.querySelector('.ecl-checkbox__input');
      input.checked = false;
      option.selected = false;
    });

    this.selectAll.querySelector('.ecl-checkbox__input').checked = false;
    this.update(0);
    this.trigger('onReset', e);
  }

  /**
   * Event callback to reset the multiple select on form reset.
   *
   * @callback
   */
  resetForm() {
    if (this.multiple) {
      // A slight timeout is necessary to execute the function just after the original reset of the form.
      setTimeout(() => {
        Array.from(this.select.options).forEach((option) => {
          const checkbox = this.selectMultiple.querySelector(
            `[data-select-multiple-value="${option.text}"]`,
          );
          const input = checkbox.querySelector('.ecl-checkbox__input');
          if (input.checked) {
            option.selected = true;
          } else {
            option.selected = false;
          }
        });
        this.update(0);
      }, 10);
    }
  }
}

export default Select;
