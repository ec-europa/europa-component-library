const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    {
      toggle_collapsed: 'Show %d more items',
      toggle_expanded: 'Show less',
      hide: {
        from: 5,
        to: 0,
      },
      headline: {
        label: '2025',
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
          title: 'Item 2 title',
          content: 'Etiam tempus augue mi, in tincidunt dolor tincidunt id',
        },
        {
          label: 'Item 3 label',
          title: 'Item 3 title',
          content:
            'Suspendisse venenatis condimentum turpis, in lobortis ante finibus nec. Morbi consequat purus in nulla facilisis lacinia.',
        },
        {
          title: 'Item 4 title',
          content: `<a href="${exampleLink}" class="ecl-link">Nulla finibus eleifend felis</a>`,
        },
        {
          title: 'Item 5 title',
          content:
            'Suspendisse varius neque at nunc auctor, vel dictum purus pellentesque. Etiam ac ex mi. Fusce sed posuere ligula, sed malesuada nisl. Nulla elementum condimentum nunc at bibendum',
        },
        {
          label: 'Item 6 label',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          title: 'Item 7 title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 9 label',
          title: 'Item 9 title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 10 label',
          title: 'Item 10 title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 11 label',
          title: 'Item 11 title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 12 label',
          title: 'Item 12 title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 13 label',
          title: 'Item 13 title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 14 label',
          title: 'Item 14 title',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: 'Item 15 label',
          title: 'Item 15 title',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros est, sodales eu eleifend sit amet, luctus eu arcu. Aenean tincidunt nulla at ante mollis, ut vulputate purus volutpat.',
        },
      ],
    },
  ],
};
