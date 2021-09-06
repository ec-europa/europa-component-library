const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  heading: {
    label: 'News, Events and Publications',
  },
  contentItems: [
    {
      meta: {
        label: 'NEWS ARTICLE | 24 March 2020',
      },
      title: {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        href: exampleLink,
      },
      images: {
        position: 'right',
        mobile: {
          alt: 'Example image',
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        },
        desktop: {
          alt: 'Example image',
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        },
      },
    },
    {
      meta: {
        label: 'NEWS ARTICLE | 02 March 2020',
      },
      title: {
        label:
          'Vivamus aliquet tellus sodales lectus vulputate, vitae ullamcorper magna vehicula. Aenean interdum ornare risus non ornare. Mauris a sagittis mi',
        href: exampleLink,
      },
      images: {
        position: 'right',
        mobile: {
          alt: 'Example image',
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
        },
        desktop: {
          alt: 'Example image',
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
        },
      },
    },
    {
      meta: {
        label: 'NEWS ARTICLE | 17 February 2020',
      },
      title: {
        label:
          'Morbi nisl sem, imperdiet a sapien condimentum, ultricies mollis libero. Curabitur pharetra condimentum tellus',
        href: exampleLink,
      },
      images: {
        position: 'right',
        mobile: {
          alt: 'Example image',
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
        },
        desktop: {
          alt: 'Example image',
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
        },
      },
    },
  ],
  link: {
    label: 'All news',
    href: exampleLink,
    icon: {
      shape: 'ui--corner-arrow',
      transform: 'rotate-90',
      size: 'fluid',
    },
  },
  cards: [
    {
      title: {
        label: 'Events',
        href: exampleLink,
        variant: 'standalone',
      },
      description: 'Upcoming events organized by the European Commission',
    },
    {
      title: {
        label: 'Publications',
        href: exampleLink,
        variant: 'standalone',
      },
      description:
        'Search documents and statistics. Access EU Publication Office and law database.',
    },
  ],
};
