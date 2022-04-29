import { queryOne } from '@ecl/dom-utils';
import { createFocusTrap } from 'focus-trap';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.languageLinkSelector
 * @param {String} options.languageListOverlaySelector
 * @param {String} options.closeOverlaySelector
 * @param {String} options.searchToggleSelector
 * @param {String} options.searchFormSelector
 * @param {String} options.loginToggleSelector
 * @param {String} options.loginBoxSelector
 */
export class SiteHeaderHarmonised {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {SiteHeaderStandardised} An instance of SiteHeaderStandardised.
   */
  static autoInit(root, { SITE_HEADER_CORE: defaultOptions = {} } = {}) {
    const siteHeaderHarmonised = new SiteHeaderHarmonised(root, defaultOptions);
    siteHeaderHarmonised.init();
    root.ECLSiteHeaderHarmonised = siteHeaderHarmonised;
    return siteHeaderHarmonised;
  }

  constructor(
    element,
    {
      languageLinkSelector = '[data-ecl-language-selector]',
      languageListOverlaySelector = '[data-ecl-language-list-overlay]',
      closeOverlaySelector = '[data-ecl-language-list-close]',
      searchToggleSelector = '[data-ecl-search-toggle]',
      searchFormSelector = '[data-ecl-search-form]',
      loginToggleSelector = '[data-ecl-login-toggle]',
      loginBoxSelector = '[data-ecl-login-box]',
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
    this.languageLinkSelector = languageLinkSelector;
    this.languageListOverlaySelector = languageListOverlaySelector;
    this.closeOverlaySelector = closeOverlaySelector;
    this.searchToggleSelector = searchToggleSelector;
    this.searchFormSelector = searchFormSelector;
    this.loginToggleSelector = loginToggleSelector;
    this.loginBoxSelector = loginBoxSelector;

    // Private variables
    this.languageSelector = null;
    this.languageListOverlay = null;
    this.close = null;
    this.focusTrap = null;
    this.searchToggle = null;
    this.searchForm = null;
    this.loginToggle = null;
    this.loginBox = null;

    // Bind `this` for use in callbacks
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    // Language list management
    this.languageSelector = queryOne(this.languageLinkSelector);
    this.languageListOverlay = queryOne(this.languageListOverlaySelector);
    this.close = queryOne(this.closeOverlaySelector);

    // Create focus trap
    this.focusTrap = createFocusTrap(this.languageListOverlay, {
      onDeactivate: this.closeOverlay,
    });

    if (this.languageSelector) {
      this.languageSelector.addEventListener('click', this.toggleOverlay);
    }
    if (this.close) {
      this.close.addEventListener('click', this.toggleOverlay);
    }

    // Search form management
    this.searchToggle = queryOne(this.searchToggleSelector);
    this.searchForm = queryOne(this.searchFormSelector);

    if (this.searchToggle) {
      this.searchToggle.addEventListener('click', this.toggleSearch);
    }

    // Login management
    this.loginToggle = queryOne(this.loginToggleSelector);
    this.loginBox = queryOne(this.loginBoxSelector);

    if (this.loginToggle) {
      this.loginToggle.addEventListener('click', this.toggleLogin);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.languageSelector) {
      this.languageSelector.removeEventListener('click', this.toggleOverlay);
    }
    if (this.focusTrap) {
      this.focusTrap.deactivate();
    }

    if (this.close) {
      this.close.removeEventListener('click', this.toggleOverlay);
    }

    if (this.searchToggle) {
      this.searchToggle.removeEventListener('click', this.toggleSearch);
    }

    if (this.loginToggle) {
      this.loginToggle.removeEventListener('click', this.toggleLogin);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }

  /**
   * Shows the modal language list overlay.
   */
  openOverlay() {
    this.languageListOverlay.hidden = false;
    this.languageListOverlay.setAttribute('aria-modal', 'true');
    this.languageSelector.setAttribute('aria-expanded', 'true');
  }

  /**
   * Hides the modal language list overlay.
   */
  closeOverlay() {
    this.languageListOverlay.hidden = true;
    this.languageListOverlay.removeAttribute('aria-modal');
    this.languageSelector.setAttribute('aria-expanded', 'false');
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
      this.openOverlay();
      this.focusTrap.activate();
    } else {
      this.focusTrap.deactivate();
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
      isExpanded ? 'false' : 'true'
    );
    if (!isExpanded) {
      this.searchForm.classList.add(
        'ecl-site-header-harmonised__search--active'
      );
    } else {
      this.searchForm.classList.remove(
        'ecl-site-header-harmonised__search--active'
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
      isExpanded ? 'false' : 'true'
    );
    if (!isExpanded) {
      this.loginBox.classList.add(
        'ecl-site-header-harmonised__login-box--active'
      );
    } else {
      this.loginBox.classList.remove(
        'ecl-site-header-harmonised__login-box--active'
      );
    }
  }
}

export default SiteHeaderHarmonised;
