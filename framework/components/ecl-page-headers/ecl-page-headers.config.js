module.exports = {
  title: 'Page Headers',
  label: 'Page Headers',
  tags: ['organism'],
  status: 'ready',
  variants: [
    {
      name: 'default',
      context: {
        variant: 'default',
        identity: 'Digital single market',
        title: 'Business, Economy, Euro',
        introduction:
          'EU economy, finance and the euro, and practical information for EU businesses and entrepreneurs on product safety, environmental regulations, trade with non-EU countries and competition rules.',
        paragraph_class: 'ecl-paragraph ecl-paragraph--l',
        meta: {
          type: 'News article',
          date: '6 July 2015',
          timestamp: '2015-07-06T17:44:28+02:00',
          location: 'Brussels',
        },
      },
    },
    {
      name: 'basic',
      context: {
        identity: 'Digital single market',
      },
    },
    {
      name: 'highlight',
      context: {
        variant: 'highlight',
        label: 'Highlight',
        highlight:
          'Maecenas at mi <strong>molestie nulla</strong> tempor interdum sed sit amet ipsum.',
      },
    },
  ],
};
