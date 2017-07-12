/**
 * @param {object} options Object containing configuration overrides
 */
export const dialog = (
  {
    dialog: dialogSelector = '.ecl-dialog',
    overlay: overlaySelector = '.ecl-dialog__overlay',
  } = {}
) => {
  console.log(dialogSelector);
  console.log(overlaySelector);
};

export default dialog;
