const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: {
    link: {
      label: 'Lorem ipsum dolor sit amet consectetuer adipiscin',
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
      path: '/icons.svg',
      name: 'corner-arrow',
      size: 'xs',
      transform: 'rotate-90',
    },
  },
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
  sr_play: 'Play video',
  sr_pause: 'Pause video',
  icon_path: '/icons.svg',
  credit: '© Copyright',
};
