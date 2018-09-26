/**
 * File uploads related behaviors.
 */

import { queryAll } from '@ecl/ec-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const fileUploads = ({
  selector: selector = '.ecl-file-upload',
  inputSelector: inputSelector = '.ecl-file-upload__input',
  valueSelector: valueSelector = '.ecl-file-upload__value',
  browseSelector: browseSelector = '.ecl-file-upload__browse',
} = {}) => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // SETUP
  // set file upload element NodeLists
  const fileUploadContainers = queryAll(selector);

  // ACTIONS
  function updateFileName(element, files) {
    if (files.length === 0) return;

    let filename = '';

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      if ('name' in file) {
        if (i > 0) {
          filename += ', ';
        }
        filename += file.name;
      }
    }

    // Show the selected filename in the field.
    const messageElement = element;
    messageElement.innerHTML = filename;
  }

  // EVENTS
  function eventValueChange(e) {
    if ('files' in e.target) {
      const fileUploadElements = queryAll(valueSelector, e.target.parentNode);

      fileUploadElements.forEach(fileUploadElement => {
        updateFileName(fileUploadElement, e.target.files);
      });
    }
  }

  function eventBrowseKeydown(e) {
    // collect header targets, and their prev/next
    const isModifierKey = e.metaKey || e.altKey;

    const inputElements = queryAll(inputSelector, e.target.parentNode);

    inputElements.forEach(inputElement => {
      // don't catch key events when ⌘ or Alt modifier is present
      if (isModifierKey) return;

      // catch enter/space, left/right and up/down arrow key events
      // if new panel show it, if next/prev move focus
      switch (e.keyCode) {
        case 13:
        case 32:
          e.preventDefault();
          inputElement.click();
          break;
        default:
          break;
      }
    });
  }

  // BIND EVENTS
  function bindFileUploadEvents(fileUploadContainer) {
    // bind all file upload change events
    const fileUploadInputs = queryAll(inputSelector, fileUploadContainer);
    fileUploadInputs.forEach(fileUploadInput => {
      fileUploadInput.addEventListener('change', eventValueChange);
    });

    // bind all file upload keydown events
    const fileUploadBrowses = queryAll(browseSelector, fileUploadContainer);
    fileUploadBrowses.forEach(fileUploadBrowse => {
      fileUploadBrowse.addEventListener('keydown', eventBrowseKeydown);
    });
  }

  // UNBIND EVENTS
  function unbindFileUploadEvents(fileUploadContainer) {
    const fileUploadInputs = queryAll(inputSelector, fileUploadContainer);
    // unbind all file upload change events
    fileUploadInputs.forEach(fileUploadInput => {
      fileUploadInput.removeEventListener('change', eventValueChange);
    });

    const fileUploadBrowses = queryAll(browseSelector, fileUploadContainer);
    // bind all file upload keydown events
    fileUploadBrowses.forEach(fileUploadBrowse => {
      fileUploadBrowse.removeEventListener('keydown', eventBrowseKeydown);
    });
  }

  // DESTROY
  function destroy() {
    fileUploadContainers.forEach(fileUploadContainer => {
      unbindFileUploadEvents(fileUploadContainer);
    });
  }

  // INIT
  function init() {
    if (fileUploadContainers.length >= 0) {
      fileUploadContainers.forEach(fileUploadContainer => {
        bindFileUploadEvents(fileUploadContainer);
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
export default fileUploads;
