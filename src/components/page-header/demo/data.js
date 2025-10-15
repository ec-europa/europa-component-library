const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Page title',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus, <a class="ecl-link" href="${exampleLink}">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis.`,
  meta: [
    'News article',
    '10 March 2025',
    {
      label: 'Brussels',
      icon: {
        name: 'location',
      },
    },
    {
      label: '1 minute read',
      icon: {
        name: 'clock',
      },
    },
    'Research Center',
  ],
  picture_thumbnail: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'Europe flag',
    },
  },
  picture_background: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
      alt: 'Europe map',
    },
  },
  expandable: {
    panel_id: 'page-header-expandable-panel-demo',
    title: 'political advertisement',
    description: 'The sponsor is Business Name',
    more: 'More info:',
    more_link: {
      link: {
        label: 'webpage link',
        path: '/example',
        external: true,
      },
    },
    toggle_label: 'expandable button',
    toggle_extra_attributes: [{ name: 'data-test-custom-toggle-attribute' }],
    separator: '–',
    lists: [
      {
        icon_list: true,
        divider: false,
        items: [
          {
            icon: {
              name: 'check-bold',
            },
            description:
              '(The sponsor is controlled by [either (a) business name of the legal entity or (b) name and surname of the natural person])',
          },
          {
            icon: {
              name: 'check-bold',
            },
            description:
              '(The advertisement is linked to [title and date of the election(s)] or [name of the legislative or regulatory initiative])',
          },
        ],
      },
    ],
  },
};
