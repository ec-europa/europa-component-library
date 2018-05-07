const links = [
  {
    href: '#inline-nav-1',
    label: 'Heading 1',
  },
  {
    href: '#inline-nav-2',
    label: 'Heading 2',
  },
  {
    href: '#inline-nav-3',
    label: 'Heading 3',
  },
];

module.exports = {
  title: 'Page contents',
  links,
  _demo: {
    scripts: `
      document.addEventListener('DOMContentLoaded', function () {
        ECL.navigationInpages();
      });
    `,
  },
};
