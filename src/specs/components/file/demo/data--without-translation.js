const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'State of the Union 2018 brochure',
  aria_label: 'Download file State of the Union 2018 brochure',
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
