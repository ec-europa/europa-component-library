module.exports = function context(system) {
  const c = {
    variant: 'digg',
    label: 'Digg',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'digg',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'digg_hover',
      size: 'xl',
    },
  };

  return c;
};
