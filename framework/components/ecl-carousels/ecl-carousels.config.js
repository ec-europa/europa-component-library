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
    // extra_attributes: [
    //   {
    //     name: 'aria-labelledby',
    //     value: 'ecl-carousel__heading',
    //   },
    //   {
    //     name: 'id',
    //     value: 'ecl-carousel',
    //   },
    // ],
    // heading_title: 'Example gallery carousel',
    // heading_attributes: [
    //   {
    //     name: 'id',
    //     value: 'ecl-carousel__heading',
    //   },
    //   {
    //     name: 'class',
    //     value: 'ecl-headings ecl-headings--h3 ecl-sr-only',
    //   },
    // ],
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
          src: 'http://lorempixel.com/600/1200/business/3/',
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
