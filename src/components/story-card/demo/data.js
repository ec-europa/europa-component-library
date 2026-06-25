const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  items: [
    {
      id: 'story-card-1',
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Story card example 1',
        },
        sources: [
          {
            src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
            media: '(max-width: 50rem)',
          },
        ],
      },
      title: 'RICHARD FELIX',
      description:
        'The European Green Deal is a set of policy initiatives aimed at making Europe climate neutral by 2050. Learn about the key commitments and how they will transform our economy.',
      link: {
        link: {
          label: 'Read more',
          path: exampleLink,
        },
        icon: {
          name: 'arrow-right',
          size: 'xs',
        },
      },
    },
    {
      id: 'story-card-2',
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
          alt: 'Story card example 2',
        },
      },
      title: 'MARCUS LENNARD',
      description:
        'Discover how digital innovation is reshaping the European landscape. From 5G connectivity to artificial intelligence, explore the technologies that will define the next decade.',
      link: {
        link: {
          label: 'Read more',
          path: exampleLink,
        },
        icon: {
          name: 'arrow-right',
          size: 'xs',
        },
      },
    },
    {
      id: 'story-card-3',
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
          alt: 'Story card example 3',
        },
      },
      title: 'RENATA BEER',
      description:
        'The EU invests in innovative startups across the continent. Explore funding opportunities and success stories from entrepreneurs transforming their visions into reality.',
      link: {
        link: {
          label: 'Read more',
          path: exampleLink,
        },
        icon: {
          name: 'arrow-right',
          size: 'xs',
        },
      },
    },
    {
      id: 'story-card-4',
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
          alt: 'Story card example 4',
        },
      },
      title: 'DEBBY STARK',
      description:
        'Programs designed to improve quality of life across Europe. From healthcare initiatives to social support systems, see how the EU is investing in its citizens.',
      link: {
        link: {
          label: 'Read more',
          path: exampleLink,
        },
        icon: {
          name: 'arrow-right',
          size: 'xs',
        },
      },
    },
  ],
};
