module.exports = function context(system) {
  const c = {
    variant: 'rss',
    label: 'RSS',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'rss',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'rss_hover',
      size: 'xl',
    },
  };

  return c;
};
