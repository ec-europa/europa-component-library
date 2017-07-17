import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const dialogs = () => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  ) {
    return null;
  }

  // SETUP
  const triggerElements = queryAll('[data-ecl-dialog]');
  const dialogWindow = document.getElementById('ecl-dialog');
  let dialogOverlay = document.getElementById('ecl-overlay');

  // If user does not have an overlay for the background, create one.
  if (!dialogOverlay) {
    const el = document.createElement('div');
    el.setAttribute('class', 'ecl-dialog__overlay');
    el.setAttribute('id', 'ecl-overlay');
    document.body.append(el);
    dialogOverlay = el;
  }

  // EVENTS
  // Show dialog and overlay elements.
  function open() {
    dialogWindow.setAttribute('aria-hidden', false);
    dialogOverlay.setAttribute('aria-hidden', false);
  }

  // Hide dialog and overlay elements.
  function close() {
    dialogWindow.setAttribute('aria-hidden', true);
    dialogOverlay.setAttribute('aria-hidden', true);
  }

  // BIND EVENTS
  function bindDialogEvents(elements) {
    elements.forEach(element => element.addEventListener('click', open));

    // const closeButtons = document.querySelectorAll('.ecl-message__dismiss');
    queryAll('.ecl-message__dismiss').forEach(button => {
      button.addEventListener('click', close);
    });
  }

  // INIT
  function init() {
    if (triggerElements.length) {
      bindDialogEvents(triggerElements);
    }
  }

  init();

  // REVEAL API
  return {
    init,
  };
};

// module exports
export default dialogs;
