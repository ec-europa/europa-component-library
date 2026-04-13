const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

// Heading
const headingData = {
  heading: {
    level: 2,
    content: 'Heading',
  },
};

// Card
const cardData = {
  card: {
    description:
      'Card description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: {
      link: {
        type: 'standalone',
        label: 'Card title',
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
};

// Navigation list
const navigationListData = {
  navigation_list: {
    column: 1,
    border: true,
    items: [
      {
        border: true,
        picture: {
          img: {
            src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
            alt: 'Alt text for the image',
          },
        },
        title: {
          link: {
            type: 'standalone',
            label: 'Navigation list title',
            path: exampleLink,
          },
        },
        description:
          'Navigation list description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
  },
};

// File download
const fileData = {
  file: {
    title: 'State of the Union 2018 brochure',
    language: 'English',
    meta: '(16.2 MB - PDF)',
    icon: {
      name: 'file',
      size: '2xl',
    },
    download: {
      link: {
        label: 'Download',
        path: exampleLink,
      },
    },
    translation: {
      toggle: {
        label: 'Translations (3)',
      },
      items: [
        {
          title: 'български',
          meta: '(15.7 MB - PDF)',
          lang: 'bg',
          download: {
            link: {
              label: 'Download',
              path: '/example#bg',
            },
          },
          download_attribute: false,
        },
        {
          title: 'español',
          meta: '(15.8 MB - PDF)',
          lang: 'es',
          download: {
            link: {
              label: 'Download',
              path: '/example#es',
            },
          },
          download_attribute: true,
        },
        {
          title: 'français',
          meta: '(15.4 MB - PDF)',
          lang: 'fr',
          download: {
            link: {
              label: 'Download',
              path: '/example#fr',
            },
          },
        },
      ],
    },
  },
};

// Content item
const contentItemData = {
  content_item: {
    divider: false,
    date: {
      date_time: '2019-09-26',
      day: '26',
      month: 'Sep',
      month_full: 'September',
      year: '2019',
      variant: 'ongoing',
    },
    primary_meta: ['PRIMARY META', 'DD Month Year'],
    title: {
      link: {
        type: 'standalone',
        label: 'Content item title',
        path: exampleLink,
      },
    },
    description:
      'Content item description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, justo odio commodo tellus',
    secondary_meta: [
      {
        icon: {
          name: 'location',
          size: 'xs',
        },
        label: 'Luxembourg',
      },
      {
        icon: {
          name: 'clock',
          size: 'xs',
        },
        label: '1 hour',
      },
    ],
  },
};

// List with illustration
const listIllustrationData = {
  list_illustration: {
    items: [
      {
        title: 'Title list with illustration',
        icon: {
          name: 'regulation',
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.',
        value: '3.2 million',
      },
    ],
  },
};

const contentTypes = {
  heading: headingData,
  card: cardData,
  navigation_list: navigationListData,
  file: fileData,
  content_item: contentItemData,
  list_illustration: listIllustrationData,
};

module.exports = {
  contentTypes,
  heading: {
    level: 2,
    label: 'Heading',
  },
  introduction:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus tellus nec iaculis commodo. Nulla facilisi. Duis at tortor ornare quam condimentum volutpat ac ac quam. Vivamus sed semper leo.',
  items: [
    cardData,
    cardData,
    cardData,
    cardData,
    cardData,
    cardData,
    cardData,
    cardData,
  ],
  view_all: {
    link: {
      path: exampleLink,
      label: 'View all',
    },
  },
};
