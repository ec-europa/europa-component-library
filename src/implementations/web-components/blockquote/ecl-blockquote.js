const template = document.createElement('template');

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

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    // We will use an import for using an external css, this is sub-optimal
    // because it slows down the rendering.
    const style = document.createElement('style');
    style.setAttribute('id', 'ecl-blockquote-style');

    if (this.system) {
      style.innerHTML = `@import "ecl-blockquote-${this.system}.css"`;
    } else {
      style.innerHTML = `@import "ecl-blockquote-ec.css"`;
    }

    this._shadowRoot.appendChild(style);
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

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

  static get observedAttributes() {
    return [
      'data-author',
      'data-citation',
      'data-system',
      'data-image',
      'data-aria-label',
    ];
  }

  shadowSelectors() {
    const shadow = this.shadowRoot;

    return {
      author: shadow.querySelector('.ecl-blockquote__author'),
      citation: shadow.querySelector('.ecl-blockquote__citation'),
      style: shadow.querySelector('#ecl-blockquote-style'),
      image: shadow.querySelector('.ecl-blockquote__image'),
      slot: shadow.querySelector('[name="ecl-blockquote-image"]'),
    };
  }

  setShadowImg() {
    // We already have an image, let's just alter its attributes.
    if (this.image && this.shadowSelectors().image) {
      if (this.ariaLabel) {
        this.shadowSelectors().image.setAttribute('aria-label', this.ariaLabel);
      }
      this.shadowSelectors().image.setAttribute('src', this.image);
    } else if (this.image && !this.shadowSelectors().image) {
      // We create an img from scratch and we add it to the shadowDom
      // in the slot we created in the template.
      const img = document.createElement('img');
      img.classList.add(['ecl-blockquote__image']);
      if (this.ariaLabel) {
        img.setAttribute('aria-label', this.ariaLabel);
      }
      img.setAttribute('src', this.image);
      this.shadowSelectors().slot.prepend(img);
    }
  }

  connectedCallback() {
    if (this.author) {
      this.shadowSelectors().author.innerHTML = this.author;
    }

    if (this.citation) {
      this.shadowSelectors().citation.innerHTML = this.citation;
    }

    if (this.image) {
      this.setShadowImg();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      if (name === 'data-author') {
        this.shadowSelectors().author.innerHTML = newValue;
      }

      if (name === 'data-citation') {
        this.shadowSelectors().citation.innerHTML = newValue;
      }

      if (name === 'data-system') {
        this.shadowSelectors().style.innerHTML = `@import "ecl-blockquote-${newValue}.css"`;
      }

      if (name === 'data-aria-label') {
        this.setShadowImg();
      }

      if (name === 'data-image') {
        if (newValue && newValue !== '') {
          this.setShadowImg();
          this.shadowSelectors().image.setAttribute('src', newValue);
        } else {
          this.shadowSelectors().slot.innerHTML = '';
        }
      }
    }
  }
}

window.customElements.define('ecl-blockquote', eclBlockquote);
