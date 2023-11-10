const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  icon_path: '/icons.svg',
  items: [
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Image 1',
        },
      },
      description:
        'The EU in brief, institutions and bodies, countries, symbols, history, facts and figures',
      meta: 'Copyright, Author, Licence for image 1',
      share_path: '/share#example-image.jpg',
    },
    {
      // Embedded video
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-external-video.jpg',
          alt: 'New digital strategy',
        },
      },
      embedded_video: {
        src: 'https://www.youtube.com/embed/fgi-GSCB6ho',
      },
      description: 'New digital strategy',
      meta: 'Copyright, Author, Licence for embedded media',
      icon: {
        name: 'video',
        size: 'l',
        path: '/icons.svg',
      },
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
          alt: 'Image 2',
        },
      },
      description:
        'Information on agriculture, business, culture, health, etc.',
      meta: 'Copyright, Author, Licence for image 2',
      share_path: '/share#example-image2.jpg',
    },
    {
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
          alt: 'Image 3',
        },
      },
      embedded_video: {
        src: 'https://archive.org/embed/electricsheep-flock-248-10000-9',
      },
      description: 'Living, working, travelling in the EU',
      meta: 'Copyright, Author, Licence for image 3',
      share_path: '/share#example-image3.jpg',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
          alt: 'Image 4',
        },
      },
      embedded_video: {
        src: 'https://www.dailymotion.com/embed/video/x8m9tp1?',
      },
      description:
        'Information on taxes, customs, importing and exporting goods, financial support for businesses',
      meta: 'Copyright, Author, Licence for image 4',
      share_path: '/share#example-image4.jpg',
    },
    {
      // Video
      video: {
        poster:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',
        sources: [
          {
            src: 'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4',
            type: 'video/mp4',
          },
          {
            src: 'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm',
            type: 'video/webm',
          },
        ],
        tracks: [
          {
            src: '/captions/bunny-en.vtt',
            kind: 'captions',
            src_lang: 'en',
            label: 'English',
          },
          {
            src: '/captions/bunny-fr.vtt',
            kind: 'captions',
            src_lang: 'fr',
            label: 'français',
          },
        ],
      },
      alt: 'Image 5',
      description: 'EU law',
      meta: 'Copyright, Author, Licence for image 5',
      icon: {
        name: 'video',
        size: 'l',
        path: '/icons.svg',
      },
      share_path: '/share#example-image5.jpg',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
          alt: 'Image 6',
        },
      },
      embedded_video: {
        src: 'https://player.vimeo.com/video/813227141?h=077b905b65',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a diam dignissim, suscipit augue in, fermentum nibh. Donec vestibulum justo cursus quam luctus, quis maximus nisi feugiat. Nullam lobortis tellus libero, vitae lobortis nisl suscipit ac. ',
      meta: 'Copyright, Author, Licence for image 6',
      share_path: '/share#example-image6.jpg',
    },
    {
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
          alt: 'Image 7',
        },
      },
      description: 'Teaching material about the EU, including books and maps',
      meta: 'Copyright, Author, Licence for image 7',
      share_path: '/share#example-image7.jpg',
    },
    {
      // Embedded AV Portal video
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
          alt: 'Climate change and protect nature',
        },
      },
      embedded_video: {
        src: 'https://audiovisual.ec.europa.eu/embed/index.html?ref=I-223223&lg=EN',
      },
      description: 'Climate change and protect nature',
      meta: 'Copyright, Author, Licence for embedded media',
      icon: {
        name: 'video',
        size: 'l',
        path: '/icons.svg',
      },
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
          alt: 'Image 9',
        },
      },
      description: 'About the EU',
      meta: 'Copyright, Author, Licence for image 9',
      share_path: '/share#example-imag9e.jpg',
    },
    {
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
          alt: 'Image 10',
        },
      },
      description: 'EU by topic',
      meta: 'Copyright, Author, Licence for image 10',
      share_path: '/share#example-image10.jpg',
    },
  ],
  overlay: {
    close: {
      variant: 'ghost',
      hide_label: true,
      label: 'Close',
      icon: {
        path: 'static/media/icons.3cf410f9.svg',
        name: 'close',
        size: 'm',
      },
    },
    previous: {
      variant: 'ghost',
      label: 'Previous',
      icon: {
        path: 'static/media/icons.3cf410f9.svg',
        name: 'corner-arrow',
        size: 's',
        transform: 'rotate-270',
      },
      icon_position: 'before',
    },
    next: {
      variant: 'ghost',
      label: 'Next',
      icon: {
        path: 'static/media/icons.3cf410f9.svg',
        name: 'corner-arrow',
        size: 's',
        transform: 'rotate-90',
      },
    },
    counter_separator: 'of',
    full_screen_label: 'View original',
    share: {
      link: {
        label: 'Share',
        path: exampleLink,
      },
      icon: {
        name: 'share',
        size: 'fluid',
        path: '/icons.svg',
      },
    },
    extra_attributes: [{ name: 'aria-label', value: 'Gallery overlay' }],
  },
  disable_overlay: false,
  view_all_label: 'See all',
  view_all_expanded_label: 'Collapse',
  footer: {
    link: {
      path: exampleLink,
      label: 'Further media items',
    },
    icon: {
      name: 'external',
      size: 'xs',
      path: '/icons.svg',
    },
  },
  counter_label: 'Media files in this gallery',
};
