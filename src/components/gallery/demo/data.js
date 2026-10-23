const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'gallery-id',
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
      publication_date: '20 Feb 2020',
      video_length: '1:01',
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
      title: 'Agriculture, business, culture, health, and other topics',
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
      publication_date: '13 Oct 2022',
      video_length: '1:55',
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
      publication_date: '03 Aug 2019',
      video_length: '4:25',
    },
    {
      // HTML video
      video: {
        poster: 'https://assets.mixkit.co/videos/4025/4025-thumb-1080-0.jpg',
        sources: [
          {
            src: 'https://assets.mixkit.co/videos/4025/4025-1080.mp4',
            type: 'video/mp4',
          },
        ],
      },
      alt: 'Image 5',
      title:
        'Time lapse of the Arc de Triomphe in Paris from afar. Title very long, taking several lines with ellipsis.',
      description:
        'Time lapse of the Arc de Triomphe in Paris from afar during the day, city roofs, cars and clouds moving in the blue sky. [HTML video]',
      meta: 'Copyright, Author, Licence for image 5',
      share_path: '/share#example-image5.jpg',
      publication_date: '12 Feb 2023',
      video_length: '0:27',
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
      publication_date: '23 Mar 2025',
      video_length: '19:57',
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
      // Embedded video (AV Portal) with thumbnail
      thumbnail: {
        img: {
          src: 'https://api.prd.commavservices.eu/thumbnail/I-283755/019d7296-446e-7b37-aa68-a796e95d182c/1200.jpg?t=1775821882',
          alt: 'What is the European Union?',
        },
      },
      embedded_video: {
        src: 'https://audiovisual.ec.europa.eu/embed/index.html?ref=I-283755&lg=EN',
      },
      sr_video_audio:
        'In the video below, there is no audiodescription available yet',
      title: 'What is the European Union?',
      description:
        'How is the EU different from Europe, and why does it exist? From the European Coal and Steel Community to the euro, the Single Market and free movement. [Embedded video (AV Portal) with thumbnail]',
      meta: 'Copyright European Union',
      share_path: '/share#I-283755',
      publication_date: '01 Sep 2026',
      video_length: '1:53',
    },
    {
      // Embedded video (AV Portal) with thumbnail
      thumbnail: {
        img: {
          src: 'https://api.prd.commavservices.eu/thumbnail/9b516080-72e6-4c8f-ba9e-543241e4d6e2-1707738521/640.jpg?1707739098278?latest=0008532569',
          alt: 'Berlaymont building',
        },
      },
      embedded_video: {
        src: 'https://audiovisual.ec.europa.eu/embed/index.html?ref=I-252605&lg=EN',
      },
      sr_video_audio:
        'In the video below, there is no audiodescription available yet',
      title: 'Exterior views of the European Commission',
      description:
        'Exterior views of the Berlaymont building, headquarters of the European Commission in Brussels. [Embedded video (AV Portal) with thumbnail]',
      meta: 'Copyright European Union',
      share_path: '/share#I-252605',
      publication_date: '12 Feb 2024',
      video_length: '0:25',
    },
    {
      // Embedded video (AV Portal) with thumbnail
      thumbnail: {
        img: {
          src: 'https://api.prd.commavservices.eu/thumbnail/I-273146/01973ac1-c084-71ad-8acf-59f555a8b296/1200.jpg?t=1749113128',
          alt: '#DiscussAI',
        },
      },
      embedded_video: {
        src: 'https://audiovisual.ec.europa.eu/embed/index.html?ref=I-273146&lg=EN',
      },
      sr_video_audio:
        'In the video below, there is no audiodescription available yet',
      title: '#DiscussAI: a national conversation on Artificial Intelligence',
      description:
        'Success story from the research management community: ADAPT at Dublin City University engaged more than 80,000 people across Ireland in a conversation on AI and its role in society. [Embedded video (AV Portal) with thumbnail]',
      meta: 'Copyright European Union',
      share_path: '/share#I-273146',
      publication_date: '13 Feb 2025',
      video_length: '1:54',
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
    published_label: 'Published',
    close: {
      variant: 'ghost',
      hide_label: true,
      label: 'Close',
    },
    previous: {
      variant: 'tertiary',
      label: 'Previous',
    },
    next: {
      variant: 'tertiary',
      label: 'Next',
    },
    counter_separator: 'of',
    full_screen_label: 'View original',
    share: {
      link: {
        label: 'Share',
        path: exampleLink,
      },
    },
    sr_overlay_label: 'Gallery overlay',
  },
  disable_overlay: false,
  view_all_label: 'Show more items',
  view_all_expanded_label: 'Show less',
  footer: {
    link: {
      path: exampleLink,
      label: 'Further media items',
      external: true,
      sr_external: 'Link to an external domain',
    },
  },
  counter_label: 'Media files in this gallery',
  prev_label: 'Previous',
  next_label: 'Next',
};
