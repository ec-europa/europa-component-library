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
          href: 'https://example.com/',
        },
        {
          label: 'Communities',
          href: 'https://example.com/',
          is_active: true,
          children_links: [
            {
              links: [
                {
                  label: 'Homepage',
                  href: 'https://example.com/',
                  is_active: true,
                },
                {
                  label: 'Articles',
                  href: 'https://example.com/',
                },
              ],
            },
            {
              links: [
                {
                  label: 'Events',
                  href: 'https://example.com/',
                },
                {
                  label: 'Media gallery',
                  href: 'https://example.com/',
                },
              ],
            },
          ],
        },
        {
          label: 'Events',
          href: 'https://example.com/',
        },
        {
          label: 'Galleries',
          href: 'https://example.com/',
        },
      ],
    },
    global: {
      language: 'en',
    },
  },
};
