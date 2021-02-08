// Simple content for demo
module.exports = {
  image: {
    alt: 'card image',
    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
  },
  meta: 'Meta1 | Meta2',
  title: {
    variant: 'standalone',
    label: 'Better regulation',
    href: '/example',
    level: 1,
  },
  description:
    'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
  infos: [
    {
      icon: {
        shape: 'general--calendar',
        size: 'xs',
      },
      label: '2018/10/22',
    },
    {
      icon: {
        shape: 'general--location',
        size: 'xs',
      },
      label: 'Luxembourg',
    },
  ],
  list: {
    items: [
      {
        term: 'EU contribution',
        definition: '1.000.000,00 euro (100% of the overall budget)',
      },
    ],
  },
  taxonomy: {
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
};
