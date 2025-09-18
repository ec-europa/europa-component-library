// Simple content for demo
module.exports = {
  variant: 'error',
  icon: {
    name: 'error-outline',
    size: 'l',
  },
  links: [
    {
      link: {
        label: 'Lorem ipsum',
        path: '/example',
        external: true,
      },
    },
    {
      link: {
        label: 'Nullam accumsan semper lorem',
        path: '/example',
        external: true,
      },
    },
  ],
  sr_icon: 'Error',
  title: 'Error notification',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.',
  close: {
    label: 'Close',
    icon: {
      name: 'close',
      size: 'm',
    },
    hide_label: true,
  },
};
