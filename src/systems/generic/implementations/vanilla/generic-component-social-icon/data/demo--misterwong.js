module.exports = function context(system) {
  const c = {
    variant: 'misterwong',
    label: 'Misterwong',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'misterwong',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'misterwong_hover',
      size: 'xl',
    },
  };

  return c;
};
