module.exports = function context(system) {
  const c = {
    variant: 'netlog',
    label: 'Netlog',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'netlog',
      size: 'xl',
    },
    icon_hover: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'netlog_hover',
      size: 'xl',
    },
  };

  return c;
};
