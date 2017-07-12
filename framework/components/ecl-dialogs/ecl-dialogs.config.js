module.exports = {
  title: 'Dialogs',
  label: 'Dialogs',
  status: 'ready',
  tags: ['molecule'],
  context: {
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () {
            var options = {
              dialog: 'ecl-dialog',
              overlay: 'ecl-dialog__overlay' 
            };
            ECL.dialog(options);
        });
      `,
    },
    extraAttributes: [
      { name: 'aria-labelledby', value: 'dialog-title' },
      { name: 'aria-describedby', value: 'dialog-description' },
    ],
    dialog_title: {
      value: 'Example title',
      id: 'dialog-title',
    },
    dialog_description: {
      value: 'Example description',
      id: 'dialog-description',
    },
    dismiss: {
      label: 'Dismiss this dialog window',
    },
  },
};
