import Stickyfill from 'stickyfilljs';
import { queryOne, queryAll } from '@ecl/dom-utils';

import isMobile from 'mobile-device-detect';

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
 * @param {Boolean} options.attachResizeListener Whether or not to bind resize events
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
      caretSelector = '[data-ecl-menu-caret]',
      megaSelector = '[data-ecl-menu-mega]',
      subItemSelector = '[data-ecl-menu-subitem]',
      attachClickListener = true,
      attachHoverListener = true,
      attachFocusListener = true,
      attachKeyListener = true,
      attachResizeListener = true,
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
    this.caretSelector = caretSelector;
    this.megaSelector = megaSelector;
    this.subItemSelector = subItemSelector;
    this.attachClickListener = attachClickListener;
    this.attachHoverListener = attachHoverListener;
    this.attachFocusListener = attachFocusListener;
    this.attachKeyListener = attachKeyListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.open = null;
    this.close = null;
    this.back = null;
    this.overlay = null;
    this.inner = null;
    this.items = null;
    this.links = null;
    this.isOpen = false;
    this.resizeTimer = null;
    this.isKeyEvent = false;

    // Bind `this` for use in callbacks
    this.handleClickOnOpen = this.handleClickOnOpen.bind(this);
    this.handleClickOnClose = this.handleClickOnClose.bind(this);
    this.handleClickOnBack = this.handleClickOnBack.bind(this);
    this.handleClickOnCaret = this.handleClickOnCaret.bind(this);
    this.handleHoverOnItem = this.handleHoverOnItem.bind(this);
    this.handleHoverOffItem = this.handleHoverOffItem.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.useDesktopDisplay = this.useDesktopDisplay.bind(this);
    this.closeOpenDropdown = this.closeOpenDropdown.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    // Query elements
    this.open = queryOne(this.openSelector, this.element);
    this.close = queryOne(this.closeSelector, this.element);
    this.back = queryOne(this.backSelector, this.element);
    this.overlay = queryOne(this.overlaySelector, this.element);
    this.inner = queryOne(this.innerSelector, this.element);
    this.items = queryAll(this.itemSelector, this.element);
    this.subItems = queryAll(this.subItemSelector, this.element);
    this.links = queryAll(this.linkSelector, this.element);
    this.carets = queryAll(this.caretSelector, this.element);

    // Check if we should use desktop display (it does not rely only on breakpoints)
    this.useDesktopDisplay();

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

    // Bind event on menu links
    if (this.links) {
      this.links.forEach((link) => {
        if (this.attachFocusListener) {
          link.addEventListener('focusin', this.closeOpenDropdown);
        }
        if (this.attachKeyListener) {
          link.addEventListener('keyup', this.handleKeyboard);
        }
      });
    }

    // Bind key event on caret buttons
    if (this.carets) {
      this.carets.forEach((caret) => {
        if (this.attachKeyListener) {
          caret.addEventListener('keyup', this.handleKeyboard);
        }
        if (this.attachClickListener) {
          caret.addEventListener('click', this.handleClickOnCaret);
        }
      });
    }

    // Bind event on sub menu links
    if (this.subItems) {
      this.subItems.forEach((subItem) => {
        if (this.attachKeyListener) {
          const subLink = queryOne('.ecl-menu__sublink', subItem);
          if (subLink) {
            subLink.addEventListener('keyup', this.handleKeyboard);
          }
        }
      });
    }

    // Bind resize events
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Browse first level items
    if (this.items && !isMobile.isMobile) {
      this.items.forEach((item) => {
        // Check mega menu display (right to left, full width, ...)
        this.checkMenuItem(item);

        if (item.hasAttribute('data-ecl-has-children')) {
          // Bind hover and focus events on menu items
          if (this.attachHoverListener) {
            item.addEventListener('mouseover', this.handleHoverOnItem);
            item.addEventListener('mouseout', this.handleHoverOffItem);
          }
        }
      });
    }

    // Init sticky header
    this.stickyInstance = new Stickyfill.Sticky(this.element);

    // Hack to prevent css transition to be played on page load on chrome
    setTimeout(() => {
      this.element.classList.add('ecl-menu--transition');
    }, 500);

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.stickyInstance) {
      this.stickyInstance.remove();
    }

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

    if (this.attachKeyListener && this.carets) {
      this.carets.forEach((caret) => {
        caret.removeEventListener('keyup', this.handleKeyboard);
      });
    }

    if (this.items && !isMobile.isMobile) {
      this.items.forEach((item) => {
        if (item.hasAttribute('data-ecl-has-children')) {
          if (this.attachHoverListener) {
            item.removeEventListener('mouseover', this.handleHoverOnItem);
            item.removeEventListener('mouseout', this.handleHoverOffItem);
          }
        }
      });
    }

    if (this.links) {
      this.links.forEach((link) => {
        if (this.attachFocusListener) {
          link.removeEventListener('focusin', this.closeOpenDropdown);
        }
        if (this.attachKeyListener) {
          link.removeEventListener('keyup', this.handleKeyboard);
        }
      });
    }

    if (this.carets) {
      this.carets.forEach((caret) => {
        if (this.attachKeyListener) {
          caret.removeEventListener('keyup', this.handleKeyboard);
        }
        if (this.attachClickListener) {
          caret.removeEventListener('click', this.handleClickOnCaret);
        }
      });
    }

    if (this.subItems) {
      this.subItems.forEach((subItem) => {
        if (this.attachKeyListener) {
          const subLink = queryOne('.ecl-menu__sublink', subItem);
          if (subLink) {
            subLink.removeEventListener('keyup', this.handleKeyboard);
          }
        }
      });
    }

    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }

  /**
   * Check if desktop display has to be used
   * - not using a phone or tablet (whatever the screen size is)
   * - enough space to display all the menu items
   */
  useDesktopDisplay() {
    if (isMobile.isMobileOnly) {
      return false;
    }

    // Force mobile display on tablet
    if (isMobile.isTablet) {
      this.element.classList.add('ecl-menu--forced-mobile');
      return false;
    }

    // Everything is fine to use desktop display
    this.element.classList.remove('ecl-menu--forced-mobile');
    return true;
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   */
  handleResize() {
    // Disable transition
    this.element.classList.remove('ecl-menu--transition');

    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.element.classList.remove('ecl-menu--forced-mobile');

      // Check global display
      this.useDesktopDisplay();

      // Check mega menu display (right to left, full width, ...)
      if (this.items && !isMobile.isMobile) {
        this.items.forEach((item) => {
          this.checkMenuItem(item);
        });
      }

      // Bring transition back
      this.element.classList.add('ecl-menu--transition');
    }, 200);

    return this;
  }

  /**
   * Check for a specific menu item how to display the mega menu
   * @param {Node} menuItem
   */
  checkMenuItem(menuItem) {
    const menuMega = queryOne(this.megaSelector, menuItem);

    if (menuMega) {
      // Check number of items and put them in column
      const subItems = queryAll(this.subItemSelector, menuMega);

      if (subItems.length < 5) {
        menuItem.classList.add('ecl-menu__item--col1');
      } else if (subItems.length < 9) {
        menuItem.classList.add('ecl-menu__item--col2');
      } else if (subItems.length < 13) {
        menuItem.classList.add('ecl-menu__item--col3');
      } else {
        menuItem.classList.add('ecl-menu__item--full');
        return;
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
  }

  /**
   * Handles keyboard events such as Escape and navigation.
   *
   * @param {Event} e
   */
  handleKeyboard(e) {
    const element = e.target;
    const cList = element.classList;

    // Detect press on Escape
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (document.activeElement === element) {
        element.blur();
      }
    }

    // Key actions to toggle the caret buttons
    const menuExpanded = this.element.getAttribute('aria-expanded');

    if (cList.contains('ecl-menu__button-caret') && menuExpanded === 'false') {
      const menuItem = element.closest(this.itemSelector);

      if (e.keyCode === 32 || e.key === 'Enter') {
        if (menuItem.getAttribute('aria-expanded') === 'true') {
          this.handleHoverOffItem(e);
        } else {
          this.handleHoverOnItem(e);
        }
        return;
      }
      if (e.key === 'ArrowDown') {
        const firstItem = queryOne(
          '.ecl-menu__sublink:first-of-type',
          menuItem
        );
        if (firstItem) {
          firstItem.focus();
          return;
        }
      }
    }

    // Key actions to navigate between first level menu items
    if (
      cList.contains('ecl-menu__link') ||
      cList.contains('ecl-menu__button-caret')
    ) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        let prevItem = element.previousSibling;

        if (prevItem && prevItem.classList.contains('ecl-menu__link')) {
          prevItem.focus();
          return;
        }

        prevItem = element.parentElement.previousSibling;
        if (prevItem) {
          const prevClass = prevItem.classList.contains(
            'ecl-menu__item--has-children'
          )
            ? '.ecl-menu__button-caret'
            : '.ecl-menu__link';
          const prevLink = queryOne(prevClass, prevItem);

          if (prevLink) {
            prevLink.focus();
            return;
          }
        }
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        let nextItem = element.nextSibling;

        if (nextItem && nextItem.classList.contains('ecl-menu__button-caret')) {
          nextItem.focus();
          return;
        }
        nextItem = element.parentElement.nextSibling;
        if (nextItem) {
          const nextLink = queryOne('.ecl-menu__link', nextItem);

          if (nextLink) {
            nextLink.focus();
          }
        }
      }

      this.closeOpenDropdown();
    }

    // Key actions to navigate between the sub-links
    if (cList.contains('ecl-menu__sublink')) {
      if (e.key === 'ArrowDown') {
        const nextItem = element.parentElement.nextSibling;
        if (nextItem) {
          const nextLink = queryOne('.ecl-menu__sublink', nextItem);

          if (nextLink) {
            nextLink.focus();
            return;
          }
        }
      }
      if (e.key === 'ArrowUp') {
        const prevItem = element.parentElement.previousSibling;
        if (prevItem) {
          const prevLink = queryOne('.ecl-menu__sublink', prevItem);

          if (prevLink) {
            prevLink.focus();
          }
        } else {
          const caretButton = queryOne(
            `${this.itemSelector}[aria-expanded="true"] ${this.caretSelector}`,
            this.element
          );

          if (caretButton) {
            caretButton.focus();
          }
        }
      }
    }
  }

  /**
   * Open menu list.
   * @param {Event} e
   */
  handleClickOnOpen(e) {
    e.preventDefault();

    this.element.setAttribute('aria-expanded', 'true');
    this.inner.setAttribute('aria-hidden', 'false');
    this.isOpen = true;

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
    this.items.forEach((item) => {
      item.classList.remove('ecl-menu__item--expanded');
      item.setAttribute('aria-expanded', 'false');
    });

    this.isOpen = false;

    return this;
  }

  /**
   * Get back to previous state.
   */
  handleClickOnBack() {
    // Remove css class from inner menu
    this.inner.classList.remove('ecl-menu__inner--expanded');

    // Remove css class and attribute from menu items
    this.items.forEach((item) => {
      item.classList.remove('ecl-menu__item--expanded');
      item.setAttribute('aria-expanded', 'false');
    });

    return this;
  }

  /**
   * Click on a menu item
   * @param {Event} e
   */
  handleClickOnCaret(e) {
    // Don't execute for desktop display
    const menuExpanded = this.element.getAttribute('aria-expanded');
    if (menuExpanded === 'false') {
      return;
    }

    // Add css class to inner menu
    this.inner.classList.add('ecl-menu__inner--expanded');

    // Add css class and attribute to current item, and remove it from others
    const menuItem = e.target.closest(this.itemSelector);
    this.items.forEach((item) => {
      if (item === menuItem) {
        item.classList.add('ecl-menu__item--expanded');
        item.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('ecl-menu__item--expanded');
        item.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /**
   * Hover on a menu item
   * @param {Event} e
   */
  handleHoverOnItem(e) {
    // Add attribute to current item, and remove it from others
    const menuItem = e.target.closest(this.itemSelector);
    this.items.forEach((item) => {
      if (item === menuItem) {
        item.setAttribute('aria-expanded', 'true');
      } else {
        item.setAttribute('aria-expanded', 'false');
      }

      // Force remove focus on caret buttons
      const caretButton = queryOne('.ecl-menu__button-caret', item);
      if (caretButton) {
        caretButton.blur();
      }
    });

    return this;
  }

  /**
   * Deselect a menu item
   * @param {Event} e
   */
  handleHoverOffItem(e) {
    // Remove attribute to current item
    const menuItem = e.target.closest(this.itemSelector);
    menuItem.setAttribute('aria-expanded', 'false');

    return this;
  }

  /**
   * Deselect any opened menu item
   */
  closeOpenDropdown() {
    const currentItem = queryOne(
      `${this.itemSelector}[aria-expanded='true']`,
      this.element
    );
    if (currentItem) {
      currentItem.setAttribute('aria-expanded', 'false');
    }
  }
}

export default Menu;
