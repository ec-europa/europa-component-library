module.exports = function context(system) {
  const c = {
    variant: 'storify',
    label: 'Storify',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'storify',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'storify_hover',
      size: 'xl',
    },
  };

  return c;
};
