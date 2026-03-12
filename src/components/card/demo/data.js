// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  primary_meta: ['Meta Info', 'DD Month YYYY'],
  title: {
    link: {
      type: 'standalone',
      label:
        'Title: Lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing.',
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
    { label: 'Highlight', variant: 'highlight' },
    { label: 'Medium', variant: 'medium' },
  ],
  labels_aria: 'Labels',
  secondary_meta: [
    {
      icon: {
        name: 'calendar',
        size: 'xs',
      },
      label: 'List Icon Element',
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
                label: 'Lorem ipsum dolor',
                path: exampleLink,
                icon_position: 'before',
              },
            },
            {
              link: {
                label: 'Lorem ipsum dolor',
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
                label: 'Lorem ipsum dolor',
                path: exampleLink,
              },
            },
            {
              link: {
                label: 'Lorem ipsum dolor',
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
