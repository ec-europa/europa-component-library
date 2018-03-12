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
      },
      {
        href: '#',
        label: 'Item two',
      },
      {
        href: '#',
        label: 'Item three',
      },
      {
        href: '#',
        label: 'Item four',
      },
      {
        href: '#',
        label: 'Item five',
      },
      {
        href: '#',
        label: 'Item six',
      },
      {
        href: '#',
        label: 'Item seven',
      },
    ],
  },
};
