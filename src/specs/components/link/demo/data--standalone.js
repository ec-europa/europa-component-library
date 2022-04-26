// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  link: {
    type: 'standalone',
    label: 'Standalone link',
    path: exampleLink,
    aria_label: 'Read more about the Standalone link',
    icon_position: 'after',
  },
};
