const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  header: 'In focus',
  title: 'Proin molestie sapien ut blandit',
  path: exampleLink,
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
      alt: 'alternative text',
    },
  },
  credit: '© Copyright',
};
