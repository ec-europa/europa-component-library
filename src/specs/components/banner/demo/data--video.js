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
      'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',
    sources: [
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4',
        type: 'video/mp4',
      },
      {
        src: 'https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm',
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
        label: 'French',
      },
    ],
  },
  sr_play: 'Play video',
  sr_pause: 'Pause video',
  icon_path: '/icons.svg',
  credit: '© Copyright',
};
