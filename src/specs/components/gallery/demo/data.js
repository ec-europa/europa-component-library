const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'gallery-id',
  icon_path: '/icons.svg',
  sr_gallery_label:
    'Open gallery items to view images in original size, watch videos and share them',
  sr_video_label: 'Video',
  sr_video_player: 'Video player',
  items: [
    {
      // Image with thumbnail
      thumbnail: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Image 1',
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Image 1',
        },
      },
      title: 'EU in brief',
      description:
        'The EU in brief, institutions and bodies, countries, symbols, history, facts and figures. [Image with thumbnail]',
      meta: 'Copyright, Author, Licence for image 1',
      share_path: '/share#example-image.jpg',
    },
    {
      // Embedded video (Youtube) with a thumbnail
      thumbnail: {
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
        'Digital technologies have greatly changed our daily life. Therefore, Europe wants to make sure, that the digital transformation works for all its citizens. [Embedded video (Youtube) with a thumbnail]',
      meta: 'Copyright, Author, Licence for embedded media',
    },
    {
      // Image with sources and thumbnail
      thumbnail: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
          alt: 'Image 2',
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
          alt: 'Image 2',
        },
        sources: [
          {
            src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
            media: 'l',
          },
          {
            src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
            media: 'm',
          },
        ],
      },
      title: 'Agriculture and culture',
      description:
        'Information on agriculture, business, culture, health, etc. [Image with sources and thumbnail]',
      meta: 'Copyright, Author, Licence for image 2',
      share_path: '/share#example-image2.jpg',
    },
    {
      // Embedded video (AV Portal) with picture instead of thumbnail
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
          alt: 'Image 3',
        },
      },
      embedded_video: {
        src: 'https://audiovisual.ec.europa.eu/embed/index.html?ref=I-223223&lg=EN',
      },
      sr_video_audio:
        'In the video below, there is no audiodescription available yet',
      title: 'In the EU',
      description:
        'Living, working, travelling in the EU. [Embedded video (AV Portal) with picture instead of thumbnail]',
      meta: 'Copyright, Author, Licence for image 3',
      share_path: '/share#example-image3.jpg',
    },
    {
      // Embedded video (Dailymotion) with thumbnail
      thumbnail: {
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
        'Information on taxes, customs, importing and exporting goods, financial support for businesses. [Embedded video (Dailymotion) with thumbnail]',
      meta: 'Copyright, Author, Licence for image 4',
      share_path: '/share#example-image4.jpg',
    },
    {
      // HTML video
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
      title: 'Visit the European Commission',
      description:
        "The European Commission Visitors' Centre provides the public with an understanding of how the European Commission works and its 3 policies and priorities. [HTML video]",
      meta: 'Copyright, Author, Licence for image 5',
      share_path: '/share#example-image5.jpg',
    },
    {
      // Embedded video (Vimeo) with thumbnail
      thumbnail: {
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a diam dignissim, suscipit augue in, fermentum nibh. Donec vestibulum justo cursus quam luctus, quis maximus nisi feugiat. Nullam lobortis tellus libero, vitae lobortis nisl suscipit ac. [Embedded video (Vimeo) with thumbnail]',
      meta: 'Copyright, Author, Licence for image 6',
      share_path: '/share#example-image6.jpg',
    },
    {
      // Image with sources and no thumbnail
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
          alt: 'Image 7',
        },
        sources: [
          {
            src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
            media: 'xl',
          },
        ],
      },
      title: 'Teaching material',
      description:
        'Teaching material about the EU, including books and maps. [Image with sources and no thumbnail]',
      meta: 'Copyright, Author, Licence for image 7',
      share_path: '/share#example-image11.jpg',
    },
    {
      // Image without thumbnail
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
          alt: 'Climate change and protect nature',
        },
      },
      title: 'Climate change',
      description:
        'Climate change and protect nature. [Image without thumbnail]',
      meta: 'Copyright, Author, Licence for embedded media',
      share_path: '/share#example-image8.jpg',
    },
    {
      // Image without thumbnail
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
          alt: 'Image 9',
        },
      },
      title: 'About the EU',
      description: 'About the EU. [Image without thumbnail]',
      meta: 'Copyright, Author, Licence for image 9',
      share_path: '/share#example-image9.jpg',
    },
    {
      // Image without thumbnail
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
          alt: 'Image 10',
        },
      },
      title: 'EU by topic',
      description: 'EU by topic. [Image without thumbnail]',
      meta: 'Copyright, Author, Licence for image 10',
      share_path: '/share#example-image10.jpg',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
          alt: 'Lorem ipsum',
        },
      },
      title: '12',
      description: 'Lorem ipsum',
      meta: 'Copyright, Author, Licence for Lorem ipsum',
      share_path: '/share#example-image10.jpg',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
          alt: 'Lorem ipsum',
        },
      },
      title: '13',
      description: 'Lorem ipsum',
      meta: 'Copyright, Author, Licence for Lorem ipsum',
      share_path: '/share#example-image10.jpg',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
          alt: 'Lorem ipsum',
        },
      },
      title: '14',
      description: 'Lorem ipsum',
      meta: 'Copyright, Author, Licence for Lorem ipsum',
      share_path: '/share#example-image10.jpg',
    },
    {
      // Image
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
          alt: 'Lorem ipsum',
        },
      },
      title: '15',
      description: 'Lorem ipsum',
      meta: 'Copyright, Author, Licence for Lorem ipsum',
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
