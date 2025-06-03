const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    {
      toggle_collapsed: 'Show %d more items',
      toggle_expanded: 'Hide %d items',
      hide: {
        from: 5,
        to: -2,
      },
      headline: {
        label: 'Headline',
        title: 'Headline title',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu metus risus.',
      },
      items: [
        {
          label: 'Item 1 label',
          title: 'Item 1 title',
          content: 'Nulla vel mattis justo',
        },
        {
          label: 'Item 2 label',
          content: 'Etiam tempus augue mi, in tincidunt dolor tincidunt id',
        },
        {
          label: 'Item 3 label',
          content:
            'Suspendisse venenatis condimentum turpis, in lobortis ante finibus nec. Morbi consequat purus in nulla facilisis lacinia.',
        },
        {
          title: 'Item 4 title',
          content: `<a href="${exampleLink}" class="ecl-link">Nulla finibus eleifend felis</a>`,
        },
        {
          content:
            'Suspendisse varius neque at nunc auctor, vel dictum purus pellentesque. Etiam ac ex mi. Fusce sed posuere ligula, sed malesuada nisl. Nulla elementum condimentum nunc at bibendum',
        },
        {
          label: 'Item 6 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 7 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 8 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 9 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 10 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 11 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 12 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 13 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 14 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 15 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
      ],
    },
  ],
};
