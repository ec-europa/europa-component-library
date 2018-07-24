module.exports = function context(system) {
  const c = {
    variant: 'blinklist',
    label: 'Blinklist',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'blinklist',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'blinklist_hover',
      size: 'xl',
    },
  };

  return c;
};
