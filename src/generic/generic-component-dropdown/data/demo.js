module.exports = {
  _demo: {
    scripts: `
      document.addEventListener('DOMContentLoaded', function () { ECL.initExpandables('#example-button-dropdown'); });
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
};
