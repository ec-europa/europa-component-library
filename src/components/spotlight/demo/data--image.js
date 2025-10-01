const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  header: 'In focus',
  title: 'Proin molestie sapien ut blandit',
  path: exampleLink,
  picture: {
    sources: [
      {
        src: 'https://placehold.co/1920x640',
        media: 'all and (min-width: 1368px)',
      },
      {
        src: 'https://placehold.co/1368x684',
        media: 'all and (min-width: 1140px)',
      },
      {
        src: 'https://placehold.co/996x498',
        media: 'all and (min-width: 996px)',
      },
      {
        src: 'https://placehold.co/996x498',
        media: 'all and (min-width: 768px)',
      },
    ],
    img: {
      src: 'https://placehold.co/768x768',
      alt: 'alternative text',
    },
  },
  credit: 'Copyright',
};
