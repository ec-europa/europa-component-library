module.exports = {
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
        src: '../../assets/demo_images/business-demo-1.jpg',
        alt: 'First item',
      },
      download: {
        href: '../../example.html#',
        title: 'Download',
        label: 'Download',
      },
      share: {
        href: '../../example.html#',
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
        href: '../../example.html#',
        title: 'Download',
        label: 'Download',
      },
      share: {
        href: '../../example.html#',
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
        href: '../../example.html#',
        title: 'Download',
        label: 'Download',
        variant: ['inverted', 'standalone'],
      },
      share: {
        href: '../../example.html#',
        title: 'Share',
        label: 'Share',
        variant: ['inverted', 'standalone'],
      },
      description: `<p>Nulla consequat massa quis enim. Donec pede justo.</p>
        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. <a href="#" title="Cras dapibus">Cras dapibus</a>. Vivamus elementum semper nisi.</p>`,
      copyright: '© Copyright 3',
    },
  ],
};
