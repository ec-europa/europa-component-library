const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'banner-example-image',
  title: {
    link: {
      label: 'Lorem ipsum',
      path: exampleLink,
    },
  },
  description: {
    link: {
      label:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      path: exampleLink,
    },
  },
  link: {
    link: {
      label: 'CTA link',
      path: exampleLink,
      icon_position: 'after',
    },
    icon: {
      name: 'corner-arrow',
      size: 'xs',
      transform: 'rotate-90',
    },
  },
  picture: {
    img: {
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'alternative text',
    },
  },
  credit: '© Copyright',
};
