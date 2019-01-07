module.exports = {
  menu_label: 'Menu',
  menu_aria_label: 'Main Navigation',
  links: [
    {
      label: 'Home',
      href: '../../example.html#home',
    },
    {
      label: 'Item 1',
      href: '../../example.html#item1',
      is_active: true,
      children_links: [
        {
          label: 'Item 1.1',
          href: '../../example.html#item1-1',
        },
        {
          label: 'Item 1.2',
          href: '../../example.html#item1-2',
        },
        {
          label: 'Item 1.3',
          href: '../../example.html#item1-3',
          children_links: [
            {
              label: 'Item 1.3.1',
              href: '../../example.html#item1-3-1',
            },
            {
              label: 'Item 1.3.2',
              href: '../../example.html#item1-3-2',
            },
          ],
        },
        {
          label: 'Item 1.4',
          href: '../../example.html#item1-4',
          is_active: true,
        },
        {
          label: 'Item 1.5',
          href: '../../example.html#item1-5',
        },
        {
          label: 'Item 1.6',
          href: '../../example.html#item1-6',
        },
      ],
    },
    {
      label: 'Item 2',
      href: '../../example.html#item2',
      children_links: [
        {
          label: 'Item 2.1',
          href: '../../example.html#item2-1',
        },
        {
          label: 'Item 2.2',
          href: '../../example.html#item2-2',
        },
        {
          label: 'Item 2.3',
          href: '../../example.html#item2-3',
        },
        {
          label: 'Item 2.4',
          href: '../../example.html#item2-4',
        },
        {
          label: 'Item 2.5',
          href: '../../example.html#item2-5',
        },
        {
          label: 'Item 2.6',
          href: '../../example.html#item2-6',
        },
      ],
    },
    {
      label: 'Item 3',
      href: '../../example.html#item3',
    },
  ],
  _demo: {
    scripts: `document.addEventListener('DOMContentLoaded', function () {
      ECL.initExpandables('.ecl-expandable__button');
      ECL.initExpandables('.ecl-side-navigation__toggle');
      ECL.navigationSide();
    });`,
  },
};
