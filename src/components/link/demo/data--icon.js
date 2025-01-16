// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  link: {
    type: 'default',
    label: 'The European Union',
    path: exampleLink,
    external: true,
    sr_external: 'Link to an external domain',
    icon_path: '/icons.svg',
  },
};
