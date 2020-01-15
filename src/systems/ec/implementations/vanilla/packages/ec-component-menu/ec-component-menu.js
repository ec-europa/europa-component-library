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
 * @param {String} options.hamburgerButtonSelector Selector for the hamburger button
 * @param {String} options.menuListSelector Selector for the list
 * @param {String} options.menuItemSelector Selector for the menu item
 * @param {String} options.menuLinkSelector Selector for the menu link
 * @param {String} options.menuMegaSelector Selector for the mega menu
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
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
      toggleSelector = '[data-ecl-menu-toggle]',
      menuListSelector = '[data-ecl-menu-list]',
      menuItemSelector = '[data-ecl-menu-item]',
      menuLinkSelector = '[data-ecl-menu-link]',
      menuMegaSelector = '[data-ecl-menu-mega]',
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
    this.toggleSelector = toggleSelector;
    this.menuListSelector = menuListSelector;
    this.menuItemSelector = menuItemSelector;
    this.menuLinkSelector = menuLinkSelector;
    this.menuMegaSelector = menuMegaSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.toggle = null;
    this.menuList = null;
    this.menuItems = null;
    this.menuLinks = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleClickOnLink = this.handleClickOnLink.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    // Query elements
    this.toggle = queryOne(this.toggleSelector, this.element);
    this.menuList = queryOne(this.menuListSelector, this.element);
    this.menuItems = queryAll(this.menuItemSelector, this.element);
    this.menuLinks = queryAll(this.menuLinkSelector, this.element);

    // Bind click event on toggle
    if (this.attachClickListener && this.toggle) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
    }

    // Bind click event on menu links
    if (this.attachClickListener && this.menuLinks) {
      this.menuLinks.forEach(menuLink => {
        if (
          menuLink.parentElement.getAttribute('data-ecl-has-children') ===
          'true'
        ) {
          menuLink.addEventListener('click', this.handleClickOnLink);
        }
      });
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.ellipsisButton) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
    }

    if (this.attachClickListener && this.menuLinks) {
      this.menuLinks.forEach(menuLink => {
        if (
          menuLink.parentElement.getAttribute('data-ecl-has-children') ===
          'true'
        ) {
          menuLink.removeEventListener('click', this.handleClickOnLink);
        }
      });
    }
  }

  /**
   * Toggle menu list.
   */
  handleClickOnToggle(e) {
    e.preventDefault();

    this.element.setAttribute(
      'aria-expanded',
      this.element.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );

    this.menuList.setAttribute(
      'aria-hidden',
      this.menuList.getAttribute('aria-hidden') === 'false' ? 'true' : 'false'
    );

    return this;
  }

  /**
   * @param {Event} e
   */
  handleClickOnLink(e) {
    e.preventDefault();

    const menuItem = e.target.closest('[data-ecl-has-children]');

    // Close other items
    this.menuItems.forEach(item => {
      if (item !== menuItem) {
        item.setAttribute('aria-expanded', 'false');
        const subMenu = queryOne(this.menuMegaSelector, item);
        if (subMenu) {
          subMenu.setAttribute('aria-hidden', 'true');
        }
      }
    });

    // Toggle current item
    menuItem.setAttribute(
      'aria-expanded',
      menuItem.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );

    // Toggle sub items
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

    return this;
  }
}

export default Menu;
