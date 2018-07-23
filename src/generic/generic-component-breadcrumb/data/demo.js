module.exports = function context(system) {
  const c = {
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
        label: 'Category',
      },
      {
        href: '../../example.html#',
        label: 'Jobs, Growth and Investment',
      },
      {
        label: 'Page title',
      },
    ],
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'right',
      size: 'xxs',
    },
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () { 
          ECL.initBreadcrumb();
        });`,
    },
  };

  return c;
};
