const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'featured-item-example',
  micro_title: 'About',
  title: 'Non per curiositatem opinionum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  link: {
    link: {
      type: 'standalone',
      path: exampleLink,
      label: 'Read more',
    },
    icon: {
      name: 'arrow-left',
      transform: 'flip-horizontal',
      size: 'm',
    },
  },
  media_container: {
    video: {
      title: 'Visit the European Commission',
      sr_video_player: 'Video player',
      poster:
        'https://vod.prd.commavservices.eu/12/224712/THUMB_I224712EN1W_V_1.jpg',
      sources: [
        {
          src: 'https://vod.prd.commavservices.eu/01/275521/019813ec-13ce-7136-ac0d-d7e24fec64c0/1080p-qaa.mp4',
          type: 'video/mp4',
        },
      ],
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elite tempore incididunt ut labore et dolore magna.',
    credit: '@Copyright',
  },
};
