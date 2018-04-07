const links = [
  {
    href: 'https://example.com/inline-nav-1',
    label: 'Heading 1',
  },
  {
    href: 'https://example.com/inline-nav-2',
    label: 'Heading 2',
  },
  {
    href: 'https://example.com/inline-nav-3',
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
    title: 'Page content',
    links,
    extra_classes: 'ecl-col-md-3 ecl-u-align-self-start ',
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () { ECL.initExpandables(); ECL.navigationInpages(); });`,
    },
  },
};
