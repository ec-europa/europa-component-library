module.exports = {
  items: [
    {
      // Image
      image: {
        src:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
        alt: 'Image 1',
      },
      description:
        'The EU in brief, institutions and bodies, countries, symbols, history, facts and figures',
      meta: 'Copyright, Author, Licence for image 1',
      share_path: '/share#example-image.jpg',
    },
    {
      // Embedded video
      image: {
        src:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-external-video.jpg',
        alt: 'New digital strategy',
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
      image: {
        src:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
        alt: 'Image 2',
      },
      description:
        'Information on agriculture, business, culture, health, etc.',
      meta: 'Copyright, Author, Licence for image 2',
      share_path: '/share#example-image2.jpg',
    },
    {
      path:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
      alt: 'Image 3',
      description: 'Living, working, travelling in the EU',
      meta: 'Copyright, Author, Licence for image 3',
      share_path: '/share#example-image3.jpg',
    },
    {
      // Image
      image: {
        src:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
        alt: 'Image 4',
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
            src:
              'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4',
            type: 'video/mp4',
          },
          {
            src:
              'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm',
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
      image: {
        src:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
        alt: 'Image 6',
      },
      description:
        'Find official documents, publications, statistics, open data and more resources',
      meta: 'Copyright, Author, Licence for image 6',
      share_path: '/share#example-image6.jpg',
    },
    {
      path:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
      alt: 'Image 7',
      description: 'Teaching material about the EU, including books and maps',
      meta: 'Copyright, Author, Licence for image 7',
      share_path: '/share#example-image7.jpg',
    },
    {
      // Video
      video: {
        poster:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
        sources: [
          {
            src:
              'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4',
            type: 'video/mp4',
          },
          {
            src:
              'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm',
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
      description: "Kids' Corner",
      meta: 'Copyright, Author, Licence for image 8',
      icon: {
        name: 'video',
        size: 'l',
        path: '/icons.svg',
      },
      share_path: '/share#example-image8.jpg',
    },
    {
      // Image
      image: {
        src:
          'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
        alt: 'Image 9',
      },
      description: 'About the EU',
      meta: 'Copyright, Author, Licence for image 9',
      share_path: '/share#example-imag9e.jpg',
    },
    {
      path:
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
      alt: 'Image 10',
      description: 'EU by topic',
      meta: 'Copyright, Author, Licence for image 10',
      share_path: '/share#example-image10.jpg',
    },
  ],
  overlay: {
    close: {
      variant: 'ghost',
      label: 'Close',
      icon: {
        path: 'static/media/icons.3cf410f9.svg',
        name: 'close-filled',
        size: 's',
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
    download: {
      link: {
        label: 'Download',
        path: '/example',
      },
      icon: {
        name: 'download',
        size: 'fluid',
        path: '/icons.svg',
      },
    },
    share: {
      link: {
        label: 'Share',
        path: '/example',
      },
      icon: {
        name: 'share',
        size: 'fluid',
        path: '/icons.svg',
      },
    },
  },
  view_all_label: 'View all',
  footer: {
    link: {
      path: '/example',
      aria_label: 'View all link aria-label value',
      label: 'Link to further media items',
    },
    icon: {
      name: 'external',
      size: 's',
      path: '/icons.svg',
    },
  },
  counter_label: 'Media files in this gallery',
};
