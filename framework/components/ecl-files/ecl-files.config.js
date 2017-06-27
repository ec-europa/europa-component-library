module.exports = {
  title: 'Files',
  label: 'Files',
  status: 'ready',
  tags: ['molecule'],
  collated: false,
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default file download',
      context: {
        title: 'File title example',
        language: 'English',
        meta: '213.25 kB - PDF - 4 pages',
        buttonLabel: 'Download',
        icon: 'file',
      },
    },
    {
      name: 'translations',
      label: 'File download with translations',
      context: {
        variant: 'translations',
        title: 'File title example',
        language: 'English',
        meta: '213.25 kB - PDF - 4 pages',
        buttonLabel: 'Download',
        icon: 'file',
        translations: [
          { title: 'Titre du fichier', meta: '228.84 kB - PDF - 4 pages' },
          { title: 'Dateititel', meta: '232.12 kB - PDF - 4 pages' },
          { title: 'Файл Заглавие', meta: '257.54 kB - PDF - 4 pages' },
        ],
        translationsLabel: 'Available languages (3)',
        translationsTooltip: 'Click to see translations',
        _demo: {
          scripts: `document.addEventListener('DOMContentLoaded', function () {
            ECL.initExpandables('#translations-expand-button');
          });`,
        },
      },
    },
    {
      name: 'links',
      label: 'Links to files',
      context: {
        variant: 'links',
        links: [
          { title: 'Generic file link', icon: 'file', href: '#' },
          {
            title: 'Generic external file link',
            icon: 'file',
            href: '#',
            external: true,
          },
          {
            title: 'Link to a .pdf file',
            icon: 'file',
            href: '#',
            type: 'pdf',
          },
          {
            title: 'Link to a presentation .ppt file',
            icon: 'package',
            href: '#',
            type: 'ppt',
          },
          {
            title: 'Link to an image .jpg file',
            icon: 'image',
            href: '#',
            type: 'jpg',
          },
        ],
      },
    },
    {
      name: 'images',
      label: 'Image file',
      context: {
        variant: 'images',
        src: 'http://placehold.it/450x250',
        alt: 'placeholder image',
        caption:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      },
    },
    {
      name: 'videos-iframe',
      label: 'Video file (with iframe)',
      context: {
        variant: 'videos',
        src: 'http://ec.europa.eu/avservices/play.cfm?ref=I101631',
        iframe: true,
        ratio: '16-9',
        caption:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      },
    },
    {
      name: 'videos-tag',
      label: 'Video file (with video tag)',
      context: {
        variant: 'videos',
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        caption:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      },
    },
  ],
};
