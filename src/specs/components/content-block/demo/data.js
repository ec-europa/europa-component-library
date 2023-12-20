// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  labels_aria: 'Labels',
  primary_meta: ['PRIMARY META', 'DD Month Year'],
  title: {
    link: {
      type: 'standalone',
      label: 'Title',
      path: exampleLink,
    },
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
          term: 'Standalone links',
          type: 'link',
          definition: [
            {
              link: {
                label: 'Lorem ipsum dolor sit amet',
                path: exampleLink,
                icon_position: 'before',
              },
            },
            {
              link: {
                label: 'Lorem ipsum dolor sit amet',
                path: exampleLink,
                icon_position: 'before',
              },
            },
          ],
        },
        {
          term: 'Standard text',
          definition: `Lorem ipsum dolor sit amet, <a href="${exampleLink}" class="ecl-link">consectetur adipiscing elit</a>.`,
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
