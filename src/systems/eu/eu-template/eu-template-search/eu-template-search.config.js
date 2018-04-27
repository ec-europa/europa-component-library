module.exports = {
  title: 'Search Page',
  label: 'Search Page',
  status: 'ready',
  preview: '@preview-full-page',
  tags: ['template'],
  context: {
    global: {
      language: 'en',
    },
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () {
          ECL.initExpandables('.ecl-expandable__button');
          ECL.dialogs({
            dialogOverlayId: 'ecl-overlay-language-list',
            triggerElementsSelector: '#ecl-lang-select-sites__overlay'
          });
        });
      `,
    },
  },
};
