# Dialogs

A dialog is an application window that is designed to interrupt the current
processing of an application in order to prompt the user to enter information or
require a response.

## Normal dialog (default)

Default implementation of the dialog. Will display an horizontally and vertically centered
container with the text. When pressed, a top-right dismiss button will remove the container and its transparent overlay. The small container goes fullscreen for screens smaller than 480px.

## Wide dialog

Contrary to the normal dialog, when shown this variant of the dialog will always fill the entire screen no matter the user's screen size

## Resources

* [WAI-ARIA dialog role](https://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#dialog)
* [Using the dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role)
* [Creating an accessible dialog](https://bitsofco.de/accessible-modal-dialog/)
