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
    path: '/icons.svg',
  },
  download: {
    link: {
      label: 'Download',
      path: exampleLink,
      aria_label: 'Download file State of the Union 2018 brochure',
    },
    icon: {
      path: '/icons.svg',
    },
  },
  translation: {
    toggle: {
      label: 'Translations (3)',
      icon: {
        path: '/icons.svg',
      },
    },
    items: [
      {
        title: 'Title bg',
        meta: '(15.7 MB - PDF)',
        lang: 'bg',
        lang_full: 'български',
        download: {
          link: {
            label: 'Download',
            aria_label: 'Download file български',
            path: '/example#bg',
          },
          icon: {
            path: '/icons.svg',
          },
        },
      },
      {
        title: 'Title es',
        meta: '(15.8 MB - PDF)',
        lang: 'es',
        lang_full: 'español',
        download: {
          link: {
            label: 'Download',
            aria_label: 'Download file español',
            path: '/example#es',
          },
          icon: {
            path: '/icons.svg',
          },
        },
      },
      {
        title: 'Title fr',
        meta: '(15.4 MB - PDF)',
        lang: 'fr',
        lang_full: 'français',
        download: {
          link: {
            label: 'Download',
            aria_label: 'Download file français',
            path: '/example#fr',
          },
          icon: {
            path: '/icons.svg',
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
