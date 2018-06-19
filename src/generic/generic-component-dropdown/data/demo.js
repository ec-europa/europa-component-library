module.exports = {
  _demo: {
    scripts: `
      document.addEventListener('DOMContentLoaded', function () {
        ECL.initExpandables('#example-expandable-button1');
        ECL.dropdown('#dropdown1');
      });
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
