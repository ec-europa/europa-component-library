module.exports = {
  variant: 'link',
  links: [
    {
      title: 'Generic file link',
      icon: 'file',
      href: '../../example.html#',
    },
    {
      title: 'Generic external file link',
      icon: 'file',
      href: '../../example.html#',
      is_external: true,
    },
    {
      title: 'Link to a .pdf file',
      icon: 'file',
      href: '../../example.html#',
      type: 'pdf',
    },
    {
      title: 'Link to a presentation .ppt file',
      icon: 'slides',
      href: '../../example.html#',
      type: 'ppt',
    },
    {
      title: 'Link to an image .jpg file',
      icon: 'image',
      href: '../../example.html#',
      type: 'jpg',
    },
  ],
};
