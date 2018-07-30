module.exports = {
  title: 'Communities',
  label: 'Communities',
  status: 'ready',
  tags: ['template'],
  context: {
    menu: {
      menu_aria_label: 'Main Navigation',
      menu_label: 'Menu',
      links: [
        {
          label: 'Home',
          href: '../../example.html#',
        },
        {
          label: 'Communities',
          href: '../../example.html#',
          is_active: true,
          children_links: [
            {
              links: [
                {
                  label: 'Homepage',
                  href: '../../example.html#',
                  is_active: true,
                },
                {
                  label: 'Articles',
                  href: '../../example.html#',
                },
              ],
            },
            {
              links: [
                {
                  label: 'Events',
                  href: '../../example.html#',
                },
                {
                  label: 'Media gallery',
                  href: '../../example.html#',
                },
              ],
            },
          ],
        },
        {
          label: 'Events',
          href: '../../example.html#',
        },
        {
          label: 'Galleries',
          href: '../../example.html#',
        },
      ],
    },
    global: {
      language: 'en',
    },
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
