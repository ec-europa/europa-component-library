const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  tag: {
    type: 'link',
    path: exampleLink,
    label: 'Link tag',
  },
};
