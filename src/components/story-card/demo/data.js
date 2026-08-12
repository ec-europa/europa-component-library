const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  variant: 'story',
  title: 'Stories',
  id: 'story-card-demo',
  description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt.`,
  sr_prev: 'Previous story',
  sr_next: 'Next story',
  sr_play: 'Play story cards',
  sr_pause: 'Pause story cards',
  items: [
    {
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
      teaser_label: 'why twelve',
      title:
        'The European flag is one of the most recognised symbols in Europe.',
      description:
        'It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union.',
      card_link: {
        link: {
          label: 'Read more',
          path: exampleLink,
        },
        icon: {
          name: 'arrow-right',
          size: 'xs',
          family: 'phosphor',
        },
      },
    },
    {
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
          alt: 'Story card example 2',
        },
      },
      teaser_label: 'for everyone',
      title:
        'You can do the same by producing your own electricity and sharing it local.',
      card_link: {
        link: {
          label: 'Read more',
          path: exampleLink,
        },
        icon: {
          name: 'arrow-right',
          size: 'xs',
          family: 'phosphor',
        },
      },
    },
    {
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
          alt: 'Story card example 3',
        },
      },
      teaser_label: 'the design',
      title:
        'You can do the same by producing your own electricity and sharing it local',
      description:
        'It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union.',
    },
    {
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
          alt: 'Story card example 4',
        },
      },
      teaser_label: 'across europe',
      title:
        'You can do the same by producing your own electricity and sharing it local',
      description:
        'Programs designed to improve quality of life across Europe. From healthcare initiatives to social support systems, see how the EU is investing in its citizens.',
      card_link: {
        link: {
          label: 'Read more',
          path: exampleLink,
        },
        icon: {
          name: 'arrow-right',
          size: 'xs',
          family: 'phosphor',
        },
      },
    },
  ],
};
