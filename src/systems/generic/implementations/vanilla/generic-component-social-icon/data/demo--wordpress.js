module.exports = function context(system) {
  const c = {
    variant: 'wordpress',
    label: 'Wordpress',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'wordpress',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'wordpress_hover',
      size: 'xl',
    },
  };

  return c;
};
