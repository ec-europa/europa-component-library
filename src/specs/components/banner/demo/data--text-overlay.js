const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: {
    link: {
      label: 'Lorem ipsum dolor sit amet consectetuer adipiscin',
      path: exampleLink,
    },
  },
  description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  link: {
    link: {
      label: 'CTA link',
      path: exampleLink,
      icon_position: 'after',
    },
    icon: {
      path: '/icons.svg',
      name: 'corner-arrow',
      size: 'xs',
      transform: 'rotate-90',
    },
  },
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
      alt: 'aternative text',
    },
  },
  credit: '© Copyright',
  variant: 'text-overlay',
  centered: false,
  full_width: true,
};
