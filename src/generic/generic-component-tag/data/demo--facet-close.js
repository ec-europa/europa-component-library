module.exports = function context(system) {
  const iconClose = {
    icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
    icon: 'close',
    size: 'xs',
  };

  const c = {
    modifier: 'facet-close',
    tags: [
      {
        label: 'type',
        value: 'atom',
        icon: iconClose,
      },
      {
        label: 'status',
        value: 'wip',
        icon: iconClose,
      },
    ],
  };

  return c;
};
