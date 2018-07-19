module.exports = function context(system) {
  const c = {
    variant: 'technorati',
    label: 'Technorati',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'technorati',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'technorati_hover',
      size: 'xl',
    },
  };

  return c;
};
