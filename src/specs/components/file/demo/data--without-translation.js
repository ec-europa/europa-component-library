const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'State of the Union 2018 brochure',
  detail_meta: ['META INFO', 'DD Month YYYY'],
  language: 'English',
  meta: '(16.2 MB - PDF)',
  icon: {
    name: 'file',
    size: '2xl',
    path: '/icons.svg',
  },
  download: {
    link: {
      label: 'Download',
      path: exampleLink,
    },
    icon: {
      path: '/icons.svg',
    },
  },
};
