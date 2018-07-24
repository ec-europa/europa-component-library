module.exports = function context(system) {
  const c = {
    variant: 'myspace',
    label: 'Myspace',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'myspace',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'myspace_hover',
      size: 'xl',
    },
  };

  return c;
};
