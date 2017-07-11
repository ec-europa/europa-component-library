module.exports = {
  title: 'Contextual navigations',
  label: 'Contextual navigations',
  status: 'planned',
  tags: ['molecule'],
  context: {
    _demo: {
      scripts: 'ECL.contextualNav();',
    },
    label: 'Label for contextual nav',
    items: [
      {
        target: '#',
        title: 'Item one',
      },
      {
        target: '#',
        title: 'Item two',
      },
      {
        target: '#',
        title: 'Item three',
      },
      {
        target: '#',
        title: 'Item four',
      },
    ],
    items_hidden: [
      {
        target: '#',
        title: 'Item five',
      },
      {
        target: '#',
        title: 'Item six',
      },
      {
        target: '#',
        title: 'Item seven',
      },
      {
        target: '#',
        title: 'Item eight',
      },
    ],
    button_more: 'More',
  },
};
