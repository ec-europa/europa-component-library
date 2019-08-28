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
          href: 'https://ec.europa.eu/info/index',
          label: 'Home',
        },
        {
          href: '../../example.html#',
          label: 'Example',
        },
        { label: 'Business, Economy, Euro' },
      ],
      identity: 'Site identity',
      title: 'Business, Economy, Euro',
      introduction:
        'EU economy, finance and the euro, and practical information for EU businesses and entrepreneurs on product safety, environmental regulations, trade with non-EU countries and competition rules.',
      meta: {
        type: 'News article',
        date: '6 July 2015',
        timestamp: '2015-07-06T17:44:28+02:00',
        location: 'Brussels',
      },
    },
  },
};
