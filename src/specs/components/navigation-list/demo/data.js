// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    {
      image: {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        alt: 'Alt text of the image',
      },
      title: {
        link: {
          type: 'standalone',
          label: 'Title 1',
          path: exampleLink,
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
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
          'A simple string',
          {
            link: {
              label: 'Primary link 3',
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
    },
    {
      image: {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        alt: 'Alt text of the image',
      },
      title: {
        link: {
          type: 'standalone',
          label: 'Title 2',
          path: exampleLink,
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
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
    },
    {
      image: {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        alt: 'Alt text of the image',
      },
      title: {
        link: {
          type: 'standalone',
          label: 'Title 3',
          path: exampleLink,
        },
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus',
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
    },
  ],
};
