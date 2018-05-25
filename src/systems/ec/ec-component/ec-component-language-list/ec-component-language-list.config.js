const languages = require('./languages.json');

module.exports = {
  title: 'Language list',
  label: 'Language list',
  status: 'ready',
  collated: false,
  default: 'splash',
  variants: [
    {
      name: 'splash',
      label: 'Splash',
      context: Object.assign(
        {},
        {
          global: {
            language: 'en',
          },
          languages,
          variant: 'splash',
          logo: true,
        }
      ),
    },
    {
      name: 'overlay',
      label: 'Overlay',
      context: Object.assign(
        {},
        {
          languages,
          href: '../../example.html#',
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
        }
      ),
    },
  ],
};
