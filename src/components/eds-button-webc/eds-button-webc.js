// EDS integration approach #3: a light (non-Shadow-DOM) custom element
// that renders a real <button> from attributes, reusing @ecl/eds-button's
// markup contract and compiled CSS as-is (.eds-button/.eds-button--
// <variant> - see that package's eds-button.scss) - no new styling, no
// Shadow DOM. Built with Lit (LitElement + a declarative `html`
// template). See docs/eds-integration-poc.md for the full comparison
// against approaches #1 and #2.

import { LitElement, html } from 'lit';

const VARIANTS = ['primary', 'secondary', 'tertiary'];

class EdsButtonWebc extends LitElement {
  static properties = {
    variant: {},
    type: {},
    disabled: { type: Boolean },
  };

  // Light DOM: renders straight into the element itself rather than a
  // shadow root, so it keeps reusing @ecl/eds-button's plain global CSS
  // as-is - same choice as the original vanilla version, just expressed
  // via Lit's render-root hook instead of never creating a shadow root.
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.variant = 'primary';
    this.type = 'button';
    this.disabled = false;
  }

  connectedCallback() {
    // Keeps the custom element itself out of layout and the
    // accessibility tree - only the real <button> it renders is visible
    // to CSS/AT. Same intent as ecl-webcomponents' Stencil `:host {
    // display: contents }`, just without Shadow DOM.
    this.style.display = 'contents';

    // Lit owns whatever it renders into - it doesn't patch pre-existing
    // light-DOM markup in place. If the element already contains a
    // server-rendered <button>, its label is captured here so it still
    // shows up once Lit's own template takes over. Guarded so a later
    // disconnect/reconnect (e.g. moving the element in the DOM) doesn't
    // re-capture from, and clear, Lit's own rendered output.
    if (this._label === undefined) {
      const existingButton = this.querySelector('button');
      this._label = (
        existingButton ? existingButton.textContent : this.textContent
      ).trim();
      this.textContent = '';
    }

    super.connectedCallback();
  }

  render() {
    const variant = VARIANTS.includes(this.variant) ? this.variant : 'primary';

    // No whitespace around `${this._label}` - lit-html preserves literal
    // template whitespace as text nodes, and the label should match the
    // captured text exactly (button.textContent in tests, visible label
    // in the UI) rather than being padded with newlines/indentation.
    // `prettier-ignore` because prettier's own html-template formatting
    // would otherwise reintroduce that whitespace on the next --write.
    // prettier-ignore
    return html`<button
      class="eds-button eds-button--${variant}"
      type=${this.type}
      ?disabled=${this.disabled}
      >${this._label}</button
    >`;
  }
}

if (!customElements.get('eds-button-webc')) {
  customElements.define('eds-button-webc', EdsButtonWebc);
}

export default EdsButtonWebc;
