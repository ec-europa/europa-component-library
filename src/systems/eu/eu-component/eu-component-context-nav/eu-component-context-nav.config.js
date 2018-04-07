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
        href: 'https://example.com/',
        label: 'Item one',
      },
      {
        href: 'https://example.com/',
        label: 'Item two',
      },
      {
        href: 'https://example.com/',
        label: 'Item three',
      },
      {
        href: 'https://example.com/',
        label: 'Item four',
      },
      {
        href: 'https://example.com/',
        label: 'Item five',
      },
      {
        href: 'https://example.com/',
        label: 'Item six',
      },
      {
        href: 'https://example.com/',
        label: 'Item seven',
      },
    ],
  },
};
