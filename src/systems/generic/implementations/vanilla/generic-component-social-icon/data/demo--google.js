module.exports = function context(system) {
  const c = {
    variant: 'google',
    label: 'Google',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'google',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'google_hover',
      size: 'xl',
    },
  };

  return c;
};
