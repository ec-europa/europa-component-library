module.exports = {
  title: 'Navigation menus',
  label: 'Menus',
  status: 'ready',
  tags: ['organism'],
  context: {
    homeLabel: 'Home',
    menuLabel: 'Menu',
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu('.ecl-navigation-menu__root');
        ECL.initExpandables('.ecl-navigation-menu__toggle');
      });`,
    },
  },
};
