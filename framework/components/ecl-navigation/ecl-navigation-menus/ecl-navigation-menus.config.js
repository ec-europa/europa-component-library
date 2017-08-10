module.exports = {
  title: 'Navigation menus',
  label: 'Menus',
  status: 'ready',
  tags: ['organism'],
  context: {
    menu_label: 'Menu',
    menu_aria_label: 'Main Navigation',
    links: [
      {
        label: 'Home',
        href: '#home',
      },
      {
        label: 'Item 1',
        href: '#item1',
        is_active: true,
        children_links: [
          {
            label: 'Item 1.1',
            href: '#item1-1',
          },
          {
            label: 'Item 1.2',
            href: '#item1-2',
          },
          {
            label: 'Item 1.3',
            href: '#item1-3',
          },
          {
            label: 'Item 1.4',
            href: '#item1-4',
            is_active: true,
          },
          {
            label: 'Item 1.5',
            href: '#item1-5',
          },
          {
            label: 'Item 1.6',
            href: '#item1-6',
          },
        ],
      },
      {
        label: 'Item 2',
        href: '#item2',
        children_links: [
          {
            label: 'Item 2.1',
            href: '#item2-1',
          },
          {
            label: 'Item 2.2',
            href: '#item2-2',
          },
          {
            label: 'Item 2.3',
            href: '#item2-3',
          },
          {
            label: 'Item 2.4',
            href: '#item2-4',
          },
          {
            label: 'Item 2.5',
            href: '#item2-5',
          },
          {
            label: 'Item 2.6',
            href: '#item2-6',
          },
        ],
      },
      {
        label: 'Item 3',
        href: '#item3',
      },
    ],
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu('.ecl-navigation-menu__root');
        ECL.initExpandables('.ecl-navigation-menu__toggle');
      });`,
    },
  },
};
