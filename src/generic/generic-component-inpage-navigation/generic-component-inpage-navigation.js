/**
 * Navigation inpage related behaviors.
 */

import gumshoe from 'gumshoejs';
import { toggleExpandable } from '@ecl/generic-component-expandable';

/**
 * @param {object} options Object containing configuration overrides
 */
export const navigationInpages = ({
  stickySelector: stickySelector = '.ecl-inpage-navigation',
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

  // ACTIONS

  function initScrollSpy(inpageNavElement) {
    gumshoe.init({
      selector: spySelector,
      activeClass: spyClass,
      offset: spyOffset,
      callback(nav) {
        const navigationTitle = document.querySelector(spyTrigger);

        if (!nav) {
          inpageNavElement.classList.remove('ecl-inpage-navigation--visible');
          navigationTitle.innerHTML = '';
        } else {
          inpageNavElement.classList.add('ecl-inpage-navigation--visible');
          navigationTitle.innerHTML = nav.nav.innerHTML;
        }
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

    // initSticky();
    initScrollSpy(inpageNavElement);

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
  }

  init();

  // REVEAL API
  return {
    init,
    destroy,
  };
};

export default navigationInpages;
