import { queryOne } from '@ecl/ec-base/helpers/dom';
import createFocusTrap from 'focus-trap';

export class SiteHeaderStandardised {
  static autoInit(root, { SITE_HEADER_CORE: defaultOptions = {} } = {}) {
    const siteHeaderStandardised = new SiteHeaderStandardised(
      root,
      defaultOptions
    );
    siteHeaderStandardised.init();
    // eslint-disable-next-line no-param-reassign
    root.ECLSiteHeaderStandardised = siteHeaderStandardised;
    return siteHeaderStandardised;
  }

  constructor(
    element,
    {
      languageLinkSelector = '[data-ecl-language-selector]',
      languageListOverlaySelector = '[data-ecl-language-list-overlay]',
      closeOverlaySelector = '[data-ecl-language-list-close]',
      searchToggleSelector = '[data-ecl-search-toggle]',
      searchFormSelector = '[data-ecl-search-form]',
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

    // Private variables
    this.languageSelector = null;
    this.languageListOverlay = null;
    this.close = null;
    this.focusTrap = null;
    this.searchToggle = null;
    this.searchForm = null;

    // Bind `this` for use in callbacks
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  init() {
    // Language list management
    this.languageSelector = queryOne(this.languageLinkSelector);
    this.languageListOverlay = queryOne(this.languageListOverlaySelector);
    this.close = queryOne(this.closeOverlaySelector);

    // Create focus trap
    this.focusTrap = createFocusTrap(this.languageListOverlay, {
      onDeactivate: this.closeOverlay,
    });

    this.languageSelector.addEventListener('click', this.toggleOverlay);
    this.close.addEventListener('click', this.toggleOverlay);

    // Search form management
    this.searchToggle = queryOne(this.searchToggleSelector);
    this.searchForm = queryOne(this.searchFormSelector);

    this.searchToggle.addEventListener('click', this.toggleSearch);
  }

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
  }

  openOverlay() {
    this.languageListOverlay.removeAttribute('hidden');
  }

  closeOverlay() {
    this.languageListOverlay.setAttribute('hidden', true);
  }

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

  toggleSearch(e) {
    if (!this.searchForm) return;

    e.preventDefault();

    // Get current status
    const isExpanded =
      this.searchToggle.getAttribute('aria-expanded') === 'true';

    // Toggle the search form
    this.searchToggle.setAttribute('aria-expanded', !isExpanded);
    if (!isExpanded) {
      this.searchForm.classList.add(
        'ecl-site-header-standardised__search--active'
      );
    } else {
      this.searchForm.classList.remove(
        'ecl-site-header-standardised__search--active'
      );
    }
  }
}

export default SiteHeaderStandardised;
