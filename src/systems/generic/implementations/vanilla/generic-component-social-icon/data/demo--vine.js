module.exports = function context(system) {
  const c = {
    variant: 'vine',
    label: 'Vine',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'vine',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'vine_hover',
      size: 'xl',
    },
  };

  return c;
};
