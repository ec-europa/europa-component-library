import Stickyfill from 'stickyfilljs';
import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

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
 * @param {String} options.menuInnerSelector Selector for the menu inner
 * @param {String} options.menuItemSelector Selector for the menu item
 * @param {String} options.menuLinkSelector Selector for the menu link
 * @param {String} options.menuMegaSelector Selector for the mega menu
 * @param {String} options.menuSubItemSelector Selector for the menu sub items
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param {Boolean} options.attachHoverListener Whether or not to bind hover events
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
      menuInnerSelector = '[data-ecl-menu-inner]',
      menuItemSelector = '[data-ecl-menu-item]',
      menuLinkSelector = '[data-ecl-menu-link]',
      menuMegaSelector = '[data-ecl-menu-mega]',
      menuSubItemSelector = '[data-ecl-menu-subitem]',
      attachClickListener = true,
      attachHoverListener = true,
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
    this.menuInnerSelector = menuInnerSelector;
    this.menuItemSelector = menuItemSelector;
    this.menuLinkSelector = menuLinkSelector;
    this.menuMegaSelector = menuMegaSelector;
    this.menuSubItemSelector = menuSubItemSelector;
    this.attachClickListener = attachClickListener;
    this.attachHoverListener = attachHoverListener;

    // Private variables
    this.open = null;
    this.close = null;
    this.back = null;
    this.menuInner = null;
    this.menuItems = null;
    this.menuLinks = null;

    // Bind `this` for use in callbacks
    this.handleClickOnOpen = this.handleClickOnOpen.bind(this);
    this.handleClickOnClose = this.handleClickOnClose.bind(this);
    this.handleClickOnBack = this.handleClickOnBack.bind(this);
    this.handleClickOnLink = this.handleClickOnLink.bind(this);
    this.handleHoverOnLink = this.handleHoverOnLink.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    // Query elements
    this.open = queryOne(this.openSelector, this.element);
    this.close = queryOne(this.closeSelector, this.element);
    this.back = queryOne(this.backSelector, this.element);
    this.menuInner = queryOne(this.menuInnerSelector, this.element);
    this.menuItems = queryAll(this.menuItemSelector, this.element);
    this.menuLinks = queryAll(this.menuLinkSelector, this.element);

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

    // Bind click event on menu links
    if (this.attachClickListener && this.menuLinks) {
      this.menuLinks.forEach(menuLink => {
        if (menuLink.parentElement.hasAttribute('data-ecl-has-children')) {
          menuLink.addEventListener('click', this.handleClickOnLink);
        }
      });
    }

    // Bind hover event on menu links
    if (this.attachHoverListener && this.menuLinks) {
      this.menuLinks.forEach(menuLink => {
        if (menuLink.parentElement.hasAttribute('data-ecl-has-children')) {
          menuLink.addEventListener('mouseover', this.handleHoverOnLink);
        }
      });
    }

    // TODO: only trigger on mobile?
    // Init sticky header
    this.stickyInstance = new Stickyfill.Sticky(this.element);

    // TODO: ?
    // Add css class for transition
    // It should be added after load to prevent blinking
    this.menuItems.forEach(item => {
      const subMenu = queryOne(this.menuMegaSelector, item);
      if (subMenu) {
        subMenu.classList.add('ecl-menu__mega--transition');
      }
    });
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

    if (this.attachClickListener && this.menuLinks) {
      this.menuLinks.forEach(menuLink => {
        if (menuLink.parentElement.hasAttribute('data-ecl-has-children')) {
          menuLink.removeEventListener('click', this.handleClickOnLink);
        }
      });
    }
  }

  // TODO: trigger only on desktop
  /**
   * Check available space for menu items.
   * @param {Event} e
   */
  handleHoverOnLink(e) {
    const menuItem = e.target.closest('[data-ecl-menu-item]');

    const menuMega = queryOne(this.menuMegaSelector, menuItem);

    if (menuMega) {
      // Check if there are 4 columns of items
      const subItems = queryAll(this.menuSubItemSelector, menuMega);

      if (subItems.length > 12) {
        menuItem.classList.add('ecl-menu__item--full');
        return this;
      }

      // Check if there is enough space on the right to display the menu
      const megaBounding = menuMega.getBoundingClientRect();
      const containerBounding = this.menuInner.getBoundingClientRect();
      const menuBounding = menuItem.getBoundingClientRect();

      const menuWidth = megaBounding.width;
      const containerWidth = containerBounding.width;
      const menuPosition = menuBounding.left - containerBounding.left;

      if (menuPosition + menuWidth > containerWidth) {
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

    this.menuInner.setAttribute('aria-hidden', 'false');

    return this;
  }

  /**
   * Close menu list.
   */
  handleClickOnClose() {
    this.element.setAttribute('aria-expanded', 'false');

    // Remove css class and attribute from inner menu
    this.menuInner.classList.remove('ecl-menu__inner--expanded');
    this.menuInner.setAttribute('aria-hidden', 'true');

    // Remove css class and attribute from menu items
    this.menuItems.forEach(item => {
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
    this.menuInner.classList.remove('ecl-menu__inner--expanded');

    // Remove css class and attribute from menu items
    this.menuItems.forEach(item => {
      item.classList.remove('ecl-menu__item--expanded');
      item.setAttribute('aria-expanded', 'false');
    });

    return this;
  }

  // TODO: trigger only on mobile
  /**
   * Click on a menu item
   * @param {Event} e
   */
  handleClickOnLink(e) {
    // If the list is expanded, the link should work by default
    if (this.menuInner.classList.contains('ecl-menu__inner--expanded')) {
      return true;
    }

    // Disable link
    e.preventDefault();

    // Add css class to inner menu
    this.menuInner.classList.add('ecl-menu__inner--expanded');

    // Add css class and attribute to current item, and remove it from others
    const menuItem = e.target.closest('[data-ecl-menu-item]');
    this.menuItems.forEach(item => {
      if (item === menuItem) {
        item.classList.add('ecl-menu__item--expanded');
        item.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('ecl-menu__item--expanded');
        item.setAttribute('aria-expanded', 'false');
      }
    });

    //
    //
    //
    // TODO: still usefull?
    // Close other items
    /*
    this.menuItems.forEach(item => {
      if (item !== menuItem) {
        item.setAttribute('aria-expanded', 'false');
        const subMenu = queryOne(this.menuMegaSelector, item);
        if (subMenu) {
          subMenu.setAttribute('aria-hidden', 'true');
        }
      }
    });
    */

    // Toggle current item
    /*
    menuItem.setAttribute(
      'aria-expanded',
      menuItem.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
    */

    // Toggle sub items
    /*
    const menuMega = queryOne(this.menuMegaSelector, menuItem);

    if (menuMega) {
      // Display the menu
      menuMega.setAttribute(
        'aria-hidden',
        menuMega.getAttribute('aria-hidden') === 'false' ? 'true' : 'false'
      );

      // Check if there is enough space to display the menu
      const menuWidth = menuMega.clientWidth;
      const windowWidth = window.innerWidth;
      const menuPosition = menuItem.getBoundingClientRect();

      if (menuPosition.left + menuWidth < windowWidth) {
        menuMega.classList.remove('ecl-menu__mega--rtl');
      } else {
        menuMega.classList.add('ecl-menu__mega--rtl');
      }
    }
*/
    return this;
  }
}

export default Menu;
