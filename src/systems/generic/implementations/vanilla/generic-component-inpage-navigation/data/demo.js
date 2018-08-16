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

module.exports = function context(system) {
  const c = {
    title: 'Page contents',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'arrow-down',
      size: 's',
    },
    links,
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () {
          ECL.navigationInpages();
        });
      `,
    },
  };

  return c;
};
