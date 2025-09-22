const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  sr_description: 'Carousel description here',
  items: [
    {
      id: 'carousel-example-1',
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
      id: 'carousel-example-2',
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
      id: 'carousel-example-3',
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
            src: 'https://vod.prd.commavservices.eu/01/275521/019813ec-13ce-7136-ac0d-d7e24fec64c0/1080p-qaa.mp4',
            type: 'video/mp4',
          },
        ],
      },
      box_background: 'dark',
    },
  ],
  counter_label: 'of',
};
