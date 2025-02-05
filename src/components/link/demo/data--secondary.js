// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  link: {
    type: 'secondary',
    label: 'Secondary link',
    path: exampleLink,
    sr_external: 'Link to an external domain',
  },
};
