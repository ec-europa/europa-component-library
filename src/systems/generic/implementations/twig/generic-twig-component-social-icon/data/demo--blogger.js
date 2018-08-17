module.exports = function context(system) {
  const c = {
    variant: 'blogger',
    label: 'Blogger',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'blogger',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'blogger_hover',
      size: 'xl',
    },
  };

  return c;
};
