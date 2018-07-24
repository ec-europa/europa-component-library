module.exports = function context(system) {
  const c = {
    variant: 'more',
    href: '../../example.html#',
    label: 'more link',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'right',
      size: 'xs',
    },
  };

  return c;
};
