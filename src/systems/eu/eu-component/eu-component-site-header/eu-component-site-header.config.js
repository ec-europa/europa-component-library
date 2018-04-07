const languages = require('../eu-component-language-list/languages.json');

module.exports = {
  title: 'Site headers',
  label: 'Site headers',
  status: 'ready',
  tags: ['organism'],
  context: {
    lang: 'en',
    site_switcher: {
      political: {
        href: 'https://example.com/',
        label: 'Commission and its priorities',
      },
      info: {
        href: 'https://example.com/',
        label: 'Policies, information and services',
        is_active: true,
      },
    },
    user_menu: {
      title: 'User menu',
      links: [
        { href: 'https://example.com/', label: 'My workbench' },
        { href: 'https://example.com/', label: 'My account' },
        { href: 'https://example.com/', label: 'Log out' },
      ],
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
