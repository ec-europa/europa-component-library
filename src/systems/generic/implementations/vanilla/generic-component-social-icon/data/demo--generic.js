module.exports = function context(system) {
  const c = {
    variant: 'generic',
    label: 'Generic',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'generic',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'generic_hover',
      size: 'xl',
    },
  };

  return c;
};
