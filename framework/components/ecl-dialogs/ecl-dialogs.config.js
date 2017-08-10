const data = {
  extra_attributes: [
    { name: 'aria-labelledby', value: 'dialog-title' },
    { name: 'aria-describedby', value: 'dialog-description' },
    { name: 'id', value: 'ecl-dialog' },
    { name: 'aria-hidden', value: 'true' },
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
};

module.exports = {
  title: 'Dialogs',
  label: 'Dialogs',
  preview: '@preview-center-transparent',
  status: 'ready',
  tags: ['molecule'],
  context: {
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () {
          // This is only for demo purposes to facilitate end-users.

          // Create a link.
          var link = document.createElement('a');
          var text = document.createTextNode('Open dialog');

          // Include textual content.
          link.appendChild(text);
          link.title = "Click to test the modal";

          // Add necessary demo attributes.
          link.setAttribute('href', '#dialog');
          link.setAttribute('class', 'ecl-link');
          link.setAttribute('data-ecl-dialog', 'ecl-dialog');

          // Show the link
          document.body.appendChild(link);

          ECL.dialogs();
        });
      `,
    },
  },
  variants: [
    {
      name: 'default',
      title: 'Dialogs - Default',
      label: 'Default',
      context: data,
    },
    {
      name: 'dark',
      title: 'Dialogs - Dark',
      label: 'Dark',
      context: Object.assign({}, data, {
        theme: 'dark',
      }),
    },
  ],
};
