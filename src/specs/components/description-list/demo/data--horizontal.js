const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  variant: 'horizontal',
  more_label: 'See all items',
  visible_items: 0,
  items: [
    {
      term: 'Standard text',
      definition: `Lorem ipsum dolor sit amet, <a href="${exampleLink}" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis`,
    },
    {
      term: 'External standalone link',
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
      term: 'Links inline',
      type: 'link-inline',
      definition: [
        {
          link: {
            label: 'Lorem ipsum dolor sit amet',
            path: exampleLink,
          },
        },
        {
          link: {
            label: 'Lorem ipsum dolor sit amet',
            path: exampleLink,
          },
        },
        {
          link: {
            label: 'Lorem ipsum dolor sit amet',
            path: exampleLink,
          },
        },
        {
          link: {
            label: 'Lorem ipsum dolor sit amet',
            path: exampleLink,
          },
        },
      ],
    },
    {
      term: 'Socials',
      type: 'link',
      definition: [
        {
          link: {
            label: 'facebook',
            path: exampleLink,
            icon_position: 'before',
          },
          icon: {
            name: 'facebook-color',
            path: '/icons-social-media.svg',
            size: 's',
          },
        },
        {
          link: {
            label: 'twitter',
            path: exampleLink,
            icon_position: 'before',
          },
          icon: {
            name: 'twitter-color',
            path: '/icons-social-media.svg',
            size: 's',
          },
        },
        {
          link: {
            label: 'mastodon',
            path: exampleLink,
            icon_position: 'before',
          },
          icon: {
            name: 'mastodon-color',
            path: '/icons-social-media.svg',
            size: 's',
          },
        },
      ],
    },
    {
      term: 'Taxonomy list',
      type: 'taxonomy',
      definition: [
        'Taxonomy item 1',
        { link: { label: 'Taxonomy item 2', path: exampleLink } },
        'Taxonomy item 3',
        'Taxonomy item 4',
        { link: { label: 'Taxonomy item 5', path: exampleLink } },
      ],
    },
  ],
};
