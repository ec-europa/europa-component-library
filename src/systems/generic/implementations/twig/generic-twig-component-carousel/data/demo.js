module.exports = function context(system) {
  const c = {
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
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'download',
            size: 's',
          },
        },
        share: {
          href: '../../example.html#',
          title: 'Share',
          label: 'Share',
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'share',
            size: 's',
          },
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
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'download',
            size: 's',
          },
        },
        share: {
          href: '../../example.html#',
          title: 'Share',
          label: 'Share',
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'share',
            size: 's',
          },
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
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'download',
            size: 's',
          },
        },
        share: {
          href: '../../example.html#',
          title: 'Share',
          label: 'Share',
          icon: {
            icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
            icon: 'share',
            size: 's',
          },
        },
        description: `<p>Nulla consequat massa quis enim. Donec pede justo.</p>
          <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. <a href="#" title="Cras dapibus">Cras dapibus</a>. Vivamus elementum semper nisi.</p>`,
        copyright: '© Copyright 3',
      },
    ],
  };

  return c;
};
