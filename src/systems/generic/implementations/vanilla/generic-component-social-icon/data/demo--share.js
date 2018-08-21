module.exports = function context(system) {
  const c = {
    variant: 'share',
    label: 'Share',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'share',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'share_hover',
      size: 'xl',
    },
  };

  return c;
};
