module.exports = {
  title: 'Communities',
  label: 'Communities',
  status: 'ready',
  tags: ['template'],
  preview: '@preview-website',
  context: {
    global: {
      language: 'en',
    },
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.megamenu();
      });`,
    },
  },
};
