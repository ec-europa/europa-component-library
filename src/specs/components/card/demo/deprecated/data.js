// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  card: {
    description:
      'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
    meta: ['META1', 'Meta2'],
    title: {
      link: {
        type: 'standalone',
        label: 'Better regulation',
        path: exampleLink,
        level: 1,
      },
    },
    image: {
      alt: 'card image',
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    },
    labels: [
      { label: 'highlighted', variant: 'highlight' },
      { label: 'call status: upcoming', variant: 'medium' },
    ],
    infos: [
      {
        icon: {
          name: 'calendar',
          size: 'xs',
          path: '/icons.svg',
        },
        label: '2018/10/22',
      },
      {
        icon: {
          name: 'location',
          size: 'xs',
          path: '/icons.svg',
        },
        label: 'Luxembourg',
      },
    ],
  },
};
