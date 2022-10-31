const template = document.createElement('template');
const trueTypeOf = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

template.innerHTML = `
  <div class="ecl-form-group">
    <slot name="ecl-form-label">
    </slot>
    <slot name="ecl-help-block"></slot>
    <div class="ecl-select__container ecl-select__container--m">
      <select class="ecl-select"></select>
      <div class="ecl-select__icon">
        <svg
          class="ecl-icon ecl-icon--s ecl-icon--rotate-180 ecl-select__icon-shape"
          focusable="false"
          aria-hidden="true"
        >
          <use xlink:href=""></use>
        </svg>
      </div>
    </div>
  </div>`;

class eclSelect extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    this.attachShadow({ mode: 'open' });
    if (this.eclScript) {
      this.setEclScript = true;
    }
    this.setSystem = this.system || 'ec';
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  shadowSelectors(key) {
    const shadow = this.shadowRoot;
    const elements = {
      select: shadow.querySelector(`select`),
      style: shadow.querySelector('#ecl-select-style'),
      script: shadow.querySelector('script'),
      icon: shadow.querySelector('.ecl-select + .ecl-select__icon use'),
      helpSlot: shadow.querySelector('[name="ecl-help-block"]'),
      help: shadow.querySelector('.ecl-help-block'),
      label: shadow.querySelector('.ecl-form-label'),
      labelSlot: shadow.querySelector('[name="ecl-form-label"]'),
      formRequired: shadow.querySelector('.ecl-form-label__required'),
      formOptional: shadow.querySelector('.ecl-form-label__optional'),
    };

    if (key) {
      return elements[key];
    }

    return elements;
  }

  static get observedAttributes() {
    return [
      'data-classes',
      'data-attributes',
      'data-system',
      'data-options',
      'data-label',
      'data-id',
      'data-required-text',
      'data-helper-text',
      'required',
      'disabled',
    ];
  }

  // Getters

  get system() {
    return this.getAttribute('data-system');
  }

  get attributes() {
    const attrs = this.getAttributeNames()
      .filter((name) => !name.includes('data-'))
      .reduce((acc, name) => ({ ...acc, [name]: this.getAttribute(name) }), {});

    if (Object.keys(attrs).length > 0) {
      return attrs;
    }

    return false;
  }

  get options() {
    return this.getAttribute('data-options');
  }

  get iconPath() {
    return this.getAttribute('data-icon-path');
  }

  get requiredText() {
    return this.getAttribute('data-required-text');
  }

  get optionalText() {
    return this.getAttribute('data-optional-text');
  }

  get helperText() {
    return this.getAttribute('data-helper-text');
  }

  get label() {
    return this.getAttribute('data-label');
  }

  get eclScript() {
    return this.hasAttribute('data-ecl-script');
  }

  get autoInit() {
    return this.hasAttribute('data-ecl-auto-init');
  }

  // Setters

  set setOptions(o) {
    if (o) {
      const options = JSON.parse(o);
      if (trueTypeOf(options) === 'array' && options.length > 0) {
        options.forEach((option) => {
          const newOption = new Option(
            option.label,
            option.value,
            option.selected,
            option.selected
          );
          if (option.disabled) {
            newOption.disabled = true;
          }
          this.shadowSelectors('select').add(newOption);
        });
      }
    }
  }

  set setAttributes(a) {
    const select = this.shadowSelectors('select');
    if (this.hasAttribute('multiple')) {
      // select.classList.add('ecl-select__multiple');
      select.setAttribute('data-ecl-select-multiple', true);
      select.setAttribute(
        'data-ecl-multiple-placeholder',
        this.getAttribute('data-ecl-multiple-placeholder')
      );
      select.setAttribute(
        'data-ecl-select-close',
        this.getAttribute('data-ecl-select-close')
      );
      select.setAttribute(
        'data-ecl-select-no-results',
        this.getAttribute('data-ecl-select-no-results')
      );
      select.setAttribute(
        'data-ecl-select-all',
        this.getAttribute('data-ecl-select-all')
      );
      select.setAttribute(
        'data-ecl-select-search',
        this.getAttribute('data-ecl-select-search')
      );
      select.setAttribute(
        'data-ecl-select-clear-all',
        this.getAttribute('data-ecl-select-clear-all')
      );
    } else {
      select.classList.add('ecl-select');
    }
    if (trueTypeOf(a) === 'string') {
      if (select.hasAttribute(a)) {
        select.removeAttribute(a);
      } else {
        select.setAttribute(a, '');
      }
    } else {
      Object.keys(a).forEach((attribute) => {
        select.setAttribute(attribute, a[attribute]);
      });
    }
  }

  set setRequiredText(r) {
    if (
      (r === '' || !this.hasAttribute('required')) &&
      this.shadowSelectors('formRequired')
    ) {
      this.shadowSelectors('formRequired').remove();
    }
    if (
      r !== '' &&
      trueTypeOf(r === 'string') &&
      this.hasAttribute('required')
    ) {
      if (!this.shadowSelectors('formRequired')) {
        const requiredTextContainer = document.createElement('span');
        requiredTextContainer.classList.add('ecl-form-label__required');
        requiredTextContainer.innerHTML = r;
        this.shadowSelectors('label').appendChild(requiredTextContainer);
      } else {
        this.shadowSelectors('formRequired').innerHTML = r;
      }
    }
  }

  set setOptionalText(o) {
    if (
      (o === '' || this.hasAttribute('required')) &&
      this.shadowSelectors('formOptional')
    ) {
      this.shadowSelectors('formOptional').remove();
    }
    if (
      o !== '' &&
      trueTypeOf(o === 'string') &&
      !this.hasAttribute('required')
    ) {
      if (!this.shadowSelectors('formOptional')) {
        const optionalTextContainer = document.createElement('span');
        optionalTextContainer.classList.add('ecl-form-label__optional');
        optionalTextContainer.innerHTML = o;
        this.shadowSelectors('label').appendChild(optionalTextContainer);
      } else {
        this.shadowSelectors('formOptional').innerHTML = o;
      }
    }
  }

  set setIconPath(p) {
    if (p && trueTypeOf(p) === 'string' && !this.hasAttribute('multiple')) {
      this.shadowSelectors('icon').setAttribute(
        'xlink:href',
        `${p}#corner-arrow`
      );
    }
  }

  set setSystem(s) {
    // We will use an import for using an external css, this is sub-optimal
    // because it slows down the rendering.
    const style = document.createElement('style');
    style.setAttribute('id', 'ecl-select-style');
    style.innerHTML = `@import "styles/ecl-select-${s}.css"`;
    this.shadowRoot.appendChild(style);
  }

  set setHelperText(h) {
    if (h === '') {
      this.shadowSelectors('helpSlot').innerHTML = '';
    }
    if (trueTypeOf(h) === 'string' && h !== '') {
      if (!this.shadowSelectors('help')) {
        const helpBlock = document.createElement('div');
        helpBlock.classList.add('ecl-help-block');
        helpBlock.innerHTML = h;
        this.shadowSelectors('helpSlot').appendChild(helpBlock);
      } else {
        this.shadowSelectors('help').innerHTML = h;
      }
    }
  }

  set setLabel(l) {
    if (l === '') {
      this.shadowSelectors('labelSlot').innerHTML = '';
    }
    if (trueTypeOf(l) === 'string' && l !== '') {
      if (!this.shadowSelectors('label')) {
        const label = document.createElement('label');
        label.classList.add('ecl-form-label');
        label.innerHTML = l;
        if (this.id && trueTypeOf(this.id) === 'string') {
          label.setAttribute('for', this.id);
        }
        this.shadowSelectors('labelSlot').prepend(label);
      } else {
        this.shadowSelectors('label').innerHTML = l;
      }
    }
  }

  set setEclScript(e) {
    const script = document.createElement('script');
    script.setAttribute('src', './scripts/ecl-select-vanilla.js');
    this.shadowRoot.appendChild(script);
    if (this.autoInit) {
      this.setAutoInit = true;
    }
  }

  set setAutoInit(b) {
    this.shadowSelectors('script').addEventListener('load', () => {
      const el = this.shadowRoot.querySelector('select');
      /* eslint-disable-next-line no-undef */
      const select = new ECL.Select(el);
      select.init();
    });
  }

  connectedCallback() {
    if (this.label) {
      this.setLabel = this.label;
    }
    if (this.iconPath) {
      this.setIconPath = this.iconPath;
    }
    if (this.helperText) {
      this.setHelperText = this.helperText;
    }
    if (this.options) {
      this.setOptions = this.options;
    }
    if (this.attributes) {
      this.setAttributes = this.attributes;
    }
    if (this.optionalText) {
      this.setOptionalText = this.optionalText;
    }
    if (this.requiredText) {
      this.setRequiredText = this.requiredText;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      switch (name) {
        case 'data-system':
          this.shadowSelectors(
            'style'
          ).innerHTML = `@import "styles/ecl-select-${newValue}.css"`;
          break;

        case 'data-attributes':
          this.setAttributes = newValue;
          break;

        case 'data-helper-text':
          this.setHelperText = newValue;
          break;

        case 'id':
          this.setId = newValue;
          break;

        case 'data-label':
          this.setLabel = newValue;
          break;

        case 'data-optional-text':
          if (!this.required) {
            this.setOptionalText = newValue;
          }
          break;

        case 'data-required-text':
          this.setRequiredText = newValue;
          break;

        case 'data-classes':
          this.setClasses = newValue;
          break;

        case 'required':
          this.setAttributes = 'required';
          if (this.shadowSelectors('label')) {
            this.setOptionalText = this.optionalText;
            this.setRequiredText = this.requiredText;
          }
          break;

        case 'disabled':
          if (this.shadowSelectors('label')) {
            this.setAttributes = 'disabled';
            this.setOptionalText = this.optionalText;
            this.setRequiredText = this.requiredText;
          }
          break;

        default:
      }
    }
  }
}

window.customElements.define('ecl-select', eclSelect);
