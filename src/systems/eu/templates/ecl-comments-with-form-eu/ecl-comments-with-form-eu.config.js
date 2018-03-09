module.exports = {
  title: 'Comments with form',
  label: 'Comments with form',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-center-transparent',
  context: {
    comments: [
      {
        image: {
          src: 'https://unsplash.it/300/400?image=1005',
          alt: "Martin's photo",
        },
        author: 'Martin (Not verified)',
        date: '26 March 2015',
        title: {
          href: '#',
          label: 'Nice article',
        },
        body:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem eius enim eos error esse fugiat incidunt iste laudantium nemo, numquam quam quasi repudiandae sapiente soluta sunt tempore ullam voluptatem.',
        operations: {
          delete: {
            href: '#',
            label: 'Delete',
            visible: true,
          },
          edit: {
            href: '#',
            label: 'Edit',
            visible: true,
          },
          reply: {
            href: '#',
            label: 'Reply',
            visible: true,
          },
        },
      },
      {
        image: {
          src: 'https://picsum.photos/300/400?image=1011',
          alt: "Clara's photo",
        },
        author: 'Clara (Not verified)',
        date: '28 March 2015',
        title: {
          href: '#',
          label: 'Interesting',
        },
        body:
          'Excepteur ipsum ipsum officia ullamco nisi laboris do minim. Amet esse commodo ut eiusmod. Eu voluptate velit consectetur laborum ea. Et occaecat exercitation minim voluptate amet non. Ea veniam aute laborum exercitation labore dolore.',
        operations: {
          delete: {
            href: '#',
            label: 'Delete',
            visible: true,
          },
          edit: {
            href: '#',
            label: 'Edit',
            visible: true,
          },
          reply: {
            href: '#',
            label: 'Reply',
            visible: true,
          },
        },
      },
      {
        author: 'Anna (Not verified)',
        date: '27 March 2015',
        image: {
          src: 'https://picsum.photos/300/400?image=1006',
          alt: "Clara's photo",
        },
        title: {
          href: '#',
          label: 'I agree',
        },
        body:
          'Ad eu proident commodo fugiat elit occaecat laboris cillum sit. Ex elit laborum amet excepteur occaecat do ea eu ullamco. Esse dolor commodo commodo incididunt ea quis cillum est deserunt. Tempor exercitation minim dolore ipsum sit cupidatat cupidatat occaecat laboris duis ipsum. Sint non quis eu commodo magna voluptate nisi ad laborum. Ea eu officia quis in enim duis proident voluptate do velit ut non ea ex.',
        operations: {
          delete: {
            href: '#',
            label: 'Delete',
            visible: true,
          },
          edit: {
            href: '#',
            label: 'Edit',
            visible: true,
          },
          reply: {
            href: '#',
            label: 'Reply',
            visible: true,
          },
        },
      },
    ],
  },
};
