module.exports = function context(system) {
  const c = {
    variant: 'link',
    links: [
      {
        title: 'Generic file link',
        icon: {
          icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
          icon: 'file',
          size: 'xxl',
        },
        href: '../../example.html#',
      },
      {
        title: 'Generic external file link',
        icon: {
          icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
          icon: 'file',
          size: 'xxl',
        },
        href: '../../example.html#',
        is_external: true,
      },
      {
        title: 'Link to a .pdf file',
        icon: {
          icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
          icon: 'file',
          size: 'xxl',
        },
        href: '../../example.html#',
        type: 'pdf',
      },
      {
        title: 'Link to a presentation .ppt file',
        icon: {
          icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
          icon: 'presentation',
          size: 'xxl',
        },
        href: '../../example.html#',
        type: 'ppt',
      },
      {
        title: 'Link to an image .jpg file',
        icon: {
          icon_path: `../../${system}-preset-website/images/icons/symbol-defs.svg`,
          icon: 'image',
          size: 'xxl',
        },
        href: '../../example.html#',
        type: 'jpg',
      },
    ],
  };

  return c;
};
