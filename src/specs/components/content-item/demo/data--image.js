// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  image: {
    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    size: 'l',
  },
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  meta: ['PRIMARY META', 'DD Month Year'],
  title: {
    type: 'standalone',
    label: 'Title',
    path: exampleLink,
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
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
  lists: [
    {
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
      variant: 'taxonomy',
    },
  ],
};
