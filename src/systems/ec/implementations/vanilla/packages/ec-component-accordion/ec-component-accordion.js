// Heavily inspired by the accordion component from https://github.com/frend/frend.co

import { queryAll } from '@ecl/ec-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const accordions = ({
  selector: selector = '.ecl-accordion',
  headerSelector: headerSelector = '.ecl-accordion__header',
} = {}) => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // SETUP
  // set accordion element NodeLists
  const accordionContainers = queryAll(selector);

  // ACTIONS
  function hidePanel(target) {
    // get panel
    const activePanel = document.getElementById(
      target.getAttribute('aria-controls')
    );

    target.setAttribute('aria-expanded', 'false');

    // toggle aria-hidden
    activePanel.setAttribute('aria-hidden', 'true');
  }

  function showPanel(target) {
    // get panel
    const activePanel = document.getElementById(
      target.getAttribute('aria-controls')
    );

    // set attributes on header
    target.setAttribute('tabindex', 0);
    target.setAttribute('aria-expanded', 'true');

    // toggle aria-hidden and set height on panel
    activePanel.setAttribute('aria-hidden', 'false');
  }

  function togglePanel(target) {
    // close target panel if already active
    if (target.getAttribute('aria-expanded') === 'true') {
      hidePanel(target);
      return;
    }

    showPanel(target);
  }

  function giveHeaderFocus(headerSet, i) {
    // set active focus
    headerSet[i].focus();
  }

  // EVENTS
  function eventHeaderClick(e) {
    togglePanel(e.currentTarget);
  }

  function eventHeaderKeydown(e) {
    // collect header targets, and their prev/next
    const currentHeader = e.currentTarget;
    const isModifierKey = e.metaKey || e.altKey;
    // get context of accordion container and its children
    const thisContainer = currentHeader.parentNode.parentNode;
    const theseHeaders = queryAll(headerSelector, thisContainer);
    const currentHeaderIndex = [].indexOf.call(theseHeaders, currentHeader);

    // don't catch key events when ⌘ or Alt modifier is present
    if (isModifierKey) return;

    // catch enter/space, left/right and up/down arrow key events
    // if new panel show it, if next/prev move focus
    switch (e.keyCode) {
      case 13:
      case 32:
        togglePanel(currentHeader);
        e.preventDefault();
        break;
      case 37:
      case 38: {
        const previousHeaderIndex =
          currentHeaderIndex === 0
            ? theseHeaders.length - 1
            : currentHeaderIndex - 1;
        giveHeaderFocus(theseHeaders, previousHeaderIndex);
        e.preventDefault();
        break;
      }
      case 39:
      case 40: {
        const nextHeaderIndex =
          currentHeaderIndex < theseHeaders.length - 1
            ? currentHeaderIndex + 1
            : 0;
        giveHeaderFocus(theseHeaders, nextHeaderIndex);
        e.preventDefault();
        break;
      }
      default:
        break;
    }
  }

  // BIND EVENTS
  function bindAccordionEvents(accordionContainer) {
    const accordionHeaders = queryAll(headerSelector, accordionContainer);
    // bind all accordion header click and keydown events
    accordionHeaders.forEach(accordionHeader => {
      accordionHeader.addEventListener('click', eventHeaderClick);
      accordionHeader.addEventListener('keydown', eventHeaderKeydown);
    });
  }

  // UNBIND EVENTS
  function unbindAccordionEvents(accordionContainer) {
    const accordionHeaders = queryAll(headerSelector, accordionContainer);
    // unbind all accordion header click and keydown events
    accordionHeaders.forEach(accordionHeader => {
      accordionHeader.removeEventListener('click', eventHeaderClick);
      accordionHeader.removeEventListener('keydown', eventHeaderKeydown);
    });
  }

  // DESTROY
  function destroy() {
    accordionContainers.forEach(accordionContainer => {
      unbindAccordionEvents(accordionContainer);
    });
  }

  // INIT
  function init() {
    if (accordionContainers.length >= 0) {
      accordionContainers.forEach(accordionContainer => {
        bindAccordionEvents(accordionContainer);
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
export default accordions;
