import { queryOne, queryAll } from '@ecl/eu-base/helpers/dom';

class Menu {
  constructor(
    element,
    {
      hamburgerButtonSelector: hamburgerButtonSelector = '[data-ecl-menu-hamburger-button]',
      menuListSelector: menuListSelector = '[data-ecl-menu-list]',
      menuItemSelector: menuItemSelector = '[data-ecl-menu-item]',
      menuLinkSelector: menuLinkSelector = '[data-ecl-menu-link]',
      menuSubListSelector: menuSubListSelector = '[data-ecl-menu-sublist]',
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
    this.hamburgerButtonSelector = hamburgerButtonSelector;
    this.menuListSelector = menuListSelector;
    this.menuItemSelector = menuItemSelector;
    this.menuLinkSelector = menuLinkSelector;
    this.menuSubListSelector = menuSubListSelector;
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

  destroy() {
    if (this.attachClickListener && this.ellipsisButton) {
      this.hamburgerButton.removeEventListener(
        'click',
        this.handleClickOnHamburger
      );
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

  handleClickOnLink(e) {
    e.preventDefault();

    const menuItem = e.target.closest('[data-ecl-has-children]');

    // Close other items
    this.menuItems.forEach(item => {
      if (item !== menuItem) {
        item.setAttribute('aria-expanded', false);
        const subMenu = queryOne(this.menuSubListSelector, item);
        if (subMenu) {
          subMenu.setAttribute('aria-hidden', true);
        }
      }
    });

    // Toggle current item
    menuItem.setAttribute(
      'aria-expanded',
      menuItem.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );

    // Toggle sub items
    const menuSubList = queryOne(this.menuSubListSelector, menuItem);

    if (menuSubList) {
      menuSubList.setAttribute(
        'aria-hidden',
        menuSubList.getAttribute('aria-hidden') === 'false' ? 'true' : 'false'
      );
    }

    return this;
  }
}

export default Menu;
