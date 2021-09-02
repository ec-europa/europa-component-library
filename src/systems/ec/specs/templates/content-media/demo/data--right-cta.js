const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  media: {
    alt: 'Jean Monnet banner',
    image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    description:
      'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
  },
  mediaPosition: 'right',
  title: 'Title',
  link: {
    variant: 'cta',
    href: exampleLink,
    label: 'Call to action link',
    icon: {
      shape: 'ui--corner-arrow',
      transform: 'rotate-90',
      size: 'fluid',
    },
  },
};
