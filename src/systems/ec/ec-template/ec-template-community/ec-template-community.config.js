module.exports = {
  title: 'Communities',
  label: 'Communities',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    menu: {
      menu_aria_label: 'Main Navigation',
      menu_label: 'Menu',
      links: [
        {
          label: 'Home',
          href: '#',
        },
        {
          label: 'Communities',
          href: '#',
          is_active: true,
          children_links: [
            {
              links: [
                {
                  label: 'Homepage',
                  href: '#',
                  is_active: true,
                },
                {
                  label: 'Articles',
                  href: '#',
                },
              ],
            },
            {
              links: [
                {
                  label: 'Events',
                  href: '#',
                },
                {
                  label: 'Media gallery',
                  href: '#',
                },
              ],
            },
          ],
        },
        {
          label: 'Events',
          href: '#',
        },
        {
          label: 'Galleries',
          href: '#',
        },
      ],
    },
    global: {
      language: 'en',
    },
  },
};
