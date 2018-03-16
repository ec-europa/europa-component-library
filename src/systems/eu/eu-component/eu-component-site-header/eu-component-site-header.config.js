const languages = require('../eu-component-language-list/languages.json');

module.exports = {
  title: 'Site headers',
  label: 'Site headers',
  status: 'ready',
  tags: ['organism'],
  context: {
    lang: 'en',
    site_switcher: {
      political: { href: '#', label: 'Commission and its priorities' },
      info: {
        href: '#',
        label: 'Policies, information and services',
        is_active: true,
      },
    },
    user_menu: {
      title: 'User menu',
      links: [
        { href: '#', label: 'My workbench' },
        { href: '#', label: 'My account' },
        { href: '#', label: 'Log out' },
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
