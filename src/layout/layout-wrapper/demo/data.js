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

const contentTypes = {
  heading: headingData,
  card: cardData,
  navigation_list: navigationListData,
  content_item: contentItemData,
};

module.exports = {
  contentTypes,
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
};
