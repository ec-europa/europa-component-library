module.exports = function context(system) {
  const c = {
    variant: 'internal',
    aria_label: 'Search this website',
    button: {
      label: 'Search',
      icon: {
        icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
        icon: 'search',
        size: 'l',
      },
    },
    input: {
      id: 'internal-search',
    },
  };

  return c;
};
