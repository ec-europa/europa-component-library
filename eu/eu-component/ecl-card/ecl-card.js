import TwigBase from 'twig-components/twig-base';
import data from '../../demo/ecl-card/data';

export default class EclCard extends TwigBase {
  static get observedAttributes() {
    return ['css_class', 'card_type', 'card_description', 'card_title', 'card_meta', 'card_image_url', 'card_href', 'card_event_data', 'card_tags'];
  }

  renderTemplate(variables) {
    return require('./ecl-card.twig')(data);
  }
}

if (!window.customElements.get('ecl-card')) {
  window.customElements.define('ecl-card', EclCard);
}