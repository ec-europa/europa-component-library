const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
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
};
