module.exports = function context(system) {
  const c = {
    variant: 'twitter',
    label: 'Twitter',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'twitter',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'twitter_hover',
      size: 'xl',
    },
  };

  return c;
};
