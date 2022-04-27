// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  divider: false,
  picture: {
    position: 'left',
    size: 'large',
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
      alt: 'Alt text of the image',
    },
    sources: [
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        media: '(min-width: 480px)',
        type: 'image/jpg',
      },
    ],
  },
  labels: [
    { label: 'highlight', variant: 'highlight' },
    { label: 'high importance', variant: 'high' },
  ],
  primary_meta: ['PRIMARY META', 'DD Month Year'],
  title: {
    type: 'standalone',
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
