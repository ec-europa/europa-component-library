// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  image: {
    alt: 'card image',
    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
  },
  title: {
    variant: 'standalone',
    label: 'Better regulation',
    href: exampleLink,
    level: 1,
  },
  description:
    'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
  infos: [
    {
      icon: {
        shape: 'general--calendar',
        size: 'xs',
      },
      label: '2018/10/22',
    },
    {
      icon: {
        shape: 'general--location',
        size: 'xs',
      },
      label: 'Luxembourg',
    },
  ],
};
