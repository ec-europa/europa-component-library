module.exports = function context(system) {
  const c = {
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
      id: 'corporate-search',
      extra_attributes: [
        { name: 'size', value: '30' },
        { name: 'maxlength', value: '128' },
      ],
    },
  };

  return c;
};
