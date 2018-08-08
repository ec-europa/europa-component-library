module.exports = function context(system) {
  const c = {
    button: {
      label: 'Search',
      icon: {
        icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
        icon: 'search',
        size: 'm',
      },
    },
    input: {
      id: 'search-form',
      name: 'search-form',
      icon: {
        icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
        icon: 'search',
        size: 'm',
      },
      extra_attributes: [
        { name: 'aria_label', value: 'Search this website' },
        { name: 'required', value: 'required' },
      ],
    },
  };

  return c;
};
