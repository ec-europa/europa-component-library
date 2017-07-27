module.exports = {
  title: 'Gallery - dialog (overlay)',
  label: 'Gallery - dialog (overlay)',
  preview: '@preview-center-transparent',
  status: 'ready',
  context: {
    _demo: {
      scripts: `
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
        document.body.append(link);

        document.addEventListener('DOMContentLoaded', function () {
            ECL.dialogs();
        });
      `,
    },
    dialog_settings: {
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
    },
    dialog_contents: {
      data: {
        rows: [
          [
            {
              classes: 'ecl-col-md-4',
              image: {
                src: 'http://placehold.it/380x185',
                alt: 'Example alt text',
                extraAttributes: [
                  { name: 'typeof', value: 'foaf:Image' },
                  { name: 'width', value: '380' },
                  { name: 'height', value: '185' },
                ],
              },
              caption: 'Example image caption',
              icon: 'ecl-icon--camera',
            },
            {
              classes: 'ecl-col-md-3',
              image: {
                src: 'http://placehold.it/285x185',
                alt: 'Example alt text',
                extraAttributes: [
                  { name: 'typeof', value: 'foaf:Image' },
                  { name: 'width', value: '285' },
                  { name: 'height', value: '185' },
                ],
              },
              icon: 'ecl-icon--audio',
            },
            {
              classes: 'ecl-col-md-2',
              image: {
                src: 'http://placehold.it/190x185',
                alt: 'Example alt text',
                extraAttributes: [
                  { name: 'typeof', value: 'foaf:Image' },
                  { name: 'width', value: '190' },
                  { name: 'height', value: '185' },
                ],
              },
              caption: 'Example image caption',
              icon: 'ecl-icon--camera',
            },
            {
              classes: 'ecl-col-md-3',
              image: {
                src: 'http://placehold.it/285x185',
                alt: 'Example alt text',
                extraAttributes: [
                  { name: 'typeof', value: 'foaf:Image' },
                  { name: 'width', value: '285' },
                  { name: 'height', value: '185' },
                ],
              },
            },
          ],
          [
            {
              classes: 'ecl-col-md-2',
              image: {
                src: 'http://placehold.it/190x185',
                alt: 'Example alt text',
                extraAttributes: [
                  { name: 'typeof', value: 'foaf:Image' },
                  { name: 'width', value: '190' },
                  { name: 'height', value: '185' },
                ],
              },
              caption: 'Example image caption',
            },
            {
              classes: 'ecl-col-md-3',
              image: {
                src: 'http://placehold.it/285x185',
                alt: 'Example alt text',
                extraAttributes: [
                  { name: 'typeof', value: 'foaf:Image' },
                  { name: 'width', value: '285' },
                  { name: 'height', value: '185' },
                ],
              },
            },
            {
              classes: 'ecl-col-md-3',
              image: {
                src: 'http://placehold.it/285x185',
                alt: 'Example alt text',
                extraAttributes: [
                  { name: 'typeof', value: 'foaf:Image' },
                  { name: 'width', value: '285' },
                  { name: 'height', value: '185' },
                ],
              },
            },
            {
              classes: 'ecl-col-md-4',
              image: {
                src: 'http://placehold.it/380x185',
                alt: 'Example alt text',
                extraAttributes: [
                  { name: 'typeof', value: 'foaf:Image' },
                  { name: 'width', value: '380' },
                  { name: 'height', value: '185' },
                ],
              },
              caption: 'Example image caption',
            },
          ],
        ],
      },
    },
  },
};
