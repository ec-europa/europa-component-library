module.exports = function context(system) {
  const c = {
    variant: 'bebo',
    label: 'Bebo',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'bebo',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'bebo_hover',
      size: 'xl',
    },
  };

  return c;
};
