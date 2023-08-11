import { queryOne, queryAll } from '@ecl/dom-utils';
import { createFocusTrap } from 'focus-trap';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.languageLinkSelector
 * @param {String} options.languageListOverlaySelector
 * @param {String} options.languageListEuSelector
 * @param {String} options.languageListNonEuSelector
 * @param {String} options.closeOverlaySelector
 * @param {String} options.searchToggleSelector
 * @param {String} options.searchFormSelector
 * @param {String} options.loginToggleSelector
 * @param {String} options.loginBoxSelector
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param {Boolean} options.attachKeyListener Whether or not to bind keyboard events
 * @param {Boolean} options.attachResizeListener Whether or not to bind resize events
 */
export class SiteHeader {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {SiteHeader} An instance of SiteHeader.
   */
  static autoInit(root, { SITE_HEADER_CORE: defaultOptions = {} } = {}) {
    const siteHeader = new SiteHeader(root, defaultOptions);
    siteHeader.init();
    root.ECLSiteHeader = siteHeader;
    return siteHeader;
  }

  constructor(
    element,
    {
      containerSelector = '[data-ecl-site-header-top]',
      languageLinkSelector = '[data-ecl-language-selector]',
      languageListOverlaySelector = '[data-ecl-language-list-overlay]',
      languageListEuSelector = '[data-ecl-language-list-eu]',
      languageListNonEuSelector = '[data-ecl-language-list-non-eu]',
      closeOverlaySelector = '[data-ecl-language-list-close]',
      searchToggleSelector = '[data-ecl-search-toggle]',
      searchFormSelector = '[data-ecl-search-form]',
      loginToggleSelector = '[data-ecl-login-toggle]',
      loginBoxSelector = '[data-ecl-login-box]',
      attachClickListener = true,
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
    this.containerSelector = containerSelector;
    this.languageLinkSelector = languageLinkSelector;
    this.languageListOverlaySelector = languageListOverlaySelector;
    this.languageListEuSelector = languageListEuSelector;
    this.languageListNonEuSelector = languageListNonEuSelector;
    this.closeOverlaySelector = closeOverlaySelector;
    this.searchToggleSelector = searchToggleSelector;
    this.searchFormSelector = searchFormSelector;
    this.loginToggleSelector = loginToggleSelector;
    this.loginBoxSelector = loginBoxSelector;
    this.attachClickListener = attachClickListener;
    this.attachKeyListener = attachKeyListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.languageMaxColumnItems = 8;
    this.languageLink = null;
    this.languageListOverlay = null;
    this.languageListEu = null;
    this.languageListNonEu = null;
    this.close = null;
    this.focusTrap = null;
    this.searchToggle = null;
    this.searchForm = null;
    this.loginToggle = null;
    this.loginBox = null;
    this.resizeTimer = null;

    // Bind `this` for use in callbacks
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.setLoginArrow = this.setLoginArrow.bind(this);
    this.setSearchArrow = this.setSearchArrow.bind(this);
    this.handleKeyboardLanguage = this.handleKeyboardLanguage.bind(this);
    this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this);
    this.handleClickGlobal = this.handleClickGlobal.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.arrowSize = '0.5rem';
    // Bind global events
    if (this.attachKeyListener) {
      document.addEventListener('keyup', this.handleKeyboardGlobal);
    }
    if (this.attachClickListener) {
      document.addEventListener('click', this.handleClickGlobal);
    }
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Site header elements
    this.container = queryOne(this.containerSelector);

    // Language list management
    this.languageLink = queryOne(this.languageLinkSelector);
    this.languageListOverlay = queryOne(this.languageListOverlaySelector);
    this.languageListEu = queryOne(this.languageListEuSelector);
    this.languageListNonEu = queryOne(this.languageListNonEuSelector);
    this.close = queryOne(this.closeOverlaySelector);

    // Create focus trap
    this.focusTrap = createFocusTrap(this.languageListOverlay, {
      onDeactivate: this.closeOverlay,
      allowOutsideClick: true,
    });

    if (this.attachClickListener && this.languageLink) {
      this.languageLink.addEventListener('click', this.toggleOverlay);
    }
    if (this.attachClickListener && this.close) {
      this.close.addEventListener('click', this.toggleOverlay);
    }
    if (this.attachKeyListener && this.languageLink) {
      this.languageLink.addEventListener(
        'keydown',
        this.handleKeyboardLanguage,
      );
    }

    // Search form management
    this.searchToggle = queryOne(this.searchToggleSelector);
    this.searchForm = queryOne(this.searchFormSelector);

    if (this.attachClickListener && this.searchToggle) {
      this.searchToggle.addEventListener('click', this.toggleSearch);
    }

    // Login management
    this.loginToggle = queryOne(this.loginToggleSelector);
    this.loginBox = queryOne(this.loginBoxSelector);

    if (this.attachClickListener && this.loginToggle) {
      this.loginToggle.addEventListener('click', this.toggleLogin);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.languageLink) {
      this.languageLink.removeEventListener('click', this.toggleOverlay);
    }
    if (this.focusTrap) {
      this.focusTrap.deactivate();
    }

    if (this.attachKeyListener && this.languageLink) {
      this.languageLink.removeEventListener(
        'keydown',
        this.handleKeyboardLanguage,
      );
    }

    if (this.attachClickListener && this.close) {
      this.close.removeEventListener('click', this.toggleOverlay);
    }

    if (this.attachClickListener && this.searchToggle) {
      this.searchToggle.removeEventListener('click', this.toggleSearch);
    }

    if (this.attachClickListener && this.loginToggle) {
      this.loginToggle.removeEventListener('click', this.toggleLogin);
    }

    if (this.attachKeyListener) {
      document.removeEventListener('keyup', this.handleKeyboardGlobal);
    }

    if (this.attachClickListener) {
      document.removeEventListener('click', this.handleClickGlobal);
    }

    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }

