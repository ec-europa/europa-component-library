import { queryOne } from '@ecl/eu-base/helpers/dom';

class Tabs {
  constructor(
    element,
    {
      moreSelector: moreSelector = '[data-ecl-tabs-more]',
      moreButtonSelector: moreButtonSelector = '[data-ecl-tabs-more-button]',
      attachClickListener: attachClickListener = true,
    } = {}
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.'
      );
    }

    this.element = element;

    // Options
    this.moreSelector = moreSelector;
    this.moreButtonSelector = moreButtonSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.more = null;
    this.moreButton = null;

    // Bind `this` for use in callbacks
    this.handleClickOnMore = this.handleClickOnMore.bind(this);
  }

  init() {
    this.more = queryOne(this.moreSelector, this.element);
    this.moreButton = queryOne(this.moreButtonSelector, this.more);

    // Bind click event on more
    if (this.attachClickListener && this.moreButton) {
      this.moreButton.addEventListener('click', this.handleClickOnMore);
    }
  }

  destroy() {
    if (this.attachClickListener && this.moreButton) {
      this.moreButton.removeEventListener('click', this.handleClickOnMore);
    }
  }

  handleClickOnMore() {
    if (this.more.getAttribute('aria-expanded') === 'true') {
      this.more.setAttribute('aria-expanded', 'false');
    } else {
      this.more.setAttribute('aria-expanded', 'true');
    }

    return this;
  }
}

export default Tabs;
