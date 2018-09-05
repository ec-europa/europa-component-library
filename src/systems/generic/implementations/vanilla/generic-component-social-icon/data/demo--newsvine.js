module.exports = function context(system) {
  const c = {
    variant: 'newsvine',
    label: 'Newsvine',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'newsvine',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'newsvine_hover',
      size: 'xl',
    },
  };

  return c;
};
