const languages = require('../eu-component-language-list/languages.json');

module.exports = {
  title: 'Site headers',
  label: 'Site headers',
  status: 'ready',
  tags: ['organism'],
  context: {
    languages,
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
