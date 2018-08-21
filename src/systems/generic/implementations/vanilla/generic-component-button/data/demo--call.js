module.exports = function context(system) {
  const c = {
    label: 'Call-to-action',
    modifier: 'call',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'right',
      size: 'xs',
    },
  };

  return c;
};
