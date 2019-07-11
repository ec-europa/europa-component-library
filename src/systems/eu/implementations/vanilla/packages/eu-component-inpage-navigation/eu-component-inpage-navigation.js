/**
 * Navigation inpage related behaviors.
 */

import Stickyfill from 'stickyfilljs';
import Gumshoe from 'gumshoejs/dist/gumshoe.polyfills';
import { queryOne, queryAll } from '@ecl/eu-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export class InpageNavigation {
  constructor(
    element,
    {
      attachClickListener: attachClickListener = true,
      stickySelector: stickySelector = '[data-ecl-inpage-navigation]',
      inPageList: inPageList = '[data-ecl-inpage-navigation-list]',
      spySelector: spySelector = '[data-ecl-inpage-navigation-link]',
      toggleSelector: toggleSelector = '[data-ecl-inpage-navigation-trigger]',
      linksSelector: linksSelector = '[data-ecl-inpage-navigation-link]',
      spyActiveContainer: spyActiveContainer = 'ecl-inpage-navigation--visible',
      spyOffset: spyOffset = 20,
      spyClass: spyClass = 'ecl-inpage-navigation__item--active',
      spyTrigger: spyTrigger = '[data-ecl-inpage-navigation-trigger-current]',
    } = {}
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.'
      );
    }

    this.element = element;
    this.attachClickListener = attachClickListener;
    this.stickySelector = stickySelector;
    this.toggleSelector = toggleSelector;
    this.linksSelector = linksSelector;
    this.inPageList = inPageList;
    this.spyActiveContainer = spyActiveContainer;
    this.spySelector = spySelector;
    this.spyOffset = spyOffset;
    this.spyClass = spyClass;
    this.spyTrigger = spyTrigger;
    this.gumshoe = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggler = this.handleClickOnToggler.bind(this);
    this.handleClickOnLink = this.handleClickOnLink.bind(this);
    this.initScrollSpy = this.initScrollSpy.bind(this);
    this.initObserver = this.initObserver.bind(this);
    this.activateScrollSpy = this.activateScrollSpy.bind(this);
    this.deactivateScrollSpy = this.deactivateScrollSpy.bind(this);
  }

  // ACTIONS
  initSticky() {
    this.stickyInstance = new Stickyfill.Sticky(this.element);
  }

  destroySticky() {
    if (this.stickyInstance) {
      this.stickyInstance.remove();
    }
  }

  initScrollSpy() {
    this.gumshoe = new Gumshoe(this.spySelector, {
      navClass: this.spyClass,
      offset: this.spyOffset,
      reflow: true,
    });

    document.addEventListener('gumshoeActivate', this.activateScrollSpy, false);
    document.addEventListener(
      'gumshoeDeactivate',
      this.deactivateScrollSpy,
      false
    );
  }

  activateScrollSpy(event) {
    const toggleClass = this.spyActiveContainer;
    const navigationTitle = queryOne(this.spyTrigger);

    this.element.classList.add(toggleClass);
    navigationTitle.textContent = event.detail.content.textContent;
  }

  deactivateScrollSpy() {
    const toggleClass = this.spyActiveContainer;
    const navigationTitle = queryOne(this.spyTrigger);
    const currentList = queryOne(this.inPageList, this.element);
    const togglerElement = queryOne(this.toggleSelector, this.element);

    this.element.classList.remove(toggleClass);
    navigationTitle.innerHTML = '';
    currentList.setAttribute('hidden', true);
    togglerElement.setAttribute('aria-expanded', 'false');
  }

  destroyScrollSpy() {
    document.removeEventListener(
      'gumshoeActivate',
      this.activateScrollSpy,
      false
    );
    document.removeEventListener(
      'gumshoeDeactivate',
      this.deactivateScrollSpy,
      false
    );
    this.gumshoe.destroy();
  }

  initObserver() {
    const self = this;
    this.observer = new MutationObserver(function observe(mutationsList) {
      const body = queryOne('.ecl-col-md-9');
      const currentInpage = queryOne('[data-ecl-inpage-navigation-list]');

      mutationsList.forEach(mutation => {
        // Exclude the changes we perform.
        if (
          !mutation.target.className.includes(
            'ecl-inpage-navigation__trigger-current'
          )
        ) {
          // Added nodes.
          if (mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(addedNode => {
              if (addedNode.tagName === 'H2' && addedNode.id) {
                const H2s = queryAll('h2[id]', body);
                const addedNodeIndex = H2s.findIndex(
                  H2 => H2.id === addedNode.id
                );
                const element = currentInpage.childNodes[
                  addedNodeIndex - 1
                ].cloneNode(true);
                element.childNodes[0].textContent = addedNode.textContent;
                element.childNodes[0].href = `#${addedNode.id}`;
                currentInpage.childNodes[addedNodeIndex - 1].after(element);
              }
            });
          }
          // Removed nodes.
          if (mutation.removedNodes.length > 0) {
            mutation.removedNodes.forEach(removedNode => {
              if (removedNode.tagName === 'H2' && removedNode.id) {
                currentInpage.childNodes.forEach(item => {
                  if (item.childNodes[0].href.includes(removedNode.id)) {
                    // Remove the element from the inpage.
                    currentInpage.removeChild(item);
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

  destroyObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  // Init
  init() {
    const toggleElement = queryOne(this.toggleSelector, this.element);
    const navLinks = queryAll(this.linksSelector, this.element);

    this.initSticky(this.element);
    this.initScrollSpy();
    this.initObserver();

    if (this.attachClickListener && toggleElement) {
      toggleElement.addEventListener('click', this.handleClickOnToggler);
    }
    if (this.attachClickListener && navLinks) {
      navLinks.forEach(link =>
        link.addEventListener('click', this.handleClickOnLink)
      );
      toggleElement.addEventListener('click', this.handleClickOnToggler);
    }
  }

  update() {
    this.gumshoe.setup();
  }

  handleClickOnToggler(e) {
    const currentList = queryOne(this.inPageList, this.element);
    const currentState = currentList.getAttributeNode('hidden');
    const togglerElement = queryOne(this.toggleSelector, this.element);

    if (currentState) {
      currentList.removeAttribute('hidden');
      togglerElement.setAttribute('aria-expanded', 'true');
    } else {
      currentList.setAttribute('hidden', true);
      togglerElement.setAttribute('aria-expanded', 'false');
    }

    e.preventDefault();
  }

  handleClickOnLink() {
    const currentList = queryOne(this.inPageList, this.element);
    const togglerElement = queryOne(this.toggleSelector, this.element);

    currentList.setAttribute('hidden', true);
    togglerElement.setAttribute('aria-expanded', 'false');
  }

  // Destroy
  destroy() {
    if (this.attachClickListener && this.toggleElement) {
      this.toggleElement.removeEventListener(
        'click',
        this.handleClickOnToggler
      );
    }
    if (this.attachClickListener && this.navLinks) {
      this.navLinks.forEach(link =>
        link.removeEventListener('click', this.handleClickOnLink)
      );
    }
    this.destroyScrollSpy();
    this.destroySticky();
    this.destroyObserver();
  }
}

export default InpageNavigation;
