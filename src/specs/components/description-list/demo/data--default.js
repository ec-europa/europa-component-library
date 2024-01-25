const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  more_label: 'See all items',
  visible_items: 2,
  items: [
    {
      term: 'Label 01',
      definition: `Descriptive text with <a href="${exampleLink}" class="ecl-link">inline link</a>`,
    },
    {
      term: 'Label 02',
      type: 'link',
      definition: [
        {
          link: {
            label: 'Standalone link',
            path: exampleLink,
          },
        },
      ],
    },
    {
      term: 'Label 03',
      definition:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      term: 'Label 04',
      type: 'link',
      definition: [
        {
          link: {
            label: 'Standalone link',
            path: exampleLink,
            external: true,
            icon_path: '/icons.svg',
          },
        },
      ],
    },
    {
      term: 'Label 05',
      type: 'link-inline',
      definition: [
        {
          link: {
            label: 'Standalone link 1',
            path: exampleLink,
          },
        },
        {
          link: {
            label: 'Standalone link 2',
            path: exampleLink,
          },
        },
        {
          link: {
            label: 'Standalone link 3',
            path: exampleLink,
          },
        },
        {
          link: {
            label: 'Standalone link 4',
            path: exampleLink,
          },
        },
      ],
    },
    {
      term: 'Label 06',
      type: 'link',
      definition: [
        {
          link: {
            label:
              'Very very very very very very very very very very very very veryveryveryvery long standalone link that wraps in multiple lines',
            path: exampleLink,
          },
        },
      ],
    },
    {
      term: 'Label 07',
      type: 'link',
      definition: [
        {
          link: {
            label: 'social network 1',
            path: exampleLink,
            icon_position: 'before',
          },
          icon: {
            name: 'facebook',
            path: '/icons-social-media.svg',
            size: 's',
          },
        },
        {
          link: {
            label: 'social network 2',
            path: exampleLink,
            icon_position: 'before',
          },
          icon: {
            name: 'twitter',
            path: '/icons-social-media.svg',
            size: 's',
          },
        },
        {
          link: {
            label: 'social network 3',
            path: exampleLink,
            icon_position: 'before',
          },
          icon: {
            name: 'mastodon',
            path: '/icons-social-media.svg',
            size: 's',
          },
        },
      ],
    },
    {
      term: 'Label 08',
      type: 'tag',
      definition: [
        { tag: { label: 'Link tag', path: exampleLink } },
        { tag: { label: 'Long link tag', path: exampleLink } },
        { tag: { label: 'Link tag', path: exampleLink } },
        { tag: { label: 'Link tag', path: exampleLink } },
        { tag: { label: 'Link tag', path: exampleLink } },
        { tag: { label: 'Long link tag', path: exampleLink } },
        { tag: { label: 'Link tag', path: exampleLink } },
      ],
    },
    {
      term: 'Label 09',
      type: 'taxonomy',
      definition: [
        'Taxonomy item',
        { link: { label: 'Taxonomy item', path: exampleLink } },
        'Taxonomy item',
        'Taxonomy item',
        { link: { label: 'Taxonomy item', path: exampleLink } },
        { link: { label: 'Taxonomy item', path: exampleLink } },
      ],
    },
  ],
};
