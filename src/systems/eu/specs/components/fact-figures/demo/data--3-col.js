const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  column: 3,
  viewAll: {
    href: exampleLink,
    label: 'View all metrics',
  },
  items: [
    {
      icon: {
        shape: 'general--digital',
        size: 'm',
      },
      value: '00.0 million',
      title: 'Lorem ipsum',
      description:
        'Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.',
    },
    {
      icon: {
        shape: 'general--digital',
        size: 'm',
      },
      value: '00.0 million',
      title: 'Sed hendrerit',
      description: 'Turpis varius congue venenatis, erat dui feugiat felis.',
    },
    {
      icon: {
        shape: 'general--digital',
        size: 'm',
      },
      value: '00.0 million',
      title: 'Donec suscipit interdum augue, ac dapibus eros finibus a.',
      description:
        'Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.',
    },
    {
      icon: {
        shape: 'general--digital',
        size: 'm',
      },
      value: '00.0 million',
      title: 'Aenean dapibus',
      description:
        'Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.',
    },
    {
      icon: {
        shape: 'general--digital',
        size: 'm',
      },
      value: '00.0 million',
      title: 'Aliquam faucibus nulla eget eleifend',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.',
    },
    {
      icon: {
        shape: 'general--digital',
        size: 'm',
      },
      value: '00.0 million',
      title: 'Nam lacinia nisl eget diam mattis',
      description:
        'Sed efficitur bibendum rutrum. Nunc feugiat congue augue ac consectetur.',
    },
  ],
};
