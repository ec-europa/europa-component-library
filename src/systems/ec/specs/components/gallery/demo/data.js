module.exports = {
  items: [
    {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'Image 1',
      description:
        'The EU in brief, institutions and bodies, countries, symbols, history, facts and figures',
      meta: 'Copyright, Author, Licence for image 1',
      shareHref: '/share#example-image.jpg',
    },
    {
      src:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
      alt: 'Image 2',
      description:
        'Information on agriculture, business, culture, health, etc.',
      meta: 'Copyright, Author, Licence for image 2',
      shareHref: '/share#example-image2.jpg',
    },
    {
      src:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
      alt: 'Image 3',
      description: 'Living, working, travelling in the EU',
      meta: 'Copyright, Author, Licence for image 3',
      icon: {
        shape: 'general--audio',
        size: 'l',
      },
      shareHref: '/share#example-image3.jpg',
    },
    {
      src:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
      alt: 'Image 4',
      description:
        'Information on taxes, customs, importing and exporting goods, financial support for businesses',
      meta: 'Copyright, Author, Licence for image 4',
      shareHref: '/share#example-image4.jpg',
    },
    {
      src:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',
      alt: 'Image 5',
      description: 'EU law',
      meta: 'Copyright, Author, Licence for image 5',
      icon: {
        shape: 'general--video',
        size: 'l',
      },
      shareHref: '/share#example-image5.jpg',
    },
    {
      src:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
      alt: 'Image 6',
      description:
        'Find official documents, publications, statistics, open data and more resources',
      meta: 'Copyright, Author, Licence for image 6',
      shareHref: '/share#example-image6.jpg',
    },
    {
      src:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
      alt: 'Image 7',
      description: 'Teaching material about the EU, including books and maps',
      meta: 'Copyright, Author, Licence for image 7',
      shareHref: '/share#example-image7.jpg',
    },
    {
      src:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
      alt: 'Image 8',
      description: "Kids' Corner",
      meta: 'Copyright, Author, Licence for image 8',
      icon: {
        shape: 'general--video',
        size: 'l',
      },
      shareHref: '/share#example-image8.jpg',
    },
    {
      src:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
      alt: 'Image 9',
      description: 'About the EU',
      meta: 'Copyright, Author, Licence for image 9',
      shareHref: '/share#example-imag9e.jpg',
    },
    {
      src:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
      alt: 'Image 10',
      description: 'EU by topic',
      meta: 'Copyright, Author, Licence for image 10',
      shareHref: '/share#example-image10.jpg',
    },
  ],
  overlay: {
    close: {
      variant: 'ghost',
      label: 'Close',
      icon: {
        shape: 'ui--close',
        size: 's',
      },
    },
    previous: {
      variant: 'ghost',
      label: 'Previous',
      icon: {
        shape: 'ui--corner-arrow',
        transform: 'rotate-270',
        size: 'l',
      },
      iconPosition: 'before',
    },
    next: {
      variant: 'ghost',
      label: 'Next',
      icon: {
        shape: 'ui--corner-arrow',
        transform: 'rotate-90',
        size: 'l',
      },
    },
    counterSeparator: 'of',
    download: {
      label: 'Download',
      icon: {
        shape: 'ui--download',
        size: 'fluid',
      },
    },
    share: {
      label: 'Share',
      icon: {
        shape: 'general--share',
        size: 'fluid',
      },
    },
  },
};
