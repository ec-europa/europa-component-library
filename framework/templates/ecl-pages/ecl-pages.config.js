module.exports = {
  title: 'Pages',
  label: 'Pages',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    global: {
      language: 'en',
    },
  },
  default: 'simple',
  variants: [
    {
      name: 'simple',
      label: 'Simple',
      context: {
        page_header: {
          breadcrumb: [
            {
              target: 'http://europa.eu/index_en.htm',
              title: 'European Commission',
            },
            { target: '#', title: 'Example' },
          ],
          identity: 'Digital single market',
          title: 'Business, Economy, Euro',
          introduction:
            'EU economy, finance and the euro, and practical information for EU businesses and entrepreneurs on product safety, environmental regulations, trade with non-EU countries and competition rules.',
          paragraph_class: 'ecl-paragraph ecl-paragraph--l',
          metas: ['News article', '6 July 2015', 'Brussels'],
        },
      },
    },
    {
      name: 'with-menu',
      label: 'Page with menu',
      context: {
        page_header: {
          breadcrumb: [
            {
              target: 'http://europa.eu/index_en.htm',
              title: 'European Commission',
            },
            { target: '#', title: 'Example' },
          ],
          identity: 'Digital single market',
        },
        menu: {
          menu_label: 'Menu',
          menu_aria_label: 'Main Navigation',
          links: [
            {
              label: 'Home',
              href: '#home',
              is_active: true,
            },
            {
              label: 'Item 1',
              href: '#item1',
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
              ],
            },
          ],
        },
        _demo: {
          scripts: `document.addEventListener('DOMContentLoaded', function () {
            ECL.megamenu();
          });`,
        },
      },
    },
  ],
};
