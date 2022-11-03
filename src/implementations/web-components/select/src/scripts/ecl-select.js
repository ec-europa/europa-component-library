const template = document.createElement('template');
const trueTypeOf = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

template.innerHTML = `
  <div class="ecl-form-group">
    <slot name="ecl-form-label"></slot>
    <slot name="ecl-help-block"></slot>
    <slot name="ecl-feedback-message"></slot>
    <div class="ecl-select__container">
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
    this.system = this.system || 'ec';
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
      container: shadow.querySelector('.ecl-select__container'),
      multipleContainer: shadow.querySelector('.ecl-select__multiple'),
      messageSlot: shadow.querySelector('[name="ecl-feedback-message"]'),
      message: shadow.querySelector('.ecl-feedback-message'),
    };

    if (key) {
      return elements[key];
    }

    return elements;
  }

  static get observedAttributes() {
    return [
      'data-system',
      'data-options',
      'data-label',
      'data-required-text',
      'data-helper-text',
      'required',
      'data-disabled',
      'invalid',
      'data-width',
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

  get width() {
    return this.getAttribute('data-width');
  }

  get disabled() {
    return this.hasAttribute('data-disabled');
  }

  get eclScript() {
    return this.hasAttribute('data-ecl-script');
  }

  get autoInit() {
    return this.hasAttribute('data-ecl-auto-init');
  }

  get invalid() {
    return this.hasAttribute('invalid');
  }

  get invalidText() {
    return this.getAttribute('data-invalid-text');
  }

  // Setters

  set options(o) {
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

  set attributes(a) {
    const select = this.shadowSelectors('select');
    if (this.hasAttribute('multiple')) {
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
    }
    select.classList.add('ecl-select');

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

  set requiredText(r) {
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

  set optionalText(o) {
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

  set iconPath(p) {
    if (p && trueTypeOf(p) === 'string' && !this.hasAttribute('multiple')) {
      this.shadowSelectors('icon').setAttribute(
        'xlink:href',
        `${p}#corner-arrow`
      );
    }
  }

  set width(w) {
    if (trueTypeOf(w) === 'string') {
      this.shadowSelectors('container').classList.add(
        `ecl-select__container--${w}`
      );
    }
  }

  set system(s) {
    // We will use an import for using an external css, this is sub-optimal
    // because it slows down the rendering.
    const style = document.createElement('style');
    style.setAttribute('id', 'ecl-select-style');
    style.innerHTML = `@import "styles/ecl-select-${s}.css"`;
    this.shadowRoot.appendChild(style);
  }

  set helperText(h) {
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

  set label(l) {
    if (l === '') {
      this.shadowSelectors('labelSlot').innerHTML = '';
    }
    if (trueTypeOf(l) === 'string' && l !== '') {
      if (!this.shadowSelectors('label')) {
        const label = document.createElement('label');
        label.classList.add('ecl-form-label');
        label.innerHTML = l;
        if (this.hasAttribute('id')) {
          label.setAttribute('for', this.getAttribute('id'));
        }
        this.shadowSelectors('labelSlot').prepend(label);
      } else {
        this.shadowSelectors('label').innerHTML = l;
      }
    }
  }

  set eclScript(e) {
    const script = document.createElement('script');
    script.setAttribute('src', './scripts/ecl-select-vanilla.js');
    this.shadowRoot.appendChild(script);
    if (this.autoInit) {
      this.autoInit = true;
    }
  }

  set autoInit(b) {
    this.shadowSelectors('script').addEventListener('load', () => {
      const el = this.shadowRoot.querySelector('select');
      /* eslint-disable-next-line no-undef */
      const select = new ECL.Select(el);
      select.init();
    });
  }

  set disabled(op) {
    if (op === 'add') {
      this.shadowSelectors('select').setAttribute('disabled', true);
      this.shadowSelectors('container').classList.add(
        'ecl-select__container--disabled'
      );
      this.shadowSelectors('label').classList.add('ecl-form-label--disabled');
      this.shadowSelectors('help').classList.add('ecl-help-block--disabled');
    } else {
      this.shadowSelectors('select').removeAttribute('disabled');
      this.shadowSelectors('container').classList.remove(
        'ecl-select__container--disabled'
      );
      this.shadowSelectors('label').classList.remove(
        'ecl-form-label--disabled'
      );
      this.shadowSelectors('help').classList.remove('ecl-help-block--disabled');
    }
  }

  set invalid(op) {
    if (op === 'add') {
      this.shadowSelectors('container').classList.add(
        'ecl-select__container--invalid'
      );
      this.shadowSelectors('help').classList.add('ecl-help-block--invalid');
      if (this.shadowSelectors('label')) {
        this.shadowSelectors('label').classList.add('ecl-form-label--invalid');
      }
      if (this.invalidText) {
        const eclMessage = document.createElement('div');
        eclMessage.classList.add('ecl-feedback-message');
        eclMessage.innerHTML = this.invalidText;
        this.shadowSelectors('messageSlot').appendChild(eclMessage);
      } else if (this.shadowSelectors('message')) {
        this.shadowSelectors('messageSlot').innerHTML = '';
      }
    } else {
      this.shadowSelectors('container').classList.remove(
        'ecl-select__container--invalid'
      );
      this.shadowSelectors('label').classList.remove('ecl-form-label--invalid');
      this.shadowSelectors('help').classList.remove('ecl-help-block--invalid');
      if (this.shadowSelectors('message')) {
        this.shadowSelectors('messageSlot').innerHTML = '';
      }
    }
  }

  connectedCallback() {
    if (this.label) {
      this.label = this.label;
    }
    if (this.iconPath) {
      this.iconPath = this.iconPath;
    }
    if (this.helperText) {
      this.helperText = this.helperText;
    }
    if (this.options) {
      this.options = this.options;
    }
    if (this.disabled) {
      this.disabled = 'add';
    } else {
      this.disabled = 'remove';
    }
    if (this.invalid) {
      this.invalid = 'add';
    } else {
      this.invalid = 'remove';
    }
    if (this.attributes) {
      this.attributes = this.attributes;
    }
    if (this.optionalText) {
      this.optionalText = this.optionalText;
    }
    if (this.requiredText) {
      this.requiredText = this.requiredText;
    }
    this.width = this.width || 'm';
    if (this.eclScript) {
      this.eclScript = true;
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

        case 'data-helper-text':
          this.setHelperText = newValue;
          break;

        case 'data-label':
          this.label = newValue;
          break;

        case 'data-optional-text':
          if (!this.required) {
            this.optionalText = newValue;
          }
          break;

        case 'data-required-text':
          this.requiredText = newValue;
          break;

        case 'required':
          this.attributes = 'required';
          if (this.shadowSelectors('label')) {
            this.optionalText = this.optionalText;
            this.requiredText = this.requiredText;
          }
          break;

        case 'data-disabled':
          if (this.shadowSelectors('label')) {
            if (newValue !== null) {
              this.disabled = 'add';
            } else {
              this.disabled = 'remove';
            }
          }
          break;

        case 'invalid':
          if (this.shadowSelectors('label')) {
            if (newValue !== null) {
              this.invalid = 'add';
            } else {
              this.invalid = 'remove';
            }
          }
          break;

        default:
      }
    }
  }
}

window.customElements.define('ecl-select', eclSelect);
