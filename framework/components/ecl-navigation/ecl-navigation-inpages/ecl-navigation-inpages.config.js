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
  {
    href: '#inline-nav-4',
    label: 'Heading 4',
  },
];

module.exports = {
  title: 'Inpage navigations',
  label: 'Inpage navigations',
  preview: '@preview-navigation-inpages',
  status: 'ready',
  tags: ['molecule'],
  context: {
    title: 'Page Contents',
    links,
    _demo: {
      scripts: 'ECL.inpageNav();',
    },
  },
};
