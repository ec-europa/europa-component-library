module.exports = function context(system) {
  const c = {
    variant: 'linkarena',
    label: 'Linkarena',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'linkarena',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'linkarena_hover',
      size: 'xl',
    },
  };

  return c;
};
