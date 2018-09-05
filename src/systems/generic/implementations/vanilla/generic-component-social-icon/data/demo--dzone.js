module.exports = function context(system) {
  const c = {
    variant: 'dzone',
    label: 'Dzone',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'dzone',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'dzone_hover',
      size: 'xl',
    },
  };

  return c;
};
