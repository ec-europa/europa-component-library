module.exports = function context(system) {
  const c = {
    variant: 'sonico',
    label: 'Sonico',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'sonico',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'sonico_hover',
      size: 'xl',
    },
  };

  return c;
};
