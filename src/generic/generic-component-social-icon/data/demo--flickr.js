module.exports = function context(system) {
  const c = {
    variant: 'flickr',
    label: 'Flickr',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'flickr',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'flickr_hover',
      size: 'xl',
    },
  };

  return c;
};
