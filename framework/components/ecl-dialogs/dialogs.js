import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const dialogs = (
  {
    selector: selector = '.ecl-dialog',
    overlay: overlay = '.ecl-dialog__overlay',
  } = {}
) => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  ) {
    return null;
  }

  // SETUP
  // set dialog element NodeLists
  const dialogContainers = queryAll(selector);

  // ACTIONS

  // EVENTS
  function open() {
    const Dialog = this;

    this.dialogEl.removeAttribute('aria-hidden');
    this.overlayEl.removeAttribute('aria-hidden');

    this.focusedElBeforeOpen = document.activeElement;

    this.dialogEl.addEventListener('keydown', e => {
      Dialog._handleKeyDown(e);
    });

    this.overlayEl.addEventListener('click', () => {
      Dialog.close();
    });

    this.firstFocusableEl.focus();
  }

  function close() {
    this.dialogEl.setAttribute('aria-hidden', true);
    this.overlayEl.setAttribute('aria-hidden', true);

    if (this.focusedElBeforeOpen) {
      this.focusedElBeforeOpen.focus();
    }
  }

  function handleKeyDown() {}

  // BIND EVENTS
  function bindDialogEvents(dialogContainer) {}

  // UNBIND EVENTS
  function unbindDialogEvents(dialogContainer) {}

  // DESTROY
  function destroy() {
    dialogContainers.forEach(dialogContainer => {
      unbindDialogEvents(dialogContainer);
    });
  }

  // INIT
  function init() {
    if (dialogContainers.length) {
      dialogContainers.forEach(dialogContainer => {
        bindDialogEvents(dialogContainer);
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
export default dialogs;
