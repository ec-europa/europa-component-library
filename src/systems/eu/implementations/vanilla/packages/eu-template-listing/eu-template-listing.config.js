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
          label: 'Home',
        },
        {
          href: '../../example.html#',
          label: 'Example',
        },
        { label: 'Business, Economy, Euro' },
      ],
      identity: 'Digital single market',
    },
  },
};
