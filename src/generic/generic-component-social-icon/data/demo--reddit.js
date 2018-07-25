module.exports = function context(system) {
  const c = {
    variant: 'reddit',
    label: 'Reddit',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'reddit',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'reddit_hover',
      size: 'xl',
    },
  };

  return c;
};
