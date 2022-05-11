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
          {
            term: 'Taxonomy list',
            type: 'taxonomy',
            definition: [
              'Taxonomy item 1',
              'Taxonomy item 2',
              'Taxonomy item 3',
            ],
          },
        ],
      },
    ],
  },
};
