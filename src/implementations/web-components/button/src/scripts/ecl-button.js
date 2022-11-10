const template = document.createElement('template');
const trueTypeOf = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

template.innerHTML = `
  <style>
    [name="ecl-button-icon-after"] svg {
      margin-left: 0.5rem !important;
    }
    [name="ecl-button-icon-before"] svg {
      margin-right: 0.5rem !important;
    }
  </style>
  <button 
    class="ecl-button"
    type="submit"
  >
    <span class="ecl-button__container">
      <slot name="ecl-button-icon-before"></slot>
      <span
        class="ecl-button__label"
        data-ecl-label="true"
      ></span>
      <slot name="ecl-button-icon-after"></slot> 
    </span>
  </button>`;

class eclButton extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    this.attachShadow({ mode: 'open' });
    this.system = this.system || 'ec';
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  shadowSelectors(el) {
    const shadow = this.shadowRoot;
    const selectorsMap = {
      button: 'button',
      style: '#ecl-button-style',
      label: '.ecl-button__label',
      iconAfterSlot: '[name="ecl-button-icon-after"]',
      iconBeforeSlot: '[name="ecl-button-icon-before"]',
      iconAfter: '[name="ecl-button-icon-after"] svg',
      iconBefore: '[name="ecl-button-icon-before"] svg',
    };

    return shadow.querySelector(selectorsMap[el]);
  }

  static get observedAttributes() {
    return [
      'data-system',
      'data-label',
      'data-icon-position',
      'data-icon-name',
      'data-icon-transform',
      'data-disabled',
      'data-variant',
    ];
  }

  // Getters

  get system() {
    return this.getAttribute('data-system') || 'ec';
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

  get label() {
    return this.getAttribute('data-label');
  }

  get variant() {
    return this.getAttribute('data-variant') || 'primary';
  }

  get iconPath() {
    return this.getAttribute('data-icon-path');
  }

  get iconPosition() {
    return this.getAttribute('data-icon-position') || 'after';
  }

  get iconName() {
    return this.getAttribute('data-icon-name');
  }

  get iconTransform() {
    return this.getAttribute('data-icon-transform');
  }

  get disabled() {
    return this.hasAttribute('data-disabled');
  }

  // Setters

  set variant(v) {
    this.shadowSelectors('button').classList.remove(`ecl-button--ghost`);
    this.shadowSelectors('button').classList.remove(`ecl-button--primary`);
    this.shadowSelectors('button').classList.remove(`ecl-button--secondary`);
    this.shadowSelectors('button').classList.remove(`ecl-button--call`);

    this.shadowSelectors('button').classList.add(`ecl-button--${v}`);
  }

  set attributes(a) {
    const button = this.shadowSelectors('button');

    if (trueTypeOf(a) === 'string') {
      if (button.hasAttribute(a)) {
        button.removeAttribute(a);
      } else {
        button.setAttribute(a, '');
      }
    } else {
      Object.keys(a).forEach((attribute) => {
        button.setAttribute(attribute, a[attribute]);
      });
    }
  }

  set icon(i) {
    if (this.iconPath && this.iconName) {
      if (
        this.shadowSelectors('iconAfter') ||
        this.shadowSelectors('iconBefore')
      ) {
        this.shadowSelectors('iconAfterSlot').innerHTML = '';
        this.shadowSelectors('iconBeforeSlot').innerHTML = '';
      }
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.classList.add('ecl-icon');
      svg.classList.add('ecl-icon--xs');
      svg.classList.add('ecl-button__icon');
      svg.setAttribute('focusable', 'false');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('data-ecl-icon', true);
      const use = `<use xlink:href=""></use>`;
      if (this.iconPosition === 'after') {
        svg.classList.add('ecl-button__icon--after');
        this.shadowSelectors('iconAfterSlot').appendChild(svg);
        this.shadowSelectors('iconAfter').innerHTML = use;
        if (this.shadowSelectors('iconBefore')) {
          this.shadowSelectors('iconBeforeSlot').innerHTML = '';
        }
      } else {
        svg.classList.add('ecl-button__icon--before');
        this.shadowSelectors('iconBeforeSlot').appendChild(svg);
        this.shadowSelectors('iconBefore').innerHTML = use;
        if (this.shadowSelectors('iconAfter')) {
          this.shadowSelectors('iconAfterSlot').innerHTML = '';
        }
      }
      if (this.iconTransform) {
        this.iconTransform = this.iconTransform;
      }

      this.iconName = this.iconName;
    }
  }

  set iconName(n) {
    if (this.shadowSelectors('iconAfter') && this.iconPath) {
      this.shadowSelectors('iconAfter')
        .querySelector('use')
        .setAttribute('xlink:href', `${this.iconPath}#${this.iconName}`);
    } else if (this.shadowSelectors('iconBefore') && this.iconPath) {
      this.shadowSelectors('iconBefore')
        .querySelector('use')
        .setAttribute('xlink:href', `${this.iconPath}#${n}`);
    }
  }

  set iconTransform(t) {
    if (trueTypeOf(t) === 'string') {
      const transformMap = {
        'rotate-90': 'ecl-icon--rotate-90',
        'rotate-180': 'ecl-icon--rotate-180',
        'rotate-270': 'ecl-icon--rotate-270',
        'flip-vertical': 'ecl-icon--flip-vertical',
        'flip-horizontal': 'ecl-icon--flip-horizontal',
      };

      if (this.iconPosition === 'after' && this.shadowSelectors('iconAfter')) {
        Object.keys(transformMap).forEach((transform) => {
          this.shadowSelectors('iconAfter').classList.remove(
            transformMap[transform]
          );
        });

        this.shadowSelectors('iconAfter').classList.add(transformMap[t]);
      }
      if (
        this.iconPosition === 'before' &&
        this.shadowSelectors('iconBefore')
      ) {
        Object.keys(transformMap).forEach((transform) => {
          this.shadowSelectors('iconBefore').classList.remove(
            transformMap[transform]
          );
        });

        this.shadowSelectors('iconBefore').classList.add(transformMap[t]);
      }
    }
  }

  set system(s) {
    // We will use an import for using an external css, this is sub-optimal
    // because it slows down the rendering.
    if (!this.shadowSelectors('style')) {
      const style = document.createElement('style');
      style.setAttribute('id', 'ecl-button-style');
      style.innerHTML = `@import "styles/ecl-button-${s}.css"`;
      this.shadowRoot.appendChild(style);
    }
  }

  set label(l) {
    if (trueTypeOf(l) === 'string') {
      const label = this.shadowSelectors('label');
      label.textContent = l;
    }
  }

  set disabled(op) {
    if (op === 'add') {
      this.shadowSelectors('button').setAttribute('disabled', true);
    } else {
      this.shadowSelectors('button').removeAttribute('disabled');
    }
  }

  connectedCallback() {
    this.system = this.system;
    this.variant = this.variant;
    if (this.label) {
      this.label = this.label;
    }
    if (this.iconName && this.iconPath) {
      this.icon = true;
    }
    if (this.disabled) {
      this.disabled = 'add';
    } else {
      this.disabled = 'remove';
    }
    if (this.iconName) {
      this.icon = true;
    }
    if (this.attributes) {
      this.attributes = this.attributes;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      switch (name) {
        case 'data-system':
          this.shadowSelectors(
            'style'
          ).innerHTML = `@import "styles/ecl-button-${newValue}.css"`;
          break;

        case 'data-label':
          this.label = newValue;
          break;

        case 'data-variant':
          this.variant = newValue;
          break;

        case 'data-icon-name':
        case 'data-icon-transform':
        case 'data-icon-position':
          this.icon = true;
          break;

        case 'data-disabled':
          if (newValue !== null) {
            this.disabled = 'add';
          } else {
            this.disabled = 'remove';
          }
          break;

        default:
      }
    }
  }
}

window.customElements.define('ecl-button', eclButton);
