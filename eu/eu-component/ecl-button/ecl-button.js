import TwigBase from 'twig-components/twig-base';

export default class EclButton extends TwigBase {
  static get observedAttributes() {
    return ['css_class', 'label', 'button_type', 'type', 'extra_attributes'];
  }

  renderTemplate(variables) {
    return require('./ecl-button.twig')(variables);
  }
}

if (!window.customElements.get('ecl-button')) {
  window.customElements.define('ecl-button', EclButton);
}