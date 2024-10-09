// Simple content for demo
module.exports = {
  variant: 'info',
  icon: {
    path: '/icons.svg',
    name: 'information',
    size: 'l',
  },
  links: [
    {
      link: {
        label: 'Lorem ipsum',
        path: '/example',
      },
    },
    {
      link: {
        label: 'Nullam accumsan semper lorem',
        path: '/example',
      },
    },
  ],
  sr_icon: 'Information',
  title: 'Information notification',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.',
  close: {
    label: 'Close',
    icon: {
      path: '/icons.svg',
      name: 'close',
      size: 'm',
    },
    hide_label: true,
  },
};
