// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  primary_meta: ['PRIMARY META', 'DD Month Year'],
  title: {
    label: 'Title',
    path: exampleLink,
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
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
  tags: [
    {
      tag: { label: 'tag 1', path: exampleLink },
    },
    {
      tag: { label: 'tag 2', path: exampleLink },
    },
    {
      tag: { label: 'tag 3', path: exampleLink },
    },
  ],
  links: [
    [
      {
        link: {
          label: 'Primary link 1',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Primary link 2',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Primary link 3',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Primary link 4',
          path: exampleLink,
        },
      },
    ],
    [
      {
        link: {
          label: 'Secondary link 1',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Secondary link 2',
          path: exampleLink,
        },
      },
    ],
  ],
  lists: [
    {
      items: [
        {
          term: 'European Commission',
          definition:
            'The executive body of the European Union formed in 1967, which initiates action in the EU and mediates between member governments. Former name (until 1993): Commission of the European Communities',
        },
        {
          term: 'European Union',
          definition:
            'An association of European nations formed in 1993 for the purpose of achieving political and economic integration.',
        },
        {
          term: 'Citizen',
          definition:
            'A native or naturalized member of a state or nation who owes allegiance to its government and is entitled to its protection',
        },
      ],
    },
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
    },
  ],
};
