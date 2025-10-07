const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  column: 3,
  display_icons: true,
  view_all: {
    link: {
      path: exampleLink,
      label: 'View all',
      icon_position: 'after',
    },
  },
  items: [
    {
      icon: {
        name: 'infographic',
      },
      value: '00.0 million',
      title: 'Lorem ipsum',
      description:
        'Nunc eu est nec orci rhoncus venenatis. Donec rutrum lacus eget lobortis eleifend. Duis cursus sapien ac felis bibendum, in sagittis turpis porttitor. Aliquam sed mauris et orci efficitur mollis. Donec eu dolor in turpis sollicitudin malesuada.',
    },
    {
      icon: {
        name: 'spreadsheet',
      },
      value: '00.0 million',
      title: 'Sed hendrerit',
      description: 'Turpis varius congue venenatis, erat dui feugiat felis.',
    },
    {
      icon: {
        name: 'growth',
      },
      value: '00.0 million',
      title: 'Donec suscipit interdum augue, ac dapibus eros finibus a.',
      description:
        'Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.',
    },
    {
      icon: {
        name: 'digital',
      },
      value: '00.0 million',
      title: 'Aenean dapibus',
      description:
        'Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.',
    },
    {
      icon: {
        name: 'regulation',
      },
      value: '00.0 million',
      title: 'Lorem ipsum',
      description:
        'Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.',
    },
    {
      icon: {
        name: 'image',
      },
      value: '00.0 million',
      title: 'Sed hendrerit',
      description: 'Turpis varius congue venenatis, erat dui feugiat felis.',
    },
    {
      icon: {
        name: 'global',
      },
      value: '00.0 million',
      title: 'Donec suscipit interdum augue, ac dapibus eros finibus a.',
      description:
        'Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.',
    },
    {
      icon: {
        name: 'presentation',
      },
      value: '00.0 million',
      title: 'Aenean dapibus',
      description:
        'Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.',
    },
    {
      icon: {
        name: 'calendar',
      },
      value: '00.0 million',
      title: 'Aenean dapibus',
      description:
        'Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.',
    },
  ],
};
