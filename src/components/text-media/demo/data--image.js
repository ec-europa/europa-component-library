const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'featured-item-example',
  micro_title: 'About',
  title: 'Non per curiositatem opinionum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  link: {
    link: {
      type: 'standalone',
      path: exampleLink,
      label: 'Read more',
    },
    icon: {
      name: 'arrow-left',
      transform: 'flip-horizontal',
      size: 'm',
    },
  },
  media_container: {
    picture: {
      img: {
        alt: 'Lorem ipsum dolor sit amet',
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
      },
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elite tempore incididunt ut labore et dolore magna.',
    credit: '@Copyright',
  },
};
