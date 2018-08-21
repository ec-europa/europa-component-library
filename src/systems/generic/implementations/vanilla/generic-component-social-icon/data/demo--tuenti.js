module.exports = function context(system) {
  const c = {
    variant: 'tuenti',
    label: 'Tuenti',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'tuenti',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'tuenti_hover',
      size: 'xl',
    },
  };

  return c;
};
