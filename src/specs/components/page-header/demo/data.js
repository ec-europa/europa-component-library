const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Page title',
  description: `Lorem ipsum dolor sit amet, <a href="${exampleLink}">consectetur adipiscing elit</a>. Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus, <a class="ecl-link" href="${exampleLink}">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis.`,
  meta: ['Meta info', 'DD Month YYYY'],
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
      alt: 'Europe map',
    },
  },
  background_image_url:
    'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
};
