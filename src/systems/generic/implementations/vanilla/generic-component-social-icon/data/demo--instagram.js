module.exports = function context(system) {
  const c = {
    variant: 'instagram',
    label: 'Instagram',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'instagram',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'instagram_hover',
      size: 'xl',
    },
  };

  return c;
};
