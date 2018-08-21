module.exports = function context(system) {
  const c = {
    variant: 'youtube',
    label: 'Youtube',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'youtube',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'youtube_hover',
      size: 'xl',
    },
  };

  return c;
};
