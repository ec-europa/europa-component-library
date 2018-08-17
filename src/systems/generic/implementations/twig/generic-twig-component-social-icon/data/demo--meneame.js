module.exports = function context(system) {
  const c = {
    variant: 'meneame',
    label: 'Meneame',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'meneame',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'meneame_hover',
      size: 'xl',
    },
  };

  return c;
};
