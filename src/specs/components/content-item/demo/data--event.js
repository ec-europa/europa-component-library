// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  variant: 'event',
  date: {
    date_time: '2019-09-26',
    day: '26',
    month: 'Sep',
    month_full: 'September',
    year: '2019',
  },
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  meta: ['Primary meta', 'DD Month Year'],
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
