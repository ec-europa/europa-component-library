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
      label: 'Jobs, Growth and Investment',
    },
  ],
  _demo: {
    scripts: `
      document.addEventListener('DOMContentLoaded', function () { ECL.breadcrumb(); });
      `,
  },
};
