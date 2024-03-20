/* eslint-disable  class-methods-use-this */

import Stickyfill from 'stickyfilljs';
import { queryOne, queryAll } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';
import isMobile from 'mobile-device-detect';
import { createFocusTrap } from 'focus-trap';

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
 * @param {String} options.megaSelector Selector for the mega menu
 * @param {String} options.subItemSelector Selector for the menu sub items
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
   * @memberof MegaMenu
   */
  supportedEvents = ['onOpen', 'onClose'];

  constructor(
    element,
    {
      openSelector = '[data-ecl-mega-menu-open]',
      closeSelector = '[data-ecl-mega-menu-close]',
      backSelector = '[data-ecl-mega-menu-back]',
      innerSelector = '[data-ecl-mega-menu-inner]',
      listSelector = '[data-ecl-mega-menu-list]',
      itemSelector = '[data-ecl-mega-menu-item]',
      linkSelector = '[data-ecl-mega-menu-link]',
      megaSelector = '[data-ecl-mega-menu-mega]',
      subItemSelector = '[data-ecl-mega-menu-subitem]',
      featuredAttribute = '[data-ecl-mega-menu-featured]',
      labelOpenAttribute = 'data-ecl-mega-menu-label-open',
      labelCloseAttribute = 'data-ecl-mega-menu-label-close',
      attachClickListener = true,
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
    this.eventManager = new EventManager();

    // Options
    this.openSelector = openSelector;
    this.closeSelector = closeSelector;
    this.backSelector = backSelector;
    this.innerSelector = innerSelector;
    this.listSelector = listSelector;
    this.itemSelector = itemSelector;
    this.linkSelector = linkSelector;
    this.megaSelector = megaSelector;
    this.subItemSelector = subItemSelector;
    this.labelOpenAttribute = labelOpenAttribute;
    this.labelCloseAttribute = labelCloseAttribute;
    this.attachClickListener = attachClickListener;
    this.attachFocusListener = attachFocusListener;
    this.attachKeyListener = attachKeyListener;
    this.attachResizeListener = attachResizeListener;
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
    this.isOpen = false;
    this.resizeTimer = null;
    this.isKeyEvent = false;
    this.isDesktop = false;
    this.isLarge = false;
    this.lastVisibleItem = null;
    this.currentItem = null;
    this.totalItemsWidth = 0;
    this.breakpointL = 996;
    this.openPanel = { num: 0, item: {} };

    // Bind `this` for use in callbacks
    this.handleClickOnOpen = this.handleClickOnOpen.bind(this);
    this.handleClickOnClose = this.handleClickOnClose.bind(this);
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleClickOnBack = this.handleClickOnBack.bind(this);
    this.handleClickGlobal = this.handleClickGlobal.bind(this);
    this.handleClickOnItem = this.handleClickOnItem.bind(this);
    this.handleClickOnSubitem = this.handleClickOnSubitem.bind(this);
    this.handleClickOffItem = this.handleClickOffItem.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.useDesktopDisplay = this.useDesktopDisplay.bind(this);
    this.checkMegaMenu = this.checkMegaMenu.bind(this);
    this.closeOpenDropdown = this.closeOpenDropdown.bind(this);
    this.checkDropdownHeight = this.checkDropdownHeight.bind(this);
    this.positionMenuOverlay = this.positionMenuOverlay.bind(this);
    this.resetStyles = this.resetStyles.bind(this);
    this.handleFirstPanel = this.handleFirstPanel.bind(this);
    this.handleSecondPanel = this.handleSecondPanel.bind(this);
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
        this.back.addEventListener('keyup', this.handleKeyboard);
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

    const seeAllLinks = queryAll('.ecl-mega-menu__see-all a', this.element);
    if (seeAllLinks.length > 0) {
      seeAllLinks.forEach((seeAll) => {
        seeAll.addEventListener('keyup', this.handleKeyboard);
        seeAll.addEventListener('blur', this.handleFocusOut);
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
        this.totalItemsWidth += item.offsetWidth;

        if (item.hasAttribute('data-ecl-has-children')) {
          // Bind click event on menu items
          if (this.attachClickListener) {
            item.addEventListener('click', this.handleClickOnItem);
          }
        }
      });
    }

    // Init sticky header
    this.stickyInstance = new Stickyfill.Sticky(this.element);
    // Create a focus trap around the menu
    this.focusTrap = createFocusTrap(this.element, {
      onActivate: () => this.element.classList.add('trap-is-active'),
      onDeactivate: () => this.element.classList.remove('trap-is-active'),
    });
    // Hack to prevent css transition to be played on page load on chrome
    setTimeout(() => {
      this.element.classList.add('ecl-mega-menu--transition');
    }, 500);
    this.handleResize();
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

      if (this.attachClickListener) {
        document.removeEventListener('click', this.handleClickGlobal);
      }
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

  resetStyles(viewport) {
    const subLists = queryAll('.ecl-mega-menu__sublist', this.element);
    // Remove display:none from the sublists
    if (subLists && viewport === 'mobile') {
      subLists.forEach((list) => {
        list.style.height = '';
      });
      // Two panels are opened
      if (this.openPanel.num === 2) {
        const menuItem = this.openPanel.item;
        // Hide parent link in the first panel
        menuItem.parentNode.parentNode.firstElementChild.style.display = 'none';
        // REmove duplicated border
        menuItem.parentNode.classList.add('ecl-mega-menu__sublist--no-border');
        // Hide siblings
        const siblings = menuItem.parentNode.childNodes;
        siblings.forEach((sibling) => {
          if (sibling !== menuItem) {
            sibling.style.display = 'none';
          }
        });
      }
    } else if (subLists && viewport === 'desktop') {
      const parentLinks = queryAll('.ecl-mega-menu__parent-link');
      if (parentLinks) {
        // Reset the display for the parent links, they could be hidden
        parentLinks.forEach((parent) => {
          parent.style.display = '';
        });
      }
      // Reset styles for the sublist and subitems
      subLists.forEach((list) => {
        if (!this.isLarge) {
          list.parentNode.classList.remove('ecl-mega-menu__item--col2');
        }
        list.classList.remove('ecl-mega-menu__sublist--no-border');
        list.childNodes.forEach((item) => {
          item.style.display = '';
        });
      });
      // Check if we have an open item, if we don't hide the overlay and enable scroll
      const currentItems = [];
      const currentItem = queryOne(
        '.ecl-mega-menu__subitem--expanded',
        this.element,
      );
      if (currentItem) {
        currentItems.push(currentItem);
      }

      const currentSubItem = queryOne(
        '.ecl-mega-menu__item--expanded',
        this.element,
      );
      if (currentSubItem) {
        currentItems.push(currentSubItem);
      }
      if (currentItems.length > 0) {
        currentItems.forEach((current) => {
          this.checkDropdownHeight(current);
        });
      } else {
        this.element.setAttribute('aria-expanded', 'false');
        this.element.removeAttribute('data-expanded');
        document.body.classList.remove('no-scroll');
      }
    }
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
      this.isLarge = window.innerWidth > 1140;
      if (!this.isDesktop) {
        this.resetStyles('mobile');
      } else {
        this.resetStyles('desktop');
      }
      this.positionMenuOverlay();

      // Bring transition back
      this.element.classList.add('ecl-mega-menu--transition');
    }, 200);
  }

  /**
   * Calculate dropdown height dynamically
   * @param {Node} menuItem
   */
  checkDropdownHeight(menuItem) {
    setTimeout(() => {
      const viewportHeight = window.innerHeight;
      const dropdown = queryOne('.ecl-mega-menu__sublist', menuItem);

      if (dropdown) {
        const dropdownTop = dropdown.getBoundingClientRect().top;
        let dropdownHeight = viewportHeight - dropdownTop;
        const lastItem = queryOne('.ecl-mega-menu__see-all', dropdown);
        if (lastItem) {
          dropdownHeight -= 30;
        }
        dropdown.style.height = `${dropdownHeight}px`;
      }
    }, 100);
  }

  /**
   * Dinamically set the position of the menu overlay
   */
  positionMenuOverlay() {
    const menuOverlay = queryOne('.ecl-mega-menu__overlay', this.element);
    if (!this.isDesktop) {
      setTimeout(() => {
        const header = queryOne('.ecl-site-header__header', document);
        if (header) {
          const position = header.getBoundingClientRect();
          const bottomPosition = Math.round(position.bottom);
          if (menuOverlay) {
            menuOverlay.style.top = `${bottomPosition}px`;
          }
          if (this.inner) {
            this.inner.style.top = `${bottomPosition}px`;
          }
          const megaMenus = queryAll(
            '.ecl-mega-menu__item > .ecl-mega-menu__mega',
            this.element,
          );
          if (megaMenus) {
            megaMenus.forEach((mega) => {
              mega.style.top = '';
            });
          }
        }
      }, 0);
    } else {
      setTimeout(() => {
        const siteHeader = queryOne('.ecl-site-header', document);
        if (siteHeader) {
          const headerRect = siteHeader.getBoundingClientRect();
          const headerBottom = headerRect.bottom;
          const item = queryOne(this.itemSelector, this.element);
          const rect = item.getBoundingClientRect();
          const rectHeight = rect.height + 4;
          const megaMenus = queryAll(
            '.ecl-mega-menu__item > .ecl-mega-menu__mega',
            this.element,
          );
          if (megaMenus) {
            megaMenus.forEach((mega) => {
              mega.style.top = `${rectHeight}px`;
            });
          }
          if (menuOverlay) {
            menuOverlay.style.top = `${headerBottom}px`;
          }
        }
      }, 0);
    }
  }

  /**
   * Clone the selected item to show it on top of the panel.
   * @param {Node} menuItem
   */
  cloneItemInTheDrowdown(menuItem) {
    const firstItemLink = queryOne('.ecl-link', menuItem).cloneNode(true);
    const svg = queryOne('.ecl-icon use', firstItemLink);
    if (svg) {
      const hrefValue = svg.getAttribute('xlink:href');
      if (hrefValue) {
        const newHrefValue = hrefValue.replace('corner-arrow', 'arrow-left');
        svg.parentElement.classList.add(
          'ecl-icon--flip-horizontal',
          'ecl-icon--s',
        );
        svg.parentElement.classList.remove(
          'ecl-icon--2xs',
          'ecl-icon--rotate-180',
        );
        svg.setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'xlink:href',
          newHrefValue,
        );
      }
      if (firstItemLink.id) {
        firstItemLink.id = `${firstItemLink.id}-parent`;
      }
      const ariaLabel = menuItem.getAttribute('data-ecl-parent-aria-label');
      if (ariaLabel) {
        firstItemLink.setAttribute('aria-label', ariaLabel);
      }
      firstItemLink.classList.add('ecl-mega-menu__parent-link');
      firstItemLink.addEventListener('keyup', this.handleKeyboard);
      const innerList = queryOne('.ecl-mega-menu__mega', menuItem);
      if (innerList && !queryOne('.ecl-mega-menu__parent-link', menuItem)) {
        innerList.prepend(firstItemLink);
      }
    }
  }

  /**
   * Handle positioning of mega menu
   * @param {Node} menuItem
   */
  checkMegaMenu(menuItem) {
    const menuMega = queryOne(this.megaSelector, menuItem);
    if (menuMega && this.inner && this.isLarge) {
      const subItems = queryAll(`${this.subItemSelector} a`, menuMega);
      let itemsHeight = 0;
      subItems.forEach((item) => {
        itemsHeight += item.getBoundingClientRect().height;
      });

      const containerBounding = this.inner.getBoundingClientRect();
      const containerBottom = containerBounding.bottom;
      const availableHeight = window.innerHeight - containerBottom;

      if (itemsHeight > availableHeight) {
        menuMega.classList.add('ecl-mega-menu__item--col2');
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
    // Handle keyboard on parent links
    if (cList.contains('ecl-mega-menu__parent-link')) {
      if (e.key === 'ArrowUp') {
        if (this.isDesktop) {
          // Focus the first level menu item
          element
            .closest('.ecl-mega-menu__item--expanded')
            .firstElementChild.focus();
        } else {
          // In mobile focus on the back button
          this.back.focus();
        }
      }
      if (e.key === 'ArrowDown') {
        // Focus on the first sub-link
        element.nextSibling.firstElementChild.firstElementChild.focus();
      }
    }
    // Handle keyboard on the see all links
    if (element.parentElement.classList.contains('ecl-mega-menu__see-all')) {
      if (e.key === 'ArrowUp') {
        // Focus on the last element of the sub-list
        element.parentElement.previousSibling.firstChild.focus();
      }
    }
    // Handle keyboard on the back button
    if (cList.contains('ecl-mega-menu__back')) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const expanded = queryOne(
          '[aria-expanded="true"]',
          element.parentElement.nextSibling,
        );
        // We have an opened list
        if (expanded) {
          const innerExpanded = queryOne('[aria-expanded="true"]', expanded);
          // We have an opened sub-list
          if (innerExpanded) {
            queryOne('.ecl-mega-menu__parent-link', innerExpanded).focus();
          } else {
            queryOne('.ecl-mega-menu__parent-link', expanded).focus();
          }
        }
      }
      if (e.key === 'ArrowUp') {
        // Focus on the open button
        this.open.focus();
      }
    }
    // Key actions to navigate between first level menu items
    if (cList.contains('ecl-mega-menu__link')) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        let prevItem = element.previousSibling;

        if (prevItem && prevItem.classList.contains('ecl-mega-menu__link')) {
          prevItem.focus();
          return;
        }

        prevItem = element.parentElement.previousSibling;
        if (prevItem) {
          const prevLink = queryOne('.ecl-mega-menu__link', prevItem);

          if (prevLink) {
            prevLink.focus();
            return;
          }
        }
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (
          element.parentElement.getAttribute('aria-expanded') === 'true' &&
          e.key === 'ArrowDown'
        ) {
          const parentLink = queryOne(
            '.ecl-mega-menu__parent-link',
            element.parentElement,
          );
          if (parentLink) {
            parentLink.focus();
            return;
          }
        }
        const nextItem = element.parentElement.nextSibling;
        if (nextItem) {
          const nextLink = queryOne('.ecl-mega-menu__link', nextItem);

          if (nextLink) {
            nextLink.focus();
            return;
          }
        }
      }
    }
    // Key actions to navigate between the sub-links
    if (cList.contains('ecl-mega-menu__sublink')) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextItem = element.parentElement.nextSibling;
        let nextLink = '';
        if (nextItem) {
          nextLink = queryOne('.ecl-mega-menu__sublink', nextItem);
          if (
            !nextLink &&
            nextItem.classList.contains('ecl-mega-menu__see-all')
          ) {
            nextLink = nextItem.firstElementChild;
          }
          if (nextLink) {
            nextLink.focus();
            return;
          }
        }
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevItem = element.parentElement.previousSibling;
        if (prevItem) {
          const prevLink = queryOne('.ecl-mega-menu__sublink', prevItem);

          if (prevLink) {
            prevLink.focus();
          }
        } else {
          element.parentElement.parentElement.previousSibling.focus();
        }
      }
    }
    if (e.key === 'ArrowRight') {
      const expanded =
        element.parentElement.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        e.preventDefault();
        // Focus on the first element in the second panel
        element.nextSibling.firstElementChild.focus();
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
        this.closeOpenDropdown();
      }
    }
  }

  /**
   * Open menu list.
   * @param {Event} e
   *
   * @fires Menu#onOpen
   */
  handleClickOnOpen(e) {
    if (this.element.getAttribute('aria-expanded') === 'true') {
      this.handleClickOnClose(e);
    } else {
      e.preventDefault();
      document.body.classList.add('no-scroll');
      this.element.setAttribute('aria-expanded', 'true');
      this.inner.setAttribute('aria-hidden', 'false');
      this.isOpen = true;
      this.openPanel.num = 1;

      // Update label
      const closeLabel = this.element.getAttribute(this.labelCloseAttribute);
      if (this.toggleLabel && closeLabel) {
        this.toggleLabel.innerHTML = closeLabel;
      }

      this.trigger('onOpen', e);
    }
  }

  /**
   * Close menu list.
   * @param {Event} e
   *
   * @fires Menu#onClose
   */
  handleClickOnClose(e) {
    if (this.element.getAttribute('aria-expanded') === 'true') {
      this.focusTrap.deactivate();
      this.closeOpenDropdown();
      this.trigger('onClose', e);
    } else {
      this.handleClickOnOpen(e);
    }
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
    const level2 = queryOne('.ecl-mega-menu__subitem--expanded', this.element);
    if (level2) {
      const parentLinks = queryAll('.ecl-mega-menu__parent-link', this.element);
      if (parentLinks) {
        parentLinks.forEach((parent) => {
          parent.style.display = '';
        });
      }
      const sublists = queryAll('.ecl-mega-menu__sublist');
      if (sublists) {
        sublists.forEach((sublist) => {
          sublist.classList.remove('ecl-mega-menu__sublist--no-border');
        });
      }
      level2.setAttribute('aria-expanded', 'false');
      level2.classList.remove(
        'ecl-mega-menu__subitem--expanded',
        'ecl-mega-menu__subitem--current',
      );
      const siblings = level2.parentElement.childNodes;
      if (siblings) {
        siblings.forEach((sibling) => {
          sibling.style.display = '';
        });
      }
      // Move focus on the parent link of the opened list
      const expanded = queryOne('.ecl-mega-menu__item--expanded', this.element);
      queryOne('.ecl-mega-menu__parent-link', expanded).focus();
    } else {
      // Remove expanded class from inner menu
      this.inner.classList.remove('ecl-mega-menu__inner--expanded');
      // Remove css class and attribute from menu items
      this.items.forEach((item) => {
        item.classList.remove(
          'ecl-mega-menu__item--expanded',
          'ecl-mega-menu__item--current',
        );
        item.setAttribute('aria-expanded', 'false');
      });
      // Move the focus to the first item in the menu
      this.items[0].firstElementChild.focus();
    }
  }

  /**
   * Show/hide the first panel
   *
   * @param {Node} menuItem
   * @param {string} op (expand or collapse)
   */
  handleFirstPanel(menuItem, op) {
    switch (op) {
      case 'expand':
        this.inner.classList.add('ecl-mega-menu__inner--expanded');
        this.positionMenuOverlay();
        this.cloneItemInTheDrowdown(menuItem);
        this.checkDropdownHeight(menuItem);
        this.element.setAttribute('data-expanded', true);
        this.element.setAttribute('aria-expanded', 'true');
        document.body.classList.add('no-scroll');
        this.items.forEach((item) => {
          if (item.hasAttribute('aria-expanded')) {
            if (item === menuItem) {
              item.classList.add(
                'ecl-mega-menu__item--expanded',
                'ecl-mega-menu__item--current',
              );
              item.setAttribute('aria-expanded', 'true');
              item.setAttribute('aria-current', 'page');
            } else {
              item.setAttribute('aria-expanded', 'false');
              item.classList.remove(
                'ecl-mega-menu__item--current',
                'ecl-mega-menu__item--expanded',
              );
              item.removeAttribute('aria-current');
            }
          }
        });
        // This is fixing a situation where some items in the second panel
        // might be hidden. It shouldn't be needed, it means there is a flaw.
        this.subItems.forEach((item) => {
          item.style.display = '';
        });

        queryOne('.ecl-mega-menu__parent-link', menuItem).focus();
        break;

      case 'collapse':
        this.closeOpenDropdown();
        break;

      default:
    }
  }

  /**
   * Show/hide the second panel
   *
   * @param {Node} menuItem
   * @param {string} op (expand or collapse)
   */
  handleSecondPanel(menuItem, op) {
    let siblings;
    switch (op) {
      case 'expand':
        this.subItems.forEach((item) => {
          if (item === menuItem) {
            if (item.hasAttribute('aria-expanded')) {
              item.setAttribute('aria-expanded', 'true');
              item.classList.add('ecl-mega-menu__subitem--expanded');
            }
            item.classList.add('ecl-mega-menu__subitem--current');
            item.setAttribute('aria-current', 'page');
            item
              .closest('.ecl-mega-menu__item')
              .removeAttribute('aria-current');
          } else {
            if (item.hasAttribute('aria-expanded')) {
              item.setAttribute('aria-expanded', 'false');
              item.classList.remove('ecl-mega-menu__subitem--expanded');
            }
            item.classList.remove('ecl-mega-menu__subitem--current');
            item.removeAttribute('aria-current');
          }
        });
        this.openPanel = { num: 2, item: menuItem };
        siblings = menuItem.parentNode.childNodes;
        if (this.isDesktop) {
          this.checkDropdownHeight(menuItem);
          // Reset style for the siblings, in case they were hidden
          siblings.forEach((sibling) => {
            if (sibling !== menuItem) {
              sibling.style.display = '';
            }
          });
        } else {
          // Hide parent link of the first panel
          menuItem.parentNode.parentNode.firstElementChild.style.display =
            'none';
          // Remove double border, we have two sublists opened
          menuItem.parentNode.classList.add(
            'ecl-mega-menu__sublist--no-border',
          );
          // Hide other items in the sublist
          siblings.forEach((sibling) => {
            if (sibling !== menuItem) {
              sibling.style.display = 'none';
            }
          });
        }
        queryOne('.ecl-mega-menu__parent-link', menuItem).focus();
        this.checkMegaMenu(menuItem);
        break;

      case 'collapse':
        this.openPanel = { num: 1 };
        menuItem.setAttribute('aria-expanded', 'false');
        menuItem.classList.remove(
          'ecl-mega-menu__subitem--expanded',
          'ecl-mega-menu__subitem--current',
        );
        break;

      default:
    }
  }

  /**
   * Click on a menu item
   *
   * @param {Event} e
   */
  handleClickOnItem(e) {
    if (!e.target.parentNode.classList.contains('ecl-mega-menu__parent-link')) {
      const menuItem = e.target.closest('li');
      const hasChildren = menuItem.getAttribute('aria-expanded');
      if (hasChildren && menuItem.classList.contains('ecl-mega-menu__item')) {
        e.preventDefault();
        if (!this.isDesktop) {
          this.handleFirstPanel(menuItem, 'expand');
        } else {
          const isExpandable = hasChildren === 'true';
          if (isExpandable) {
            this.handleFirstPanel(menuItem, 'collapse');
          } else {
            this.handleFirstPanel(menuItem, 'expand');
          }
        }
      }
    }
  }

  /**
   * Deselect a menu item
   *
   * @param {Event} e
   */
  handleClickOffItem(e) {
    // Remove attribute to current item
    const menuItem = e.target.closest(this.itemSelector);
    menuItem.setAttribute('aria-expanded', 'false');
    this.element.removeAttribute('data-expanded');
    this.focusTrap.deactivate();
  }

  /**
   * Click on a subitem
   *
   * @param {Event} e
   */
  handleClickOnSubitem(e) {
    const menuItem = e.target.closest(this.subItemSelector);
    if (menuItem && menuItem.hasAttribute('aria-expanded')) {
      e.preventDefault();
      const isExpanded = menuItem.getAttribute('aria-expanded') === 'true';
      this.cloneItemInTheDrowdown(menuItem);
      if (isExpanded) {
        this.handleSecondPanel(menuItem, 'collapse');
      } else {
        this.handleSecondPanel(menuItem, 'expand');
      }
    }
  }

  /**
   * Deselect any opened menu item
   */
  closeOpenDropdown() {
    document.body.classList.remove('no-scroll');
    this.element.setAttribute('aria-expanded', 'false');
    this.element.removeAttribute('data-expanded');
    // Remove css class and attribute from inner menu
    this.inner.classList.remove('ecl-mega-menu__inner--expanded');
    this.inner.setAttribute('aria-hidden', 'true');

    // Remove css class and attribute from menu items
    this.items.forEach((item) => {
      item.classList.remove('ecl-mega-menu__item--current');
      item.removeAttribute('aria-current');
      if (item.hasAttribute('aria-expanded')) {
        item.setAttribute('aria-expanded', 'false');
        item.classList.remove('ecl-mega-menu__item--expanded');
      }
    });
    // Remove css class and attribute from menu subitems
    this.subItems.forEach((item) => {
      item.classList.remove('ecl-mega-menu__subitem--current');
      item.removeAttribute('aria-current');
      if (item.hasAttribute('aria-expanded')) {
        item.classList.remove('ecl-mega-menu__subitem--expanded');
        item.setAttribute('aria-expanded', 'false');
        item.style.display = '';
      }
    });
    // Remove styles set for the sublists
    const sublists = queryAll('.ecl-mega-menu__sublist');
    if (sublists) {
      sublists.forEach((sublist) => {
        sublist.classList.remove('ecl-mega-menu__sublist--no-border');
      });
    }
    // Remove styles set for the parent links
    const parentLinks = queryAll('.ecl-mega-menu__parent-link', this.element);
    if (parentLinks) {
      parentLinks.forEach((parent) => {
        parent.style.display = '';
      });
    }
    // Update label
    const openLabel = this.element.getAttribute(this.labelOpenAttribute);
    if (this.toggleLabel && openLabel) {
      this.toggleLabel.innerHTML = openLabel;
    }
    // If the focus trap is active, deactivate it
    this.focusTrap.deactivate();
    this.isOpen = false;
  }

  /**
   * Focus out of a menu link
   *
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
        const nextFocusTarget = e.relatedTarget;
        if (!this.element.contains(nextFocusTarget)) {
          // This is the last item, go back to close button
          this.focusTrap.activate();
        }
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
        this.closeOpenDropdown();
      }
    }
    if (
      e.target.classList.contains('ecl-mega-menu__overlay') ||
      !this.element.contains(e.target)
    ) {
      this.closeOpenDropdown();
    }
  }
}

export default MegaMenu;