  /**
   * Update display of the modal language list overlay.
   */
  updateOverlay() {
    // Check number of items and adapt display
    let columnsEu = 1;
    let columnsNonEu = 1;
    if (this.languageListEu) {
      // Get all Eu languages
      const itemsEu = queryAll(
        '.ecl-site-header__language-item',
        this.languageListEu,
      );

      // Calculate number of columns
      columnsEu = Math.ceil(itemsEu.length / this.languageMaxColumnItems);

      // Apply column display
      if (columnsEu > 1) {
        this.languageListEu.classList.add(
          `ecl-site-header__language-category--${columnsEu}-col`,
        );
      }
    }
    if (this.languageListNonEu) {
      // Get all non-Eu languages
      const itemsNonEu = queryAll(
        '.ecl-site-header__language-item',
        this.languageListNonEu,
      );

      // Calculate number of columns
      columnsNonEu = Math.ceil(itemsNonEu.length / this.languageMaxColumnItems);

      // Apply column display
      if (columnsNonEu > 1) {
        this.languageListNonEu.classList.add(
          `ecl-site-header__language-category--${columnsNonEu}-col`,
        );
      }
    }

    // Check total width, and change display if needed
    if (this.languageListEu) {
      this.languageListEu.parentNode.classList.remove(
        'ecl-site-header__language-content--stack',
      );
    } else if (this.languageListNonEu) {
      this.languageListNonEu.parentNode.classList.remove(
        'ecl-site-header__language-content--stack',
      );
    }
    let popoverRect = this.languageListOverlay.getBoundingClientRect();
    const containerRect = this.container.getBoundingClientRect();

    if (popoverRect.width > containerRect.width) {
      // Stack elements
      if (this.languageListEu) {
        this.languageListEu.parentNode.classList.add(
          'ecl-site-header__language-content--stack',
        );
      } else if (this.languageListNonEu) {
        this.languageListNonEu.parentNode.classList.add(
          'ecl-site-header__language-content--stack',
        );
      }

      // Adapt column display
      if (this.languageListNonEu) {
        this.languageListNonEu.classList.remove(
          `ecl-site-header__language-category--${columnsNonEu}-col`,
        );
        this.languageListNonEu.classList.add(
          `ecl-site-header__language-category--${Math.max(
            columnsEu,
            columnsNonEu,
          )}-col`,
        );
      }
    }

    // Check available space
    this.languageListOverlay.classList.remove(
      'ecl-site-header__language-container--push-right',
    );
    this.languageListOverlay.classList.remove(
      'ecl-site-header__language-container--full',
    );
    this.languageListOverlay.style.removeProperty(
      '--ecl-language-arrow-position',
    );
    this.languageListOverlay.style.removeProperty('right');

    popoverRect = this.languageListOverlay.getBoundingClientRect();
    const screenWidth = window.innerWidth;

    // Popover too large
    if (popoverRect.right > screenWidth) {
      const linkRect = this.languageLink.getBoundingClientRect();

      // Push the popover to the right
      this.languageListOverlay.classList.add(
        'ecl-site-header__language-container--push-right',
      );
      this.languageListOverlay.style.setProperty(
        'right',
        `-${containerRect.right - linkRect.right}px`,
      );

      // Adapt arrow position
      const arrowPosition =
        containerRect.right - linkRect.right + linkRect.width / 2;
      this.languageListOverlay.style.setProperty(
        '--ecl-language-arrow-position',
        `calc(${arrowPosition}px - ${this.arrowSize})`,
      );
    }

    // Mobile popover (full width)
    if (popoverRect.left === 0) {
      const linkRect = this.languageLink.getBoundingClientRect();

      // Push the popover to the right
      this.languageListOverlay.classList.add(
        'ecl-site-header__language-container--full',
      );
      this.languageListOverlay.style.removeProperty('right');

      // Adapt arrow position
      const arrowPosition =
        popoverRect.right - linkRect.right + linkRect.width / 2;

      this.languageListOverlay.style.setProperty(
        '--ecl-language-arrow-position',
        `calc(${arrowPosition}px - ${this.arrowSize})`,
      );
    }

    if (
      this.loginBox &&
      this.loginBox.classList.contains('ecl-site-header__login-box--active')
    ) {
      this.setLoginArrow();
    }
    if (
      this.searchForm &&
      this.searchForm.classList.contains('ecl-site-header__search--active')
    ) {
      this.setSearchArrow();
    }
  }

