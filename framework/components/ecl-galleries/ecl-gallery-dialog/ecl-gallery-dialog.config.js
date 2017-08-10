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
        document.body.appendChild(link);

        document.addEventListener('DOMContentLoaded', function () {
            ECL.dialogs();
            ECL.carousels();
        });
      `,
    },
    dialog_settings: {
      theme: 'dark',
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
      extra_attributes: [
        {
          name: 'aria-labelledby',
          value: 'ecl-carousel__heading',
        },
        {
          name: 'id',
          value: 'ecl-carousel',
        },
      ],
      heading_title: 'Example gallery carousel',
      heading_attributes: [
        {
          name: 'id',
          value: 'ecl-carousel__heading',
        },
        {
          name: 'class',
          value: 'ecl-heading--3 ecl-sr-only',
        },
      ],
      carousel_images: [
        {
          image: {
            src: 'http://lorempixel.com/600/1200/business/1/',
            alt: 'First item',
          },
          download: {
            target: '#',
            title: 'Download',
            label: 'Download',
          },
          share: {
            target: '#',
            title: 'Share',
            label: 'Share',
          },
          description: `<p>Nulla consequat massa quis enim. Donec pede justo.</p>
            <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. <a href="#" title="Cras dapibus">Cras dapibus</a>. Vivamus elementum semper nisi.</p>`,
          copyright: '© Copyright 1',
        },
        {
          image: {
            src: 'http://lorempixel.com/600/1200/business/2/',
            alt: 'First item',
          },
          download: {
            target: '#',
            title: 'Download',
            label: 'Download',
          },
          share: {
            target: '#',
            title: 'Share',
            label: 'Share',
          },
          description: `<p>Nulla consequat massa quis enim. Donec pede justo.</p>
            <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. <a href="#" title="Cras dapibus">Cras dapibus</a>. Vivamus elementum semper nisi.</p>`,
          copyright: '© Copyright 2',
        },
        {
          image: {
            src: 'http://lorempixel.com/600/1200/business/3/',
            alt: 'First item',
          },
          download: {
            target: '#',
            title: 'Download',
            label: 'Download',
          },
          share: {
            target: '#',
            title: 'Share',
            label: 'Share',
          },
          description: `<p>Nulla consequat massa quis enim. Donec pede justo.</p>
            <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. <a href="#" title="Cras dapibus">Cras dapibus</a>. Vivamus elementum semper nisi.</p>`,
          copyright: '© Copyright 3',
        },
      ],
    },
  },
};
