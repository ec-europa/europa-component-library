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
      size: 'fluid',
    },
  },
  links: [
    {
      link: {
        label: 'item 1',
        path: exampleLink,
        aria_label: 'Link to item 1',
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
        aria_label: 'Link to item 2',
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
        aria_label: 'Link to item 3',
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
        aria_label: 'Link to item 4',
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
        aria_label: 'Link to item 5',
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
        aria_label: 'Link to item 6',
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
        aria_label: 'Link to item 7',
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
        aria_label: 'Link to item 8',
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
  ],
};
