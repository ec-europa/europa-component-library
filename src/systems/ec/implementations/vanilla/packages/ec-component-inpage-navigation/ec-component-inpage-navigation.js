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
    const navigationTitle = document.querySelector(this.spyTrigger);

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

  // Init
  init() {
    const toggleElement = queryOne(this.toggleSelector, this.element);
    const navLinks = queryAll(this.linksSelector, this.element);

    this.initSticky(this.element);
    this.initScrollSpy(this.element);

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
    this.destroyScrollSpy();
    this.destroySticky();
  }
}

export default InpageNavigation;
