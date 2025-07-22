const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  detail_meta: ['META INFO', 'DD Month YYYY'],
  variant: 'thumbnail',
  title: {
    link: {
      label: 'State of the Union 2018 brochure',
      path: exampleLink,
      type: 'standalone',
    },
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis. Donec maximus pharetra ex a ultricies.',
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: '',
    },
  },
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
  label: {
    variant: 'highlight',
    label: 'highlighted',
  },
  lists: [
    {
      visible_items: 2,
      more_label: 'Show more items',
      items: [
        {
          term: 'Taxonomy list',
          type: 'taxonomy',
          definition: [
            'Taxonomy item 1',
            'Taxonomy item 2',
            'Taxonomy item 3',
            'Taxonomy item 4',
            'Taxonomy item 5',
            'Taxonomy item 6',
          ],
        },
      ],
    },
  ],
};
