module.exports = function context(system) {
  const c = {
    variant: 'wykop',
    label: 'Wykop',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'wykop',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'wykop_hover',
      size: 'xl',
    },
  };

  return c;
};
