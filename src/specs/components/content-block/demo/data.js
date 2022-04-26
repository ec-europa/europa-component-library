// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  primary_meta: ['PRIMARY META', 'DD Month Year'],
  title: {
    label: 'Title',
    path: exampleLink,
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
  secondary_meta: [
    {
      icon: {
        name: 'calendar',
        size: 'xs',
        path: '/icons.svg',
      },
      label: '2018/10/22',
    },
    {
      icon: {
        name: 'location',
        size: 'xs',
        path: '/icons.svg',
      },
      label: 'Luxembourg',
    },
  ],
  tags: [
    {
      tag: { label: 'tag 1', path: exampleLink },
    },
    {
      tag: { label: 'tag 2', path: exampleLink },
    },
    {
      tag: { label: 'tag 3', path: exampleLink },
    },
  ],
  links: [
    [
      {
        link: {
          label: 'Primary link 1',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Primary link 2',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Primary link 3',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Primary link 4',
          path: exampleLink,
        },
      },
    ],
    [
      {
        link: {
          label: 'Secondary link 1',
          path: exampleLink,
        },
      },
      {
        link: {
          label: 'Secondary link 2',
          path: exampleLink,
        },
      },
    ],
  ],
  lists: [
    {
      items: [
        {
          term: 'Standard text',
          definition:
            'Lorem ipsum dolor sit amet, <a href="#" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis',
        },
        {
          term: 'Standalone links',
          type: 'link',
          definition: [
            {
              link: {
                label: 'Lorem ipsum dolor sit amet',
                path: exampleLink,
                icon_position: 'before',
              },
              icon: {
                name: 'copy',
                path: '/icons.svg',
                size: 's',
              },
            },
            {
              link: {
                label: 'Lorem ipsum dolor sit amet',
                path: exampleLink,
                icon_position: 'before',
              },
              icon: {
                name: 'download',
                path: '/icons.svg',
                size: 's',
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
          ],
        },
        {
          term: 'Taxonomy list',
          type: 'taxonomy',
          definition: ['Taxonomy item 1', 'Taxonomy item 2', 'Taxonomy item 3'],
        },
      ],
    },
  ],
};
