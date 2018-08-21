module.exports = function context(system) {
  const c = {
    variant: 'studivz',
    label: 'Studivz',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'studivz',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'studivz_hover',
      size: 'xl',
    },
  };

  return c;
};
