const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Headline sed elit lorem. Donec dictum.',
  description:
    'Pellentesque tempor tincidunt quam, finibus vulputate eros iaculis pharetra orci arcu, dictum maximus arcu pellentesque eget. Cras massa nunc.',
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
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'aternative text',
    },
  },
  credit: '© Copyright',
  variant: 'text-overlay',
  centered: true,
};
