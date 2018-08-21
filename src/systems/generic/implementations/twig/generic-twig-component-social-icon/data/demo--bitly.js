module.exports = function context(system) {
  const c = {
    variant: 'bitly',
    label: 'Bitly',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'bitly',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'bitly_hover',
      size: 'xl',
    },
  };

  return c;
};
