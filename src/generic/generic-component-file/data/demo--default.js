module.exports = function context(system) {
  const c = {
    title: 'File title example',
    language: 'English',
    meta: '213.25 kB - PDF - 4 pages',
    button_label: 'Download',
    icon: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'file',
      size: 'xxl',
    },
    icon_download: {
      icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
      icon: 'download',
      size: 's',
    },
  };

  return c;
};
