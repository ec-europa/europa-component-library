// Heavily inspired by the tab component from https://github.com/frend/frend.co

import { queryAll } from '@ecl/eu-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const tabs = ({
  selector: selector = '.ecl-tabs',
  tablistSelector: tablistSelector = '.ecl-tabs__tablist',
  tabpanelSelector: tabpanelSelector = '.ecl-tabs__tabpanel',
  tabelementsSelector: tabelementsSelector = `${tablistSelector} li`,
} = {}) => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // SETUP
  // set tab element NodeList
  const tabContainers = queryAll(selector);

  // ACTIONS
  function showTab(target, giveFocus = true) {
    const siblingTabs = queryAll(
      `${tablistSelector} li`,
      target.parentElement.parentElement
    );
    const siblingTabpanels = queryAll(
      tabpanelSelector,
      target.parentElement.parentElement
    );

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
    const previousTabItem =
      currentTab.previousElementSibling ||
      currentTab.parentElement.lastElementChild;
    const nextTabItem =
      currentTab.nextElementSibling ||
      currentTab.parentElement.firstElementChild;

    // don't catch key events when ⌘ or Alt modifier is present
    if (e.metaKey || e.altKey) return;

    // catch left/right and up/down arrow key events
    // if new next/prev tab available, show it by passing tab anchor to showTab method
    switch (e.keyCode) {
      case 37:
      case 38:
        showTab(previousTabItem);
        e.preventDefault();
        break;
      case 39:
      case 40:
        showTab(nextTabItem);
        e.preventDefault();
        break;
      default:
        break;
    }
  }

  // BINDINGS
  function bindTabsEvents(tabContainer) {
    const tabsElements = queryAll(tabelementsSelector, tabContainer);
    // bind all tab click and keydown events
    tabsElements.forEach(tab => {
      tab.addEventListener('click', eventTabClick);
      tab.addEventListener('keydown', eventTabKeydown);
    });
  }

  function unbindTabsEvents(tabContainer) {
    const tabsElements = queryAll(tabelementsSelector, tabContainer);
    // unbind all tab click and keydown events
    tabsElements.forEach(tab => {
      tab.removeEventListener('click', eventTabClick);
      tab.removeEventListener('keydown', eventTabKeydown);
    });
  }

  // DESTROY
  function destroy() {
    tabContainers.forEach(unbindTabsEvents);
  }

  // INIT
  function init() {
    tabContainers.forEach(bindTabsEvents);
  }

  // Automatically init
  init();

  // REVEAL API
  return {
    init,
    destroy,
  };
};

// module exports
export default tabs;
