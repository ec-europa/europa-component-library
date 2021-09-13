// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  link: {
    type: 'secondary',
    label: 'Secondary link',
    path: exampleLink,
    aria_label: 'Read more about the secondary link component',
  },
};
