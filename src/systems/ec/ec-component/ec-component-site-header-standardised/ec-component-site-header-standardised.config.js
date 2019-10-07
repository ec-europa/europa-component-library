const languages = require('../ec-component-language-list/languages.json');

module.exports = {
  title: 'Site headers - standardised',
  label: 'Site headers - standardised',
  status: 'ready',
  tags: ['organism'],
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
  },
};
