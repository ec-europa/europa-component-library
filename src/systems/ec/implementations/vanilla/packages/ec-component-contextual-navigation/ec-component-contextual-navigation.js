import { queryOne } from '@ecl/ec-base/helpers/dom';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.moreItemSelector Selector for more button
 * @param {String} options.listSelector Selector for list element
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 */
export class ContextualNavigation {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {ContextualNavigation} An instance of ContextualNavigation.
   */
  static autoInit(root, { CONTEXTUAL_NAVIGATION: defaultOptions = {} } = {}) {
    const contextualNavigation = new ContextualNavigation(root, defaultOptions);
    contextualNavigation.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLContextualNavigation = contextualNavigation;
    return contextualNavigation;
  }

  constructor(
    element,
    {
      moreItemSelector = '[data-ecl-contextual-navigation-more]',
      listSelector = '[data-ecl-contextual-navigation-list]',
      attachClickListener = true,
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

  /**
   * Initialise component.
   */
  init() {
    this.moreItem = queryOne(this.moreItemSelector, this.element);
    this.list = queryOne(this.listSelector, this.element);

    // Bind click event on more item
    if (this.attachClickListener && this.moreItem) {
      this.moreItem.addEventListener('click', this.handleClickOnMore);
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.moreItem) {
      this.moreItem.removeEventListener('click', this.handleClickOnMore);
    }
  }

  /**
   * Expands the list of items.
   */
  handleClickOnMore() {
    this.list.setAttribute('aria-expanded', 'true');
    // IE way to remove a node...
    if (this.moreItem.parentNode && this.moreItem.parentNode.parentNode) {
      this.moreItem.parentNode.parentNode.removeChild(this.moreItem.parentNode);
    }
  }
}

export default ContextualNavigation;
