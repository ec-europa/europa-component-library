const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'banner-example-image',
  title: {
    link: {
      label: 'Lorem ipsum',
      path: exampleLink,
    },
  },
  description: {
    link: {
      label:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      path: exampleLink,
    },
  },
  link: {
    link: {
      label: 'CTA link',
      path: exampleLink,
      icon_position: 'after',
    },
    icon: {
      name: 'corner-arrow',
      size: 'xs',
      transform: 'rotate-90',
    },
  },
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
      alt: 'alternative text',
    },
  },
  credit: '© Copyright',
};
