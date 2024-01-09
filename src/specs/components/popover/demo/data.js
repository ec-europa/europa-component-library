// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'popover-example',
  toggle: {
    link: {
      label: 'Popover',
      path: exampleLink,
      type: 'standalone',
      aria_label: 'Popover toggle',
      icon_position: 'before',
    },
    icon: {
      path: '/icons.svg',
      name: 'share',
      size: 'm',
    },
  },
  links: [
    {
      link: {
        label: 'item 1',
        path: exampleLink,
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'item 2',
        path: exampleLink,
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'item 3',
        path: exampleLink,
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'item 4',
        path: exampleLink,
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'item 5',
        path: exampleLink,
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'item 6',
        path: exampleLink,
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'item 7',
        path: exampleLink,
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'item 8',
        path: exampleLink,
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
  ],
};
