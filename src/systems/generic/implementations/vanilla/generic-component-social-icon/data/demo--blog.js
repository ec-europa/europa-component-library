module.exports = function context(system) {
  const c = {
    variant: 'blog',
    label: 'Blog',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'blog',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'blog_hover',
      size: 'xl',
    },
  };

  return c;
};
