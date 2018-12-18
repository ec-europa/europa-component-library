import TwigBase from 'twig-components/twig-base';
import data from '../../demo/ecl-blockquote/data';

export default class EclBlockquote extends TwigBase {
  static get observedAttributes() {
    return ['css_class', 'blockquote_body', 'blockquote_author', 'extra_attributes'];
  }

  renderTemplate(variables) {
    return require('./ecl-blockquote.twig')(data);
  }
}

if (!window.customElements.get('ecl-blockquote')) {
  window.customElements.define('ecl-blockquote', EclBlockquote);
}