const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: {
    href: exampleLink,
    label: 'Name',
  },
  description: {
    label:
      "<span class='ecl-u-type-uppercase'>Lorem ipsum dolor sit amet</span>",
  },
  images: {
    position: 'left',
    desktop: {
      alt: 'Example image',
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-person.png',
    },
  },
};
