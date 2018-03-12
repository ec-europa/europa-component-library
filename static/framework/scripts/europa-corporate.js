var ECL = (function(exports) {
  'use strict';

  // Query helper
  var queryAll = function queryAll(selector) {
    var context =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : document;
    return [].slice.call(context.querySelectorAll(selector));
  };

  /**
   * @param {object} options Object containing configuration overrides
   *
   * Available options:
   * - options.triggerElementsSelector - any selector to which event listeners
   * are attached. When clicked on any element with such a selector, a dialog opens.
   *
   * - options.dialogWindowId - id of target dialog window. Defaults to `ecl-dialog`.
   *
   * - options.dialogOverlayId - id of target dialog window. Defaults to `ecl-overlay`.
   * Overlay element is created in the document if not provided by the user.
   */
  var dialogs = function dialogs() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$triggerElementsS = _ref.triggerElementsSelector,
      triggerElementsSelector =
        _ref$triggerElementsS === undefined
          ? '[data-ecl-dialog]'
          : _ref$triggerElementsS,
      _ref$dialogWindowId = _ref.dialogWindowId,
      dialogWindowId =
        _ref$dialogWindowId === undefined ? 'ecl-dialog' : _ref$dialogWindowId,
      _ref$dialogOverlayId = _ref.dialogOverlayId,
      dialogOverlayId =
        _ref$dialogOverlayId === undefined
          ? 'ecl-overlay'
          : _ref$dialogOverlayId;

    // SUPPORTS
    if (!('querySelector' in document) || !('addEventListener' in window)) {
      return null;
    }

    // SETUP
    var triggerElements = queryAll(triggerElementsSelector);
    var dialogWindow = document.getElementById(dialogWindowId);
    var dialogOverlay = document.getElementById(dialogOverlayId);

    // Create an overlay element if the user does not supply one.
    if (!dialogOverlay) {
      var element = document.createElement('div');
      element.setAttribute('id', 'ecl-overlay');
      element.setAttribute('class', 'ecl-dialog__overlay');
      element.setAttribute('aria-hidden', 'true');
      document.body.appendChild(element);
      dialogOverlay = element;
    }

    // What we can focus on in the modal.
    var focusableElements = [].slice.call(
      queryAll(
        '\n        a[href],\n        area[href],\n        input:not([disabled]),\n        select:not([disabled]),\n        textarea:not([disabled]),\n        button:not([disabled]),\n        [tabindex="0"]\n      ',
        dialogWindow
      )
    );

    // Use this variable to return focus on element after dialog being closed.
    var focusedElBeforeOpen = null;

    // Specific elements to take care when openning and closing the dialog.
    var firstFocusableElement = focusableElements[0];
    var lastFocusableElement = focusableElements[focusableElements.length - 1];

    // EVENTS
    // Hide dialog and overlay elements.
    function close(event) {
      event.preventDefault();
      dialogWindow.setAttribute('aria-hidden', true);
      dialogOverlay.setAttribute('aria-hidden', true);

      if (focusedElBeforeOpen) {
        focusedElBeforeOpen.focus();
      }

      document.querySelector('body').classList.remove('ecl-u-disablescroll');
    }

    // Keyboard behaviors.
    function handleKeyDown(e) {
      var KEY_TAB = 9;
      var KEY_ESC = 27;

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
    function open(event) {
      event.preventDefault();
      dialogWindow.setAttribute('aria-hidden', false);
      dialogOverlay.setAttribute('aria-hidden', false);

      // This is the element to have the focus after closing the dialog.
      // Usually the element which triggered the dialog.
      focusedElBeforeOpen = document.activeElement;

      // Focus on the first element in the dialog.
      firstFocusableElement.focus();

      // Close dialog when clicked out of the dialog window.
      dialogOverlay.addEventListener('click', close);

      // Handle tabbing, esc and keyboard in the dialog window.
      dialogWindow.addEventListener('keydown', handleKeyDown);

      document.querySelector('body').classList.add('ecl-u-disablescroll');
    }

    // BIND EVENTS
    function bindDialogEvents(elements) {
      elements.forEach(function(element) {
        return element.addEventListener('click', open);
      });

      // const closeButtons = document.querySelectorAll('.ecl-message__dismiss');
      queryAll('.ecl-message__dismiss').forEach(function(button) {
        button.addEventListener('click', close);
      });
    }

    // UNBIND EVENTS
    function unbindDialogEvents(elements) {
      elements.forEach(function(element) {
        return element.removeEventListener('click', open);
      });

      // const closeButtons = document.querySelectorAll('.ecl-message__dismiss');
      queryAll('.ecl-message__dismiss').forEach(function(button) {
        button.removeEventListener('click', close);
      });
    }

    // DESTROY
    function destroy() {
      unbindDialogEvents(triggerElements);
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
      init: init,
      destroy: destroy,
    };
  };

  // Export components

  exports.dialogs = dialogs;

  return exports;
})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXVyb3BhLWNvcnBvcmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJhbWV3b3JrL2Jhc2UvaGVscGVycy9kb20uanMiLCIuLi8uLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50cy9lY2wtZGlhbG9ncy9kaWFsb2dzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvcHJlc2V0cy9lY2wtcHJlc2V0LWNvcnBvcmF0ZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBRdWVyeSBoZWxwZXJcbmV4cG9ydCBjb25zdCBxdWVyeUFsbCA9IChzZWxlY3RvciwgY29udGV4dCA9IGRvY3VtZW50KSA9PlxuICBbXS5zbGljZS5jYWxsKGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUFsbDtcbiIsImltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjLWV1cm9wYS9lY2wtYmFzZS9oZWxwZXJzL2RvbSc7XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT2JqZWN0IGNvbnRhaW5pbmcgY29uZmlndXJhdGlvbiBvdmVycmlkZXNcbiAqXG4gKiBBdmFpbGFibGUgb3B0aW9uczpcbiAqIC0gb3B0aW9ucy50cmlnZ2VyRWxlbWVudHNTZWxlY3RvciAtIGFueSBzZWxlY3RvciB0byB3aGljaCBldmVudCBsaXN0ZW5lcnNcbiAqIGFyZSBhdHRhY2hlZC4gV2hlbiBjbGlja2VkIG9uIGFueSBlbGVtZW50IHdpdGggc3VjaCBhIHNlbGVjdG9yLCBhIGRpYWxvZyBvcGVucy5cbiAqXG4gKiAtIG9wdGlvbnMuZGlhbG9nV2luZG93SWQgLSBpZCBvZiB0YXJnZXQgZGlhbG9nIHdpbmRvdy4gRGVmYXVsdHMgdG8gYGVjbC1kaWFsb2dgLlxuICpcbiAqIC0gb3B0aW9ucy5kaWFsb2dPdmVybGF5SWQgLSBpZCBvZiB0YXJnZXQgZGlhbG9nIHdpbmRvdy4gRGVmYXVsdHMgdG8gYGVjbC1vdmVybGF5YC5cbiAqIE92ZXJsYXkgZWxlbWVudCBpcyBjcmVhdGVkIGluIHRoZSBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQgYnkgdGhlIHVzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWFsb2dzID0gKHtcbiAgdHJpZ2dlckVsZW1lbnRzU2VsZWN0b3I6IHRyaWdnZXJFbGVtZW50c1NlbGVjdG9yID0gJ1tkYXRhLWVjbC1kaWFsb2ddJyxcbiAgZGlhbG9nV2luZG93SWQ6IGRpYWxvZ1dpbmRvd0lkID0gJ2VjbC1kaWFsb2cnLFxuICBkaWFsb2dPdmVybGF5SWQ6IGRpYWxvZ092ZXJsYXlJZCA9ICdlY2wtb3ZlcmxheScsXG59ID0ge30pID0+IHtcbiAgLy8gU1VQUE9SVFNcbiAgaWYgKCEoJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50KSB8fCAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBTRVRVUFxuICBjb25zdCB0cmlnZ2VyRWxlbWVudHMgPSBxdWVyeUFsbCh0cmlnZ2VyRWxlbWVudHNTZWxlY3Rvcik7XG4gIGNvbnN0IGRpYWxvZ1dpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpYWxvZ1dpbmRvd0lkKTtcbiAgbGV0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWFsb2dPdmVybGF5SWQpO1xuXG4gIC8vIENyZWF0ZSBhbiBvdmVybGF5IGVsZW1lbnQgaWYgdGhlIHVzZXIgZG9lcyBub3Qgc3VwcGx5IG9uZS5cbiAgaWYgKCFkaWFsb2dPdmVybGF5KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdlY2wtb3ZlcmxheScpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlY2wtZGlhbG9nX19vdmVybGF5Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGRpYWxvZ092ZXJsYXkgPSBlbGVtZW50O1xuICB9XG5cbiAgLy8gV2hhdCB3ZSBjYW4gZm9jdXMgb24gaW4gdGhlIG1vZGFsLlxuICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoXG4gICAgcXVlcnlBbGwoXG4gICAgICBgXG4gICAgICAgIGFbaHJlZl0sXG4gICAgICAgIGFyZWFbaHJlZl0sXG4gICAgICAgIGlucHV0Om5vdChbZGlzYWJsZWRdKSxcbiAgICAgICAgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSxcbiAgICAgICAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxuICAgICAgICBidXR0b246bm90KFtkaXNhYmxlZF0pLFxuICAgICAgICBbdGFiaW5kZXg9XCIwXCJdXG4gICAgICBgLFxuICAgICAgZGlhbG9nV2luZG93XG4gICAgKVxuICApO1xuXG4gIC8vIFVzZSB0aGlzIHZhcmlhYmxlIHRvIHJldHVybiBmb2N1cyBvbiBlbGVtZW50IGFmdGVyIGRpYWxvZyBiZWluZyBjbG9zZWQuXG4gIGxldCBmb2N1c2VkRWxCZWZvcmVPcGVuID0gbnVsbDtcblxuICAvLyBTcGVjaWZpYyBlbGVtZW50cyB0byB0YWtlIGNhcmUgd2hlbiBvcGVubmluZyBhbmQgY2xvc2luZyB0aGUgZGlhbG9nLlxuICBjb25zdCBmaXJzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcbiAgY29uc3QgbGFzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAvLyBFVkVOVFNcbiAgLy8gSGlkZSBkaWFsb2cgYW5kIG92ZXJsYXkgZWxlbWVudHMuXG4gIGZ1bmN0aW9uIGNsb3NlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaWFsb2dXaW5kb3cuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgIGRpYWxvZ092ZXJsYXkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gICAgaWYgKGZvY3VzZWRFbEJlZm9yZU9wZW4pIHtcbiAgICAgIGZvY3VzZWRFbEJlZm9yZU9wZW4uZm9jdXMoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnZWNsLXUtZGlzYWJsZXNjcm9sbCcpO1xuICB9XG5cbiAgLy8gS2V5Ym9hcmQgYmVoYXZpb3JzLlxuICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICBjb25zdCBLRVlfVEFCID0gOTtcbiAgICBjb25zdCBLRVlfRVNDID0gMjc7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVCYWNrd2FyZFRhYigpIHtcbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcndhcmRUYWIoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgLy8gS2VlcCB0YWJiaW5nIGluIHRoZSBzY29wZSBvZiB0aGUgZGlhbG9nLlxuICAgICAgY2FzZSBLRVlfVEFCOlxuICAgICAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgaGFuZGxlQmFja3dhcmRUYWIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGVGb3J3YXJkVGFiKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWV9FU0M6XG4gICAgICAgIGNsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gU2hvdyBkaWFsb2cgYW5kIG92ZXJsYXkgZWxlbWVudHMuXG4gIGZ1bmN0aW9uIG9wZW4oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpYWxvZ1dpbmRvdy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgIGRpYWxvZ092ZXJsYXkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcblxuICAgIC8vIFRoaXMgaXMgdGhlIGVsZW1lbnQgdG8gaGF2ZSB0aGUgZm9jdXMgYWZ0ZXIgY2xvc2luZyB0aGUgZGlhbG9nLlxuICAgIC8vIFVzdWFsbHkgdGhlIGVsZW1lbnQgd2hpY2ggdHJpZ2dlcmVkIHRoZSBkaWFsb2cuXG4gICAgZm9jdXNlZEVsQmVmb3JlT3BlbiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBGb2N1cyBvbiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgZGlhbG9nLlxuICAgIGZpcnN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuXG4gICAgLy8gQ2xvc2UgZGlhbG9nIHdoZW4gY2xpY2tlZCBvdXQgb2YgdGhlIGRpYWxvZyB3aW5kb3cuXG4gICAgZGlhbG9nT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcblxuICAgIC8vIEhhbmRsZSB0YWJiaW5nLCBlc2MgYW5kIGtleWJvYXJkIGluIHRoZSBkaWFsb2cgd2luZG93LlxuICAgIGRpYWxvZ1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnZWNsLXUtZGlzYWJsZXNjcm9sbCcpO1xuICB9XG5cbiAgLy8gQklORCBFVkVOVFNcbiAgZnVuY3Rpb24gYmluZERpYWxvZ0V2ZW50cyhlbGVtZW50cykge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbikpO1xuXG4gICAgLy8gY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVjbC1tZXNzYWdlX19kaXNtaXNzJyk7XG4gICAgcXVlcnlBbGwoJy5lY2wtbWVzc2FnZV9fZGlzbWlzcycpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVOQklORCBFVkVOVFNcbiAgZnVuY3Rpb24gdW5iaW5kRGlhbG9nRXZlbnRzKGVsZW1lbnRzKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuKSk7XG5cbiAgICAvLyBjb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWNsLW1lc3NhZ2VfX2Rpc21pc3MnKTtcbiAgICBxdWVyeUFsbCgnLmVjbC1tZXNzYWdlX19kaXNtaXNzJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gREVTVFJPWVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHVuYmluZERpYWxvZ0V2ZW50cyh0cmlnZ2VyRWxlbWVudHMpO1xuICB9XG5cbiAgLy8gSU5JVFxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICh0cmlnZ2VyRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBiaW5kRGlhbG9nRXZlbnRzKHRyaWdnZXJFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpO1xuXG4gIC8vIFJFVkVBTCBBUElcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGRlc3Ryb3ksXG4gIH07XG59O1xuXG4vLyBtb2R1bGUgZXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgZGlhbG9ncztcbiIsIi8vIEV4cG9ydCBjb21wb25lbnRzXG5cbmV4cG9ydCAqIGZyb20gJ0BlYy1ldXJvcGEvZWNsLWRpYWxvZ3MnO1xuIl0sIm5hbWVzIjpbInF1ZXJ5QWxsIiwic2VsZWN0b3IiLCJjb250ZXh0IiwiZG9jdW1lbnQiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlhbG9ncyIsInRyaWdnZXJFbGVtZW50c1NlbGVjdG9yIiwiZGlhbG9nV2luZG93SWQiLCJkaWFsb2dPdmVybGF5SWQiLCJ3aW5kb3ciLCJ0cmlnZ2VyRWxlbWVudHMiLCJkaWFsb2dXaW5kb3ciLCJnZXRFbGVtZW50QnlJZCIsImRpYWxvZ092ZXJsYXkiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImZvY3VzYWJsZUVsZW1lbnRzIiwiZm9jdXNlZEVsQmVmb3JlT3BlbiIsImZpcnN0Rm9jdXNhYmxlRWxlbWVudCIsImxhc3RGb2N1c2FibGVFbGVtZW50IiwibGVuZ3RoIiwiY2xvc2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaGFuZGxlS2V5RG93biIsImUiLCJLRVlfVEFCIiwiS0VZX0VTQyIsImhhbmRsZUJhY2t3YXJkVGFiIiwiYWN0aXZlRWxlbWVudCIsImhhbmRsZUZvcndhcmRUYWIiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJvcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZCIsImJpbmREaWFsb2dFdmVudHMiLCJlbGVtZW50cyIsImZvckVhY2giLCJ1bmJpbmREaWFsb2dFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsImluaXQiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0EsQUFBTyxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRDtNQUFXQyxPQUFYLHVFQUFxQkMsUUFBckI7U0FDdEIsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNILFFBQVFJLGdCQUFSLENBQXlCTCxRQUF6QixDQUFkLENBRHNCO0NBQWpCOztBQ0NQOzs7Ozs7Ozs7Ozs7QUFZQSxJQUFhTSxVQUFVLFNBQVZBLE9BQVUsR0FJWjtpRkFBUCxFQUFPO21DQUhUQyx1QkFHUztNQUhnQkEsdUJBR2hCLHlDQUgwQyxtQkFHMUM7aUNBRlRDLGNBRVM7TUFGT0EsY0FFUCx1Q0FGd0IsWUFFeEI7a0NBRFRDLGVBQ1M7TUFEUUEsZUFDUix3Q0FEMEIsYUFDMUI7OztNQUVMLEVBQUUsbUJBQW1CUCxRQUFyQixLQUFrQyxFQUFFLHNCQUFzQlEsTUFBeEIsQ0FBdEMsRUFBdUU7V0FDOUQsSUFBUDs7OztNQUlJQyxrQkFBa0JaLFNBQVNRLHVCQUFULENBQXhCO01BQ01LLGVBQWVWLFNBQVNXLGNBQVQsQ0FBd0JMLGNBQXhCLENBQXJCO01BQ0lNLGdCQUFnQlosU0FBU1csY0FBVCxDQUF3QkosZUFBeEIsQ0FBcEI7OztNQUdJLENBQUNLLGFBQUwsRUFBb0I7UUFDWkMsVUFBVWIsU0FBU2MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtZQUNRQyxZQUFSLENBQXFCLElBQXJCLEVBQTJCLGFBQTNCO1lBQ1FBLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEIscUJBQTlCO1lBQ1FBLFlBQVIsQ0FBcUIsYUFBckIsRUFBb0MsTUFBcEM7YUFDU0MsSUFBVCxDQUFj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
