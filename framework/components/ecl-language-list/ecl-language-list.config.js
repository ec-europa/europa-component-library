const languages = [
  {
    href: 'index_bg',
    hreflang: 'bg',
    label: 'български',
    lang: 'bg',
  },
  {
    href: 'index_cs',
    hreflang: 'cs',
    label: 'čeština',
    lang: 'cs',
  },
  {
    href: 'index_da',
    hreflang: 'da',
    label: 'dansk',
    lang: 'da',
  },
  {
    href: 'index_de',
    hreflang: 'de',
    label: 'Deutsch',
    lang: 'de',
  },
  {
    href: 'index_et',
    hreflang: 'et',
    label: 'eesti',
    lang: 'et',
  },
  {
    href: 'index_el',
    hreflang: 'el',
    label: 'ελληνικά',
    lang: 'el',
  },
  {
    href: 'index_en',
    hreflang: 'en',
    label: 'English',
    lang: 'en',
  },
  {
    href: 'index_es',
    hreflang: 'es',
    label: 'español',
    lang: 'es',
  },
  {
    href: 'index_fr',
    hreflang: 'fr',
    label: 'français',
    lang: 'fr',
  },
  {
    href: 'index_ga',
    hreflang: 'ga',
    label: 'Gaeilge',
    lang: 'ga',
  },
  {
    href: 'index_hr',
    hreflang: 'hr',
    label: 'hrvatski',
    lang: 'hr',
  },
  {
    href: 'index_it',
    hreflang: 'it',
    label: 'italiano',
    lang: 'it',
  },
  {
    href: 'index_lv',
    hreflang: 'lv',
    label: 'latviešu',
    lang: 'lv',
  },
  {
    href: 'index_lt',
    hreflang: 'lt',
    label: 'lietuvių',
    lang: 'lt',
  },
  {
    href: 'index_hu',
    hreflang: 'hu',
    label: 'magyar',
    lang: 'hu',
  },
  {
    href: 'index_mt',
    hreflang: 'mt',
    label: 'Malti',
    lang: 'mt',
  },
  {
    href: 'index_nl',
    hreflang: 'nl',
    label: 'Nederlands',
    lang: 'nl',
  },
  {
    href: 'index_pl',
    hreflang: 'pl',
    label: 'polski',
    lang: 'pl',
  },
  {
    href: 'index_pt',
    hreflang: 'pt',
    label: 'português',
    lang: 'pt-pt',
  },
  {
    href: 'index_ro',
    hreflang: 'ro',
    label: 'română',
    lang: 'ro',
  },
  {
    href: 'index_sk',
    hreflang: 'sk',
    label: 'slovenčina',
    lang: 'sk',
  },
  {
    href: 'index_sl',
    hreflang: 'sl',
    label: 'slovenščina',
    lang: 'sl',
  },
  {
    href: 'index_fi',
    hreflang: 'fi',
    label: 'suomi',
    lang: 'fi',
  },
  {
    href: 'index_sv',
    hreflang: 'sv',
    label: 'svenska',
    lang: 'sv',
  },
];

module.exports = {
  title: 'Language list',
  label: 'Language list',
  status: 'ready',
  collated: false,
  // preview: '@preview-center-transparent',
  default: 'splash',
  variants: [
    {
      name: 'splash',
      label: 'Splash',
      context: Object.assign(
        {},
        {
          languages,
          variant: 'splash',
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
          variant: 'overlay',
          _demo: {
            scripts: `
              document.addEventListener('DOMContentLoaded', function () {
                ECL.dialogs();
              });
            `,
          },
        }
      ),
    },
  ],
};
