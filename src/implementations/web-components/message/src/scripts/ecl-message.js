const template = document.createElement('template');
const trueTypeOf = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

template.innerHTML = `
  <div
    class="ecl-message"
    role="alert"
  >
    <svg
      class="ecl-icon ecl-icon--l ecl-message__icon"
      focusable="false"
      aria-hidden="true">
      <use xlink:href=""></use>
    </svg>
    <div class="ecl-message__content">
      <button class="ecl-button ecl-button--ghost ecl-message__close"
        type="button"
        data-ecl-message-close
      >
        <span class="ecl-button__container">
          <span class="ecl-button__label"></span>
          <svg
            class="ecl-icon ecl-icon--xs ecl-button__icon ecl-button__icon--after"
            focusable="false" aria-hidden="true">
            <use xlink:href=""></use>
          </svg>
        </span>
      </button>
      <slot name="ecl-message-title"></slot>
      <slot name="ecl-message-description"></slot>
    </div>
  </div>`;

class eclMessage extends HTMLElement {
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
      style: shadow.querySelector('#ecl-message-style'),
      script: shadow.querySelector('script'),
      message: shadow.querySelector('.ecl-message'),
      titleSlot: shadow.querySelector('[name="ecl-message-title"]'),
      descriptionSlot: shadow.querySelector('[name="ecl-message-description"]'),
      title: shadow.querySelector('.ecl-message__title'),
      description: shadow.querySelector('.ecl-message__description'),
      close: shadow.querySelector('.ecl-button--ghost .ecl-button__label'),
      mainIcon: shadow.querySelector('.ecl-message > .ecl-icon use'),
      closeIcon: shadow.querySelector('.ecl-message__content .ecl-icon use'),
    };

    if (key) {
      return elements[key];
    }

    return elements;
  }

  static get observedAttributes() {
    return [
      'data-system',
      'data-attributes',
      'data-classes',
      'data-variant',
      'data-title',
      'data-description',
      'data-close-label',
    ];
  }

  static getIconName(variant) {
    let name = variant;
    switch (variant) {
      case 'info':
        name = 'information';
        break;

      default:
    }

    return name;
  }

  // Getters
  get system() {
    return this.getAttribute('data-system');
  }

  get variant() {
    return this.getAttribute('data-variant');
  }

  get title() {
    return this.getAttribute('data-title');
  }

  get description() {
    return this.getAttribute('data-description');
  }

  get iconPath() {
    return this.getAttribute('data-icon-path');
  }

  get closeLabel() {
    return this.getAttribute('data-close-label');
  }

  get eclScript() {
    return this.hasAttribute('data-ecl-script');
  }

  get autoInit() {
    return this.hasAttribute('data-ecl-auto-init');
  }

  get extraAttributes() {
    return this.getAttribute('data-attributes');
  }

  get extraClasses() {
    return this.getAttribute('data-classes');
  }

  // Setters

  set setAttributes(a) {
    const attributes = JSON.parse(a);
    if (
      trueTypeOf(attributes) === 'object' &&
      Object.keys(attributes).length > 0
    ) {
      Object.keys(attributes).forEach((attribute) => {
        this.shadowSelectors('message').setAttribute(
          attribute,
          attributes[attribute]
        );
      });
    }
  }

  set setClasses(c) {
    if (c.length > 2) {
      const extraClasses = JSON.parse(c);
      if (trueTypeOf(extraClasses) === 'array') {
        this.shadowSelectors('message').classList.add(...extraClasses);
      }
    }
  }

  set setSystem(s) {
    if (trueTypeOf(s) === 'string') {
      // We will use an import for using an external css, this is sub-optimal
      // because it slows down the rendering.
      const style = document.createElement('style');
      style.setAttribute('id', 'ecl-message-style');
      style.innerHTML = `@import "styles/ecl-message-${s}.css"`;
      this.shadowRoot.appendChild(style);
    }
  }

  set setEclScript(e) {
    const script = document.createElement('script');
    script.setAttribute('src', './scripts/ecl-message-vanilla.js');
    this.shadowRoot.appendChild(script);
    if (this.autoInit) {
      this.setAutoInit = true;
    }
  }

  set setVariant(v) {
    const modifier = /ecl-message--[a-zA-Z0-9']+/;
    const messageClasses = this.shadowSelectors('message').className;
    if (messageClasses.match(modifier)) {
      const match = messageClasses.match(modifier)[0];
      this.shadowSelectors('message').classList.remove(match);
    }
    if (trueTypeOf(v) === 'string') {
      this.shadowSelectors('message').classList.add(`ecl-message--${v}`);
    }
    if (trueTypeOf(this.iconPath) === 'string') {
      this.setIconPath = this.iconPath;
    }
  }

  set setAutoInit(b) {
    this.shadowSelectors('script').addEventListener('load', () => {
      const el = this.shadowRoot.querySelector('.ecl-message');
      /* eslint-disable-next-line no-undef */
      const message = new ECL.Message(el);
      message.init();
    });
  }

  set setTitle(t) {
    if (t === '') {
      this.shadowSelectors('titleSlot').innerHTML = '';
    }
    if (trueTypeOf(t) === 'string' && t !== '') {
      if (this.shadowSelectors('title')) {
        this.shadowSelectors('title').innerHTML = t;
      } else {
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('ecl-message__title');
        titleContainer.textContent = t;
        this.shadowSelectors('titleSlot').appendChild(titleContainer);
      }
    }
  }

  set setDescription(d) {
    if (d === '') {
      this.shadowSelectors('descriptionSlot').innerHTML = '';
    }
    if (trueTypeOf(d) === 'string' && d !== '') {
      if (this.shadowSelectors('description')) {
        this.shadowSelectors('description').innerHTML = d;
      } else {
        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('ecl-message__description');
        descriptionContainer.textContent = d;
        this.shadowSelectors('descriptionSlot').appendChild(
          descriptionContainer
        );
      }
    }
  }

  set setIconPath(p) {
    if (p) {
      this.shadowSelectors('closeIcon').setAttribute(
        'xlink:href',
        `${p}#close-filled`
      );

      if (trueTypeOf(this.variant) === 'string') {
        this.shadowSelectors('mainIcon').setAttribute(
          'xlink:href',
          `${p}#${eclMessage.getIconName(this.variant)}`
        );
      }
    }
  }

  set setCloseLabel(l) {
    if (trueTypeOf(l) === 'string') {
      this.shadowSelectors('close').innerHTML = l;
    }
  }

  connectedCallback() {
    if (this.variant) {
      this.setVariant = this.variant;
    }
    if (this.description) {
      this.setDescription = this.description;
    }
    if (this.title) {
      this.setTitle = this.title;
    }
    if (this.close) {
      this.setCloseLabel = this.close;
    }
    if (this.iconPath) {
      this.setIconPath = this.iconPath;
    }
    if (this.extraAttributes) {
      this.setAttributes = this.extraAttributes;
    }
    if (this.extraClasses) {
      this.setClasses = this.extraClasses;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      switch (name) {
        case 'data-system':
          this.shadowSelectors(
            'style'
          ).innerHTML = `@import "styles/ecl-message-${newValue}.css"`;
          break;

        case 'data-variant':
          this.setVariant = newValue;
          break;

        case 'data-title':
          this.setTitle = newValue;
          break;

        case 'data-description':
          this.setDescription = newValue;
          break;

        case 'data-close-label':
          this.setCloseLabel = newValue;
          break;

        case 'data-icon-path':
          this.setIconPath = newValue;
          break;

        case 'data-attributes':
          this.setAttributes = newValue;
          break;

        case 'data-classes':
          this.setClasses = newValue;
          break;

        default:
      }
    }
  }
}

window.customElements.define('ecl-message', eclMessage);
