// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  card: {
    description:
      'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
    meta: ['Meta1', 'Meta2'],
    title: {
      type: 'standalone',
      label: 'Better regulation',
      path: exampleLink,
      level: 1,
    },
    image: {
      alt: 'card image',
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    },
    tags: [
      { label: 'tag 1', path: exampleLink },
      { label: 'tag 2', path: exampleLink },
      { label: 'tag 3', path: exampleLink },
    ],
  },
};
