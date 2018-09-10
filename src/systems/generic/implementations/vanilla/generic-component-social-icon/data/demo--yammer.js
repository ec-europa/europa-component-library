module.exports = function context(system) {
  const c = {
    variant: 'yammer',
    label: 'Yammer',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'yammer',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'yammer_hover',
      size: 'xl',
    },
  };

  return c;
};
