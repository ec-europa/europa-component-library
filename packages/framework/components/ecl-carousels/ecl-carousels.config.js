module.exports = {
  title: 'Carousels',
  label: 'Carousels',
  status: 'ready',
  tags: ['molecule'],
  context: {
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () {
            ECL.carousels();
        });
      `,
    },
    carousel_images: [
      {
        image: {
          src: '/assets/demo_images/business-demo-1.jpg',
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
          src: '/assets/demo_images/business-demo-2.jpg',
          alt: 'Second item',
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
          src: '/assets/demo_images/business-demo-3.jpg',
          alt: 'Third item',
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
};
