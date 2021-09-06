const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  detailMeta: ['Resource type', 'Publication date'],
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
    href: exampleLink,
  },
  translation: {
    toggle: {
      label: 'Other languages (3)',
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
        langFull: 'български',
        download: {
          label: 'Download',
          href: '/example#bg',
        },
      },
      {
        title: 'Title es',
        description: 'Proin sagittis nisi hendrerit purus porta.',
        meta: '(15.8 MB - PDF)',
        lang: 'es',
        langFull: 'español',
        download: {
          label: 'Download',
          href: '/example#es',
        },
      },
      {
        title: 'Title fr',
        description:
          'Duis eget lacinia arcu. Nullam mattis ornare nibh. Proin tristique, ante id aliquet malesuada. Pellentesque porttitor commodo libero sed fringilla. Curabitur varius sodales elit, id tincidunt erat. Aenean tincidunt luctus molestie.',
        meta: '(15.4 MB - PDF)',
        lang: 'fr',
        langFull: 'français',
        download: {
          label: 'Download',
          href: '/example#fr',
        },
      },
    ],
  },
};
