const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'banner-example-video',
  title: {
    link: {
      label: 'Lorem ipsum',
      path: exampleLink,
    },
  },
  description: {
    link: {
      label:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      path: exampleLink,
    },
  },
  link: {
    link: {
      label: 'CTA link',
      path: exampleLink,
      icon_position: 'after',
    },
    icon: {
      name: 'corner-arrow',
      size: 'xs',
      transform: 'rotate-90',
    },
  },
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
  sr_play: 'Play video',
  sr_pause: 'Pause video',
  icon_path: '/icons.svg',
  credit: '© Copyright',
};
