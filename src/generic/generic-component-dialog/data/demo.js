module.exports = {
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
  dialog_description: {
    value: 'Example description',
  },
  dismiss: {
    label: 'Dismiss this dialog window',
  },
};
