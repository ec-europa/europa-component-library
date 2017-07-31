module.exports = {
  title: 'Carousels',
  label: 'Carousels',
  preview: '@preview-center-transparent',
  status: 'ready',
  tags: ['molecule'],
  context: {
    extra_attributes: [
      {
        name: 'aria-labelledby',
        value: 'ecl-carousel__heading',
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
      { src: 'http://lorempixel.com/600/1200/business/1/', alt: 'First item' },
      { src: 'http://lorempixel.com/600/1200/business/2/', alt: 'Second item' },
      { src: 'http://lorempixel.com/600/1200/business/3/', alt: 'Third item' },
    ],
  },
};
