// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: {
    variant: 'standalone',
    label: 'Better regulation',
    level: 1,
  },
  description:
    'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
  links: [
    { label: 'link 1', href: exampleLink, variant: 'standalone' },
    { label: 'link 2', href: exampleLink, variant: 'standalone' },
    { label: 'link 3', href: exampleLink, variant: 'standalone' },
  ],
};
