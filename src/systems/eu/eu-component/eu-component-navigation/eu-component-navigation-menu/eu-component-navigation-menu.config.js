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
        label: 'Policy',
        href: '#item1',
        is_active: true,
        children_links: [
          {
            links: [
              {
                label: 'Sub item 1',
                href: '#item1-1-1',
              },
              {
                label: 'Sub item 2 with a very very very (very) long label',
                href: '#item1-1-2',
              },
              {
                label: 'Sub item 3',
                href: '#item1-1-3',
              },
              {
                label: 'Sub item 4',
                href: '#item1-1-4',
                is_active: true,
              },
              {
                label: 'Sub item 5',
                href: '#item1-1-5',
              },
            ],
          },
          {
            links: [
              {
                label: 'Sub item 1',
                href: '#item1-2-1',
              },
              {
                label: 'Sub item 2',
                href: '#item1-2-2',
              },
              {
                label: 'Sub item 3',
                href: '#item1-2-3',
              },
              {
                label: 'Sub item 4',
                href: '#item1-2-4',
              },
              {
                label: 'Sub item 5',
                href: '#item1-2-5',
              },
            ],
          },
          {
            links: [
              {
                label: 'Sub item 1',
                href: '#item1-3-1',
              },
              {
                label: 'Sub item 2',
                href: '#item1-3-2',
              },
              {
                label: 'Sub item 3',
                href: '#item1-3-3',
              },
              {
                label: 'Sub item 4',
                href: '#item1-3-4',
              },
              {
                label: 'Sub item 5',
                href: '#item1-3-5',
              },
            ],
          },
          {
            links: [
              {
                label: 'Sub item 1',
                href: '#item1-4-1',
              },
              {
                label: 'Sub item 2',
                href: '#item1-4-2',
              },
              {
                label: 'Sub item 3',
                href: '#item1-4-3',
              },
              {
                label: 'Sub item 4',
                href: '#item1-4-4',
              },
              {
                label: 'Sub item 5',
                href: '#item1-4-5',
              },
            ],
          },
        ],
      },
      {
        label: 'Advisor Bodies',
        href: '#item2',
        children_links: [
          {
            title: 'Optional title 1',
            links: [
              {
                label: 'Sub item 1',
                href: '#item2-1-1',
              },
              {
                label: 'Sub item 2 with a very very very (very) long label',
                href: '#item2-1-2',
              },
              {
                label: 'Sub item 3',
                href: '#item2-1-3',
              },
              {
                label: 'Sub item 4',
                href: '#item2-1-4',
              },
              {
                label: 'Sub item 5',
                href: '#item2-1-5',
              },
            ],
          },
          {
            title: 'Optional title 2',
            links: [
              {
                label: 'Sub item 1',
                href: '#item2-2-1',
              },
              {
                label: 'Sub item 2',
                href: '#item2-2-2',
              },
              {
                label: 'Sub item 3',
                href: '#item2-2-3',
              },
              {
                label: 'Sub item 4',
                href: '#item2-2-4',
              },
              {
                label: 'Sub item 5',
                href: '#item2-2-5',
              },
            ],
          },
        ],
      },
      {
        label: 'News & Events',
        href: '#item3',
        children_links: [
          {
            title: 'Optional title 1',
            links: [
              {
                label: 'Sub item 1',
                href: '#item3-1-1',
              },
              {
                label: 'Sub item 2 with a very very very (very) long label',
                href: '#item3-1-2',
              },
              {
                label: 'Sub item 3',
                href: '#item3-1-3',
              },
              {
                label: 'Sub item 4',
                href: '#item3-1-4',
              },
              {
                label: 'Sub item 5',
                href: '#item3-1-5',
              },
            ],
          },
          {
            title: 'Optional title 2',
            links: [
              {
                label: 'Sub item 1',
                href: '#item3-2-1',
              },
              {
                label: 'Sub item 2',
                href: '#item3-2-2',
              },
              {
                label: 'Sub item 3',
                href: '#item3-2-3',
              },
              {
                label: 'Sub item 4',
                href: '#item3-2-4',
              },
              {
                label: 'Sub item 5',
                href: '#item3-2-5',
              },
            ],
          },
          {
            title: 'Optional title 3',
            links: [
              {
                label: 'Sub item 1',
                href: '#item3-3-1',
              },
              {
                label: 'Sub item 2',
                href: '#item3-3-2',
              },
              {
                label: 'Sub item 3',
                href: '#item3-3-3',
              },
              {
                label: 'Sub item 4',
                href: '#item3-3-4',
              },
              {
                label: 'Sub item 5',
                href: '#item3-3-5',
              },
            ],
          },
        ],
      },
      {
        label: 'Contracts and Fundings',
        href: '#item4',
        children_links: [
          {
            title: 'Optional title 1',
            links: [
              {
                label: 'Sub item 1',
                href: '#item4-1-1',
              },
              {
                label: 'Sub item 2 with a very very very (very) long label',
                href: '#item4-1-2',
              },
              {
                label: 'Sub item 3',
                href: '#item4-1-3',
              },
              {
                label: 'Sub item 4',
                href: '#item4-1-4',
              },
              {
                label: 'Sub item 5',
                href: '#item4-1-5',
              },
            ],
          },
          {
            title: 'Optional title 2',
            links: [
              {
                label: 'Sub item 1',
                href: '#item4-2-1',
              },
              {
                label: 'Sub item 2',
                href: '#item4-2-2',
              },
              {
                label: 'Sub item 3',
                href: '#item4-2-3',
              },
              {
                label: 'Sub item 4',
                href: '#item4-2-4',
              },
              {
                label: 'Sub item 5',
                href: '#item4-2-5',
              },
            ],
          },
          {
            title: 'Optional title 3',
            links: [
              {
                label: 'Sub item 1',
                href: '#item4-3-1',
              },
              {
                label: 'Sub item 2',
                href: '#item4-3-2',
              },
              {
                label: 'Sub item 3',
                href: '#item4-3-3',
              },
              {
                label: 'Sub item 4',
                href: '#item4-3-4',
              },
              {
                label: 'Sub item 5',
                href: '#item4-3-5',
              },
            ],
          },
          {
            title: 'Optional title 4',
            links: [
              {
                label: 'Sub item 1',
                href: '#item4-4-1',
              },
              {
                label: 'Sub item 2',
                href: '#item4-4-2',
              },
              {
                label: 'Sub item 3',
                href: '#item4-4-3',
              },
              {
                label: 'Sub item 4',
                href: '#item4-4-4',
              },
              {
                label: 'Sub item 5',
                href: '#item4-4-5',
              },
            ],
          },
        ],
      },
    ],
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu();
      });`,
    },
  },
};
