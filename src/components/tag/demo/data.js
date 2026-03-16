const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  tag: {
    type: 'link',
    path: exampleLink,
    label: 'Tag label',
    aria_label: 'Dismiss',
  },
};
