module.exports = {
  poster: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
  title: 'Big Buck Bunny',
  sr_video_label: 'Video',
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
};
