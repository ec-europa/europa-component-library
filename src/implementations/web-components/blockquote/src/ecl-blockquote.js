const template = document.createElement('template');
const trueTypeOf = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

template.innerHTML = `
  <figure class="ecl-blockquote">
    <div class="ecl-blockquote__body">
      <blockquote class="ecl-blockquote__quote">
        <p class="ecl-blockquote__citation"></p>
      </blockquote>
      <footer class="ecl-blockquote__attribution">
        <cite class="ecl-blockquote__author"></cite>
      </footer>
    </div>
    <slot name="ecl-blockquote-image"></slot>
  </figure>`;

class eclBlockquote extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    this.attachShadow({ mode: 'open' });
    this.setSystem = this.system || 'ec';
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  shadowSelectors(el) {
    const shadow = this.shadowRoot;
    const selectorsMap = {
      author: '.ecl-blockquote__author',
      citation: '.ecl-blockquote__citation',
      style: '#ecl-blockquote-style',
      image: '.ecl-blockquote__image',
      figure: 'figure',
      slot: '[name="ecl-blockquote-image"]',
    };

    return shadow.querySelector(selectorsMap[el]);
  }

  static get observedAttributes() {
    return [
      'data-author',
      'data-citation',
      'data-system',
      'data-image',
      'data-aria-label',
      'data-attributes',
      'data-classes',
    ];
  }

  // Getters
  get author() {
    return this.getAttribute('data-author');
  }

  get citation() {
    return this.getAttribute('data-citation');
  }

  get system() {
    return this.getAttribute('data-system');
  }

  get image() {
    return this.getAttribute('data-image');
  }

  get ariaLabel() {
    return this.getAttribute('data-aria-label');
  }

  get extraAttributes() {
    return this.getAttribute('data-attributes');
  }

  get extraClasses() {
    return this.getAttribute('data-classes');
  }

  // Setters

  set setAuthor(a) {
    if (trueTypeOf(this.author) === 'string') {
      this.shadowSelectors('author').innerHTML = this.author;
    }
  }

  set setCitation(c) {
    if (trueTypeOf(this.citation) === 'string') {
      this.shadowSelectors('citation').innerHTML = this.citation;
    }
  }

  set setImage(i) {
    // We already have an image, let's just alter its attributes.
    if (this.image && this.shadowSelectors('image')) {
      if (this.ariaLabel) {
        this.setAriaLabel = this.ariaLabel;
      }
      if (trueTypeOf(this.image) === 'string') {
        this.shadowSelectors('image').setAttribute('src', this.image);
      }
    } else if (this.image && !this.shadowSelectors('image')) {
      // We create an img from scratch and we add it to the shadowDom
      // in the slot we created in the template.
      const img = document.createElement('img');
      img.classList.add(['ecl-blockquote__image']);
      if (this.ariaLabel) {
        img.setAttribute('aria-label', this.ariaLabel);
      }
      if (trueTypeOf(this.image) === 'string') {
        img.setAttribute('src', this.image);
      }
      this.shadowSelectors('slot').prepend(img);
    }
  }

  set setAriaLabel(a) {
    if (
      this.image &&
      this.shadowSelectors('image') &&
      trueTypeOf(this.ariaLabel) === 'string'
    ) {
      this.shadowSelectors('image').setAttribute('aria-label', this.ariaLabel);
    }
  }

  set setAttributes(a) {
    const attributes = JSON.parse(a);
    if (
      trueTypeOf(attributes) === 'object' &&
      Object.keys(attributes).length > 0
    ) {
      Object.keys(attributes).forEach((attribute) => {
        this.shadowSelectors('figure').setAttribute(
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
        this.shadowSelectors('figure').classList.add(...extraClasses);
      }
    }
  }

  set setSystem(s) {
    // We will use an import for using an external css, this is sub-optimal
    // because it slows down the rendering.
    const style = document.createElement('style');
    style.setAttribute('id', 'ecl-blockquote-style');
    style.innerHTML = `@import "styles/ecl-blockquote-${s}.css"`;
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    if (this.author) {
      this.setAuthor = this.author;
    }
    if (this.citation) {
      this.setCitation = this.citation;
    }
    if (this.image) {
      this.setImage = this.image;
    }
    if (this.extraAttributes) {
      this.setAttributes = this.extraAttributes;
    }
    if (this.extraClasses) {
      this.setClasses = this.extraClasses;
    }
    if (this.image && this.ariaLabel) {
      this.setAriaLabel = this.ariaLabel;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      switch (name) {
        case 'data-author':
          this.setAuthor = newValue;
          break;

        case 'data-citation':
          this.setCitation = newValue;
          break;

        case 'data-system':
          this.shadowSelectors(
            'style'
          ).innerHTML = `@import "styles/ecl-blockquote-${newValue}.css"`;
          break;

        case 'data-aria-label':
          this.setAriaLabel = newValue;
          break;

        case 'data-attributes':
          this.setAttributes = newValue;
          break;

        case 'data-classes':
          this.setClasses = newValue;
          break;

        case 'data-image':
          if (
            newValue &&
            newValue !== '' &&
            trueTypeOf(newValue) === 'string'
          ) {
            this.setImage = newValue;
            if (trueTypeOf(newValue) === 'string') {
              this.shadowSelectors('image').setAttribute('src', newValue);
            }
          } else {
            this.shadowSelectors('slot').innerHTML = '';
          }
          break;

        default:
      }
    }
  }
}

window.customElements.define('ecl-blockquote', eclBlockquote);
