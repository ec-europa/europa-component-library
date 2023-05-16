// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  link: {
    type: 'default',
    label: 'The European Union',
    path: exampleLink,
    icon_position: 'after',
  },
  icon: {
    path: '/icons.svg',
    name: 'external',
    size: 'fluid',
  },
};
