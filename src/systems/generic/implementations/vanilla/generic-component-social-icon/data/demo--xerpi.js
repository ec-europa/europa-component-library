module.exports = function context(system) {
  const c = {
    variant: 'xerpi',
    label: 'Xerpi',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'xerpi',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'xerpi_hover',
      size: 'xl',
    },
  };

  return c;
};
