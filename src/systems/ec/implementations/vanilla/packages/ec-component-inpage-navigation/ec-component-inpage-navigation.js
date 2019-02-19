/**
 * Navigation inpage related behaviors.
 */

import Stickyfill from 'stickyfilljs';
import gumshoe from 'gumshoejs';
import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
class InpageNavigation {
  constructor(
    element,
    {
      attachClickListener: attachClickListener = true,
      stickySelector: stickySelector = '[data-ecl-inpage-navigation-sticky]',
      inPageList: inPageList = '[data-ecl-inpage-navigation-list]',
      spySelector: spySelector = '[data-ecl-inpage-navigation-link]',
      toggleSelector: toggleSelector = '[data-ecl-inpage-navigation-trigger]',
      linksSelector: linksSelector = '[data-ecl-inpage-navigation-link]',
      spyActiveContainer: spyActiveContainer = 'ecl-inpage-navigation--visible',
      spyOffset: spyOffset = 20,
      spyClass: spyClass = 'ecl-inpage-navigation__link--is-active',
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
    this.gumshoe = gumshoe;
    // Bind `this` for use in callbacks
    this.handleClickOnToggler = this.handleClickOnToggler.bind(this);
    this.handleClickOnLink = this.handleClickOnLink.bind(this);
    this.initScrollSpy = this.initScrollSpy.bind(this);
    this.initObserver = this.initObserver.bind(this);
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

  initScrollSpy(inpageNavElement) {
    const toggleClass = this.spyActiveContainer;
    const navigationTitle = queryOne(this.spyTrigger);
    this.gumshoe.init({
      selector: this.spySelector,
      activeClass: this.spyClass,
      offset: this.spyOffset,
      callback(nav) {
        if (!nav) {
          inpageNavElement.classList.remove(toggleClass);
          navigationTitle.innerHTML = '';
        } else {
          inpageNavElement.classList.add(toggleClass);
          navigationTitle.innerHTML = nav.nav.innerHTML;
        }
      },
    });
  }

  destroyScrollSpy() {
    this.gumshoe.destroy();
  }

  initObserver() {
    const self = this;
    this.observer = new MutationObserver(function observe(mutationsList) {
      const body = queryOne('.ecl-col-md-9');
      const currentInpage = queryOne('[data-ecl-inpage-navigation-list]');
      let restart = false;

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
                element.childNodes[0].innerText = addedNode.textContent;
                element.childNodes[0].href = `#${addedNode.id}`;
                currentInpage.childNodes[addedNodeIndex - 1].after(element);
                restart = true;
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
                    restart = true;
                  }
                });
              }
            });
          }

          if (restart) {
            self.destroy();
            self.init();
            return;
          }

          self.initScrollSpy(currentInpage);
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
    this.initScrollSpy(this.element);
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

  handleClickOnToggler(e) {
    const currentList = queryOne(this.inPageList, this.element);
    const currentState = currentList.getAttribute('aria-hidden').toString();
    const togglerElement = queryOne(this.toggleSelector, this.element);

    if (currentState === 'true') {
      currentList.setAttribute('aria-hidden', 'false');
      togglerElement.setAttribute('aria-expanded', 'true');
    } else {
      currentList.setAttribute('aria-hidden', 'true');
      togglerElement.setAttribute('aria-expanded', 'false');
    }

    e.preventDefault();
  }

  handleClickOnLink() {
    const currentList = queryOne(this.inPageList, this.element);
    const togglerElement = queryOne(this.toggleSelector, this.element);

    currentList.setAttribute('aria-hidden', 'true');
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
