/**
 * Side navigation related behaviors.
 */

import stickybits from 'stickybits';

/**
 * @param {object} options Object containing configuration overrides
 */
export const navigationSide = ({
  stickySelector: stickySelector = '.ecl-side-navigation__toggle',
  activeSelector: activeSelector = '.ecl-side-navigation__link--active',
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
    const toggle = document.getElementsByClassName(
      stickySelector.substring(1)
    )[0];

    if (toggle) {
      toggle.addEventListener('click', e => {
        if (e.target.getAttribute('aria-expanded') === 'false') {
          e.target.scrollIntoView();
        }
      });
    }
  }

  function unfoldToActive() {
    const active = document.getElementsByClassName(
      activeSelector.substring(1)
    )[0];

    // Browse parents
    if (active) {
      let node = active;
      const els = [];
      while (node) {
        els.unshift(node);
        node = node.parentNode;

        // Check if parent is an expandable menu item
        if (node.matches('.ecl-side-navigation__group')) {
          const link = node.previousElementSibling;
          if (link.matches('.ecl-side-navigation__link')) {
            link.setAttribute('aria-expanded', 'true');
          }
        }

        // No need to check outside of menu
        if (node.matches('.ecl-side-navigation')) {
          break;
        }
      }
    }
  }

  // INIT
  function init() {
    initSticky();
    scrollToTop();
    unfoldToActive();
  }

  init();

  // REVEAL API
  return {
    init,
  };
};

// module exports
export default navigationSide;
