module.exports = {
  title: 'Horizontal menus',
  label: 'Horizontal menus',
  status: 'ready',
  tags: ['organism'],
  context: {
    homeLabel: 'Home',
    menuLabel: 'Menu',
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu('.ecl-horizontal-menu__root');
        ECL.initExpandables('.ecl-horizontal-menu__toggle');
      });`,
    },
  },
};
