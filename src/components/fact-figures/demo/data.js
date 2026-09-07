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
        name: 'infographic',
      },
      value: '00.0 million',
      title: 'Lorem ipsum',
      description:
        'Nunc eu est nec orci rhoncus venenatis. Donec rutrum lacus eget lobortis eleifend. Duis cursus sapien ac felis bibendum, in sagittis turpis porttitor. Aliquam sed mauris et orci efficitur mollis. Donec eu dolor in turpis sollicitudin malesuada.',
      sources: [
        {
          link: {
            label:
              'The length of this string is meant to test the text wrapping',
            path: exampleLink,
          },
        },
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
            external: true,
          },
        },
        {
          link: {
            label: 'Eurostat',
            path: exampleLink,
          },
        },
        {
          name: 'Textual element',
        },
      ],
    },
    {
      icon: {
        name: 'spreadsheet',
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
        name: 'growth',
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
        name: 'digital',
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
        name: 'regulation',
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
        name: 'global',
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
