// Polyfill matches as per https://github.com/jonathantneal/closest
Element.prototype.matches =
  Element.prototype.matches ||
  Element.prototype.mozMatchesSelector ||
  Element.prototype.msMatchesSelector ||
  Element.prototype.oMatchesSelector ||
  Element.prototype.webkitMatchesSelector;

// UTILS

// Closest selector
function closest(el, selector) {
  while (el) {
    if (el.matches(selector)) break;
    el = el.parentElement;
  }
  return el;
}

// Query helper
const q = (el, ctx = document) => [].slice.call(ctx.querySelectorAll(el));

/**
 * @param {object} options Object containing configuration overrides
 */
export const tabs = (
  {
    selector: selector = '.ecl-tabs',
    tablistSelector: tablistSelector = '.ecl-tabs__tablist',
    tabpanelSelector: tabpanelSelector = '.ecl-tabs__tabpanel',
  } = {}
) => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // SETUP
  // set tab element NodeList
  const tabContainers = q(selector);

  // ACTIONS
  function showTab(target, giveFocus = true) {
    // get context of tab container
    const thisContainer = closest(target, selector);
    const siblingTabs = q(`${tablistSelector} li`, thisContainer);
    const siblingTabpanels = q(tabpanelSelector, thisContainer);

    // set inactives
    siblingTabs.forEach(tab => {
      tab.setAttribute('tabindex', -1);
      tab.removeAttribute('aria-selected');
    });
    siblingTabpanels.forEach(tabpanel => {
      tabpanel.setAttribute('aria-hidden', 'true');
    });

    // set actives and focus
    target.setAttribute('tabindex', 0);
    target.setAttribute('aria-selected', 'true');
    if (giveFocus) target.focus();
    document
      .getElementById(target.getAttribute('aria-controls'))
      .removeAttribute('aria-hidden');
  }

  // EVENTS
  function eventTabClick(e) {
    showTab(e.currentTarget);
    e.preventDefault(); // look into remove id/settimeout/reinstate id as an alternative to preventDefault
  }

  function eventTabKeydown(e) {
    // collect tab targets, and their parents' prev/next (or first/last)
    const currentTab = e.currentTarget;
    const tablist = closest(currentTab, tablistSelector);
    const previousTabItem =
      currentTab.parentNode.previousElementSibling || tablist.lastElementChild;
    const nextTabItem =
      currentTab.parentNode.nextElementSibling || tablist.firstElementChild;

    // don't catch key events when ⌘ or Alt modifier is present
    if (e.metaKey || e.altKey) return;

    // catch left/right and up/down arrow key events
    // if new next/prev tab available, show it by passing tab anchor to showTab method
    switch (e.keyCode) {
      case 37:
      case 38:
        showTab(q('[role="tab"]', previousTabItem)[0]);
        e.preventDefault();
        break;
      case 39:
      case 40:
        showTab(q('[role="tab"]', nextTabItem)[0]);
        e.preventDefault();
        break;
      default:
        break;
    }
  }

  // BINDINGS
  function bindTabsEvents(tabContainer) {
    const tabsElements = q(`${tablistSelector} li`, tabContainer);
    // bind all tab click and keydown events
    tabsElements.forEach(tab => {
      tab.addEventListener('click', eventTabClick);
      tab.addEventListener('keydown', eventTabKeydown);
    });
  }

  function unbindTabsEvents(tabContainer) {
    const tabsElements = q(`${tablistSelector} li`, tabContainer);
    // unbind all tab click and keydown events
    tabsElements.forEach(tab => {
      tab.removeEventListener('click', eventTabClick);
      tab.removeEventListener('keydown', eventTabKeydown);
    });
  }

  // DESTROY
  function destroy() {
    tabContainers.forEach(tabContainer => {
      unbindTabsEvents(tabContainer);
    });
  }

  // INIT
  function init() {
    if (tabContainers.length) {
      tabContainers.forEach(tabContainer => {
        bindTabsEvents(tabContainer);
        // set all first tabs active on init
        showTab(q(`${tablistSelector} li`, tabContainer)[0], false);
      });
    }
  }

  init();

  // REVEAL API
  return {
    init,
    destroy,
  };
};

// module exports
export default tabs;
