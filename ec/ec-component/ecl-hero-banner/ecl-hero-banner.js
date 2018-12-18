import TwigBase from 'twig-components/twig-base';
import data from '../../demo/ecl-hero-banner/data';

export default class EclHeroBanner extends TwigBase {
  static get observedAttributes() {
    return ['css_class', 'banner_type', 'title', 'description', 'extra_attributes', 'button_attributes'];
  }

  renderTemplate(variables) {
    return require('./ecl-hero-banner.twig')(data);
  }
}

if (!window.customElements.get('ecl-hero-banner')) {
  window.customElements.define('ecl-hero-banner', EclHeroBanner);
}