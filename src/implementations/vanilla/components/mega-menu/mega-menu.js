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
 * @param {String} options.itemSelector Selector for the menu item
 * @param {String} options.linkSelector Selector for the menu link
 * @param {String} options.subLinkSelector Selector for the menu sub link
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
      itemSelector = '[data-ecl-mega-menu-item]',
      linkSelector = '[data-ecl-mega-menu-link]',
      subLinkSelector = '[data-ecl-mega-menu-sublink]',
      megaSelector = '[data-ecl-mega-menu-mega]',
      containerSelector = '[data-ecl-has-container]',
      subItemSelector = '[data-ecl-mega-menu-subitem]',
      featuredAttribute = '[data-ecl-mega-menu-featured]',
      featuredLinkAttribute = '[data-ecl-mega-menu-featured-link]',
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
    this.itemSelector = itemSelector;
    this.linkSelector = linkSelector;
    this.subLinkSelector = subLinkSelector;
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
    this.featuredLinkAttribute = featuredLinkAttribute;

    // Private variables
    this.direction = 'ltr';
    this.open = null;
    this.toggleLabel = null;
    this.back = null;
    this.backItemLevel1 = null;
    this.backItemLevel2 = null;
    this.inner = null;
    this.items = null;
    this.links = null;
    this.isOpen = false;
    this.resizeTimer = null;
    this.wrappers = null;
    this.isKeyEvent = false;
    this.isDesktop = false;
    this.isLarge = false;
    this.lastVisibleItem = null;
    this.menuOverlay = null;
    this.currentItem = null;
    this.totalItemsWidth = 0;
    this.breakpointL = 996;
    this.openPanel = { num: 0, item: {} };
    this.infoLinks = null;
    this.seeAllLinks = null;
    this.featuredLinks = null;

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
    this.back = queryOne(this.backSelector, this.element);
    this.inner = queryOne(this.innerSelector, this.element);
    this.btnPrevious = queryOne(this.buttonPreviousSelector, this.element);
    this.btnNext = queryOne(this.buttonNextSelector, this.element);
    this.items = queryAll(this.itemSelector, this.element);
    this.subItems = queryAll(this.subItemSelector, this.element);
    this.links = queryAll(this.linkSelector, this.element);
    this.header = queryOne('.ecl-site-header', document);
    this.headerBanner = queryOne('.ecl-site-header__banner', document);
    this.wrappers = queryAll('.ecl-mega-menu__wrapper', this.element);
    this.headerNotification = queryOne(
      '.ecl-site-header__notification',
      document,
    );
    this.toggleLabel = queryOne('.ecl-button__label', this.open);
    this.menuOverlay = queryOne('.ecl-mega-menu__overlay', this.element);

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

    this.infoLinks = queryAll('.ecl-mega-menu__info-link a', this.element);
    if (this.infoLinks.length > 0) {
      this.infoLinks.forEach((infoLink) => {
        if (this.attachKeyListener) {
          infoLink.addEventListener('keyup', this.handleKeyboard);
        }
        if (this.attachFocusListener) {
          infoLink.addEventListener('blur', this.handleFocusOut);
        }
      });
    }

    this.seeAllLinks = queryAll('.ecl-mega-menu__see-all a', this.element);
    if (this.seeAllLinks.length > 0) {
      this.seeAllLinks.forEach((seeAll) => {
        if (this.attachKeyListener) {
          seeAll.addEventListener('keyup', this.handleKeyboard);
        }
        if (this.attachFocusListener) {
          seeAll.addEventListener('blur', this.handleFocusOut);
        }
      });
    }

    this.featuredLinks = queryAll(this.featuredLinkAttribute, this.element);
    if (this.featuredLinks.length > 0 && this.attachFocusListener) {
      this.featuredLinks.forEach((featured) => {
        featured.addEventListener('blur', this.handleFocusOut);
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
          // Bind click event on menu links
          const link = queryOne(this.linkSelector, item);
          if (this.attachClickListener && link) {
            link.addEventListener('click', this.handleClickOnItem);
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

    if (this.links) {
      this.links.forEach((link) => {
        if (this.attachClickListener) {
          link.removeEventListener('click', this.handleClickOnItem);
        }
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

    if (this.infoLinks) {
      this.infoLinks.forEach((infoLink) => {
        if (this.attachFocusListener) {
          infoLink.removeEventListener('blur', this.handleFocusOut);
        }
        if (this.attachKeyListener) {
          infoLink.removeEventListener('keyup', this.handleKeyboard);
        }
      });
    }

    if (this.seeAllLinks) {
      this.seeAllLinks.forEach((seeAll) => {
        if (this.attachFocusListener) {
          seeAll.removeEventListener('blur', this.handleFocusOut);
        }
        if (this.attachKeyListener) {
          seeAll.removeEventListener('keyup', this.handleKeyboard);
        }
      });
    }

    if (this.featuredLinks && this.attachFocusListener) {
      this.featuredLinks.forEach((featuredLink) => {
        featuredLink.removeEventListener('blur', this.handleFocusOut);
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
  resetStyles(viewport, compact) {
    const infoPanels = queryAll('.ecl-mega-menu__info', this.element);
    const subLists = queryAll('.ecl-mega-menu__sublist', this.element);

    // Remove display:none from the sublists
    if (subLists && viewport === 'mobile') {
      const megaMenus = queryAll(
        '.ecl-mega-menu__item > .ecl-mega-menu__wrapper > .ecl-container > [data-ecl-mega-menu-mega]',
        this.element,
      );
      megaMenus.forEach((menu) => {
        menu.style.height = '';
      });

      // Reset top position and height of the wrappers
      if (this.wrappers) {
        this.wrappers.forEach((wrapper) => {
          wrapper.style.top = '';
          wrapper.style.height = '';
        });
      }

      if (this.openPanel.num > 0) {
        if (this.header) {
          if (this.headerBanner) {
            this.headerBanner.style.display = 'none';
          }
          if (this.headerNotification) {
            this.headerNotification.style.display = 'none';
          }
        }
      }

      // Two panels are opened
      if (this.openPanel.num === 2) {
        const subItemExpanded = queryOne(
          '.ecl-mega-menu__subitem--expanded',
          this.element,
        );
        if (subItemExpanded) {
          subItemExpanded.firstChild.classList.add(
            'ecl-mega-menu__parent-link',
          );
        }
        const menuItem = this.openPanel.item;
        // Hide siblings
        const siblings = menuItem.parentNode.childNodes;
        siblings.forEach((sibling) => {
          if (sibling !== menuItem) {
            sibling.style.display = 'none';
          }
        });
      }
    } else if (subLists && viewport === 'desktop' && !compact) {
      // Reset styles for the sublist and subitems
      subLists.forEach((list) => {
        list.classList.remove('ecl-mega-menu__sublist--scrollable');
        list.childNodes.forEach((item) => {
          item.style.display = '';
        });
      });

      infoPanels.forEach((info) => {
        info.style.top = '';
      });

      // Check if we have an open item, if we don't hide the overlay and enable scroll
      const currentItems = [];
      const currentItem = queryOne(
        '.ecl-mega-menu__subitem--expanded',
        this.element,
      );
      if (currentItem) {
        currentItem.firstElementChild.classList.remove(
          'ecl-mega-menu__parent-link',
        );
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
        this.open.setAttribute('aria-expanded', 'false');
        this.enableScroll();
      }
    } else if (viewport === 'desktop' && compact) {
      const currentSubItem = queryOne(
        '.ecl-mega-menu__subitem--expanded',
        this.element,
      );
      if (currentSubItem) {
        currentSubItem.firstElementChild.classList.remove(
          'ecl-mega-menu__parent-link',
        );
      }
      infoPanels.forEach((info) => {
        info.style.height = '';
      });
    }

    if (viewport === 'desktop' && this.header) {
      if (this.headerBanner) {
        this.headerBanner.style.display = 'flex';
      }
      if (this.headerNotification) {
        this.headerNotification.style.display = 'flex';
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
        if (this.prevScreenWidth > 1140 && screenWidth > 996) {
          this.resetStyles('desktop', true);
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
      // Check the menu position
      this.positionMenuOverlay();
    }, 200);
  }

  /**
   * Calculate dropdown height dynamically
   *
   * @param {Node} menuItem
   */
  checkDropdownHeight(menuItem, hide = true) {
    const infoPanel = queryOne('.ecl-mega-menu__info', menuItem);
    const mainPanel = queryOne('.ecl-mega-menu__mega', menuItem);
    // Hide the panels while calculating their heights
    if (mainPanel && this.isDesktop && hide) {
      mainPanel.style.opacity = 0;
    }
    if (infoPanel && this.isDesktop && hide) {
      infoPanel.style.opacity = 0;
    }
    setTimeout(() => {
      const viewportHeight = window.innerHeight;
      let infoPanelHeight = 0;

      if (this.isDesktop) {
        const heights = [];
        let height = 0;
        let secondPanel = null;
        let featuredPanel = null;
        let itemsHeight = 0;
        let subItemsHeight = 0;
        let featuredHeight = 0;

        if (infoPanel) {
          infoPanel.style.height = '';
          infoPanelHeight = infoPanel.scrollHeight + 16;
        }
        if (infoPanel && this.isLarge) {
          heights.push(infoPanelHeight);
        } else if (infoPanel && this.isDesktop) {
          itemsHeight = infoPanelHeight;
          subItemsHeight = infoPanelHeight;
          featuredHeight = infoPanelHeight;
        }

        if (mainPanel) {
          mainPanel.style.height = '';
          const mainTop = mainPanel.getBoundingClientRect().top;
          const list = queryOne('.ecl-mega-menu__sublist', mainPanel);
          if (!list) {
            const isContainer = menuItem.classList.contains(
              'ecl-mega-menu__item--has-container',
            );
            if (isContainer) {
              const container = queryOne(
                '.ecl-mega-menu__mega-container',
                menuItem,
              );
              if (container) {
                container.firstElementChild.style.height = `${viewportHeight - mainTop}px`;
                mainPanel.style.opacity = 1;
                return;
              }
            }
          } else {
            const items = list.children;
            if (items.length > 0) {
              Array.from(items).forEach((item) => {
                itemsHeight += item.getBoundingClientRect().height;
              });
              heights.push(itemsHeight);
            }
          }
        }
        const expanded = queryOne(
          '.ecl-mega-menu__subitem--expanded',
          menuItem,
        );

        if (expanded) {
          secondPanel = queryOne('.ecl-mega-menu__mega--level-2', expanded);
          if (secondPanel) {
            secondPanel.style.height = '';
            const subItems = queryAll(`${this.subItemSelector}`, secondPanel);
            if (subItems.length > 0) {
              subItems.forEach((item) => {
                subItemsHeight += item.getBoundingClientRect().height;
              });
            }
            heights.push(subItemsHeight);
            // Featured panel calculations.
            featuredPanel = queryOne('.ecl-mega-menu__featured', expanded);
            if (featuredPanel) {
              // Get the elements inside the scrollable container and calculate their heights.
              Array.from(featuredPanel.firstElementChild.children).forEach(
                (child) => {
                  const elStyle = window.getComputedStyle(child);
                  const marginHeight =
                    parseFloat(elStyle.marginTop) +
                    parseFloat(elStyle.marginBottom);
                  featuredHeight += child.offsetHeight + marginHeight;
                },
              );

              heights.push(featuredHeight);
            }
          }
        }

        const maxHeight = Math.max(...heights);
        const containerBounding = this.inner.getBoundingClientRect();
        const containerBottom = containerBounding.bottom;
        // By requirements, limit the height to the 70% of the available space.
        const availableHeight = (window.innerHeight - containerBottom) * 0.7;

        if (maxHeight > availableHeight) {
          height = availableHeight;
        } else {
          height = maxHeight;
        }

        const wrapper = queryOne('.ecl-mega-menu__wrapper', menuItem);
        if (wrapper) {
          wrapper.style.height = `${height}px`;
        }
        if (mainPanel && this.isLarge) {
          mainPanel.style.height = `${height}px`;
        } else if (mainPanel && infoPanel && this.isDesktop) {
          mainPanel.style.height = `${height - infoPanelHeight}px`;
        }
        if (infoPanel && this.isLarge) {
          infoPanel.style.height = `${height}px`;
        }
        if (secondPanel && this.isLarge) {
          secondPanel.style.height = `${height}px`;
        } else if (secondPanel && this.isDesktop) {
          secondPanel.style.height = `${height - infoPanelHeight}px`;
        }
        if (featuredPanel && this.isLarge) {
          featuredPanel.style.height = `${height}px`;
        } else if (featuredPanel && this.isDesktop) {
          featuredPanel.style.height = `${height - infoPanelHeight}px`;
        }
      }
      if (mainPanel && this.isDesktop) {
        mainPanel.style.opacity = 1;
      }
      if (infoPanel && this.isDesktop) {
        infoPanel.style.opacity = 1;
      }
    }, 100);
  }

  /**
   * Dinamically set the position of the menu overlay
   */
  positionMenuOverlay() {
    let availableHeight = 0;
    if (!this.isDesktop) {
      // In mobile, we get the bottom position of the site header header
      setTimeout(() => {
        if (this.header) {
          const position = this.header.getBoundingClientRect();
          const bottomPosition = Math.round(position.bottom);

          if (this.menuOverlay) {
            this.menuOverlay.style.top = `${bottomPosition}px`;
          }
          if (this.inner) {
            this.inner.style.top = `${bottomPosition}px`;
          }
          const item = queryOne('.ecl-mega-menu__item--expanded', this.element);

          if (item) {
            const subList = queryOne('.ecl-mega-menu__sublist', item);
            if (subList && this.openPanel.num === 1) {
              const info = queryOne('.ecl-mega-menu__info', item);
              if (info) {
                const bottomRect = info.getBoundingClientRect();
                const bottomInfo = bottomRect.bottom;
                availableHeight = window.innerHeight - bottomInfo - 16;
                subList.classList.add('ecl-mega-menu__sublist--scrollable');
                subList.style.height = `${availableHeight}px`;
              }
            } else if (subList) {
              subList.classList.remove('ecl-mega-menu__sublist--scrollable');
              subList.style.height = '';
            }
          }

          if (this.openPanel.num === 2) {
            const subItem = queryOne(
              '.ecl-mega-menu__subitem--expanded',
              this.element,
            );
            if (subItem) {
              const subMega = queryOne(
                '.ecl-mega-menu__mega--level-2',
                subItem,
              );
              if (subMega) {
                const subMegaRect = subMega.getBoundingClientRect();
                const subMegaTop = subMegaRect.top;
                availableHeight = window.innerHeight - subMegaTop;
                subMega.style.height = `${availableHeight}px`;
              }
            }
          }
          if (this.wrappers) {
            this.wrappers.forEach((wrapper) => {
              wrapper.style.top = '';
              wrapper.style.height = '';
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
          const rectHeight = rect.height;

          if (this.wrappers) {
            this.wrappers.forEach((wrapper) => {
              wrapper.style.top = `${rectHeight}px`;
            });
          }
          if (this.menuOverlay) {
            this.menuOverlay.style.top = `${headerBottom}px`;
          }
        } else {
          const bottomPosition = this.element.getBoundingClientRect().bottom;
          if (this.menuOverlay) {
            this.menuOverlay.style.top = `${bottomPosition}px`;
          }
        }
      }, 0);
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
    // Handle Keyboard on the first panel
    if (cList.contains('ecl-mega-menu__info-link')) {
      if (e.key === 'ArrowUp') {
        if (this.isDesktop) {
          // Focus on the expanded nav item
          queryOne(
            '.ecl-mega-menu__item--expanded button',
            this.element,
          ).focus();
        } else if (this.back && !this.isDesktop) {
          // focus on the back button
          this.back.focus();
        }
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        // First item in the open dropdown.
        element.parentElement.parentElement.nextSibling.firstChild.firstChild.firstChild.focus();
      }
    }

    if (cList.contains('ecl-mega-menu__parent-link')) {
      if (e.key === 'ArrowUp') {
        const back = queryOne('.ecl-mega-menu__back', this.element);
        back.focus();
        return;
      }
      if (e.key === 'ArrowDown') {
        const mega = e.target.nextSibling;
        mega.firstElementChild.firstElementChild.firstChild.focus();
        return;
      }
    }

    // Handle keyboard on the see all links
    if (element.parentElement.classList.contains('ecl-mega-menu__see-all')) {
      if (e.key === 'ArrowUp') {
        // Focus on the last element of the sub-list
        element.parentElement.previousSibling.firstChild.focus();
      }
      if (e.key === 'ArrowDown') {
        // Focus on the fi
        const featured = element.parentElement.parentElement.nextSibling;
        if (featured) {
          const focusableSelectors = [
            'a[href]',
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
          ];
          const focusableElements = queryAll(
            focusableSelectors.join(', '),
            featured,
          );
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          }
        }
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
          const innerExpanded = queryOne(
            '.ecl-mega-menu__subitem--expanded',
            expanded.parentElement,
          );
          // We have an opened sub-list
          if (innerExpanded) {
            const parentLink = queryOne(
              '.ecl-mega-menu__parent-link',
              innerExpanded,
            );
            if (parentLink) {
              parentLink.focus();
            }
          } else {
            const infoLink = queryOne(
              '.ecl-mega-menu__info-link',
              expanded.parentElement,
            );
            if (infoLink) {
              infoLink.focus();
            } else {
              queryOne(
                '.ecl-mega-menu__subitem:first-child .ecl-mega-menu__sublink',
                expanded.parentElement,
              ).focus();
            }
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
          const infoLink = queryOne(
            '.ecl-mega-menu__info-link',
            element.parentElement,
          );
          if (infoLink) {
            infoLink.focus();
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
            nextItem.classList.contains('ecl-mega-menu__spacer')
          ) {
            nextLink = nextItem.nextSibling.firstElementChild;
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
          const moreLink = queryOne(
            '.ecl-mega-menu__info-link',
            element.parentElement.parentElement.parentElement.previousSibling,
          );
          if (moreLink) {
            moreLink.focus();
          } else if (this.openPanel.num === 2) {
            const parent = e.target.closest(
              '.ecl-mega-menu__mega',
            ).previousSibling;
            if (parent) {
              parent.focus();
            }
          } else if (this.back) {
            this.back.focus();
          }
        }
      }
    }
    if (e.key === 'ArrowRight') {
      const expanded =
        element.parentElement.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        e.preventDefault();
        // Focus on the first element in the second panel
        element.nextSibling.firstElementChild.firstChild.firstChild.focus();
      }
    }
  }

  /**
   * Handles global keyboard events, triggered outside of the menu.
   *
   * @param {Event} e
   */
  handleKeyboardGlobal(e) {
    // Detect press on Escape
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (this.isOpen) {
        this.closeOpenDropdown(true);
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
    if (this.isOpen) {
      this.handleClickOnClose(e);
    } else {
      e.preventDefault();
      this.disableScroll();
      this.element.setAttribute('aria-expanded', 'true');
      this.element.classList.add('ecl-mega-menu--start-panel');
      this.element.classList.remove(
        'ecl-mega-menu--one-panel',
        'ecl-mega-menu--two-panels',
      );
      this.open.setAttribute('aria-expanded', 'true');
      this.inner.setAttribute('aria-hidden', 'false');
      this.isOpen = true;

      if (this.header) {
        this.header.classList.add(
          'ecl-site-header--open-menu',
          'ecl-site-header--open-menu-start',
        );
      }

      // Update label
      const closeLabel = this.element.getAttribute(this.labelCloseAttribute);
      if (this.toggleLabel && closeLabel) {
        this.toggleLabel.innerHTML = closeLabel;
      }

      this.positionMenuOverlay();

      // Focus first element
      if (this.links.length > 0) {
        this.links[0].focus();
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
    const infoPanels = queryAll('.ecl-mega-menu__info', this.element);
    infoPanels.forEach((info) => {
      info.style.top = '';
    });
    const level2 = queryOne('.ecl-mega-menu__subitem--expanded', this.element);
    if (level2) {
      this.element.classList.remove(
        'ecl-mega-menu--two-panels',
        'ecl-mega-menu--start-panel',
      );
      this.element.classList.add('ecl-mega-menu--one-panel');
      level2.setAttribute('aria-expanded', 'false');
      level2.classList.remove(
        'ecl-mega-menu__subitem--expanded',
        'ecl-mega-menu__subitem--current',
      );
      const itemLink = queryOne(this.subLinkSelector, level2);
      itemLink.setAttribute('aria-expanded', 'false');
      itemLink.classList.remove('ecl-mega-menu__parent-link');
      const siblings = level2.parentElement.childNodes;
      if (siblings) {
        siblings.forEach((sibling) => {
          sibling.style.display = '';
        });
      }
      if (this.header) {
        this.header.classList.remove('ecl-site-header--open-menu-start');
      }
      // Move the focus to the previously selected item
      if (this.backItemLevel2) {
        this.backItemLevel2.firstElementChild.focus();
      }
      this.openPanel.num = 1;
    } else {
      if (this.header) {
        if (this.headerBanner) {
          this.headerBanner.style.display = 'flex';
        }
        if (this.headerNotification) {
          this.headerNotification.style.display = 'flex';
        }
      }
      // Remove expanded class from inner menu
      this.inner.classList.remove('ecl-mega-menu__inner--expanded');
      this.element.classList.remove('ecl-mega-menu--one-panel');
      // Remove css class and attribute from menu items
      this.items.forEach((item) => {
        item.classList.remove(
          'ecl-mega-menu__item--expanded',
          'ecl-mega-menu__item--current',
        );
        const itemLink = queryOne(this.linkSelector, item);
        itemLink.setAttribute('aria-expanded', 'false');
      });
      // Move the focus to the previously selected item
      if (this.backItemLevel1) {
        this.backItemLevel1.firstElementChild.focus();
      } else {
        this.items[0].firstElementChild.focus();
      }
      this.openPanel.num = 0;
      if (this.header) {
        this.header.classList.add('ecl-site-header--open-menu-start');
      }
      this.positionMenuOverlay();
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
        this.checkDropdownHeight(menuItem);
        this.element.setAttribute('data-expanded', true);
        this.element.setAttribute('aria-expanded', 'true');
        this.element.classList.add('ecl-mega-menu--one-panel');
        this.element.classList.remove('ecl-mega-menu--start-panel');
        this.open.setAttribute('aria-expanded', 'true');
        if (this.header) {
          this.header.classList.add('ecl-site-header--open-menu');
          this.header.classList.remove('ecl-site-header--open-menu-start');
          if (!this.isDesktop) {
            if (this.headerBanner) {
              this.headerBanner.style.display = 'none';
            }
            if (this.headerNotification) {
              this.headerNotification.style.display = 'none';
            }
          }
        }
        this.disableScroll();
        this.isOpen = true;
        this.items.forEach((item) => {
          const itemLink = queryOne(this.linkSelector, item);
          if (itemLink && itemLink.hasAttribute('aria-expanded')) {
            if (item === menuItem) {
              item.classList.add(
                'ecl-mega-menu__item--expanded',
                'ecl-mega-menu__item--current',
              );
              itemLink.setAttribute('aria-expanded', 'true');
              this.backItemLevel1 = item;
            } else {
              itemLink.setAttribute('aria-expanded', 'false');
              item.classList.remove(
                'ecl-mega-menu__item--current',
                'ecl-mega-menu__item--expanded',
              );
            }
          }
        });

        if (!this.isDesktop && this.back) {
          this.back.focus();
        }

        this.openPanel = {
          num: 1,
          item: menuItem,
        };
        const details = { panel: 1, item: menuItem };
        this.trigger('OnOpenPanel', details);
        if (this.isDesktop) {
          const list = queryOne('.ecl-mega-menu__sublist', menuItem);
          if (list) {
            // Expand the item in the sublist if it contains children.
            const firstExpandedChild = Array.from(list.children).find((child) =>
              child.firstElementChild?.hasAttribute('aria-expanded'),
            );

            if (firstExpandedChild) {
              this.handleSecondPanel(firstExpandedChild, 'expand', true);
            }
          }
        }
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
  handleSecondPanel(menuItem, op, noCheck = false) {
    const infoPanel = queryOne(
      '.ecl-mega-menu__info',
      menuItem.closest('.ecl-container'),
    );
    let siblings;
    switch (op) {
      case 'expand': {
        this.element.classList.remove(
          'ecl-mega-menu--one-panel',
          'ecl-mega-menu--start-panel',
        );
        this.element.classList.add('ecl-mega-menu--two-panels');
        this.subItems.forEach((item) => {
          const itemLink = queryOne(this.subLinkSelector, item);
          if (item === menuItem) {
            if (itemLink && itemLink.hasAttribute('aria-expanded')) {
              itemLink.setAttribute('aria-expanded', 'true');

              if (!this.isDesktop) {
                // We use this class mainly to recover the default behavior of the link.
                itemLink.classList.add('ecl-mega-menu__parent-link');
                if (this.back) {
                  this.back.focus();
                }
              }
              item.classList.add('ecl-mega-menu__subitem--expanded');
            }
            item.classList.add('ecl-mega-menu__subitem--current');
            this.backItemLevel2 = item;
          } else {
            if (itemLink && itemLink.hasAttribute('aria-expanded')) {
              itemLink.setAttribute('aria-expanded', 'false');
              itemLink.classList.remove('ecl-mega-menu__parent-link');
              item.classList.remove('ecl-mega-menu__subitem--expanded');
            }
            item.classList.remove('ecl-mega-menu__subitem--current');
          }
        });

        this.openPanel = { num: 2, item: menuItem };
        siblings = menuItem.parentNode.childNodes;
        if (this.isDesktop) {
          // Reset style for the siblings, in case they were hidden
          siblings.forEach((sibling) => {
            if (sibling !== menuItem) {
              sibling.style.display = '';
            }
          });
        } else {
          // Hide other items in the sublist
          siblings.forEach((sibling) => {
            if (sibling !== menuItem) {
              sibling.style.display = 'none';
            }
          });
        }
        this.positionMenuOverlay();
        if (!noCheck) {
          this.checkDropdownHeight(
            menuItem.closest('.ecl-mega-menu__item'),
            false,
          );
        }
        const details = { panel: 2, item: menuItem };
        this.trigger('OnOpenPanel', details);
        break;
      }

      case 'collapse':
        this.element.classList.remove('ecl-mega-menu--two-panels');
        this.openPanel = { num: 1 };
        // eslint-disable-next-line no-case-declarations
        const itemLink = queryOne(this.subLinkSelector, menuItem);
        itemLink.setAttribute('aria-expanded', 'false');
        menuItem.classList.remove(
          'ecl-mega-menu__subitem--expanded',
          'ecl-mega-menu__subitem--current',
        );
        if (infoPanel) {
          infoPanel.style.top = '';
        }
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
      !e.target.classList.contains(
        'ecl-mega-menu__mega-container-scrollable',
      ) &&
      !isInTheContainer
    ) {
      this.trigger('onItemClick', { item: menuItem, event: e });
      const hasChildren =
        menuItem.firstElementChild.getAttribute('aria-expanded');
      if (hasChildren && menuItem.classList.contains('ecl-mega-menu__item')) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.isDesktop) {
          this.handleFirstPanel(menuItem, 'expand');
        } else {
          const isOpen = hasChildren === 'true';
          if (isOpen) {
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
    if (menuItem && menuItem.firstElementChild.hasAttribute('aria-expanded')) {
      const parentLink = queryOne('.ecl-mega-menu__parent-link', menuItem);
      if (parentLink) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const isExpanded =
        menuItem.firstElementChild.getAttribute('aria-expanded') === 'true';

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
   * @param {boolean} esc, whether the call was originated by a press on Esc
   *
   * @fires MegaMenu#onFocusTrapToggle
   */
  closeOpenDropdown(esc = false) {
    if (this.header) {
      this.header.classList.remove(
        'ecl-site-header--open-menu',
        'ecl-site-header--open-menu-start',
      );
      if (this.headerBanner) {
        this.headerBanner.style.display = 'flex';
      }
      if (this.headerNotification) {
        this.headerNotification.style.display = 'flex';
      }
    }
    this.enableScroll();
    this.element.setAttribute('aria-expanded', 'false');
    this.element.removeAttribute('data-expanded');
    this.element.classList.remove(
      'ecl-mega-menu--start-panel',
      'ecl-mega-menu--two-panels',
      'ecl-mega-menu--one-panel',
    );
    this.open.setAttribute('aria-expanded', 'false');
    // Remove css class and attribute from inner menu
    this.inner.classList.remove('ecl-mega-menu__inner--expanded');

    // Reset heights
    const megaMenus = queryAll('[data-ecl-mega-menu-mega]', this.element);
    megaMenus.forEach((mega) => {
      mega.style.height = '';
      mega.style.top = '';
      mega.style.opacity = '';
    });

    if (this.wrappers) {
      this.wrappers.forEach((wrapper) => {
        wrapper.style = '';
      });
    }
    let currentItem = false;
    // Remove css class and attribute from menu items
    this.items.forEach((item) => {
      item.classList.remove('ecl-mega-menu__item--current');
      const itemLink = queryOne(this.linkSelector, item);
      if (itemLink.getAttribute('aria-expanded') === 'true') {
        item.classList.remove('ecl-mega-menu__item--expanded');
        itemLink.setAttribute('aria-expanded', 'false');
        currentItem = itemLink;
      }
    });
    // Remove css class and attribute from menu subitems
    this.subItems.forEach((item) => {
      item.classList.remove('ecl-mega-menu__subitem--current');
      item.style.display = '';
      const itemLink = queryOne(this.subLinkSelector, item);
      if (itemLink && itemLink.hasAttribute('aria-expanded')) {
        item.classList.remove('ecl-mega-menu__subitem--expanded');
        item.style.display = '';
        itemLink.setAttribute('aria-expanded', 'false');
        itemLink.classList.remove('ecl-mega-menu__parent-link');
      }
    });
    // Remove styles set for the sublists
    const sublists = queryAll('.ecl-mega-menu__sublist');
    if (sublists) {
      sublists.forEach((sublist) => {
        sublist.classList.remove(
          'ecl-mega-menu__sublist--no-border',
          '.ecl-mega-menu__sublist--scrollable',
        );
      });
    }
    // Update label
    const openLabel = this.element.getAttribute(this.labelOpenAttribute);
    if (this.toggleLabel && openLabel) {
      this.toggleLabel.innerHTML = openLabel;
    }
    this.openPanel = {
      num: 0,
      item: false,
    };
    // If the focus trap is active, deactivate it
    this.focusTrap.deactivate();
    // Focus on the open button in mobile or on the formerly expanded item in desktop.
    if (!this.isDesktop && this.open && esc) {
      this.open.focus();
    } else if (this.isDesktop && currentItem && esc) {
      currentItem.focus();
    }
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
    if (menuExpanded === 'true' && !this.isDesktop) {
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
        !this.element.contains(e.target)) &&
      this.isOpen
    ) {
      this.closeOpenDropdown();
    }
  }
}

export default MegaMenu;
