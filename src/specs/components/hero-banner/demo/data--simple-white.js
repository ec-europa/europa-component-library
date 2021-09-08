const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'EU Budget for the future',
  description: 'Innovation, economy, environment and geopolitics',
  link: {
    link: {
      label: 'Subscribe',
      path: exampleLink,
      icon_position: 'after',
    },
    icon: {
      path: '/icons.svg',
      name: 'corner-arrow',
      size: 'xs',
      transform: 'rotate-90',
    },
  },
  variant: 'white',
  centered: true,
};
