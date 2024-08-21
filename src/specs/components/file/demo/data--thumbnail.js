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
  label: {
    variant: 'highlight',
    label: 'highlighted',
  },
  download: {
    link: {
      label: 'Download',
      path: exampleLink,
    },
    icon: {
      path: '/icons.svg',
    },
  },
  preview: {
    link: {
      label: 'Preview',
      path: exampleLink,
    },
    icon: {
      path: '/icons.svg',
    },
  },
  translation: {
    toggle: {
      label: 'Other languages (3)',
      icon: {
        path: '/icons.svg',
      },
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
          icon: {
            path: '/icons.svg',
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
          icon: {
            path: '/icons.svg',
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
          icon: {
            path: '/icons.svg',
          },
        },
      },
    ],
  },
};
