/**
 * Navigation inpage related behaviors.
 */

import stickybits from 'stickybits';
import gumshoe from 'gumshoejs';
import { toggleExpandable } from '@ecl/generic-component-expandable';

/**
 * @param {object} options Object containing configuration overrides
 */
export const navigationInpages = ({
  stickySelector: stickySelector = '.ecl-inpage-navigation',
  stickyOffset: stickyOffset = 0,
  spySelector: spySelector = '.ecl-inpage-navigation__link',
  spyClass: spyClass = 'ecl-inpage-navigation__link--is-active',
  spyTrigger: spyTrigger = '.ecl-inpage-navigation__trigger',
  spyOffset: spyOffset = 20,
  toggleSelector: toggleSelector = '.ecl-inpage-navigation__trigger',
  linksSelector: linksSelector = '.ecl-inpage-navigation__link',
} = {}) => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  let stickyInstance;

  // ACTIONS
  function initSticky() {
    stickyInstance = stickybits(stickySelector, {
      stickyBitStickyOffset: stickyOffset,
      useStickyClasses: true,
      parentClass: 'ecl-inpage-navigation__parent',
      stickyClass: 'ecl-inpage-navigation--sticky',
      stuckClass: 'ecl-inpage-navigation--stuck',
      stickyChangeClass: 'ecl-inpage-navigation--changed',
    });
  }

  function destroySticky() {
    if (stickyInstance) {
      stickyInstance.cleanup();
    }
  }

  function initScrollSpy() {
    gumshoe.init({
      selector: spySelector,
      activeClass: spyClass,
      offset: spyOffset,
      callback(nav) {
        if (!nav) return;
        const navigationTitle = document.querySelector(spyTrigger);
        navigationTitle.innerHTML = nav.nav.innerHTML;
      },
    });
  }

  function destroyScrollSpy() {
    gumshoe.destroy();
  }

  // Init
  function init() {
    const inpageNavElement = document.querySelector(stickySelector);
    const toggleElement = inpageNavElement.querySelector(toggleSelector);
    const navLinks = inpageNavElement.querySelectorAll(linksSelector);

    initSticky();
    initScrollSpy();

    toggleElement.addEventListener('click', e => {
      toggleExpandable(toggleElement, { context: inpageNavElement });
      e.preventDefault();
    });

    navLinks.forEach(link =>
      link.addEventListener('click', () => {
        toggleExpandable(toggleElement, {
          context: inpageNavElement,
          forceClose: true,
        });
      })
    );
  }

  // Destroy
  function destroy() {
    destroyScrollSpy();
    destroySticky();
  }

  init();

  // REVEAL API
  return {
    init,
    destroy,
  };
};

export default navigationInpages;
