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
        description: 'Description 1',
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
        description: 'Description 2',
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
        description: 'Description 3',
        copyright: '© Copyright 3',
      },
    ],
  },
};
