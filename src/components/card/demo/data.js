// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
  primary_meta: ['PRIMARY META', 'DD Month Year'],
  title: {
    link: {
      type: 'standalone',
      label: 'Title',
      path: exampleLink,
    },
  },
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'card image',
    },
  },
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  labels_aria: 'Labels',
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
