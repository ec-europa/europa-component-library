const languages = require('../ec-component-language-list/languages.json');

module.exports = {
  title: 'Site headers',
  label: 'Site headers',
  status: 'ready',
  tags: ['organism'],
  context: {
    // User menu is hidden until further notice
    /*
    user_menu: {
      title: 'User menu',
      links: [
        { href: '../../example.html#', label: 'My workbench' },
        { href: '../../example.html#', label: 'My account' },
        { href: '../../example.html#', label: 'Log out' },
      ],
    },
    */
    global: {
      language: 'en',
    },
    languages,
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
