module.exports = {
  title: 'State of the Union 2018 brochure',
  ariaLabel: 'Download file State of the Union 2018 brochure',
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
          ariaLabel: 'Download file български',
        },
      },
      {
        title: 'español',
        meta: '(15.8 MB - PDF)',
        lang: 'es',
        download: {
          label: 'Download',
          href: '/example#es',
          ariaLabel: 'Download file español',
        },
      },
      {
        title: 'français',
        meta: '(15.4 MB - PDF)',
        lang: 'fr',
        download: {
          label: 'Download',
          href: '/example#fr',
          ariaLabel: 'Download file français',
        },
      },
    ],
  },
};
