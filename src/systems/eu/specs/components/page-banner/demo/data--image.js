// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'EU Budget for the future',
  description: 'Innovation, economy, environment and geopolitics',
  link: {
    label: 'Subscribe',
    href: exampleLink,
    icon: {
      shape: 'ui--corner-arrow',
      transform: 'rotate-90',
      size: 'xs',
    },
  },
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
};
