module.exports = {
  title: 'Dialogs',
  label: 'Dialogs',
  status: 'ready',
  tags: ['molecule'],
  context: {
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
      classes: 'ecl-sr-only',
    },
    dismiss: {
      label: 'Close navigation',
    },
  },
};
