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
          href: 'https://europa.eu/european-union/index_en',
          label: 'Home',
        },
        {
          href: '../../example.html#',
          label: 'Example',
        },
        { label: 'Business, Economy, Euro' },
      ],
      identity: 'Site identity',
    },
  },
};
