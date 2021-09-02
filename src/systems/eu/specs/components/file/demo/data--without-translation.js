const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'State of the Union 2018 brochure',
  language: 'English',
  meta: '(16.2 MB - PDF)',
  icon: {
    shape: 'general--copy',
    size: '2xl',
  },
  download: {
    label: 'Download',
    href: exampleLink,
  },
};
