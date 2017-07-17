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

  // What we can focus on in the modal.
  const focusableElements = [].slice.call(
    queryAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
    )
  );
  // Cache focused element before opening.
  let focusedElBeforeOpen = document.activeElement;

  // Specific elements to take care when openning and closing the dialog.
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

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

    focusedElBeforeOpen = document.activeElement;
    // Focus on the first element in the dialog.
    firstFocusableElement.focus();
  }

  // Hide dialog and overlay elements.
  function close() {
    dialogWindow.setAttribute('aria-hidden', true);
    dialogOverlay.setAttribute('aria-hidden', true);

    if (focusedElBeforeOpen) {
      focusedElBeforeOpen.focus();
    }
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
