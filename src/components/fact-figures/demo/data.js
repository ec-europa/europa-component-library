const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  column: 3,
  display_icons: true,
  view_all: {
    link: {
      path: exampleLink,
      label: 'View all',
    },
  },
  sources_label: 'Sources:',
  sources: [
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'DG CNECT',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
  ],
  items: [
    {
      icon: {
        name: 'chart-bar',
        family: 'phosphor',
      },
      value: '00.0 million',
      title: 'Lorem ipsum',
      description:
        'Nunc eu est nec orci rhoncus venenatis. Donec rutrum lacus eget lobortis eleifend. Duis cursus sapien ac felis bibendum, in sagittis turpis porttitor. Aliquam sed mauris et orci efficitur mollis. Donec eu dolor in turpis sollicitudin malesuada.',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'table',
        family: 'phosphor',
      },
      value: '00.0 million',
      title: 'Sed hendrerit',
      description: 'Turpis varius congue venenatis, erat dui feugiat felis.',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'chart-line-up',
        family: 'phosphor',
      },
      value: '00.0 million',
      title: 'Donec suscipit interdum augue, ac dapibus eros finibus a.',
      description:
        'Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.',
      sources: [
        {
          link: {
            label: 'DG CNECT',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'network',
        family: 'phosphor',
      },
      value: '00.0 million',
      title: 'Aenean dapibus',
      description:
        'Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'sliders',
        family: 'phosphor',
      },
      value: '00.0 million',
      title: 'Lorem ipsum',
      description:
        'Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'image',
        family: 'phosphor',
      },
      value: '00.0 million',
      title: 'Sed hendrerit',
      description: 'Turpis varius congue venenatis, erat dui feugiat felis.',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'globe',
        family: 'phosphor',
      },
      value: '00.0 million',
      title: 'Donec suscipit interdum augue, ac dapibus eros finibus a.',
      description:
        'Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.',
      sources: [
        {
          link: {
            label: 'DG CNECT',
            path: exampleLink,
          },
        },
      ],
    },
    {
      icon: {
        name: 'presentation',
        family: 'phosphor',
      },
      value: '00.0 million',
      title: 'Aenean dapibus',
      description:
        'Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.',
      sources: [
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
      ],
    },
  ],
};
