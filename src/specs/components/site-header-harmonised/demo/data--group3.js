const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  logo: {
    title: 'Site name',
    alt: 'Site logo',
    href: exampleLink,
    language: 'en',
    src_desktop:
      'https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg',
  },
  site_name: 'Site name',
  group: 'group3',
};
