const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  sr_description: 'Carousel description here',
  items: [
    {
      title: 'Lorem ipsum dolor sit amet',
      description:
        'Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur',
      link: {
        link: {
          label: 'Subscribe',
          path: exampleLink,
          icon_position: 'after',
        },
        icon: {
          path: '/icons.svg',
          name: 'corner-arrow',
          size: 'xs',
          transform: 'rotate-90',
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Alternative text',
        },
      },
    },
    {
      title: 'Duis vitae pulvinar turpis',
      description:
        'Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur',
      link: {
        link: {
          label: 'Subscribe',
          path: exampleLink,
          icon_position: 'after',
        },
        icon: {
          path: '/icons.svg',
          name: 'corner-arrow',
          size: 'xs',
          transform: 'rotate-90',
        },
      },
      picture: {
        img: {
          src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Alternative text',
        },
      },
      credit: '© Copyright or credit',
      box_background: 'dark',
    },
    {
      title: 'Donec maximus pharetra ex a ultricies',
      description:
        'Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis. Donec maximus pharetra ex a ultricies',
      link: {
        link: {
          label: 'Subscribe',
          path: exampleLink,
          icon_position: 'after',
        },
        icon: {
          path: '/icons.svg',
          name: 'corner-arrow',
          size: 'xs',
          transform: 'rotate-90',
        },
      },
      sr_play: 'Play',
      sr_pause: 'Pause',
      video: {
        poster:
          'https://vod.prd.commavservices.eu/12/224712/THUMB_I224712EN1W_V_1.jpg',
        sources: [
          {
            src: 'https://vod.prd.commavservices.eu/12/224712/LR_I224712EN1W.mp4',
            type: 'video/mp4',
          },
        ],
      },
      icon_path: '/icons.svg',
      box_background: 'dark',
    },
  ],
  icon_path: '/icons.svg',
  counter_label: 'of',
};
