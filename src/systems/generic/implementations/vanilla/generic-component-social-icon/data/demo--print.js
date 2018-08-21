module.exports = function context(system) {
  const c = {
    variant: 'print',
    label: 'Print',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'print',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'print_hover',
      size: 'xl',
    },
  };

  return c;
};
