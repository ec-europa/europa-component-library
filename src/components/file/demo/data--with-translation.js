const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title:
    'In-Depth Comprehensive Report on Emissions Standards, Their Impacts, and Future Projections in the European Union for the Year 2023 and Beyond',
  language: 'English',
  meta: '(16.2 MB)',
  primary_meta: ['Meta info', 'DD Month YYYY'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis. Donec maximus pharetra ex a ultricies.',
  label: [
    {
      variant: 'highlight',
      label: 'Highlight',
    },
  ],
  icon: {
    name: 'file-pdf',
    family: 'phosphor',
  },
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: '',
    },
  },
  lists: [
    {
      visible_items: 2,
      more_label: 'Show more items',
      items: [
        {
          term: 'List',
          type: 'link-inline',
          definition: [
            {
              link: {
                label: 'List item 1',
                path: '#',
                icon_position: 'before',
              },
              icon: {
                name: 'calendar-blank',
                family: 'phosphor',
                size: 'fluid',
              },
            },
            'List item 2',
            'List item 3',
            'List item 4',
            'List item 5',
            'List item 6',
          ],
        },
      ],
    },
  ],
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
      },
      {
        title: 'dansk',
        meta: '(15.4 MB - PDF)',
        lang: 'da',
        download: {
          link: {
            label: 'Download',
            path: '/example#da',
          },
        },
      },
      {
        title: 'Deutsch',
        meta: '(15.4 MB - PDF)',
        lang: 'de',
        download: {
          link: {
            label: 'Download',
            path: '/example#de',
          },
        },
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
      {
        title: 'italiano',
        meta: '(15.4 MB - PDF)',
        lang: 'it',
        download: {
          link: {
            label: 'Download',
            path: '/example#it',
          },
        },
      },
      {
        title: 'slovenščina',
        meta: '(15.4 MB - PDF)',
        lang: 'sl',
        download: {
          link: {
            label: 'Download',
            path: '/example#sl',
          },
        },
      },
    ],
  },
};
