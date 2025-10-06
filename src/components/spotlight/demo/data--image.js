const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  header: 'In focus',
  title: 'Proin molestie sapien ut blandit',
  path: exampleLink,
  picture: {
    sources: [
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
        media: 'all and (min-width: 1368px)',
      },
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
        media: 'all and (min-width: 1140px)',
      },
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
        media: 'all and (min-width: 996px)',
      },
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
        media: 'all and (min-width: 768px)',
      },
    ],
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'alternative text',
    },
  },
  credit: 'Copyright',
};
