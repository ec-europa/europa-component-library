module.exports = function context(system) {
  const c = {
    variant: 'tumblr',
    label: 'Tumblr',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'tumblr',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'tumblr_hover',
      size: 'xl',
    },
  };

  return c;
};
