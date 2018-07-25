module.exports = function context(system) {
  const c = {
    variant: 'nujij',
    label: 'Nujij',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'nujij',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'nujij_hover',
      size: 'xl',
    },
  };

  return c;
};
