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
  title: 'Inpage navigations',
  label: 'Inpage navigations',
  preview: '@preview-inpage-navigation',
  status: 'ready',
  tags: ['molecule'],
  context: {
    title: 'Page contents',
    links,
    extra_classes: 'ecl-col-md-3 ecl-u-align-self-start ',
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () { ECL.navigationInpages(); });`,
    },
  },
};
