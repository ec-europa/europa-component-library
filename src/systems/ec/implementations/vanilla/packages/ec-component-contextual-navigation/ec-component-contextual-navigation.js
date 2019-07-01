import { queryOne } from '@ecl/ec-base/helpers/dom';

export class ContextualNavigation {
  constructor(
    element,
    {
      moreItemSelector: moreItemSelector = '[data-ecl-contextual-navigation-more]',
      listSelector: listSelector = '[data-ecl-contextual-navigation-list]',
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
    this.moreItemSelector = moreItemSelector;
    this.listSelector = listSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.moreItem = null;
    this.list = null;

    // Bind `this` for use in callbacks
    this.handleClickOnMore = this.handleClickOnMore.bind(this);
  }

  init() {
    this.moreItem = queryOne(this.moreItemSelector, this.element);
    this.list = queryOne(this.listSelector, this.element);

    // Bind click event on more item
    if (this.attachClickListener && this.moreItem) {
      this.moreItem.addEventListener('click', this.handleClickOnMore);
    }
  }

  destroy() {
    if (this.attachClickListener && this.moreItem) {
      this.moreItem.removeEventListener('click', this.handleClickOnMore);
    }
  }

  handleClickOnMore() {
    this.list.setAttribute('aria-expanded', true);
    // IE way to remove a node...
    if (this.moreItem.parentNode && this.moreItem.parentNode.parentNode) {
      this.moreItem.parentNode.parentNode.removeChild(this.moreItem.parentNode);
    }
  }
}

export default ContextualNavigation;
