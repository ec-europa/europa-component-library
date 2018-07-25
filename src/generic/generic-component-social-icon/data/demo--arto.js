module.exports = function context(system) {
  const c = {
    variant: 'arto',
    label: 'Arto',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'arto',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'arto_hover',
      size: 'xl',
    },
  };

  return c;
};
