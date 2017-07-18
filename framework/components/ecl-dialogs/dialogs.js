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

  // Create an overlay element if the user does not supply one.
  if (!dialogOverlay) {
    const element = document.createElement('div');
    element.setAttribute('id', 'ecl-overlay');
    element.setAttribute('class', 'ecl-dialog__overlay');
    document.body.append(element);
    dialogOverlay = element;
  }

  // What we can focus on in the modal.
  const focusableElements = [].slice.call(
    queryAll(
      `
        a[href],
        area[href],
        input:not([disabled]),
        select:not([disabled]),
        textarea:not([disabled]),
        button:not([disabled]),
        [tabindex="0"]
      `
    )
  );
  // Use this variable to return focus on element after dialog being closed.
  let focusedElBeforeOpen = null;

  // Specific elements to take care when openning and closing the dialog.
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  // EVENTS
  // Hide dialog and overlay elements.
  function close() {
    dialogWindow.setAttribute('aria-hidden', true);
    dialogOverlay.setAttribute('aria-hidden', true);

    if (focusedElBeforeOpen) {
      focusedElBeforeOpen.focus();
    }
  }

  // Keyboard behaviors.
  function handleKeyDown(e) {
    const KEY_TAB = 9;
    const KEY_ESC = 27;

    function handleBackwardTab() {
      if (document.activeElement === firstFocusableElement) {
        e.preventDefault();
        lastFocusableElement.focus();
      }
    }

    function handleForwardTab() {
      if (document.activeElement === lastFocusableElement) {
        e.preventDefault();
        firstFocusableElement.focus();
      }
    }

    switch (e.keyCode) {
      // Keep tabbing in the scope of the dialog.
      case KEY_TAB:
        if (focusableElements.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab();
        } else {
          handleForwardTab();
        }
        break;
      case KEY_ESC:
        close();
        break;
      default:
        break;
    }
  }

  // Show dialog and overlay elements.
  function open() {
    dialogWindow.setAttribute('aria-hidden', false);
    dialogOverlay.setAttribute('aria-hidden', false);

    // This is the element to have the focus after closing the dialog.
    // Usually the element which triggered the dialog.
    focusedElBeforeOpen = document.activeElement;

    // Focus on the first element in the dialog.
    firstFocusableElement.focus();

    // Close dialog when clicked out of the dialog window.
    dialogOverlay.addEventListener('click', () => {
      close();
    });

    // Handle tabbing, esc and keyboard in the dialog window.
    dialogWindow.addEventListener('keydown', e => {
      handleKeyDown(e);
    });
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
