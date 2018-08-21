module.exports = function context(system) {
  const c = {
    variant: 'live',
    label: 'Live',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'live',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'live_hover',
      size: 'xl',
    },
  };

  return c;
};
