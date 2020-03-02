import Stickyfill from 'stickyfilljs';
import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

import MobileDetect from 'mobile-detect';
import SwipeListener from 'swipe-listener';

// Polyfill for closest (support for IE11)
if (!Element.prototype.matches)
  Element.prototype.matches = Element.prototype.msMatchesSelector;
if (!Element.prototype.closest)
  Element.prototype.closest = function poly(selector) {
    let el = this;
    while (el) {
      if (el.matches(selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.openSelector Selector for the hamburger button
 * @param {String} options.closeSelector Selector for the close button
 * @param {String} options.backSelector Selector for the back button
 * @param {String} options.overlaySelector Selector for the menu overlay
 * @param {String} options.innerSelector Selector for the menu inner
 * @param {String} options.itemSelector Selector for the menu item
 * @param {String} options.linkSelector Selector for the menu link
 * @param {String} options.megaSelector Selector for the mega menu
 * @param {String} options.subItemSelector Selector for the menu sub items
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param {Boolean} options.attachHoverListener Whether or not to bind hover events
 * @param {Boolean} options.attachSwipeListener Whether or not to bind swipe events
 */
export class Menu {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Menu} An instance of Menu.
   */
  static autoInit(root, { MENU: defaultOptions = {} } = {}) {
    const menu = new Menu(root, defaultOptions);
    menu.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLMenu = menu;
    return menu;
  }

  constructor(
    element,
    {
      openSelector = '[data-ecl-menu-open]',
      closeSelector = '[data-ecl-menu-close]',
      backSelector = '[data-ecl-menu-back]',
      overlaySelector = '[data-ecl-menu-overlay]',
      innerSelector = '[data-ecl-menu-inner]',
      itemSelector = '[data-ecl-menu-item]',
      linkSelector = '[data-ecl-menu-link]',
      megaSelector = '[data-ecl-menu-mega]',
      subItemSelector = '[data-ecl-menu-subitem]',
      attachClickListener = true,
      attachHoverListener = true,
      attachSwipeListener = true,
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
    this.openSelector = openSelector;
    this.closeSelector = closeSelector;
    this.backSelector = backSelector;
    this.overlaySelector = overlaySelector;
    this.innerSelector = innerSelector;
    this.itemSelector = itemSelector;
    this.linkSelector = linkSelector;
    this.megaSelector = megaSelector;
    this.subItemSelector = subItemSelector;
    this.attachClickListener = attachClickListener;
    this.attachHoverListener = attachHoverListener;
    this.attachSwipeListener = attachSwipeListener;

    // Private variables
    this.open = null;
    this.close = null;
    this.back = null;
    this.overlay = null;
    this.inner = null;
    this.items = null;
    this.links = null;
    this.mobileDetect = null;
    this.useDesktopDisplay = false;

    // Bind `this` for use in callbacks
    this.handleClickOnOpen = this.handleClickOnOpen.bind(this);
    this.handleClickOnClose = this.handleClickOnClose.bind(this);
    this.handleClickOnBack = this.handleClickOnBack.bind(this);
    this.handleClickOnLink = this.handleClickOnLink.bind(this);
    this.handleHoverOnLink = this.handleHoverOnLink.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
    this.checkDesktopDisplay = this.checkDesktopDisplay.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    // Check user agent
    this.mobileDetect = new MobileDetect(window.navigator.userAgent);

    // Query elements
    this.open = queryOne(this.openSelector, this.element);
    this.close = queryOne(this.closeSelector, this.element);
    this.back = queryOne(this.backSelector, this.element);
    this.overlay = queryOne(this.overlaySelector, this.element);
    this.inner = queryOne(this.innerSelector, this.element);
    this.items = queryAll(this.itemSelector, this.element);
    this.links = queryAll(this.linkSelector, this.element);

    // Check if we should use desktop display (it does not rely only on breakpoints)
    this.useDesktopDisplay = this.checkDesktopDisplay();

    // Bind click event on open
    if (this.attachClickListener && this.open) {
      this.open.addEventListener('click', this.handleClickOnOpen);
    }

    // Bind click event on close
    if (this.attachClickListener && this.close) {
      this.close.addEventListener('click', this.handleClickOnClose);
    }

    // Bind click event on back
    if (this.attachClickListener && this.back) {
      this.back.addEventListener('click', this.handleClickOnBack);
    }

    // Bind click event on overlay
    if (this.attachClickListener && this.overlay) {
      this.overlay.addEventListener('click', this.handleClickOnClose);
    }

    // Bind click event on menu links
    if (this.attachClickListener && this.links) {
      this.links.forEach(link => {
        if (link.parentElement.hasAttribute('data-ecl-has-children')) {
          link.addEventListener('click', this.handleClickOnLink);
        }
      });
    }

    // Bind hover event on menu links
    if (this.attachHoverListener && this.links) {
      this.links.forEach(link => {
        if (link.parentElement.hasAttribute('data-ecl-has-children')) {
          link.addEventListener('mouseover', this.handleHoverOnLink);
        }
      });
    }

    // Bind swipe events
    this.swipeInstance = SwipeListener(document);
    if (this.attachSwipeListener) {
      document.addEventListener('swipe', this.handleSwipe);
    }

    // Init sticky header
    this.stickyInstance = new Stickyfill.Sticky(this.element);

    // Hack to prevent css transition to be played on page load on chrome
    this.element.classList.add('ecl-menu--no-transition');
    setTimeout(() => {
      this.element.classList.remove('ecl-menu--no-transition');
    }, 500);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.open) {
      this.open.removeEventListener('click', this.handleClickOnOpen);
    }

    if (this.attachClickListener && this.close) {
      this.close.removeEventListener('click', this.handleClickOnClose);
    }

    if (this.attachClickListener && this.back) {
      this.back.removeEventListener('click', this.handleClickOnBack);
    }

    if (this.attachClickListener && this.overlay) {
      this.overlay.removeEventListener('click', this.handleClickOnClose);
    }

    if (this.attachClickListener && this.links) {
      this.links.forEach(link => {
        if (link.parentElement.hasAttribute('data-ecl-has-children')) {
          link.removeEventListener('click', this.handleClickOnLink);
        }
      });
    }

    if (this.attachHoverListener && this.links) {
      this.links.forEach(link => {
        if (link.parentElement.hasAttribute('data-ecl-has-children')) {
          link.removeEventListener('mouseover', this.handleHoverOnLink);
        }
      });
    }
  }

  /**
   * Check if desktop display has to be used
   * - not using a phone or tablet (whatever the screen size is)
   * - enough space to display all the menu items
   */
  checkDesktopDisplay() {
    if (this.mobileDetect.phone()) {
      return false;
    }

    // Force mobile display on tablet
    if (this.mobileDetect.tablet()) {
      this.element.classList.add('ecl-menu--forced-mobile');
      return false;
    }

    // Check menu width and available space
    const containerWidth = this.inner.getBoundingClientRect().width;
    if (containerWidth === 0) {
      return false;
    }

    const allItemsWidth = this.links
      .map(link => link.clientWidth)
      .reduce((a, b) => a + b);

    if (allItemsWidth > containerWidth) {
      this.element.classList.add('ecl-menu--forced-mobile');
      return false;
    }
    this.element.classList.remove('ecl-menu--forced-mobile');
    return true;
  }

  /**
   * Open/close menu on swipe
   * @param {Event} e
   */
  handleSwipe(e) {
    const { directions } = e.detail;

    if (directions.left) {
      this.handleClickOnOpen(e);
    }

    if (directions.right) {
      this.handleClickOnClose(e);
    }

    return this;
  }

  /**
   * Display mega menu on hover
   * @param {Event} e
   */
  handleHoverOnLink(e) {
    const menuItem = e.target.closest('[data-ecl-menu-item]');

    const menuMega = queryOne(this.megaSelector, menuItem);

    if (menuMega) {
      // Check if there are 4 columns of items
      const subItems = queryAll(this.subItemSelector, menuMega);

      if (subItems.length > 12) {
        menuItem.classList.add('ecl-menu__item--full');
        return this;
      }

      // Check if there is enough space on the right to display the menu
      const megaBounding = menuMega.getBoundingClientRect();
      const containerBounding = this.inner.getBoundingClientRect();
      const menuItemBounding = menuItem.getBoundingClientRect();

      const megaWidth = megaBounding.width;
      const containerWidth = containerBounding.width;
      const menuItemPosition = menuItemBounding.left - containerBounding.left;

      if (menuItemPosition + megaWidth > containerWidth) {
        menuMega.classList.add('ecl-menu__mega--rtl');
      } else {
        menuMega.classList.remove('ecl-menu__mega--rtl');
      }
    }

    return this;
  }

  /**
   * Open menu list.
   * @param {Event} e
   */
  handleClickOnOpen(e) {
    e.preventDefault();

    this.element.setAttribute('aria-expanded', 'true');

    this.inner.setAttribute('aria-hidden', 'false');

    return this;
  }

  /**
   * Close menu list.
   */
  handleClickOnClose() {
    this.element.setAttribute('aria-expanded', 'false');

    // Remove css class and attribute from inner menu
    this.inner.classList.remove('ecl-menu__inner--expanded');
    this.inner.setAttribute('aria-hidden', 'true');

    // Remove css class and attribute from menu items
    this.items.forEach(item => {
      item.classList.remove('ecl-menu__item--expanded');
      item.setAttribute('aria-expanded', 'false');
    });

    return this;
  }

  /**
   * Get back to previous state.
   */
  handleClickOnBack() {
    // Remove css class from inner menu
    this.inner.classList.remove('ecl-menu__inner--expanded');

    // Remove css class and attribute from menu items
    this.items.forEach(item => {
      item.classList.remove('ecl-menu__item--expanded');
      item.setAttribute('aria-expanded', 'false');
    });

    return this;
  }

  /**
   * Click on a menu item
   * @param {Event} e
   */
  handleClickOnLink(e) {
    // If desktop display is used, the link should work by default
    if (this.useDesktopDisplay) {
      return true;
    }

    // If the list is expanded, the link should work by default
    if (this.inner.classList.contains('ecl-menu__inner--expanded')) {
      return true;
    }

    // Disable link
    e.preventDefault();

    // Add css class to inner menu
    this.inner.classList.add('ecl-menu__inner--expanded');

    // Add css class and attribute to current item, and remove it from others
    const menuItem = e.target.closest('[data-ecl-menu-item]');
    this.items.forEach(item => {
      if (item === menuItem) {
        item.classList.add('ecl-menu__item--expanded');
        item.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('ecl-menu__item--expanded');
        item.setAttribute('aria-expanded', 'false');
      }
    });

    return this;
  }
}

export default Menu;
