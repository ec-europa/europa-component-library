module.exports = {
  title: 'Contextual navigations',
  label: 'Contextual navigations',
  status: 'ready',
  tags: ['atom'],
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () { ECL.contextualNavs(); });`,
    },
    label: 'Label for contextual nav',
    items: [
      {
        href: '#',
        label: 'Item one',
        variant: 'standalone',
      },
      {
        href: '#',
        label: 'Item two',
        variant: 'standalone',
      },
      {
        href: '#',
        label: 'Item three',
        variant: 'standalone',
      },
      {
        href: '#',
        label: 'Item four',
        variant: 'standalone',
      },
      {
        href: '#',
        label: 'Item five',
        variant: 'standalone',
      },
      {
        href: '#',
        label: 'Item six',
        variant: 'standalone',
      },
      {
        href: '#',
        label: 'Item seven',
        variant: 'standalone',
      },
    ],
  },
};
