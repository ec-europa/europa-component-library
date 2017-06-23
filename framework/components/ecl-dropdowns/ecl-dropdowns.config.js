module.exports = {
  title: 'Dropdowns',
  label: 'Dropdowns',
  status: 'ready',
  preview: '@preview-center-transparent',
  tags: ['molecule'],
  context: {
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () { ECL.initExpandables(); });
        ECL.dropdown('.ecl-dropdown');
        `,
    },
    links: [
      {
        target: '#',
        title: 'Article',
      },
      {
        target: '#',
        title: 'Page',
      },
      {
        target: '#',
        title: 'Community',
      },
    ],
  },
};
