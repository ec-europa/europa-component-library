module.exports = function context(system) {
  const c = {
    variant: 'viadeo',
    label: 'Viadeo',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'viadeo',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'viadeo_hover',
      size: 'xl',
    },
  };

  return c;
};
