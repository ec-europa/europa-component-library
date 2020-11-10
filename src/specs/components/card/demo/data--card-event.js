// Simple content for demo
module.exports = {
  card: {
    description:
      'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
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
