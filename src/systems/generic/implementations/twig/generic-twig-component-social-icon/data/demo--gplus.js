module.exports = function context(system) {
  const c = {
    variant: 'gplus',
    label: 'Gplus',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'gplus',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'gplus_hover',
      size: 'xl',
    },
  };

  return c;
};
