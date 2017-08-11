const links = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'About Us',
    is_active: true,
  },
  {
    href: '#',
    label: 'More Information',
  },
  {
    href: '#',
    label: 'Contact Us',
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
