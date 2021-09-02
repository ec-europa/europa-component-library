const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  meta: {
    label:
      "<span class='ecl-u-type-uppercase'>News article</span> | <time dateTime='2019-10-17'>17 October 2019</time>",
  },
  title: {
    href: exampleLink,
    label: 'Article title',
  },
  description: {
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.',
  },
  information: {
    items: [
      {
        icon: {
          shape: 'general--location',
          size: 'm',
        },
        label: 'Brussels, Belgium',
      },
      {
        icon: {
          shape: 'general--livestreaming',
          size: 'm',
        },
        label: 'Live stream available',
      },
    ],
  },
  images: {
    position: 'right',
    mobile: {
      alt: 'Example image',
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    },
    desktop: {
      alt: 'Example image',
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    },
  },
};
