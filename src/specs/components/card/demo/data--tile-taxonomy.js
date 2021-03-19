// Simple content for demo
module.exports = {
  card: {
    type: 'tile',
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
