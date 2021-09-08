// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  link: {
    type: 'primary',
    label: 'Primary link',
    path: exampleLink,
    aria_label: 'Read more about the primary link component',
  },
};
