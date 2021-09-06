const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  logo: {
    title: 'Site name',
    alt: 'Site logo',
    href: exampleLink,
    language: 'en',
    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg',
  },
  siteName: 'Site name',
};
