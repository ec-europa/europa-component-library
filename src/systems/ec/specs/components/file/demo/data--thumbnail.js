module.exports = {
  thumbnailMeta: 'RESOURCE TYPE | Publication date',
  title: 'State of the Union 2018 brochure',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis. Donec maximus pharetra ex a ultricies.',
  image: {
    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    alt: 'thumbnail alt',
  },
  language: 'English',
  meta: '(16.2 MB - PDF)',
  icon: {
    shape: 'general--copy',
    size: '2xl',
  },
  download: {
    label: 'Download',
    href: '/example',
  },
  translation: {
    toggle: {
      label: 'Other languages (3)',
    },
    description:
      'Looking for another language which is not on the list? Find out why.',
    items: [
      {
        title: 'български',
        meta: '(15.7 MB - PDF)',
        lang: 'bg',
        download: {
          label: 'Download',
          href: '/example#bg',
        },
      },
      {
        title: 'español',
        meta: '(15.8 MB - PDF)',
        lang: 'es',
        download: {
          label: 'Download',
          href: '/example#es',
        },
      },
      {
        title: 'français',
        meta: '(15.4 MB - PDF)',
        lang: 'fr',
        download: {
          label: 'Download',
          href: '/example#fr',
        },
      },
    ],
  },
};
