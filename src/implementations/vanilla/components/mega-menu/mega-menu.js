/* eslint-disable  class-methods-use-this */

import { queryOne, queryAll } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';
import isMobile from 'mobile-device-detect';
import { createFocusTrap } from 'focus-trap';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.openSelector Selector for the hamburger button
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
   *   @event MegaMenu#onOpenPanel
   */
  /**
   *   @event MegaMenu#onBack
   */
  /**
   *   @event MegaMenu#onItemClick
   */
  /**
   *   @event MegaMenu#onFocusTrapToggle
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
      backSelector = '[data-ecl-mega-menu-back]',
      innerSelector = '[data-ecl-mega-menu-inner]',
      listSelector = '[data-ecl-mega-menu-list]',
      itemSelector = '[data-ecl-mega-menu-item]',
      linkSelector = '[data-ecl-mega-menu-link]',
      megaSelector = '[data-ecl-mega-menu-mega]',
      containerSelector = 'data-ecl-has-container',
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
    this.backSelector = backSelector;
    this.innerSelector = innerSelector;
    this.listSelector = listSelector;
    this.itemSelector = itemSelector;
    this.linkSelector = linkSelector;
    this.megaSelector = megaSelector;
    this.subItemSelector = subItemSelector;
    this.containerSelector = containerSelector;
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
    this.disableScroll = this.disableScroll.bind(this);
    this.enableScroll = this.enableScroll.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    // Query elements
    this.open = queryOne(this.openSelector, this.element);
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

        if (
          item.hasAttribute('data-ecl-has-children') ||
          item.hasAttribute('data-ecl-has-container')
        ) {
          // Bind click event on menu items
          if (this.attachClickListener) {
            item.addEventListener('click', this.handleClickOnItem);
          }
        }
      });
    }

    // Create a focus trap around the menu
    this.focusTrap = createFocusTrap(this.element, {
      onActivate: () =>
        this.element.classList.add('ecl-mega-menu-trap-is-active'),
      onDeactivate: () =>
        this.element.classList.remove('ecl-mega-menu-trap-is-active'),
    });

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
   * @memberof MegaMenu
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
    if (this.attachClickListener) {
      if (this.open) {
        this.open.removeEventListener('click', this.handleClickOnToggle);
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
        if (
          item.hasAttribute('data-ecl-has-children') ||
          item.hasAttribute('data-ecl-has-container')
        ) {
          if (this.attachClickListener) {
            item.removeEventListener('click', this.handleClickOnItem);
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
        if (this.attachClickListener && subLink) {
          subLink.removeEventListener('click', this.handleClickOnSubitem);
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

    this.closeOpenDropdown();
    this.enableScroll();

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Disable page scrolling
   */
  disableScroll() {
    document.body.classList.add('ecl-mega-menu-prevent-scroll');
  }

  /**
   * Enable page scrolling
   */
  enableScroll() {
    document.body.classList.remove('ecl-mega-menu-prevent-scroll');
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
   * Reset the styles set by the script
   *
   * @param {string} desktop or mobile
   */
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
        // Remove duplicated border
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
        this.enableScroll();
      }
    }
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      const screenWidth = window.innerWidth;

      if (this.prevScreenWidth !== undefined) {
        // Check if the transition involves crossing the L breakpoint
        const isTransition =
          (this.prevScreenWidth <= this.breakpointL &&
            screenWidth > this.breakpointL) ||
          (this.prevScreenWidth > this.breakpointL &&
            screenWidth <= this.breakpointL);
        // If we are moving in or out the L breakpoint, reset the styles
        if (isTransition) {
          this.resetStyles(
            screenWidth > this.breakpointL ? 'desktop' : 'mobile',
          );
        }
      }
      this.isDesktop = this.useDesktopDisplay();
      this.isLarge = window.innerWidth > 1140;
      // Update previous screen width
      this.prevScreenWidth = screenWidth;
      this.element.classList.remove('ecl-mega-menu--forced-mobile');
      // RTL
      this.direction = getComputedStyle(this.element).direction;
      if (this.direction === 'rtl') {
        this.element.classList.add('ecl-mega-menu--rtl');
      } else {
        this.element.classList.remove('ecl-mega-menu--rtl');
      }
      // Check droopdown height if needed
      const expanded = queryOne('.ecl-mega-menu__item--expanded', this.element);
      if (expanded && this.isDesktop) {
        this.checkDropdownHeight(expanded);
      }
      if (this.openPanel.num === 2 && this.openPanel.item) {
        this.checkMegaMenu(this.openPanel.item);
      }
      // Check the menu position
      this.positionMenuOverlay();
    }, 200);
  }

  /**
   * Calculate dropdown height dynamically
   *
   * @param {Node} menuItem
   */
  checkDropdownHeight(menuItem) {
    setTimeout(() => {
      const viewportHeight = window.innerHeight;
      let dropdown = queryOne('.ecl-mega-menu__sublist', menuItem);

      if (!dropdown) {
        dropdown = queryOne('.ecl-mega-menu__mega-container', menuItem);
      }

      if (dropdown) {
        const dropdownTop = dropdown.getBoundingClientRect().top;
        let dropdownHeight = viewportHeight - dropdownTop;
        const lastItem = queryOne('.ecl-mega-menu__see-all', dropdown);
        // Arbitrary, but doing this prevents a misalignment between the two panels
        if (lastItem) {
          dropdownHeight -= 20;
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
    const megaMenus = queryAll(
      '.ecl-mega-menu__item > .ecl-mega-menu__mega',
      this.element,
    );
    if (!this.isDesktop) {
      // In mobile, we get the bottom position of the site header header
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
          if (megaMenus) {
            megaMenus.forEach((mega) => {
              mega.style.top = '';
            });
          }
        }
      }, 0);
    } else {
      setTimeout(() => {
        // In desktop we get the bottom position of the whole site header
        const siteHeader = queryOne('.ecl-site-header', document);
        if (siteHeader) {
          const headerRect = siteHeader.getBoundingClientRect();
          const headerBottom = headerRect.bottom;
          const item = queryOne(this.itemSelector, this.element);
          const rect = item.getBoundingClientRect();
          const rectHeight = rect.height + 4; // 4 pixels border

          if (megaMenus) {
            megaMenus.forEach((mega) => {
              mega.style.top = `${rectHeight}px`;
            });
          }
          if (menuOverlay) {
            menuOverlay.style.top = `${headerBottom}px`;
          }
        } else {
          const bottomPosition = this.element.getBoundingClientRect().bottom;
          if (menuOverlay) {
            menuOverlay.style.top = `${bottomPosition}px`;
          }
          if (megaMenus) {
            megaMenus.forEach((mega) => {
              mega.style.top = `${bottomPosition}px`;
            });
          }
        }
      }, 0);
    }
  }

  /**
   * Clone the selected item to show it on top of the panel.
   *
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
          'ecl-icon--xs',
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
      let innerList = queryOne('.ecl-mega-menu__mega', menuItem);
      if (!innerList) {
        innerList = queryOne('.ecl-mega-menu__mega-container', menuItem);
      }
      if (innerList && !queryOne('.ecl-mega-menu__parent-link', menuItem)) {
        innerList.prepend(firstItemLink);
      }
    }
  }

  /**
   * Handle second panel columns
   *
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
      const lastItem = queryOne('.ecl-mega-menu__see-all', menuMega);
      if (lastItem) {
        // Arbitrary, but does the job.
        itemsHeight += 150;
      }
      const containerBounding = this.inner.getBoundingClientRect();
      const containerBottom = containerBounding.bottom;
      const availableHeight = window.innerHeight - containerBottom;

      if (itemsHeight > availableHeight) {
        menuMega.classList.add('ecl-mega-menu__item--col2');
      }
    } else if (menuMega) {
      menuMega.classList.remove('ecl-mega-menu__item--col2');
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
   *
   * @param {Event} e
   *
   * @fires MegaMenu#onOpen
   */
  handleClickOnOpen(e) {
    if (this.element.getAttribute('aria-expanded') === 'true') {
      this.handleClickOnClose(e);
    } else {
      e.preventDefault();
      this.disableScroll();
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
   *
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
   *
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
   *
   * @fires MegaMenu#onBack
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
      this.openPanel.num = 1;
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
      this.openPanel.num = 0;
    }

    this.trigger('onBack', { level: level2 ? 2 : 1 });
  }

  /**
   * Show/hide the first panel
   *
   * @param {Node} menuItem
   * @param {string} op (expand or collapse)
   *
   * @fires MegaMenu#onOpenPanel
   */
  handleFirstPanel(menuItem, op) {
    switch (op) {
      case 'expand': {
        this.inner.classList.add('ecl-mega-menu__inner--expanded');
        this.positionMenuOverlay();
        this.cloneItemInTheDrowdown(menuItem);
        this.checkDropdownHeight(menuItem);
        this.element.setAttribute('data-expanded', true);
        this.element.setAttribute('aria-expanded', 'true');
        this.disableScroll();
        this.items.forEach((item) => {
          if (item.hasAttribute('aria-expanded')) {
            if (item === menuItem) {
              item.classList.add(
                'ecl-mega-menu__item--expanded',
                'ecl-mega-menu__item--current',
              );
              item.setAttribute('aria-expanded', 'true');
            } else {
              item.setAttribute('aria-expanded', 'false');
              item.classList.remove(
                'ecl-mega-menu__item--current',
                'ecl-mega-menu__item--expanded',
              );
            }
          }
        });

        queryOne('.ecl-mega-menu__parent-link', menuItem).focus();
        const details = { panel: 1, item: menuItem };
        this.trigger('OnOpenPanel', details);
        break;
      }

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
   *
   * @fires MegaMenu#onOpenPanel
   */
  handleSecondPanel(menuItem, op) {
    let siblings;
    switch (op) {
      case 'expand': {
        this.subItems.forEach((item) => {
          if (item === menuItem) {
            if (item.hasAttribute('aria-expanded')) {
              item.setAttribute('aria-expanded', 'true');
              item.classList.add('ecl-mega-menu__subitem--expanded');
            }
            item.classList.add('ecl-mega-menu__subitem--current');
          } else {
            if (item.hasAttribute('aria-expanded')) {
              item.setAttribute('aria-expanded', 'false');
              item.classList.remove('ecl-mega-menu__subitem--expanded');
            }
            item.classList.remove('ecl-mega-menu__subitem--current');
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
        const details = { panel: 2, item: menuItem };
        this.trigger('OnOpenPanel', details);
        break;
      }

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
   *
   * @fires MegaMenu#onItemClick
   */
  handleClickOnItem(e) {
    let isInTheContainer = false;
    const menuItem = e.target.closest('li');
    const container = queryOne(
      '.ecl-mega-menu__mega-container-scrollable',
      menuItem,
    );
    if (container) {
      isInTheContainer = container.contains(e.target);
    }
    // We need to ensure that the click doesn't come from a parent link
    // or from an open container, in that case we do not act.
    if (
      !e.target.parentNode.classList.contains('ecl-mega-menu__parent-link') &&
      !e.target.classList.contains(
        'ecl-mega-menu__mega-container-scrollable',
      ) &&
      !isInTheContainer
    ) {
      this.trigger('onItemClick', { item: menuItem, event: e });
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
            this.closeOpenDropdown();
            this.handleFirstPanel(menuItem, 'expand');
          }
        }
      }
    }
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
   *
   * @fires MegaMenu#onFocusTrapToggle
   */
  closeOpenDropdown() {
    this.enableScroll();
    this.element.setAttribute('aria-expanded', 'false');
    this.element.removeAttribute('data-expanded');
    // Remove css class and attribute from inner menu
    this.inner.classList.remove('ecl-mega-menu__inner--expanded');
    this.inner.setAttribute('aria-hidden', 'true');

    // Remove css class and attribute from menu items
    this.items.forEach((item) => {
      item.classList.remove('ecl-mega-menu__item--current');
      if (item.hasAttribute('aria-expanded')) {
        item.setAttribute('aria-expanded', 'false');
        item.classList.remove('ecl-mega-menu__item--expanded');
      }
    });
    // Remove css class and attribute from menu subitems
    this.subItems.forEach((item) => {
      item.classList.remove('ecl-mega-menu__subitem--current');
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
    this.openPanel.num = 0;
    // If the focus trap is active, deactivate it
    this.focusTrap.deactivate();
    this.trigger('onFocusTrapToggle', { active: false });
    this.isOpen = false;
  }

  /**
   * Focus out of a menu link
   *
   * @param {Event} e
   *
   * @fires MegaMenu#onFocusTrapToggle
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
          this.trigger('onFocusTrapToggle', {
            active: true,
            lastFocusedEl: element.parentElement,
          });
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
    if (
      !e.target.classList.contains(
        'ecl-mega-menu__mega-container-scrollable',
      ) &&
      (e.target.classList.contains('ecl-mega-menu__overlay') ||
        !this.element.contains(e.target))
    ) {
      this.closeOpenDropdown();
    }
  }
}

export default MegaMenu;
