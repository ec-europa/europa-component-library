module.exports = function context(system) {
  const c = {
    variant: 'netvibes',
    label: 'Netvibes',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'netvibes',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'netvibes_hover',
      size: 'xl',
    },
  };

  return c;
};
