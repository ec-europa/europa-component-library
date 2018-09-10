module.exports = function context(system) {
  const c = {
    variant: 'slashdot',
    label: 'Slashdot',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'slashdot',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'slashdot_hover',
      size: 'xl',
    },
  };

  return c;
};
