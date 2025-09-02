const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: {
    link: {
      label: 'Lorem ipsum',
      path: exampleLink,
    },
  },
  description: {
    link: {
      label:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
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
      name: 'corner-arrow-up',
      size: 'xs',
      transform: 'rotate-90',
    },
  },
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
  sr_play: 'Play video',
  sr_pause: 'Pause video',
  icon_path: '/icons.svg',
  credit: '© Copyright',
};
