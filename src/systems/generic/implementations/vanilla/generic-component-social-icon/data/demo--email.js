module.exports = function context(system) {
  const c = {
    variant: 'email',
    label: 'Email',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'email',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'email_hover',
      size: 'xl',
    },
  };

  return c;
};
