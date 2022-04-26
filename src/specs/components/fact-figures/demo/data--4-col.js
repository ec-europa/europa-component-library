const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  column: 4,
  display_icons: true,
  view_all: {
    link: {
      path: exampleLink,
      label: 'View all metrics',
      icon_position: 'after',
    },
    icon: {
      path: '/icons.svg',
    },
  },
  items: [
    {
      icon: {
        name: 'infographic',
        size: 'l',
        path: '/icons.svg',
      },
      value: '00.0 million',
      title: 'Lorem ipsum',
      description:
        'Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.',
    },
    {
      icon: {
        name: 'spreadsheet',
        size: 'l',
        path: '/icons.svg',
      },
      value: '00.0 million',
      title: 'Sed hendrerit',
      description: 'Turpis varius congue venenatis, erat dui feugiat felis.',
    },
    {
      icon: {
        name: 'growth',
        size: 'l',
        path: '/icons.svg',
      },
      value: '00.0 million',
      title: 'Donec suscipit interdum augue, ac dapibus eros finibus a.',
      description:
        'Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.',
    },
    {
      icon: {
        name: 'digital',
        size: 'l',
        path: '/icons.svg',
      },
      value: '00.0 million',
      title: 'Aenean dapibus',
      description:
        'Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.',
    },
    {
      icon: {
        name: 'regulation',
        size: 'l',
        path: '/icons.svg',
      },
      value: '00.0 million',
      title: 'Lorem ipsum',
      description:
        'Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.',
    },
    {
      icon: {
        name: 'image',
        size: 'l',
        path: '/icons.svg',
      },
      value: '00.0 million',
      title: 'Sed hendrerit',
      description: 'Turpis varius congue venenatis, erat dui feugiat felis.',
    },
    {
      icon: {
        name: 'global',
        size: 'l',
        path: '/icons.svg',
      },
      value: '00.0 million',
      title: 'Donec suscipit interdum augue, ac dapibus eros finibus a.',
      description:
        'Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.',
    },
    {
      icon: {
        name: 'video',
        size: 'l',
        path: '/icons.svg',
      },
      value: '00.0 million',
      title: 'Aenean dapibus',
      description:
        'Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.',
    },
  ],
};
