module.exports = {
  alt: 'Jean Monnet banner',
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
  description:
    'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
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
      label: 'français',
    },
  ],
};
