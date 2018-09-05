module.exports = function context(system) {
  const c = {
    variant: 'skype',
    label: 'Skype',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'skype',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'skype_hover',
      size: 'xl',
    },
  };

  return c;
};
