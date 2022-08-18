// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'dropdown-example',
  toggle: {
    link: {
      label: 'Dropdown',
      path: exampleLink,
      type: 'standalone',
      aria_label: 'Dropdown toggle',
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
        label: 'dropdown item 1',
        path: exampleLink,
        aria_label: 'Link to dropdown item 1',
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
        label: 'dropdown item 2',
        path: exampleLink,
        aria_label: 'Link to dropdown item 2',
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
        label: 'dropdown item 3',
        path: exampleLink,
        aria_label: 'Link to dropdown item 3',
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
        label: 'dropdown item 4',
        path: exampleLink,
        aria_label: 'Link to dropdown item 4',
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
        label: 'dropdown item 5',
        path: exampleLink,
        aria_label: 'Link to dropdown item 5',
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
        label: 'dropdown item 6',
        path: exampleLink,
        aria_label: 'Link to dropdown item 6',
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
        label: 'dropdown item 7',
        path: exampleLink,
        aria_label: 'Link to dropdown item 7',
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
        label: 'dropdown item 8',
        path: exampleLink,
        aria_label: 'Link to dropdown item 8',
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
