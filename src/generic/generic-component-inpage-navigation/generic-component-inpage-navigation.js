/**
 * Navigation inpage related behaviors.
 */

import Stickyfill from 'stickyfilljs';
import gumshoe from 'gumshoejs';
import { queryAll } from '@ecl/generic-base/helpers/dom';
import { toggleExpandable } from '@ecl/generic-component-expandable';

/**
 * @param {object} options Object containing configuration overrides
 */
export const navigationInpages = ({
  stickySelector: stickySelector = '.ecl-inpage-navigation',
  spySelector: spySelector = '.ecl-inpage-navigation__link',
  spyClass: spyClass = 'ecl-inpage-navigation__link--is-active',
  spyActiveContainer: spyActiveContainer = 'ecl-inpage-navigation--visible',
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
  function initSticky(element) {
    stickyInstance = new Stickyfill.Sticky(element);
  }

  function destroySticky() {
    if (stickyInstance) {
      stickyInstance.remove();
    }
  }

  function initScrollSpy(inpageNavElement) {
    gumshoe.init({
      selector: spySelector,
      activeClass: spyClass,
      offset: spyOffset,
      callback(nav) {
        const navigationTitle = document.querySelector(spyTrigger);

        if (!nav) {
          inpageNavElement.classList.remove(spyActiveContainer);
          navigationTitle.innerHTML = '';
        } else {
          inpageNavElement.classList.add(spyActiveContainer);
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
    const navLinks = queryAll(linksSelector, inpageNavElement);

    initSticky(inpageNavElement);
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
