module.exports = function context(system) {
  const c = {
    variant: 'delicious',
    label: 'Delicious',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'delicious',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'delicious_hover',
      size: 'xl',
    },
  };

  return c;
};
