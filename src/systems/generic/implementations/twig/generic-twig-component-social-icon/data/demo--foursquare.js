module.exports = function context(system) {
  const c = {
    variant: 'foursquare',
    label: 'Foursquare',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'foursquare',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'foursquare_hover',
      size: 'xl',
    },
  };

  return c;
};
