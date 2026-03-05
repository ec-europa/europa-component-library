const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    'Item 1',
    {
      card: {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
      },
    },
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
  ],
};
