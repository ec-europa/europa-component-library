const languages = require('./languages.json');

module.exports = {
  title: 'Language list',
  label: 'Language list',
  status: 'ready',
  preview: '@preview-icons',
  collated: false,
  default: 'splash',
  variants: [
    {
      name: 'splash',
      label: 'Splash',
      context: {
        global: {
          language: 'en',
        },
        languages,
        variant: 'splash',
        logo: true,
        icon: {
          icon_path: `../../ec-preset-website/images/icons/symbol-defs.svg`,
          icon: 'check',
          size: 'm',
        },
      },
    },
    {
      name: 'overlay',
      label: 'Overlay',
      context: {
        languages,
        href: '../../example.html#',
        icon: {
          icon_path: `../../ec-preset-website/images/icons/symbol-defs.svg`,
          icon: 'check',
          size: 'm',
        },
        variant: 'overlay',
        messages: {
          dismiss: 'Close',
          heading: 'Select your language',
        },
        _demo: {
          scripts: `
            document.addEventListener('DOMContentLoaded', function () {
              ECL.dialogs({
                dialogOverlayId: 'ecl-overlay-language-list',
                triggerElementsSelector: '#ecl-lang-select-sites__overlay'
              });
            });
          `,
        },
      },
    },
  ],
};
