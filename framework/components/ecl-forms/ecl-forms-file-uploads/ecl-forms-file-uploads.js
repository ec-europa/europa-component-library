/**
 * File uploads related behaviors.
 */

import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const fileUploads = (
  {
    selector: selector = '.ecl-file-upload',
    inputSelector: inputSelector = '.ecl-file-upload__input',
    valueSelector: valueSelector = '.ecl-file-upload__value',
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
  // set file upload element NodeLists
  const fileUploadContainers = queryAll(selector);

  // ACTIONS
  function updateFileName(element, value) {
    // The value comes in the form of C:\something\fileName.
    const filename = value.split('\\').pop();

    // Show the selected filename in the field.
    const messageElement = element;
    messageElement.innerHTML = filename;
  }

  // EVENTS
  function eventValueChange(e) {
    const fileUploadElements = queryAll(
      valueSelector,
      e.target.fileUploadContainer
    );
    fileUploadElements.forEach(fileUploadElement => {
      updateFileName(fileUploadElement, e.target.value);
    });
  }

  // BIND EVENTS
  function bindFileUploadEvents(fileUploadContainer) {
    const fileUploadInputs = queryAll(inputSelector, fileUploadContainer);
    // bind all file upload change events
    fileUploadInputs.forEach(fileUploadInput => {
      const input = fileUploadInput;
      input.addEventListener('change', eventValueChange);
      input.container = fileUploadContainer;
    });
  }

  // UNBIND EVENTS
  function unbindFileUploadEvents(fileUploadContainer) {
    const fileUploadInputs = queryAll(inputSelector, fileUploadContainer);
    // unbind all file upload change events
    fileUploadInputs.forEach(fileUploadInput => {
      fileUploadInput.removeEventListener('change', eventValueChange);
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
    if (fileUploadContainers.length) {
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
