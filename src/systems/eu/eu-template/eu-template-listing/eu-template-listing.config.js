module.exports = {
  title: 'Listings page',
  label: 'Listings page',
  status: 'ready',
  tags: ['template'],
  context: {
    global: {
      language: 'en',
    },
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () {
          ECL.dialogs({
            dialogOverlayId: 'ecl-overlay-language-list',
            triggerElementsSelector: '#ecl-lang-select-sites__overlay'
          });
        });
      `,
    },
    page_header: {
      breadcrumb: [
        {
          href: 'https://ec.europa.eu/commission/index_en',
          label: 'European Commission',
        },
        {
          href: '../../example.html#',
          label: 'Example',
        },
      ],
      identity: 'Digital single market',
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
