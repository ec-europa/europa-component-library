module.exports = function context(system) {
  const c = {
    variant: 'linkedin',
    label: 'Linkedin',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'linkedin',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'linkedin_hover',
      size: 'xl',
    },
  };

  return c;
};
