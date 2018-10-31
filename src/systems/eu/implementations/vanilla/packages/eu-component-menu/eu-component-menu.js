import { queryOne, queryAll } from '@ecl/eu-base/helpers/dom';

class Menu {
  constructor(
    element,
    {
      hamburgerButtonSelector: hamburgerButtonSelector = '[data-ecl-menu-hamburger-button]',
      menuListSelector: menuListSelector = '[data-ecl-menu-list]',
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
    this.menuLinkSelector = menuLinkSelector;
    this.menuSubListSelector = menuSubListSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.hamburgerButton = null;
    this.menuList = null;
    this.menuLinks = null;

    // Bind `this` for use in callbacks
    this.handleClickOnHamburger = this.handleClickOnHamburger.bind(this);
    this.handleClickOnLink = this.handleClickOnLink.bind(this);
  }

  init() {
    // Query elements
    this.hamburgerButton = queryOne(this.hamburgerButtonSelector, this.element);
    this.menuList = queryOne(this.menuListSelector, this.element);
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

    menuItem.setAttribute(
      'aria-expanded',
      menuItem.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );

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
