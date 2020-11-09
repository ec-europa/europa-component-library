// Simple content for demo
module.exports = {
  card: {
    description:
      'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
    meta: ['Meta1', 'Meta2'],
    title: {
      type: 'standalone',
      label: 'Better regulation',
      path: '/example',
      level: 1,
    },
    image: {
      alt: 'card image',
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    },
    tags: [
      { label: 'tag 1', path: '/example' },
      { label: 'tag 2', path: '/example' },
      { label: 'tag 3', path: '/example' },
    ],
    infos: [
      {
        icon: {
          type: 'general',
          name: 'calendar',
          size: 'xs',
          path: '/icons.svg',
        },
        label: '2018/10/22',
      },
      {
        icon: {
          type: 'general',
          name: 'location',
          size: 'xs',
          path: '/icons.svg',
        },
        label: 'Luxembourg',
      },
    ],
  },
};
