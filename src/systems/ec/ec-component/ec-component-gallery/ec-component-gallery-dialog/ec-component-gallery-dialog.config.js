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
        link.setAttribute('href', '#ecl-carousel');
        link.setAttribute('class', 'ecl-link');
        link.setAttribute('data-ecl-dialog', 'ecl-carousel');
        link.setAttribute('id', 'open-dialog-demo');

        // Show the link
        document.body.appendChild(link);

        document.addEventListener('DOMContentLoaded', function () {
            ECL.dialogs({
              dialogWindowId: 'ecl-carousel'
            });
            ECL.carousels();
        });
      `,
    },
    dialog_contents: {
      extra_attributes: [{ name: 'aria-hidden', value: true }],
      heading_title: 'Example gallery carousel',
      carousel_images: [
        {
          image: {
            src: '../../assets/demo_images/business-demo-1.jpg',
            alt: 'First item',
          },
          download: {
            href: 'https://example.com/',
            title: 'Download',
            label: 'Download',
          },
          share: {
            href: 'https://example.com/',
            title: 'Share',
            label: 'Share',
          },
          description: `<p>Nulla consequat massa quis enim. Donec pede justo.</p>
            <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. <a href="#" title="Cras dapibus">Cras dapibus</a>. Vivamus elementum semper nisi.</p>`,
          copyright: '© Copyright 1',
        },
        {
          image: {
            src: '../../assets/demo_images/business-demo-2.jpg',
            alt: 'Second item',
          },
          download: {
            href: 'https://example.com/',
            title: 'Download',
            label: 'Download',
          },
          share: {
            href: 'https://example.com/',
            title: 'Share',
            label: 'Share',
          },
          description: `<p>Nulla consequat massa quis enim. Donec pede justo.</p>
            <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. <a href="#" title="Cras dapibus">Cras dapibus</a>. Vivamus elementum semper nisi.</p>`,
          copyright: '© Copyright 2',
        },
        {
          image: {
            src: '../../assets/demo_images/business-demo-3.jpg',
            alt: 'Third item',
          },
          download: {
            href: 'https://example.com/',
            title: 'Download',
            label: 'Download',
          },
          share: {
            href: 'https://example.com/',
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
