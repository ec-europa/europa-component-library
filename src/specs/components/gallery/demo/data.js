const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'gallery-id',
  icon_path: '/icons.svg',
  sr_video_label: 'Video',
  sr_video_player: 'Video player',
  items: [
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Image 1',
        },
      },
      title: 'EU in brief',
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
      sr_video_audio:
        'In the video below, there is no audiodescription available because all the content is in the captions and default audio track',
      title: 'New digital strategy',
      description:
        'Digital technologies have greatly changed our daily life. Therefore, Europe wants to make sure, that the digital transformation works for all its citizens.',
      meta: 'Copyright, Author, Licence for embedded media',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
          alt: 'Image 2',
        },
      },
      title: 'Agriculture and culture',
      description:
        'Information on agriculture, business, culture, health, etc.',
      meta: 'Copyright, Author, Licence for image 2',
      share_path: '/share#example-image2.jpg',
    },
    {
      // Embedded video
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
          alt: 'Image 3',
        },
      },
      embedded_video: {
        src: 'https://archive.org/embed/electricsheep-flock-248-10000-9',
      },
      sr_video_audio:
        'In the video below, there is no audiodescription available yet',
      title: 'In the EU',
      description: 'Living, working, travelling in the EU',
      meta: 'Copyright, Author, Licence for image 3',
      share_path: '/share#example-image3.jpg',
    },
    {
      // Embedded video
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
          alt: 'Image 4',
        },
      },
      embedded_video: {
        src: 'https://www.dailymotion.com/embed/video/x8m9tp1?',
      },
      title: 'Taxes and business',
      description:
        'Information on taxes, customs, importing and exporting goods, financial support for businesses',
      meta: 'Copyright, Author, Licence for image 4',
      share_path: '/share#example-image4.jpg',
    },
    {
      // Video
      title: 'Visit the European Commission',
      video: {
        poster:
          'https://euc-vod.fl.freecaster.net/12/224712/THUMB_I224712EN1W_V_1.jpg',
        sources: [
          {
            src: 'https://euc-vod.fl.freecaster.net/12/224712/HD_I224712EN1W.mp4',
            type: 'video/mp4',
          },
        ],
      },
      alt: 'Image 5',
      description:
        "The European Commission Visitors' Centre provides the public with an understanding of how the European Commission works and its 3 policies and priorities. The Centre welcomes different interest groups to Brussels, or virtually, to help them better understand the role of the European Commission and how it impacts their daily lives. Visitors to the Centre in Brussels can enjoy a digital and multifunctional experience providing access to the latest initiatives.",
      meta: 'Copyright, Author, Licence for image 5',
      share_path: '/share#example-image5.jpg',
    },
    {
      // Embedded video
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
          alt: 'Image 6',
        },
      },
      embedded_video: {
        src: 'https://player.vimeo.com/video/813227141?h=077b905b65',
      },
      sr_video_audio:
        'In the video below, there is no audiodescription available because all the content is in the captions and default audio track',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a diam dignissim, suscipit augue in, fermentum nibh. Donec vestibulum justo cursus quam luctus, quis maximus nisi feugiat. Nullam lobortis tellus libero, vitae lobortis nisl suscipit ac. ',
      meta: 'Copyright, Author, Licence for image 6',
      share_path: '/share#example-image6.jpg',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
          alt: 'Image 7',
        },
      },
      title: 'Teaching material',
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
      sr_video_audio:
        'In the video below, there is no audiodescription available yet',
      title: 'Climate change',
      description: 'Climate change and protect nature',
      meta: 'Copyright, Author, Licence for embedded media',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
          alt: 'Image 9',
        },
      },
      title: 'About the EU',
      description: 'About the EU',
      meta: 'Copyright, Author, Licence for image 9',
      share_path: '/share#example-imag9e.jpg',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
          alt: 'Image 10',
        },
      },
      title: 'EU by topic',
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
        path: '/icons.svg',
        name: 'close',
        size: 'm',
      },
    },
    previous: {
      variant: 'tertiary',
      label: 'Previous',
      icon: {
        path: 'icons.svg',
        name: 'corner-arrow',
        size: 's',
        transform: 'rotate-270',
      },
      icon_position: 'before',
    },
    next: {
      variant: 'tertiary',
      label: 'Next',
      icon: {
        path: '/icons.svg',
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
    sr_overlay_label: 'Gallery overlay',
  },
  disable_overlay: false,
  view_all_label: 'See all',
  view_all_expanded_label: 'Collapse',
  footer: {
    link: {
      path: exampleLink,
      label: 'Further media items',
      external: true,
      sr_external: 'Link to an external domain',
      icon_path: '/icons.svg',
    },
  },
  counter_label: 'Media files in this gallery',
};
