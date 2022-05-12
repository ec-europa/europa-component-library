// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description:
    'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
  primary_meta: ['META1', 'Meta2'],
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
  secondary_meta: [
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
        {
          term: 'Taxonomy list',
          type: 'taxonomy',
          definition: ['Taxonomy item 1', 'Taxonomy item 2', 'Taxonomy item 3'],
        },
      ],
    },
  ],
};
