module.exports = function context(system) {
  const c = {
    variant: 'spotify',
    label: 'Spotify',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'spotify',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'spotify_hover',
      size: 'xl',
    },
  };

  return c;
};
