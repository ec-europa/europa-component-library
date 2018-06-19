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
      href: '#',
      label: 'Article',
    },
    {
      href: '#',
      label: 'Page',
    },
    {
      href: '#',
      label: 'Community',
    },
  ],
};
