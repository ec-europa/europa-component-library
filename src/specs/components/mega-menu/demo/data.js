// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'demo',
  aria_label: 'Main navigation',
  second_level_aria_label: 'Pages in this section',
  third_level_aria_label: 'Sub-pages in this section',
  toggle: {
    link: {
      label: 'Menu',
      path: exampleLink,
      hide_label: true,
    },
    icon: {
      path: '/icons.svg',
      name: 'hamburger',
      size: 'm',
    },
  },
  close: {
    label: 'Close',
    icon: {
      path: '/icons.svg',
      name: 'close',
      size: 'm',
    },
  },
  back_label: 'Back',
  icon_path: '/icons.svg',
  items: [
    { label: 'Home', path: exampleLink },
    {
      label: 'News and media',
      path: exampleLink,
      info: {
        title: 'About the News and Media',
        title_id: 'about-the-news-id',
        content:
          'Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: {
          link: {
            label: 'Discover more',
          },
        },
      },
      children: [
        {
          label: 'Item 2.1',
          path: exampleLink,
          sublink_id: 'item-2-1-id',
          see_all: true,
          see_all_label: 'View all',
          see_all_attributes: [
            { name: 'aria-label', value: 'View all sub-pages of this section' },
          ],
          featured: {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
                alt: 'Jean Monnet banner',
              },
            },
            title: 'Featured items',
            items: [
              { label: 'Featured link 1', path: exampleLink },
              { label: 'Featured link 2', path: exampleLink },
            ],
          },
          children: [
            {
              label: 'Item 2.1 subitem 1',
              path: exampleLink,
            },
            {
              label: 'Item 2.1 subitem 2',
              path: exampleLink,
              external: true,
              sr_external: 'Link to an external domain',
            },
            { label: 'Item 2.1 subitem 3', path: exampleLink },
            { label: 'Item 2.1 subitem 4', path: exampleLink },
            { label: 'Item 2.1 subitem 5', path: exampleLink },
          ],
        },
        { label: 'Item 2.2', path: exampleLink },
        {
          label: 'Item 2.3 that has a very long label',
          path: exampleLink,
          children: [
            { label: 'Item 2.3 subitem 1', path: exampleLink },
            {
              label: 'Item 2.3 subitem 2',
              path: exampleLink,
            },
            { label: 'Item 2.3 subitem 3', path: exampleLink },
          ],
        },
        { label: 'Item 2.4', path: exampleLink },
        { label: 'Item 2.5', path: exampleLink },
        { label: 'Item 2.6', path: exampleLink },
        {
          label: 'Item 2.7',
          path: exampleLink,
        },
      ],
    },
    {
      label: 'About the European Commission',
      path: exampleLink,
      info: {
        title: 'About the European Commission',
        title_id: 'about-the-ec-title-id',
        content:
          'Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: {
          link: {
            label: 'Discover more',
          },
        },
      },
      children: [
        { label: 'Item 3.1', path: exampleLink },
        { label: 'Item 3.2', path: exampleLink },
        { label: 'Item 3.3', path: exampleLink },
      ],
    },
    {
      label: 'Key priorities',
      path: exampleLink,
      info: {
        title: 'About key priorities',
        title_id: 'about-key-priorities-id',
        content:
          'Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      children: [
        {
          label: 'Aid, Development cooperation, Fundamental rights',
          path: exampleLink,
        },
        { label: 'Energy, Climate change, Environment', path: exampleLink },
        { label: 'Law', path: exampleLink },
        { label: 'EU regional and urban development', path: exampleLink },
        {
          label: 'Research and innovation',
          path: exampleLink,
          see_all: true,
          see_all_label: 'See all items',
          see_all_attributes: [
            { name: 'aria-label', value: 'View all sub-pages of this section' },
          ],
          sublink_id: 'research-and-innovation-id',
          featured: {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
                alt: 'Jean Monnet banner',
              },
            },
            title: 'Featured items',
            items: [
              { label: 'Featured link 1', path: exampleLink },
              { label: 'Featured link 2', path: exampleLink },
            ],
          },
          children: [
            { label: 'How we provide aid', path: exampleLink },
            { label: 'Who we work with', path: exampleLink },
            { label: 'Get involved in EU humanitarian aid', path: exampleLink },
          ],
        },
        { label: 'Food, Farming, Fisheries', path: exampleLink },
      ],
    },
    {
      label: 'Engage',
      path: exampleLink,
      container: `<div></div>`,
    },
    {
      label: 'Contact',
      path: exampleLink,
    },
  ],
};
