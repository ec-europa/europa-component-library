const links = [
  {
    to: '#',
    title: 'Home',
  },
  {
    to: '#',
    title: 'About Us',
    isActive: true,
  },
  {
    to: '#',
    title: 'More Information',
  },
  {
    to: '#',
    title: 'Contact Us',
  },
];

module.exports = {
  title: 'Navigation lists',
  label: 'Lists',
  status: 'ready',
  tags: ['organism'],
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        variant: 'default',
        title: 'Default Navigation Menu',
        links,
      },
    },
    {
      name: 'tabs',
      label: 'Tabs',
      context: {
        variant: 'tabs',
        title: 'Tabs Navigation Menu',
        links,
      },
    },
  ],
};