  /**
   * Shows the modal language list overlay.
   */
  openOverlay() {
    // Display language list
    this.languageListOverlay.hidden = false;
    this.languageListOverlay.setAttribute('aria-modal', 'true');
    this.languageLink.setAttribute('aria-expanded', 'true');
  }

  /**
   * Hides the modal language list overlay.
   */
  closeOverlay() {
    this.languageListOverlay.hidden = true;
    this.languageListOverlay.removeAttribute('aria-modal');
    this.languageLink.setAttribute('aria-expanded', 'false');
  }

  /**
   * Toggles the modal language list overlay.
   *
   * @param {Event} e
   */
  toggleOverlay(e) {
    if (!this.languageListOverlay || !this.focusTrap) return;

    e.preventDefault();

    if (this.languageListOverlay.hasAttribute('hidden')) {
      this.languageLink.classList.add(
        'ecl-site-header__language-selector--active',
      );
      this.openOverlay();
      this.updateOverlay();
      this.focusTrap.activate();
    } else {
      this.languageLink.classList.remove(
        'ecl-site-header__language-selector--active',
      );
      this.focusTrap.deactivate();
    }
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   */
  handleResize() {
    if (
      (this.languageListOverlay &&
        !this.languageListOverlay.hasAttribute('hidden')) ||
      (this.loginBox &&
        this.loginBox.classList.contains(
          'ecl-site-header__login-box--active',
        )) ||
      (this.searchForm &&
        this.searchForm.classList.contains('ecl-site-header__search--active'))
    ) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.updateOverlay();
      }, 200);
    }
  }

  /**
   * Handles keyboard events specific to the language list.
   *
   * @param {Event} e
   */
  handleKeyboardLanguage(e) {
    // Open the menu with space and enter
    if (e.keyCode === 32 || e.key === 'Enter') {
      this.toggleOverlay(e);
    }
  }

  /**
   * Toggles the search form.
   *
   * @param {Event} e
   */
  toggleSearch(e) {
    if (!this.searchForm) return;

    e.preventDefault();

    // Get current status
    const isExpanded =
      this.searchToggle.getAttribute('aria-expanded') === 'true';

    // Close other boxes
    if (
      this.loginToggle &&
      this.loginToggle.getAttribute('aria-expanded') === 'true'
    ) {
      this.toggleLogin(e);
    }

    // Toggle the search form
    this.searchToggle.setAttribute(
      'aria-expanded',
      isExpanded ? 'false' : 'true',
    );

    if (!isExpanded) {
      this.searchForm.classList.add('ecl-site-header__search--active');
      this.searchToggle.classList.add('ecl-site-header__search-toggle--active');
      this.setSearchArrow();
    } else {
      this.searchForm.classList.remove('ecl-site-header__search--active');
      this.searchToggle.classList.remove(
        'ecl-site-header__search-toggle--active',
      );
    }
  }

  setLoginArrow() {
    const loginRect = this.loginBox.getBoundingClientRect();
    if (loginRect.x === 0) {
      const loginToggleRect = this.loginToggle.getBoundingClientRect();
      const arrowPosition =
        window.innerWidth - loginToggleRect.right + loginToggleRect.width / 2;

      this.loginBox.style.setProperty(
        '--ecl-login-arrow-position',
        `calc(${arrowPosition}px - ${this.arrowSize})`,
      );
    }
  }

  setSearchArrow() {
    const searchRect = this.searchForm.getBoundingClientRect();
    if (searchRect.x === 0) {
      const searchToggleRect = this.searchToggle.getBoundingClientRect();
      const arrowPosition =
        window.innerWidth - searchToggleRect.right + searchToggleRect.width / 2;

      this.searchForm.style.setProperty(
        '--ecl-search-arrow-position',
        `calc(${arrowPosition}px - ${this.arrowSize})`,
      );
    }
  }

  /**
   * Toggles the login form.
   *
   * @param {Event} e
   */
  toggleLogin(e) {
    if (!this.loginBox) return;

    e.preventDefault();

    // Get current status
    const isExpanded =
      this.loginToggle.getAttribute('aria-expanded') === 'true';

    // Close other boxes
    if (
      this.searchToggle &&
      this.searchToggle.getAttribute('aria-expanded') === 'true'
    ) {
      this.toggleSearch(e);
    }

    // Toggle the login box
    this.loginToggle.setAttribute(
      'aria-expanded',
      isExpanded ? 'false' : 'true',
    );
    if (!isExpanded) {
      this.loginBox.classList.add('ecl-site-header__login-box--active');
      this.loginToggle.classList.add('ecl-site-header__login-toggle--active');
      this.setLoginArrow();
    } else {
      this.loginBox.classList.remove('ecl-site-header__login-box--active');
      this.loginToggle.classList.remove(
        'ecl-site-header__login-toggle--active',
      );
    }
  }

  /**
   * Handles global keyboard events, triggered outside of the site header.
   *
   * @param {Event} e
   */
  handleKeyboardGlobal(e) {
    if (!this.languageLink) return;
    const listExpanded = this.languageLink.getAttribute('aria-expanded');

    // Detect press on Escape
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (listExpanded === 'true') {
        this.toggleOverlay(e);
      }
    }
  }

  /**
   * Handles global click events, triggered outside of the site header.
   *
   * @param {Event} e
   */
  handleClickGlobal(e) {
    if (!this.languageLink && !this.searchToggle && !this.loginToggle) return;
    const listExpanded =
      this.languageLink && this.languageLink.getAttribute('aria-expanded');
    const loginExpanded =
      this.loginToggle &&
      this.loginToggle.classList.contains(
        'ecl-site-header__login-toggle--active',
      );
    const searchExpanded =
      this.searchToggle &&
      this.searchToggle.classList.contains(
        'ecl-site-header__search-toggle--active',
      );
    // Check if the language list is open
    if (listExpanded === 'true') {
      // Check if the click occured in the language popover
      if (
        !this.languageListOverlay.contains(e.target) &&
        !this.languageLink.contains(e.target)
      ) {
        this.toggleOverlay(e);
      }
    }
    if (loginExpanded) {
      if (
        !this.loginBox.contains(e.target) &&
        !this.loginToggle.contains(e.target)
      ) {
        this.toggleLogin(e);
      }
    }
    if (searchExpanded) {
      if (
        !this.searchForm.contains(e.target) &&
        !this.searchToggle.contains(e.target)
      ) {
        this.toggleSearch(e);
      }
    }
  }
}

export default SiteHeader;
