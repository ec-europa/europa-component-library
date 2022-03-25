// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  card: {
    type: 'tile',
    description:
      'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
    title: {
      label: 'Better regulation',
    },
    links: [
      { label: 'link 1', path: exampleLink },
      { label: 'link 2', path: exampleLink },
      { label: 'link 3', path: exampleLink },
    ],
  },
};
