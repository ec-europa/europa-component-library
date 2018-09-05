module.exports = function context(system) {
  const c = {
    variant: 'diigo',
    label: 'Diigo',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'diigo',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'diigo_hover',
      size: 'xl',
    },
  };

  return c;
};
