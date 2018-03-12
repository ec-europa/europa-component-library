/**
 * Side navigation related behaviors.
 */

import stickybits from 'stickybits';

/**
 * @param {object} options Object containing configuration overrides
 */
export const navigationSide = ({
  stickySelector: stickySelector = '.ecl-navigation-side__toggle',
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
    // eslint-disable-next-line no-undef
    stickybits(stickySelector, { useStickyClasses: true });
  }

  function scrollToTop() {
    document
      .getElementsByClassName(stickySelector.substring(1))[0]
      .addEventListener('click', e => {
        if (e.target.getAttribute('aria-expanded') === 'false') {
          e.target.scrollIntoView();
        }
      });
  }

  // INIT
  function init() {
    initSticky();
    scrollToTop();
  }

  init();

  // REVEAL API
  return {
    init,
  };
};

// module exports
export default navigationSide;
