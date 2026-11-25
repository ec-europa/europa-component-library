// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

export default {
  citation:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, nisl tincidunt hendrerit elementum, purus risus tempus dui, sit amet cursus massa odio non lacus.',
  author: 'Someone - <cite>Lorem Ipsum</cite>',
  sources_label: 'Sources:',
  sources: [
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'DG CNECT',
        path: exampleLink,
      },
    },
    {
      name: 'European Commission',
    },
  ],
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'Image alternative text',
    },
  },
};
