module.exports = function context(system) {
  const c = {
    language: 'English',
    href: '../../example.html#',
    code: 'en',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'language',
      size: 'l',
    },
  };

  return c;
};
