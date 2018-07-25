module.exports = function context(system) {
  const c = {
    variant: 'facebook',
    label: 'Facebook',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'facebook',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'facebook_hover',
      size: 'xl',
    },
  };

  return c;
};
