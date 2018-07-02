module.exports = {
  segments: [
    {
      href: '../../example.html#',
      label: 'Home',
    },
    {
      href: '../../example.html#',
      label: 'Priorities',
    },
    {
      href: '../../example.html#',
      label: 'Category',
    },
    {
      href: '../../example.html#',
      label: 'Jobs, Growth and Investment',
    },
    {
      label: 'Page title',
    },
  ],
  _demo: {
    scripts: `
      document.addEventListener('DOMContentLoaded', function () { 
        ECL.initBreadcrumb();
      });`,
  },
};
