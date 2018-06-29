module.exports = {
  variant: 'translation',
  title: 'File title example',
  language: 'English',
  meta: '213.25 kB - PDF - 4 pages',
  button_label: 'Download',
  icon: 'file',
  translations: [
    { title: 'español', meta: '228.84 kB - PDF - 4 pages' },
    { title: 'German', meta: '232.12 kB - PDF - 4 pages' },
    { title: 'dansk', meta: '257.54 kB - PDF - 4 pages' },
    { title: 'Български', meta: '211.54 kB - PDF - 4 pages' },
  ],
  translations_label: 'Available languages (4)',
  translations_tooltip: 'Click to see translations',
  _demo: {
    scripts: `document.addEventListener('DOMContentLoaded', function () {
      ECL.initExpandables('#translations-expand-button');
    });`,
  },
};
