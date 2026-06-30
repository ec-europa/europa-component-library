const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  variant: 'testimonial',
  items: [
    {
      id: 'story-card-1',
      picture: {
        img: {
          src: 'https://i.pravatar.cc/800?img=18',
          alt: 'Story card example 1',
        },
        sources: [
          {
            src: 'https://i.pravatar.cc/800?img=18',
            media: '(max-width: 50rem)',
          },
        ],
      },
      teaser_label: 'RICHARD FELIX',
      author: 'Richard Felix',
      role: 'Lawier',
      source: 'Published on The Observer',
      title:
        'You can do the same by producing your own electricity and sharing it local',
      card_link: {
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
          src: 'https://i.pravatar.cc/800?img=17',
          alt: 'Story card example 2',
        },
      },
      teaser_label: 'MARCUS LENNARD',
      author: 'Marcus Lennard',
      role: 'Commissioner',
      source: 'Published on The Guardian',
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
        },
      },
    },
    {
      id: 'story-card-3',
      picture: {
        img: {
          src: 'https://i.pravatar.cc/800?img=32',
          alt: 'Story card example 3',
        },
      },
      teaser_label: 'RENATA BEER',
      title:
        'You can do the same by producing your own electricity and sharing it local',
      author: 'Renata Beer',
      role: 'Commissioner',
      source: 'Published on The Guardian',
      card_link: {
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
          src: 'https://i.pravatar.cc/800?img=47n',
          alt: 'Story card example 4',
        },
      },
      teaser_label: 'DEBBY STARK',
      title:
        'You can do the same by producing your own electricity and sharing it local',
      author: 'Derby Stark',
      role: 'Consultant',
      source: 'Published on The Times',
      card_link: {
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
