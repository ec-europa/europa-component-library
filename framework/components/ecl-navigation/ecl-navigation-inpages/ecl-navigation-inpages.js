/**
 * Navigation inpage related behaviors.
 */

/**
 * @param {object} options Object containing configuration overrides
 */
export const navigationInpages = (
  {
    stickySelector: stickySelector = '.ecl-navigation-inpage',
    spySelector: spySelector = '.ecl-navigation-inpage__link',
    spyClass: spyClass = 'ecl-navigation-inpage__link--is-active',
    spyTrigger: spyTrigger = '.ecl-navigation-inpage__trigger',
    spyOffset: spyOffset = 20,
  } = {}
) => {
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

  function initScrollSpy() {
    // init scrollspy
    // eslint-disable-next-line no-undef
    gumshoe.init({
      selector: spySelector,
      activeClass: spyClass,
      offset: spyOffset,
      callback(nav) {
        // eslint-disable-line
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
