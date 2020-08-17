import { queryOne, queryAll } from '@ecl/eu-base/helpers/dom';

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
export class MenuLegacy {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {MenuLegacy} An instance of MenuLegacy.
   */
  static autoInit(root, { MENU_LEGACY: defaultOptions = {} } = {}) {
    const menuLegacy = new MenuLegacy(root, defaultOptions);
    menuLegacy.init();
    root.ECLMenuLegacy = menuLegacy;
    return menuLegacy;
  }

  constructor(
    element,
    {
      hamburgerButtonSelector = '[data-ecl-menu-legacy-hamburger-button]',
      menuListSelector = '[data-ecl-menu-legacy-list]',
      menuItemSelector = '[data-ecl-menu-legacy-item]',
      menuLinkSelector = '[data-ecl-menu-legacy-link]',
      menuMegaSelector = '[data-ecl-menu-legacy-mega]',
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
    this.hamburgerButtonSelector = hamburgerButtonSelector;
    this.menuListSelector = menuListSelector;
    this.menuItemSelector = menuItemSelector;
    this.menuLinkSelector = menuLinkSelector;
    this.menuMegaSelector = menuMegaSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.hamburgerButton = null;
    this.menuList = null;
    this.menuItems = null;
    this.menuLinks = null;

    // Bind `this` for use in callbacks
    this.handleClickOnHamburger = this.handleClickOnHamburger.bind(this);
    this.handleClickOnLink = this.handleClickOnLink.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    // Query elements
    this.hamburgerButton = queryOne(this.hamburgerButtonSelector, this.element);
    this.menuList = queryOne(this.menuListSelector, this.element);
    this.menuItems = queryAll(this.menuItemSelector, this.element);
    this.menuLinks = queryAll(this.menuLinkSelector, this.element);

    // Bind click event on hamburger
    if (this.attachClickListener && this.hamburgerButton) {
      this.hamburgerButton.addEventListener(
        'click',
        this.handleClickOnHamburger
      );
    }

    // Bind click event on menu links
    if (this.attachClickListener && this.menuLinks) {
      this.menuLinks.forEach((menuLink) => {
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
      this.hamburgerButton.removeEventListener(
        'click',
        this.handleClickOnHamburger
      );
    }

    if (this.attachClickListener && this.menuLinks) {
      this.menuLinks.forEach((menuLink) => {
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
  handleClickOnHamburger() {
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
    this.menuItems.forEach((item) => {
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
      menuMega.setAttribute(
        'aria-hidden',
        menuMega.getAttribute('aria-hidden') === 'false' ? 'true' : 'false'
      );
    }

    return this;
  }
}

export default MenuLegacy;
