module.exports = {
  variant: 'translation',
  title: 'File title example',
  language: 'English',
  meta: '213.25 kB - PDF - 4 pages',
  button_label: 'Download',
  icon: 'file',
  translations: [
    { title: 'Titre du fichier', meta: '228.84 kB - PDF - 4 pages' },
    { title: 'Dateititel', meta: '232.12 kB - PDF - 4 pages' },
    { title: 'Файл Заглавие', meta: '257.54 kB - PDF - 4 pages' },
  ],
  translations_label: 'Available languages (3)',
  translations_tooltip: 'Click to see translations',
  _demo: {
    scripts: `document.addEventListener('DOMContentLoaded', function () {
      ECL.initExpandables('#translations-expand-button');
    });`,
  },
};
