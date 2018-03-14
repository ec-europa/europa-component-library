module.exports = {
  title: 'Comments',
  label: 'Comments',
  status: 'ready',
  preview: '@preview-center-transparent',
  tags: ['molecule'],
  context: {
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
};
