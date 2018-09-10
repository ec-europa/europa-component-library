module.exports = function context(system) {
  const c = {
    variant: 'pinterest',
    label: 'Pinterest',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'pinterest',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'pinterest_hover',
      size: 'xl',
    },
  };

  return c;
};
