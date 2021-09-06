// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  link: {
    type: 'default',
    label: 'The European Union',
    path: exampleLink,
    aria_label: 'Read more about the European Union',
    icon_position: 'after',
  },
  icon: {
    path: '/icons.svg',
    name: 'external',
    size: 'fluid',
  },
};
