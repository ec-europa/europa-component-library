/**
 * Navigation inpage related behaviors.
 */

import stickybits from 'stickybits';
import gumshoe from 'gumshoejs';

/**
 * @param {object} options Object containing configuration overrides
 */
export const navigationInpages = ({
  stickySelector: stickySelector = '.ecl-inpage-navigation',
  spySelector: spySelector = '.ecl-inpage-navigation__link',
  spyClass: spyClass = 'ecl-inpage-navigation__link--is-active',
  spyTrigger: spyTrigger = '.ecl-inpage-navigation__trigger',
  spyOffset: spyOffset = 20,
} = {}) => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // ACTIONS
  function initSticky() {
    // init sticky menu
    stickybits(stickySelector, {
      useStickyClasses: true,
      parentClass: 'ecl-inpage-navigation__parent',
      stickyClass: 'ecl-inpage-navigation--sticky',
      stuckClass: 'ecl-inpage-navigation--stuck',
    });
  }

  function initScrollSpy() {
    // init scrollspy
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

  // INIT
  function init() {
    initSticky();
    initScrollSpy();
  }

  init();

  // REVEAL API
  return {
    init,
  };
};

// module exports
export default navigationInpages;
