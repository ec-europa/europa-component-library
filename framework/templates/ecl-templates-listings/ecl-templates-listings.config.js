module.exports = {
  title: 'Listings page',
  label: 'Listings page',
  status: 'ready',
  tags: ['template'],
  context: {
    global: {
      language: 'en',
    },
    page_header: {
      breadcrumb: [
        {
          target: 'http://europa.eu/index_en.htm',
          title: 'European Commission',
        },
        { target: '#', title: 'Example' },
      ],
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
};
