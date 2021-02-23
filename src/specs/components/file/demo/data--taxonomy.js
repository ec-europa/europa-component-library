module.exports = {
  detail_meta: ['Resource type', 'Publication date'],
  variant: 'thumbnail',
  title: 'State of the Union 2018 brochure',
  aria_label: 'Download file State of the Union 2018 brochure',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis. Donec maximus pharetra ex a ultricies.',
  image: {
    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    alt: 'thumbnail alt',
  },
  language: 'English',
  meta: '(16.2 MB - PDF)',
  icon: {
    name: 'copy',
    type: 'general',
    size: '2xl',
    path: '/icons.svg',
  },
  download: {
    link: {
      label: 'Download',
      path: '/example',
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
    description:
      'Looking for another language which is not on the list? Find out why.',
    items: [
      {
        title: 'Title bg',
        description:
          'Morbi fringilla turpis augue, et interdum ipsum egestas sed. Proin tristique, ante id aliquet malesuada, lorem dolor vulputate magna, a commodo purus ante nec massa.',
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
        description: 'Proin sagittis nisi hendrerit purus porta.',
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
        description:
          'Duis eget lacinia arcu. Nullam mattis ornare nibh. Proin tristique, ante id aliquet malesuada. Pellentesque porttitor commodo libero sed fringilla. Curabitur varius sodales elit, id tincidunt erat. Aenean tincidunt luctus molestie.',
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
          term: 'Science areas',
          definition: [
            {
              label: 'Energy and transport',
              variant: 'display',
            },
            {
              label: 'Standards',
              variant: 'display',
            },
          ],
        },
        {
          term: 'Keywords',
          definition: [
            {
              label: 'Electricity',
              variant: 'display',
            },
            {
              label: 'Electromobility',
              variant: 'display',
            },
            {
              label: 'Energy',
              variant: 'display',
            },
            {
              label: 'Energy storage',
              variant: 'display',
            },
            {
              label: 'Security',
              variant: 'display',
            },
            {
              label: 'Transport',
              variant: 'display',
            },
            {
              label: 'Low carbon',
              variant: 'display',
            },
          ],
        },
      ],
      variant: 'taxonomy',
    },
  ],
};
