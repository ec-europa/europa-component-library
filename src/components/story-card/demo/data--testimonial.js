const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  variant: 'testimonial',
  title: 'Testimonials',
  id: 'story-card-testimonial-demo',
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
      role: 'Lawyer',
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
