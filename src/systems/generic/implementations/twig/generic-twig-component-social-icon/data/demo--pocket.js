module.exports = function context(system) {
  const c = {
    variant: 'pocket',
    label: 'Pocket',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'pocket',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'pocket_hover',
      size: 'xl',
    },
  };

  return c;
};
