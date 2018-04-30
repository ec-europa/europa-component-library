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
  extra_classes: 'ecl-col-md-3 ecl-u-align-self-start ',
  _demo: {
    scripts: `
      document.addEventListener('DOMContentLoaded', function () {
        ECL.navigationInpages();
      });
    `,
  },
};
