module.exports = function context(system) {
  const c = {
    variant: 'external',
    href: '../../example.html#',
    label: 'external link',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'external',
      size: 'xs',
    },
  };

  return c;
};
