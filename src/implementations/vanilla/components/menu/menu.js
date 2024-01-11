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
 * @param {String} options.listSelector Selector for the menu items list
 * @param {String} options.itemSelector Selector for the menu item
 * @param {String} options.linkSelector Selector for the menu link
 * @param {String} options.buttonPreviousSelector Selector for the previous items button (for overflow)
 * @param {String} options.buttonNextSelector Selector for the next items button (for overflow)
 * @param {String} options.megaSelector Selector for the mega menu
 * @param {String} options.subItemSelector Selector for the menu sub items
 * @param {Int} options.maxLines Number of lines maximum for each menu item (for overflow). Set it to zero to disable automatic resize.
 * @param {String} options.maxLinesAttribute The data attribute to set the max lines in the markup, if needed
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param {Boolean} options.attachHoverListener Whether or not to bind hover events
 * @param {Boolean} options.attachFocusListener Whether or not to bind focus events
 * @param {Boolean} options.attachKeyListener Whether or not to bind keyboard events
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
      listSelector = '[data-ecl-menu-list]',
      itemSelector = '[data-ecl-menu-item]',
      linkSelector = '[data-ecl-menu-link]',
      buttonPreviousSelector = '[data-ecl-menu-items-previous]',
      buttonNextSelector = '[data-ecl-menu-items-next]',
      caretSelector = '[data-ecl-menu-caret]',
      megaSelector = '[data-ecl-menu-mega]',
      subItemSelector = '[data-ecl-menu-subitem]',
      maxLines = 2,
      maxLinesAttribute = 'data-ecl-menu-max-lines',
      attachClickListener = true,
      attachHoverListener = true,
      attachFocusListener = true,
      attachKeyListener = true,
      attachResizeListener = true,
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;

    // Options
    this.openSelector = openSelector;
    this.closeSelector = closeSelector;
    this.backSelector = backSelector;
    this.overlaySelector = overlaySelector;
    this.innerSelector = innerSelector;
    this.listSelector = listSelector;
    this.itemSelector = itemSelector;
    this.linkSelector = linkSelector;
    this.buttonPreviousSelector = buttonPreviousSelector;
    this.buttonNextSelector = buttonNextSelector;
    this.caretSelector = caretSelector;
    this.megaSelector = megaSelector;
    this.subItemSelector = subItemSelector;
    this.maxLines = maxLines;
    this.maxLinesAttribute = maxLinesAttribute;
    this.attachClickListener = attachClickListener;
    this.attachHoverListener = attachHoverListener;
    this.attachFocusListener = attachFocusListener;
    this.attachKeyListener = attachKeyListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.direction = 'ltr';
    this.open = null;
    this.close = null;
    this.back = null;
    this.overlay = null;
    this.inner = null;
    this.itemsList = null;
    this.items = null;
    this.links = null;
    this.btnPrevious = null;
    this.btnNext = null;
    this.isOpen = false;
    this.resizeTimer = null;
    this.isKeyEvent = false;
    this.isDesktop = false;
    this.hasOverflow = false;
    this.offsetLeft = 0;
    this.lastVisibleItem = null;
    this.currentItem = null;
    this.totalItemsWidth = 0;
    this.breakpointL = 996;

    // Bind `this` for use in callbacks
    this.handleClickOnOpen = this.handleClickOnOpen.bind(this);
    this.handleClickOnClose = this.handleClickOnClose.bind(this);
    this.handleClickOnBack = this.handleClickOnBack.bind(this);
    this.handleClickOnNextItems = this.handleClickOnNextItems.bind(this);
    this.handleClickOnPreviousItems =
      this.handleClickOnPreviousItems.bind(this);
    this.handleClickOnCaret = this.handleClickOnCaret.bind(this);
    this.handleHoverOnItem = this.handleHoverOnItem.bind(this);
    this.handleHoverOffItem = this.handleHoverOffItem.bind(this);
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.useDesktopDisplay = this.useDesktopDisplay.bind(this);
    this.checkMenuOverflow = this.checkMenuOverflow.bind(this);
    this.checkMenuItem = this.checkMenuItem.bind(this);
    this.checkMegaMenu = this.checkMegaMenu.bind(this);
    this.closeOpenDropdown = this.closeOpenDropdown.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();
    // Check display
    this.direction = getComputedStyle(this.element).direction;

    // Query elements
    this.open = queryOne(this.openSelector, this.element);
    this.close = queryOne(this.closeSelector, this.element);
    this.back = queryOne(this.backSelector, this.element);
    this.overlay = queryOne(this.overlaySelector, this.element);
    this.inner = queryOne(this.innerSelector, this.element);
    this.itemsList = queryOne(this.listSelector, this.element);
    this.btnPrevious = queryOne(this.buttonPreviousSelector, this.element);
    this.btnNext = queryOne(this.buttonNextSelector, this.element);
    this.items = queryAll(this.itemSelector, this.element);
    this.subItems = queryAll(this.subItemSelector, this.element);
    this.links = queryAll(this.linkSelector, this.element);
    this.carets = queryAll(this.caretSelector, this.element);

    // Get extra parameter from markup
    const maxLinesMarkup = this.element.getAttribute(this.maxLinesAttribute);
    if (maxLinesMarkup) {
      this.maxLines = maxLinesMarkup;
    }

    // Check if we should use desktop display (it does not rely only on breakpoints)
    this.isDesktop = this.useDesktopDisplay();

    // Bind click events on buttons
    if (this.attachClickListener) {
      // Open
      if (this.open) {
        this.open.addEventListener('click', this.handleClickOnOpen);
      }

      // Close
      if (this.close) {
        this.close.addEventListener('click', this.handleClickOnClose);
      }

      // Back
      if (this.back) {
        this.back.addEventListener('click', this.handleClickOnBack);
      }

      // Previous items
      if (this.btnPrevious) {
        this.btnPrevious.addEventListener(
          'click',
          this.handleClickOnPreviousItems,
        );
      }

      // Next items
      if (this.btnNext) {
        this.btnNext.addEventListener('click', this.handleClickOnNextItems);
      }

      // Overlay
      if (this.overlay) {
        this.overlay.addEventListener('click', this.handleClickOnClose);
      }
    }

    // Bind event on menu links
    if (this.links) {
      this.links.forEach((link) => {
        if (this.attachFocusListener) {
          link.addEventListener('focusin', this.closeOpenDropdown);
          link.addEventListener('focusin', this.handleFocusIn);
          link.addEventListener('focusout', this.handleFocusOut);
        }
        if (this.attachKeyListener) {
          link.addEventListener('keyup', this.handleKeyboard);
        }
      });
    }

    // Bind event on caret buttons
    if (this.carets) {
      this.carets.forEach((caret) => {
        if (this.attachFocusListener) {
          caret.addEventListener('focusin', this.handleFocusIn);
          caret.addEventListener('focusout', this.handleFocusOut);
        }
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
        const subLink = queryOne('.ecl-menu__sublink', subItem);
        if (this.attachKeyListener && subLink) {
          subLink.addEventListener('keyup', this.handleKeyboard);
        }
        if (this.attachFocusListener && subLink) {
          subLink.addEventListener('focusout', this.handleFocusOut);
        }
      });
    }

    // Bind global keyboard events
    if (this.attachKeyListener) {
      document.addEventListener('keyup', this.handleKeyboardGlobal);
    }

    // Bind resize events
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Browse first level items
    if (this.items) {
      this.items.forEach((item) => {
        // Check menu item display (right to left, full width, ...)
        this.checkMenuItem(item);
        this.totalItemsWidth += item.offsetWidth;

        if (item.hasAttribute('data-ecl-has-children')) {
          // Bind hover and focus events on menu items
          if (this.attachHoverListener) {
            item.addEventListener('mouseover', this.handleHoverOnItem);
            item.addEventListener('mouseout', this.handleHoverOffItem);
          }
        }
      });
    }

    // Update overflow display
    this.checkMenuOverflow();

    // Check if the current item is hidden (one side or the other)
    if (this.currentItem) {
      if (
        this.currentItem.getAttribute('data-ecl-menu-item-visible') === 'false'
      ) {
        this.btnNext.classList.add('ecl-menu__item--current');
      } else {
        this.btnPrevious.classList.add('ecl-menu__item--current');
      }
    }

    // Init sticky header
    this.stickyInstance = new Stickyfill.Sticky(this.element);

    // Hack to prevent css transition to be played on page load on chrome
    setTimeout(() => {
      this.element.classList.add('ecl-menu--transition');
    }, 500);

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.stickyInstance) {
      this.stickyInstance.remove();
    }

    if (this.attachClickListener) {
      if (this.open) {
        this.open.removeEventListener('click', this.handleClickOnOpen);
      }

      if (this.close) {
        this.close.removeEventListener('click', this.handleClickOnClose);
      }

      if (this.back) {
        this.back.removeEventListener('click', this.handleClickOnBack);
      }

      if (this.btnPrevious) {
        this.btnPrevious.removeEventListener(
          'click',
          this.handleClickOnPreviousItems,
        );
      }

      if (this.btnNext) {
        this.btnNext.removeEventListener('click', this.handleClickOnNextItems);
      }

      if (this.overlay) {
        this.overlay.removeEventListener('click', this.handleClickOnClose);
      }
    }

    if (this.attachKeyListener && this.carets) {
      this.carets.forEach((caret) => {
        caret.removeEventListener('keyup', this.handleKeyboard);
      });
    }

    if (this.items && this.isDesktop) {
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
          link.removeEventListener('focusin', this.handleFocusIn);
          link.removeEventListener('focusout', this.handleFocusOut);
        }
        if (this.attachKeyListener) {
          link.removeEventListener('keyup', this.handleKeyboard);
        }
      });
    }

    if (this.carets) {
      this.carets.forEach((caret) => {
        if (this.attachFocusListener) {
          caret.removeEventListener('focusin', this.handleFocusIn);
          caret.removeEventListener('focusout', this.handleFocusOut);
        }
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
        const subLink = queryOne('.ecl-menu__sublink', subItem);
        if (this.attachKeyListener && subLink) {
          subLink.removeEventListener('keyup', this.handleKeyboard);
        }
        if (this.attachFocusListener && subLink) {
          subLink.removeEventListener('focusout', this.handleFocusOut);
        }
      });
    }

    if (this.attachKeyListener) {
      document.removeEventListener('keyup', this.handleKeyboardGlobal);
    }

    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Check if desktop display has to be used
   * - not using a phone or tablet (whatever the screen size is)
   * - not having hamburger menu on screen
   */
  useDesktopDisplay() {
    // Detect mobile devices
    if (isMobile.isMobileOnly) {
      return false;
    }

    // Force mobile display on tablet
    if (isMobile.isTablet) {
      this.element.classList.add('ecl-menu--forced-mobile');
      return false;
    }

    // After all that, check if the hamburger button is displayed
    if (window.innerWidth < this.breakpointL) {
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
      this.isDesktop = this.useDesktopDisplay();

      // Update items display
      this.totalItemsWidth = 0;
      if (this.items) {
        this.items.forEach((item) => {
          this.checkMenuItem(item);
          this.totalItemsWidth += item.offsetWidth;
        });
      }

      // Update overflow display
      this.checkMenuOverflow();

      // Bring transition back
      this.element.classList.add('ecl-menu--transition');
    }, 200);

    return this;
  }

  /**
   * Check how to display menu horizontally and manage overflow
   */
  checkMenuOverflow() {
    // Backward compatibility
    if (!this.itemsList) {
      this.itemsList = queryOne('.ecl-menu__list', this.element);
    }

    if (
      !this.itemsList ||
      !this.inner ||
      !this.btnNext ||
      !this.btnPrevious ||
      !this.items
    ) {
      return;
    }

    // Check if the menu is too large
    // We take some margin for safety (same margin as the container's padding)
    this.hasOverflow = this.totalItemsWidth > this.inner.offsetWidth + 16;
    if (!this.hasOverflow || !this.isDesktop) {
      // Reset values related to overflow
      if (this.btnPrevious) {
        this.btnPrevious.style.display = 'none';
      }
      if (this.btnNext) {
        this.btnNext.style.display = 'none';
      }
      if (this.itemsList) {
        this.itemsList.style.left = '0';
      }
      if (this.inner) {
        this.inner.classList.remove('ecl-menu__inner--has-overflow');
      }
      this.offsetLeft = 0;
      this.totalItemsWidth = 0;
      this.lastVisibleItem = null;
      return;
    }

    if (this.inner) {
      this.inner.classList.add('ecl-menu__inner--has-overflow');
    }

    // Reset visibility indicator
    if (this.items) {
      this.items.forEach((item) => {
        item.removeAttribute('data-ecl-menu-item-visible');
      });
    }

    // First case: overflow to the end
    if (this.offsetLeft === 0) {
      this.btnNext.style.display = 'block';

      // Get visible items
      if (this.direction === 'rtl') {
        this.items.every((item) => {
          if (
            item.getBoundingClientRect().left <
            this.itemsList.getBoundingClientRect().left
          ) {
            this.lastVisibleItem = item;
            return false;
          }
          item.setAttribute('data-ecl-menu-item-visible', true);
          return true;
        });
      } else {
        this.items.every((item) => {
          if (
            item.getBoundingClientRect().right >
            this.itemsList.getBoundingClientRect().right
          ) {
            this.lastVisibleItem = item;
            return false;
          }
          item.setAttribute('data-ecl-menu-item-visible', true);
          return true;
        });
      }
    }
    // Second case: overflow to the begining
    else {
      // Get visible items
      // eslint-disable-next-line no-lonely-if
      if (this.direction === 'rtl') {
        this.items.forEach((item) => {
          if (
            item.getBoundingClientRect().right <=
            this.inner.getBoundingClientRect().right
          ) {
            item.setAttribute('data-ecl-menu-item-visible', true);
          }
        });
      } else {
        this.items.forEach((item) => {
          if (
            item.getBoundingClientRect().left >=
            this.inner.getBoundingClientRect().left
          ) {
            item.setAttribute('data-ecl-menu-item-visible', true);
          }
        });
      }
    }
  }

  /**
   * Check for a specific menu item how to display it:
   * - number of lines
   * - mega menu position
   *
   * @param {Node} menuItem
   */
  checkMenuItem(menuItem) {
    const menuLink = queryOne(this.linkSelector, menuItem);

    // Save current menu item
    if (menuItem.classList.contains('ecl-menu__item--current')) {
      this.currentItem = menuItem;
    }

    if (!this.isDesktop) {
      menuLink.style.width = 'auto';
      return;
    }

    // Check if line management has been disabled by user
    if (this.maxLines < 1) return;

    // Handle menu item height and width (n "lines" max)
    // Max height: n * line-height + padding
    // We need to temporally change item alignments to get the height
    menuItem.style.alignItems = 'flex-start';
    let linkWidth = menuLink.offsetWidth;
    const linkStyle = window.getComputedStyle(menuLink);
    const maxHeight =
      parseInt(linkStyle.lineHeight, 10) * this.maxLines +
      parseInt(linkStyle.paddingTop, 10) +
      parseInt(linkStyle.paddingBottom, 10);

    while (menuLink.offsetHeight > maxHeight) {
      menuLink.style.width = `${(linkWidth += 1)}px`;

      // Safety exit
      if (linkWidth > 1000) break;
    }
    menuItem.style.alignItems = 'unset';
  }

  /**
   * Handle positioning of mega menu
   * @param {Node} menuItem
   */
  checkMegaMenu(menuItem) {
    const menuMega = queryOne(this.megaSelector, menuItem);
    if (menuMega && this.inner) {
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
        if (this.direction === 'rtl') {
          menuMega.style.right = `${this.offsetLeft}px`;
        } else {
          menuMega.style.left = `${this.offsetLeft}px`;
        }
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
   * Handles keyboard events specific to the menu.
   *
   * @param {Event} e
   */
  handleKeyboard(e) {
    const element = e.target;
    const cList = element.classList;
    const menuExpanded = this.element.getAttribute('aria-expanded');
    const menuItem = element.closest(this.itemSelector);

    // Detect press on Escape
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (document.activeElement === element) {
        element.blur();
      }

      if (menuExpanded === 'false') {
        const buttonCaret = queryOne('.ecl-menu__button-caret', menuItem);
        if (buttonCaret) {
          buttonCaret.focus();
        }
        this.closeOpenDropdown();
      }
      return;
    }

    // Key actions to toggle the caret buttons
    if (cList.contains('ecl-menu__button-caret') && menuExpanded === 'false') {
      if (e.keyCode === 32 || e.key === 'Enter') {
        if (menuItem.getAttribute('aria-expanded') === 'true') {
          this.handleHoverOffItem(e);
        } else {
          this.handleHoverOnItem(e);
        }
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const firstItem = queryOne(
          '.ecl-menu__sublink:first-of-type',
          menuItem,
        );
        if (firstItem) {
          this.handleHoverOnItem(e);
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
        e.preventDefault();
        let prevItem = element.previousSibling;

        if (prevItem && prevItem.classList.contains('ecl-menu__link')) {
          prevItem.focus();
          return;
        }

        prevItem = element.parentElement.previousSibling;
        if (prevItem) {
          const prevClass = prevItem.classList.contains(
            'ecl-menu__item--has-children',
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
        e.preventDefault();
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
            this.element,
          );

          if (caretButton) {
            caretButton.focus();
          }
        }
      }
    }
  }

  /**
   * Handles global keyboard events, triggered outside of the menu.
   *
   * @param {Event} e
   */
  handleKeyboardGlobal(e) {
    const menuExpanded = this.element.getAttribute('aria-expanded');

    // Detect press on Escape
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (menuExpanded === 'true') {
        this.handleClickOnClose();
      }
      this.items.forEach((item) => {
        item.setAttribute('aria-expanded', 'false');
      });
      this.carets.forEach((caret) => {
        caret.setAttribute('aria-expanded', 'false');
      });
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

    // Set focus to hamburger button
    if (this.open) {
      this.open.focus();
    }

    this.isOpen = false;

    return this;
  }

  /**
   * Get back to previous list (on mobile)
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
   * Click on the previous items button
   */
  handleClickOnPreviousItems() {
    if (!this.itemsList || !this.btnNext) return;

    this.offsetLeft = 0;
    if (this.direction === 'rtl') {
      this.itemsList.style.right = '0';
      this.itemsList.style.left = 'auto';
    } else {
      this.itemsList.style.left = '0';
      this.itemsList.style.right = 'auto';
    }

    // Update button display
    this.btnPrevious.style.display = 'none';
    this.btnNext.style.display = 'block';

    // Refresh display
    if (this.items) {
      this.items.forEach((item) => {
        this.checkMenuItem(item);
        item.toggleAttribute('data-ecl-menu-item-visible');
      });
    }
  }

  /**
   * Click on the next items button
   */
  handleClickOnNextItems() {
    if (
      !this.itemsList ||
      !this.items ||
      !this.btnPrevious ||
      !this.lastVisibleItem
    )
      return;

    // Update button display
    this.btnPrevious.style.display = 'block';
    this.btnNext.style.display = 'none';

    // Calculate left offset
    if (this.direction === 'rtl') {
      this.offsetLeft =
        this.itemsList.getBoundingClientRect().right -
        this.lastVisibleItem.getBoundingClientRect().right -
        this.btnPrevious.offsetWidth;

      this.itemsList.style.right = `-${this.offsetLeft}px`;
      this.itemsList.style.left = 'auto';
    } else {
      this.offsetLeft =
        this.lastVisibleItem.getBoundingClientRect().left -
        this.itemsList.getBoundingClientRect().left -
        this.btnPrevious.offsetWidth;

      this.itemsList.style.left = `-${this.offsetLeft}px`;
      this.itemsList.style.right = 'auto';
    }

    // Refresh display
    if (this.items) {
      this.items.forEach((item) => {
        this.checkMenuItem(item);
        item.toggleAttribute('data-ecl-menu-item-visible');
      });
    }
  }

  /**
   * Click on a menu item caret
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
    this.checkMegaMenu(menuItem);
  }

  /**
   * Hover on a menu item
   * @param {Event} e
   */
  handleHoverOnItem(e) {
    const menuItem = e.target.closest(this.itemSelector);

    // Ignore hidden or partially hidden items
    if (
      this.hasOverflow &&
      !menuItem.hasAttribute('data-ecl-menu-item-visible')
    )
      return;

    // Add attribute to current item, and remove it from others
    this.items.forEach((item) => {
      const caretButton = queryOne(this.caretSelector, item);
      if (item === menuItem) {
        item.setAttribute('aria-expanded', 'true');

        if (caretButton) {
          caretButton.setAttribute('aria-expanded', 'true');
        }
      } else {
        item.setAttribute('aria-expanded', 'false');

        // Force remove focus on caret buttons
        if (caretButton) {
          caretButton.setAttribute('aria-expanded', 'false');
          caretButton.blur();
        }
      }
    });

    this.checkMegaMenu(menuItem);
  }

  /**
   * Deselect a menu item
   * @param {Event} e
   */
  handleHoverOffItem(e) {
    // Remove attribute to current item
    const menuItem = e.target.closest(this.itemSelector);
    menuItem.setAttribute('aria-expanded', 'false');

    const caretButton = queryOne(this.caretSelector, menuItem);
    if (caretButton) {
      caretButton.setAttribute('aria-expanded', 'false');
    }

    return this;
  }

  /**
   * Deselect any opened menu item
   */
  closeOpenDropdown() {
    const currentItem = queryOne(
      `${this.itemSelector}[aria-expanded='true']`,
      this.element,
    );
    if (currentItem) {
      currentItem.setAttribute('aria-expanded', 'false');

      const caretButton = queryOne(this.caretSelector, currentItem);
      if (caretButton) {
        caretButton.setAttribute('aria-expanded', 'false');
      }
    }
  }

  /**
   * Focus in a menu link
   * @param {Event} e
   */
  handleFocusIn(e) {
    const element = e.target;

    // Specific focus action for desktop menu
    if (this.isDesktop && this.hasOverflow) {
      const parentItem = element.closest('[data-ecl-menu-item]');
      if (!parentItem.hasAttribute('data-ecl-menu-item-visible')) {
        // Trigger scroll button depending on the context
        if (this.offsetLeft === 0) {
          this.handleClickOnNextItems();
        } else {
          this.handleClickOnPreviousItems();
        }
      }
    }
  }

  /**
   * Focus out of a menu link
   * @param {Event} e
   */
  handleFocusOut(e) {
    const element = e.target;
    const menuExpanded = this.element.getAttribute('aria-expanded');

    // Specific focus action for mobile menu
    // Loop through the items and go back to close button
    if (menuExpanded === 'true') {
      const nextItem = element.parentElement.nextSibling;

      if (!nextItem) {
        // There are no next menu item, but maybe there is a carret button
        const caretButton = queryOne(
          '.ecl-menu__button-caret',
          element.parentElement,
        );
        if (caretButton && element !== caretButton) {
          return;
        }

        // This is the last item, go back to close button
        this.close.focus();
      }
    }
  }
}

export default Menu;
