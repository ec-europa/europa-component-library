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
        label: 'popover item 1',
        path: exampleLink,
        aria_label: 'Link to popover item 1',
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'popover item 2',
        path: exampleLink,
        aria_label: 'Link to popover item 2',
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'popover item 3',
        path: exampleLink,
        aria_label: 'Link to popover item 3',
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'popover item 4',
        path: exampleLink,
        aria_label: 'Link to popover item 4',
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'popover item 5',
        path: exampleLink,
        aria_label: 'Link to popover item 5',
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'popover item 6',
        path: exampleLink,
        aria_label: 'Link to popover item 6',
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'popover item 7',
        path: exampleLink,
        aria_label: 'Link to popover item 7',
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
    {
      link: {
        label: 'popover item 8',
        path: exampleLink,
        aria_label: 'Link to popover item 8',
        icon_position: 'before',
      },
      icon: {
        path: '/icons.svg',
        name: 'global',
        size: 'fluid',
      },
    },
  ],
};
