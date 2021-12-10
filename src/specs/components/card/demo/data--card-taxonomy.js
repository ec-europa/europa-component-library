// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  card: {
    description:
      'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
    meta: ['META1', 'Meta2'],
    title: {
      type: 'standalone',
      label: 'Better regulation',
      path: exampleLink,
      level: 1,
    },
    image: {
      alt: 'card image',
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    },
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
    labels: [
      { label: 'highlighted', variant: 'highlight' },
      { label: 'call status: upcoming', variant: 'medium' },
    ],
    lists: [
      {
        variant: 'horizontal',
        items: [
          {
            term: 'EU contribution',
            definition: '1.000.000,00 euro (100% of the overall budget)',
          },
        ],
      },
      {
        variant: 'taxonomy',
        items: [
          {
            term: 'Science areas',
            definition: [
              {
                label: 'Energy and transport',
                variant: 'display',
              },
              {
                label: 'Standards',
                variant: 'display',
              },
            ],
          },
          {
            term: 'Keywords',
            definition: [
              {
                label: 'Electricity',
                variant: 'display',
              },
              {
                label: 'Electromobility',
                variant: 'display',
              },
              {
                label: 'Energy',
                variant: 'display',
              },
              {
                label: 'Energy storage',
                variant: 'display',
              },
              {
                label: 'Security',
                variant: 'display',
              },
              {
                label: 'Transport',
                variant: 'display',
              },
              {
                label: 'Low carbon',
                variant: 'display',
              },
            ],
          },
        ],
      },
    ],
  },
};
