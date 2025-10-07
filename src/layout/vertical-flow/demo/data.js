// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    {
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
        { label: 'high', variant: 'high' },
      ],
      labels_aria: 'Labels',
    },
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      title: {
        link: {
          type: 'standalone',
          label: 'Title 2',
          path: exampleLink,
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
          alt: 'card image',
        },
      },
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.',
      primary_meta: ['PRIMARY META', 'DD Month Year'],
      title: {
        link: {
          type: 'standalone',
          label: 'Title 3',
          path: exampleLink,
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
          alt: 'card image',
        },
      },
      labels: [
        { label: 'highlight', variant: 'highlight' },
        { label: 'high', variant: 'high' },
      ],
      labels_aria: 'Labels',
    },
    {
      primary_meta: ['PRIMARY META', 'DD Month Year'],
      title: {
        link: {
          type: 'standalone',
          label: 'Title 4',
          path: exampleLink,
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
          alt: 'card image',
        },
      },
      labels: [{ label: 'highlight', variant: 'highlight' }],
      labels_aria: 'Labels',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.',
      primary_meta: ['PRIMARY META', 'DD Month Year'],
      title: {
        link: {
          type: 'standalone',
          label: 'Title 5',
          path: exampleLink,
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',
          alt: 'card image',
        },
      },
      labels: [
        { label: 'highlight', variant: 'highlight' },
        { label: 'high', variant: 'high' },
      ],
      labels_aria: 'Labels',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.',
      primary_meta: ['PRIMARY META', 'DD Month Year'],
      title: {
        link: {
          type: 'standalone',
          label: 'Title 6',
          path: exampleLink,
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
          alt: 'card image',
        },
      },
      labels: [
        { label: 'highlight', variant: 'highlight' },
        { label: 'high', variant: 'high' },
      ],
      labels_aria: 'Labels',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.',
      primary_meta: ['PRIMARY META', 'DD Month Year'],
      title: {
        link: {
          type: 'standalone',
          label: 'Title 7',
          path: exampleLink,
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
          alt: 'card image',
        },
      },
    },
  ],
};
