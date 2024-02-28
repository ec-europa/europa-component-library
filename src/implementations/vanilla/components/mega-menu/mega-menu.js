import Stickyfill from 'stickyfilljs';
import { queryOne, queryAll } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';
import isMobile from 'mobile-device-detect';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.openSelector Selector for the hamburger button
 * @param {String} options.closeSelector Selector for the close button
 * @param {String} options.backSelector Selector for the back button
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
 * @param {String} options.labelOpenAttribute The data attribute for open label
 * @param {String} options.labelCloseAttribute The data attribute for close label
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param {Boolean} options.attachHoverListener Whether or not to bind hover events
 * @param {Boolean} options.attachFocusListener Whether or not to bind focus events
 * @param {Boolean} options.attachKeyListener Whether or not to bind keyboard events
 * @param {Boolean} options.attachResizeListener Whether or not to bind resize events
 */
export class MegaMenu {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Menu} An instance of Menu.
   */
  static autoInit(root, { MEGA_MENU: defaultOptions = {} } = {}) {
    const megaMenu = new MegaMenu(root, defaultOptions);
    megaMenu.init();
    root.ECLMegaMenu = megaMenu;
    return megaMenu;
  }

  /**
   *   @event MegaMenu#onOpen
   */
  /**
   *   @event MegaMenu#onClose
   */

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @memberof Menu
   */
  supportedEvents = ['onOpen', 'onClose'];

  constructor(
    element,
    {
      openSelector = '[data-ecl-mega-menu-open]',
      closeSelector = '[data-ecl-mega-menu-close]',
      backSelector = '[data-ecl-menu-back]',
      innerSelector = '[data-ecl-mega-menu-inner]',
      listSelector = '[data-ecl-mega-menu-list]',
      itemSelector = '[data-ecl-mega-menu-item]',
      linkSelector = '[data-ecl-mega-menu-link]',
      buttonPreviousSelector = '[data-ecl-mega-menu-items-previous]',
      buttonNextSelector = '[data-ecl-mega-menu-items-next]',
      caretSelector = '[data-ecl-mega-menu-caret]',
      megaSelector = '[data-ecl-mega-menu-mega]',
      subItemSelector = '[data-ecl-mega-menu-subitem]',
      maxLines = 2,
      featuredAttribute = '[data-ecl-mega-menu-featured]',
      labelOpenAttribute = 'data-ecl-mega-menu-label-open',
      labelCloseAttribute = 'data-ecl-mega-menu-label-close',
      attachClickListener = true,
      attachHoverListener = true,
      attachFocusListener = true,
      attachKeyListener = true,
      attachResizeListener = true,
      onCloseCallback = null,
      onOpenCallback = null,
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;
    this.eventManager = new EventManager();

    // Options
    this.openSelector = openSelector;
    this.closeSelector = closeSelector;
    this.backSelector = backSelector;
    this.innerSelector = innerSelector;
    this.listSelector = listSelector;
    this.itemSelector = itemSelector;
    this.linkSelector = linkSelector;
    this.buttonPreviousSelector = buttonPreviousSelector;
    this.buttonNextSelector = buttonNextSelector;
    this.caretSelector = caretSelector;
    this.megaSelector = megaSelector;
    this.subItemSelector = subItemSelector;
    this.labelOpenAttribute = labelOpenAttribute;
    this.labelCloseAttribute = labelCloseAttribute;
    this.attachClickListener = attachClickListener;
    this.attachHoverListener = attachHoverListener;
    this.attachFocusListener = attachFocusListener;
    this.attachKeyListener = attachKeyListener;
    this.attachResizeListener = attachResizeListener;
    this.onOpenCallback = onOpenCallback;
    this.onCloseCallback = onCloseCallback;
    this.featuredAttribute = featuredAttribute;

    // Private variables
    this.direction = 'ltr';
    this.open = null;
    this.close = null;
    this.toggleLabel = null;
    this.back = null;
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
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleClickOnBack = this.handleClickOnBack.bind(this);
    this.handleClickGlobal = this.handleClickGlobal.bind(this);
    this.handleClickOnItem = this.handleClickOnItem.bind(this);
    this.handleClickOnSubitem = this.handleClickOnSubitem.bind(this);
    this.handleClickOffItem = this.handleClickOffItem.bind(this);
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.useDesktopDisplay = this.useDesktopDisplay.bind(this);
    this.checkMenuItem = this.checkMenuItem.bind(this);
    this.checkMegaMenu = this.checkMegaMenu.bind(this);
    this.closeOpenDropdown = this.closeOpenDropdown.bind(this);
    this.checkDropdownHeight = this.checkDropdownHeight.bind(this);
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
    this.toggleLabel = queryOne('.ecl-link__label', this.open);
    this.back = queryOne(this.backSelector, this.element);
    this.inner = queryOne(this.innerSelector, this.element);
    this.itemsList = queryOne(this.listSelector, this.element);
    this.btnPrevious = queryOne(this.buttonPreviousSelector, this.element);
    this.btnNext = queryOne(this.buttonNextSelector, this.element);
    this.items = queryAll(this.itemSelector, this.element);
    this.subItems = queryAll(this.subItemSelector, this.element);
    this.links = queryAll(this.linkSelector, this.element);
    this.featured = queryOne(this.featuredAttribute, this.element);

    // Check if we should use desktop display (it does not rely only on breakpoints)
    this.isDesktop = this.useDesktopDisplay();

    // Bind click events on buttons
    if (this.attachClickListener) {
      // Open
      if (this.open) {
        this.open.addEventListener('click', this.handleClickOnToggle);
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

      // Global click
      if (this.attachClickListener) {
        document.addEventListener('click', this.handleClickGlobal);
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

    // Bind event on sub menu links
    if (this.subItems) {
      this.subItems.forEach((subItem) => {
        const subLink = queryOne('.ecl-mega-menu__sublink', subItem);

        if (this.attachKeyListener && subLink) {
          subLink.addEventListener('click', this.handleClickOnSubitem);
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
            item.addEventListener('click', this.handleClickOnItem);
          }
        }
      });
    }

    // Init sticky header
    this.stickyInstance = new Stickyfill.Sticky(this.element);

    // Hack to prevent css transition to be played on page load on chrome
    setTimeout(() => {
      this.element.classList.add('ecl-mega-menu--transition');
    }, 500);

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   * @memberof Menu
   * @instance
   *
   * @example
   * // Registering a callback for the 'onOpen' event
   * megaMenu.on('onOpen', (event) => {
   *   console.log('Open event occurred!', event);
   * });
   */
  on(eventName, callback) {
    this.eventManager.on(eventName, callback);
  }

  /**
   * Trigger a component event.
   *
   * @param {string} eventName - The name of the event to trigger.
   * @param {any} eventData - Data associated with the event.
   * @memberof MegaMenu
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
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
        this.open.removeEventListener('click', this.handleClickOnToggle);
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

      if (this.attachClickListener) {
        document.removeEventListener('click', this.handleClickGlobal);
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
            item.removeEventListener('click', this.handleClickrOnItem);
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

    if (this.subItems) {
      this.subItems.forEach((subItem) => {
        const subLink = queryOne('.ecl-mega-menu__sublink', subItem);
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
      this.element.classList.add('ecl-mega-menu--forced-mobile');
      return false;
    }

    // After all that, check if the hamburger button is displayed
    if (window.innerWidth < this.breakpointL) {
      return false;
    }

    // Everything is fine to use desktop display
    this.element.classList.remove('ecl-mega-menu--forced-mobile');
    return true;
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   */
  handleResize() {
    // Disable transition
    this.element.classList.remove('ecl-mega-menu--transition');

    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.element.classList.remove('ecl-mega-menu--forced-mobile');

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

      // Bring transition back
      this.element.classList.add('ecl-mega-menu--transition');
    }, 200);

    return this;
  }

  checkDropdownHeight(menuItem) {
    const viewportHeight = window.innerHeight;
    const dropdown = queryOne('.ecl-mega-menu__sublist', menuItem);
    console.log(dropdown);
    const dropdownTop = dropdown.getBoundingClientRect().top;
    console.log(dropdownTop);
    console.log(viewportHeight);
    const dropdownHeight = viewportHeight - dropdownTop;
    dropdown.style.height = `${dropdownHeight}px`;
  }

  cloneItemInTheDrowdown(menuItem) {
    const megaList = queryOne('.ecl-mega-menu__sublist', menuItem);
    const firstItem = menuItem.cloneNode(true);
    const innerList = queryOne('.ecl-mega-menu__mega', firstItem);

    if (innerList) {
      innerList.parentNode.removeChild(innerList);
    }

    firstItem.classList.remove('ecl-mega-menu__item--has-children', 'ecl-mega-menu__item', 'ecl-mega-menu__item--current');
    firstItem.classList.add('ecl-mega-menu__subitem');
    firstItem.firstElementChild.classList.remove('ecl-mega-menu__link');
    firstItem.firstElementChild.classList.add('ecl-mega-menu__sublink');
    const firstChild = megaList.firstChild;
    megaList.insertBefore(firstItem, firstChild);
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
    if (menuItem.classList.contains('ecl-mega-menu__item--current')) {
      this.currentItem = menuItem;
    }
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
      
      if (subItems.length < 15) {
        menuMega.classList.add('ecl-mega-menu__item--col1');
      } else {
        menuMega.classList.add('ecl-mega-menu__item--col2');
        if (this.direction === 'rtl') {
          menuMega.style.right = `${this.offsetLeft}px`;
        } 
      }

      // Check if there is enough space on the right to display the menu
      const megaBounding = menuMega.getBoundingClientRect();
      const containerBounding = this.inner.getBoundingClientRect();
      const menuItemBounding = menuItem.getBoundingClientRect();

      const megaWidth = megaBounding.width;
      const containerWidth = containerBounding.width;
      const menuItemPosition = menuItemBounding.left - containerBounding.left;

      if (menuItemPosition + megaWidth > containerWidth) {
        menuMega.classList.add('ecl-mega-menu__mega--rtl');
      } else {
        menuMega.classList.remove('ecl-mega-menu__mega--rtl');
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
        this.closeOpenDropdown();
      }
      return;
    }

    // Key actions to navigate between first level menu items
    if (
      cList.contains('ecl-mega-menu__link')
    ) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        let prevItem = element.previousSibling;

        if (prevItem && prevItem.classList.contains('ecl-mega-menu__link')) {
          prevItem.focus();
          return;
        }

        prevItem = element.parentElement.previousSibling;
        if (prevItem) {
          const prevClass = prevItem.classList.contains(
            'ecl-mega-menu__item--has-children',
          )
            ? '.ecl-mega-menu__button-caret'
            : '.ecl-mega-menu__link';
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

        if (nextItem && nextItem.classList.contains('ecl-mega-menu__button-caret')) {
          nextItem.focus();
          return;
        }
        nextItem = element.parentElement.nextSibling;
        if (nextItem) {
          const nextLink = queryOne('.ecl-mega-menu__link', nextItem);

          if (nextLink) {
            nextLink.focus();
          }
        }
      }

      this.closeOpenDropdown();
    }

    // Key actions to navigate between the sub-links
    if (cList.contains('ecl-mega-menu__sublink')) {
      if (e.key === 'ArrowDown') {
        const nextItem = element.parentElement.nextSibling;
        if (nextItem) {
          const nextLink = queryOne('.ecl-mega-menu__sublink', nextItem);

          if (nextLink) {
            nextLink.focus();
            return;
          }
        }
      }
      if (e.key === 'ArrowUp') {
        const prevItem = element.parentElement.previousSibling;
        if (prevItem) {
          const prevLink = queryOne('.ecl-mega-menu__sublink', prevItem);

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
   *
   * @fires Menu#onOpen
   */
  handleClickOnOpen(e) {
    e.preventDefault();

    this.element.setAttribute('aria-expanded', 'true');
    this.inner.setAttribute('aria-hidden', 'false');
    this.isOpen = true;

    // Update label
    const closeLabel = this.element.getAttribute(this.labelCloseAttribute);
    if (this.toggleLabel && closeLabel) {
      this.toggleLabel.innerHTML = closeLabel;
    }

    this.trigger('onOpen', e);

    return this;
  }

  /**
   * Close menu list.
   * @param {Event} e
   *
   * @fires Menu#onClose
   */
  handleClickOnClose(e) {
    this.element.setAttribute('aria-expanded', 'false');

    // Remove css class and attribute from inner menu
    this.inner.classList.remove('ecl-mega-menu__inner--expanded');
    this.inner.setAttribute('aria-hidden', 'true');

    // Remove css class and attribute from menu items
    this.items.forEach((item) => {
      item.classList.remove('ecl-mega-menu__item--expanded');
      item.setAttribute('aria-expanded', 'false');
    });

    // Update label
    const openLabel = this.element.getAttribute(this.labelOpenAttribute);
    if (this.toggleLabel && openLabel) {
      this.toggleLabel.innerHTML = openLabel;
    }

    // Set focus to hamburger button
    if (this.open) {
      this.open.focus();
    }

    this.isOpen = false;
    this.trigger('onClose', e);

    return this;
  }

  /**
   * Toggle menu list.
   * @param {Event} e
   */
  handleClickOnToggle(e) {
    e.preventDefault();

    if (this.isOpen) {
      this.handleClickOnClose(e);
    } else {
      this.handleClickOnOpen(e);
    }
  }

  /**
   * Get back to previous list (on mobile)
   */
  handleClickOnBack() {
    // Remove css class from inner menu
    this.inner.classList.remove('ecl-mega-menu__inner--expanded');

    // Remove css class and attribute from menu items
    this.items.forEach((item) => {
      item.classList.remove('ecl-mega-menu__item--expanded');
      item.setAttribute('aria-expanded', 'false');
    });

    return this;
  }

  /**
   * Click on a menu item
   * @param {Event} e
   */
  handleClickOnItem(e) {
    const menuItem = e.target.closest(this.itemSelector);
    if (e.target.classList.contains('ecl-mega-menu__link')) {
      if (menuItem.hasAttribute('data-ecl-has-children')) {
        e.preventDefault();
        const isExpanded = menuItem.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          document.body.classList.remove('no-scroll');
          menuItem.setAttribute('aria-expanded', 'false');
          this.element.removeAttribute('data-expanded');
        } else {
          this.cloneItemInTheDrowdown(menuItem);
          this.checkDropdownHeight(menuItem);
          this.element.setAttribute('data-expanded', true);
          document.body.classList.add('no-scroll');
          this.items.forEach((item) => {
            if (item === menuItem) {
              item.setAttribute('aria-expanded', 'true');
              item.classList.add('ecl-mega-menu__item--current');
            } else {
              item.classList.remove('ecl-mega-menu__item--current');
              item.setAttribute('aria-expanded', 'false');     
            }
          });
        }
      }
    }
  }

  /**
   * Deselect a menu item
   * @param {Event} e
   */
  handleClickOffItem(e) {
    // Remove attribute to current item
    const menuItem = e.target.closest(this.itemSelector);
    menuItem.setAttribute('aria-expanded', 'false');
    this.element.removeAttribute('data-expanded');
    const caretButton = queryOne(this.caretSelector, menuItem);
    if (caretButton) {
      caretButton.setAttribute('aria-expanded', 'false');
    }

    return this;
  }

  /**
   * Click on a subitem
   * @param {Event} e
   */
  handleClickOnSubitem(e) {
    const menuItem = e.target.closest(this.subItemSelector);
    if (e.target.classList.contains('ecl-mega-menu__sublink')) {
      if (menuItem && menuItem.hasAttribute('aria-expanded')) {
        e.preventDefault();
        const isExpanded = menuItem.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          menuItem.setAttribute('aria-expanded', 'false');
        } else {
          this.cloneItemInTheDrowdown(menuItem);
          this.checkDropdownHeight(menuItem);
          this.subItems.forEach((item) => {
            if (item === menuItem) {
              item.setAttribute('aria-expanded', 'true');
              item.classList.add('ecl-mega-menu__subitem--current', 'ecl-mega-menu__subitem--expanded');
            } else {
              item.classList.remove('ecl-mega-menu__subitem--current', 'ecl-mega-menu__subitem--expanded');
              item.setAttribute('aria-expanded', 'false');     
            }
          });
          if (this.featured) {
            const list = queryOne('.ecl-mega-menu__mega', menuItem);
            list.appendChild(this.featured);
            list.lastChild.style.display = 'flex';
          }
        }
      }
      this.checkMegaMenu(menuItem);
    }
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
          '.ecl-mega-menu__button-caret',
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

  /**
   * Handles global click events, triggered outside of the menu.
   *
   * @param {Event} e
   */
  handleClickGlobal(e) {
    // Check if the menu is open
    if (this.isOpen) {
      // Check if the click occured in the menu
      if (!this.inner.contains(e.target) && !this.open.contains(e.target)) {
        this.handleClickOnClose(e);
      }
    }
  }
}

export default MegaMenu;
