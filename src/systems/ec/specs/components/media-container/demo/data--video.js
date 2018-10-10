// Simple content for demo
module.exports = {
  alt: 'Jean Monnet banner.',
  image:
    'https://ec.europa.eu/education/sites/education/files/jean-monnet-gs-banner.jpg',
  description:
    'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
  sources: [
    {
      src: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      type: 'video/mp4',
    },
    {
      src: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.webm',
      type: 'video/webm',
    },
  ],
  tracks: [
    {
      src: '/captions/bunny-en.vtt',
      kind: 'captions',
      srcLang: 'en',
      label: 'English',
    },
    {
      src: '/captions/bunny-fr.vtt',
      kind: 'captions',
      srcLang: 'fr',
      label: 'français',
    },
  ],
};
