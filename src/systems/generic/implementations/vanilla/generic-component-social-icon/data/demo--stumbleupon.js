module.exports = function context(system) {
  const c = {
    variant: 'stumbleupon',
    label: 'Stumbleupon',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'stumbleupon',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'stumbleupon_hover',
      size: 'xl',
    },
  };

  return c;
};
