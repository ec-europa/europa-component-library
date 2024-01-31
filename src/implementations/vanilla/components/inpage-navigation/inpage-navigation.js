import Stickyfill from 'stickyfilljs';
import Gumshoe from 'gumshoejs/dist/gumshoe.polyfills';
import { queryOne, queryAll } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.stickySelector Selector for sticky inpage navigation element
 * @param {String} options.containerSelector Selector for inpage navigation container element
 * @param {String} options.inPageList Selector for inpage navigation list element
 * @param {String} options.spySelector Selector for inpage navigation spied element
 * @param {String} options.toggleSelector Selector for inpage navigation trigger element
 * @param {String} options.linksSelector Selector for inpage navigation link element
 * @param {String} options.spyActiveContainer Selector for inpage navigation container to spy on element
 * @param {String} options.spyClass Selector to spy on
 * @param {String} options.spyTrigger
 * @param {Number} options.spyOffset
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 */
export class InpageNavigation {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {InpageNavigation} An instance of InpageNavigation.
   */
  static autoInit(root, { INPAGE_NAVIGATION: defaultOptions = {} } = {}) {
    const inpageNavigation = new InpageNavigation(root, defaultOptions);
    inpageNavigation.init();
    root.ECLInpageNavigation = inpageNavigation;
    return inpageNavigation;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event onToggle
   *   Triggered when the list is toggled in mobile
   * @event onClick
   *   Triggered when an item is clicked
   * @memberof InpageNavigation
   */
  supportedEvents = ['onToggle', 'onClick'];

  constructor(
    element,
    {
      stickySelector = '[data-ecl-inpage-navigation]',
      containerSelector = '[data-ecl-inpage-navigation-container]',
      inPageList = '[data-ecl-inpage-navigation-list]',
      spySelector = '[data-ecl-inpage-navigation-link]',
      toggleSelector = '[data-ecl-inpage-navigation-trigger]',
      linksSelector = '[data-ecl-inpage-navigation-link]',
      spyActiveContainer = 'ecl-inpage-navigation--visible',
      spyOffset = 20,
      spyClass = 'ecl-inpage-navigation__item--active',
      spyTrigger = '[data-ecl-inpage-navigation-trigger-current]',
      attachClickListener = true,
      contentClass = 'ecl-inpage-navigation__heading--active',
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

    this.attachClickListener = attachClickListener;
    this.stickySelector = stickySelector;
    this.containerSelector = containerSelector;
    this.toggleSelector = toggleSelector;
    this.linksSelector = linksSelector;
    this.inPageList = inPageList;
    this.spyActiveContainer = spyActiveContainer;
    this.spySelector = spySelector;
    this.spyOffset = spyOffset;
    this.spyClass = spyClass;
    this.spyTrigger = spyTrigger;
    this.contentClass = contentClass;
    this.gumshoe = null;
    this.observer = null;
    this.stickyObserver = null;
    this.isExpanded = false;

    // Bind `this` for use in callbacks
    this.handleClickOnToggler = this.handleClickOnToggler.bind(this);
    this.handleClickOnLink = this.handleClickOnLink.bind(this);
    this.initScrollSpy = this.initScrollSpy.bind(this);
    this.initObserver = this.initObserver.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
    this.handleShiftTab = this.handleShiftTab.bind(this);
    this.activateScrollSpy = this.activateScrollSpy.bind(this);
    this.deactivateScrollSpy = this.deactivateScrollSpy.bind(this);
    this.destroySticky = this.destroySticky.bind(this);
    this.destroyScrollSpy = this.destroyScrollSpy.bind(this);
    this.destroyObserver = this.destroyObserver.bind(this);
  }

  // ACTIONS
  /**
   * Initiate sticky behaviors.
   */
  initSticky() {
    this.stickyInstance = new Stickyfill.Sticky(this.element);
  }

  /**
   * Destroy sticky behaviors.
   */
  destroySticky() {
    if (this.stickyInstance) {
      this.stickyInstance.remove();
    }
  }

  /**
   * Initiate scroll spy behaviors.
   */
  initScrollSpy() {
    this.gumshoe = new Gumshoe(this.spySelector, {
      navClass: this.spyClass,
      contentClass: this.contentClass,
      offset: this.spyOffset,
      reflow: true,
    });

    document.addEventListener('gumshoeActivate', this.activateScrollSpy, false);
    document.addEventListener(
      'gumshoeDeactivate',
      this.deactivateScrollSpy,
      false,
    );

    if ('IntersectionObserver' in window) {
      const navigationContainer = queryOne(this.containerSelector);

      if (navigationContainer) {
        let previousY = 0;
        let previousRatio = 0;
        let initialized = false;

        this.stickyObserver = new IntersectionObserver(
          (entries) => {
            if (entries && entries[0]) {
              const entry = entries[0];
              const currentY = entry.boundingClientRect.y;
              const currentRatio = entry.intersectionRatio;
              const { isIntersecting } = entry;

              if (!initialized) {
                initialized = true;
                previousY = currentY;
                previousRatio = currentRatio;
                return;
              }

              if (currentY < previousY) {
                if (!(currentRatio > previousRatio && isIntersecting)) {
                  // Scrolling down leave
                  this.element.classList.remove(this.spyActiveContainer);
                }
              } else if (currentY > previousY && isIntersecting) {
                if (currentRatio > previousRatio) {
                  // Scrolling up enter
                  this.element.classList.add(this.spyActiveContainer);
                }
              }

              previousY = currentY;
              previousRatio = currentRatio;
            }
          },
          { root: null },
        );

        // observing a target element
        this.stickyObserver.observe(navigationContainer);
      }
    }
  }

  /**
   * Activate scroll spy behaviors.
   *
   * @param {Event} event
   */
  activateScrollSpy(event) {
    const navigationTitle = queryOne(this.spyTrigger);

    this.element.classList.add(this.spyActiveContainer);
    navigationTitle.textContent = event.detail.content.textContent;
  }

  /**
   * Deactivate scroll spy behaviors.
   */
  deactivateScrollSpy() {
    const navigationTitle = queryOne(this.spyTrigger);

    this.element.classList.remove(this.spyActiveContainer);
    navigationTitle.innerHTML = '';
  }

  /**
   * Destroy scroll spy behaviors.
   */
  destroyScrollSpy() {
    if (this.stickyObserver) {
      this.stickyObserver.disconnect();
    }

    document.removeEventListener(
      'gumshoeActivate',
      this.activateScrollSpy,
      false,
    );
    document.removeEventListener(
      'gumshoeDeactivate',
      this.deactivateScrollSpy,
      false,
    );
    this.gumshoe.destroy();
  }

  /**
   * Initiate observer.
   */
  initObserver() {
    if ('MutationObserver' in window) {
      const self = this;
      this.observer = new MutationObserver((mutationsList) => {
        const body = queryOne('.ecl-col-l-9');
        const currentInpage = queryOne('[data-ecl-inpage-navigation-list]');

        mutationsList.forEach((mutation) => {
          // Exclude the changes we perform.
          if (
            mutation &&
            mutation.target &&
            mutation.target.classList &&
            !mutation.target.classList.contains(
              'ecl-inpage-navigation__trigger-current',
            )
          ) {
            // Added nodes.
            if (mutation.addedNodes.length > 0) {
              [].slice.call(mutation.addedNodes).forEach((addedNode) => {
                if (addedNode.tagName === 'H2' && addedNode.id) {
                  const H2s = queryAll('h2[id]', body);
                  const addedNodeIndex = H2s.findIndex(
                    (H2) => H2.id === addedNode.id,
                  );
                  const element =
                    currentInpage.childNodes[addedNodeIndex - 1].cloneNode(
                      true,
                    );
                  element.childNodes[0].textContent = addedNode.textContent;
                  element.childNodes[0].href = `#${addedNode.id}`;
                  currentInpage.childNodes[addedNodeIndex - 1].after(element);
                }
              });
            }
            // Removed nodes.
            if (mutation.removedNodes.length > 0) {
              [].slice.call(mutation.removedNodes).forEach((removedNode) => {
                if (removedNode.tagName === 'H2' && removedNode.id) {
                  currentInpage.childNodes.forEach((item) => {
                    if (
                      item.childNodes[0].href.indexOf(removedNode.id) !== -1
                    ) {
                      // Remove the element from the inpage.
                      item.remove();
                    }
                  });
                }
              });
            }

            self.update();
          }
        });
      });

      this.observer.observe(document, {
        subtree: true,
        childList: true,
      });
    }
  }

  /**
   * Destroy observer.
   */
  destroyObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    const toggleElement = queryOne(this.toggleSelector, this.element);
    const navLinks = queryAll(this.linksSelector, this.element);

    this.initSticky(this.element);
    this.initScrollSpy();
    this.initObserver();

    if (this.attachClickListener && toggleElement) {
      toggleElement.addEventListener('click', this.handleClickOnToggler);
    }
    if (this.attachClickListener && navLinks) {
      navLinks.forEach((link) =>
        link.addEventListener('click', this.handleClickOnLink),
      );
      this.element.addEventListener('keydown', this.handleShiftTab);
      toggleElement.addEventListener('click', this.handleClickOnToggler);
    }

    document.addEventListener('keydown', this.handleEsc);

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
   * @memberof InpageNavigation
   * @instance
   *
   * @example
   * // Registering a callback for the 'onToggle' event
   * inpage.on('onToggle', (event) => {
   *   console.log('Toggle event occurred!', event);
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
   * @memberof InpageNavigation
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Update scroll spy instance.
   */
  update() {
    this.gumshoe.setup();
  }

  /**
   * Invoke event listeners on toggle click.
   *
   * @param {Event} e
   */
  handleClickOnToggler(e) {
    const currentList = queryOne(this.inPageList, this.element);
    const togglerElement = queryOne(this.toggleSelector, this.element);

    e.preventDefault();

    // Get current status
    this.isExpanded = togglerElement.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    togglerElement.setAttribute(
      'aria-expanded',
      this.isExpanded ? 'false' : 'true',
    );
    if (this.isExpanded) {
      currentList.classList.remove('ecl-inpage-navigation__list--visible');
    } else {
      currentList.classList.add('ecl-inpage-navigation__list--visible');
    }

    this.trigger('onToggle', { isExpanded: this.isExpanded });
  }

  /**
   * Sets the necessary attributes to collapse inpage navigation list.
   *
   * @param {Event} e
   */
  handleClickOnLink(e) {
    const currentList = queryOne(this.inPageList, this.element);
    const togglerElement = queryOne(this.toggleSelector, this.element);
    const { href } = e.target;
    let heading = null;

    if (href) {
      const id = href.split('#')[1];

      if (id) {
        heading = queryOne(`#${id}`, document);
      }
    }

    currentList.classList.remove('ecl-inpage-navigation__list--visible');
    togglerElement.setAttribute('aria-expanded', 'false');

    const eventData = { target: heading || href, e };
    this.trigger('onClick', eventData);
  }

  /**
   * @param {Event} e
   */
  handleEsc(e) {
    if (e.key === 'Escape') {
      this.handleClickOnLink();
    }
  }

  /**
   * @param {Event} e
   */
  handleShiftTab(e) {
    if (e.key === 'Tab' && e.shiftKey) {
      const links = queryAll(this.linksSelector, this.element);
      if (Array.isArray(links) && links.length > 0 && e.target === links[0]) {
        this.handleClickOnLink();
      }
    }
  }

  /**
   * Destroy component instance.
   */
  destroy() {
    if (this.attachClickListener && this.toggleElement) {
      this.toggleElement.removeEventListener(
        'click',
        this.handleClickOnToggler,
      );
    }
    if (this.attachClickListener && this.navLinks) {
      this.navLinks.forEach((link) =>
        link.removeEventListener('click', this.handleClickOnLink),
      );
    }
    this.destroyScrollSpy();
    this.destroySticky();
    this.destroyObserver();
    document.removeEventListener('keydown', this.handleEsc);

    if (this.element) {
      this.element.removeEventListener('keydown', this.handleShiftTab);
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }
}

export default InpageNavigation;
