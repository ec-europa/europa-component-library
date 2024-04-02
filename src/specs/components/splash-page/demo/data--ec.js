const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  logo: {
    title: 'European Commission',
    alt: 'European Commission logo',
    path: exampleLink,
    language: 'en',
    src_desktop: '/logo-ec--en.svg',
    src_mobile: '/logo-ec--mute.svg',
  },
  title: 'Select your language',
  eu_category: 'Official EU languages:',
  non_eu_category: 'Other languages:',
  items: [
    {
      label: 'български',
      path: exampleLink,
      lang: 'bg',
    },
    {
      label: 'español',
      path: exampleLink,
      lang: 'es',
    },
    {
      label: 'čeština',
      path: exampleLink,
      lang: 'cs',
    },
    {
      label: 'dansk',
      path: exampleLink,
      lang: 'da',
    },
    {
      label: 'Deutsch',
      path: exampleLink,
      lang: 'de',
    },
    {
      label: 'eesti',
      path: exampleLink,
      lang: 'et',
    },
    {
      label: 'ελληνικά',
      path: exampleLink,
      lang: 'el',
    },
    {
      label: 'English',
      path: exampleLink,
      lang: 'en',
      active: true,
    },
    {
      label: 'français',
      path: exampleLink,
      lang: 'fr',
    },
    {
      label: 'Gaeilge',
      path: exampleLink,
      lang: 'ga',
    },
    {
      label: 'hrvatski',
      path: exampleLink,
      lang: 'hr',
    },
    {
      label: 'italiano',
      path: exampleLink,
      lang: 'it',
    },
    {
      label: 'latviešu',
      path: exampleLink,
      lang: 'lv',
    },
    {
      label: 'lietuvių',
      path: exampleLink,
      lang: 'lt',
    },
    {
      label: 'magyar',
      path: exampleLink,
      lang: 'hu',
    },
    {
      label: 'Malti',
      path: exampleLink,
      lang: 'mt',
    },
    {
      label: 'Nederlands',
      path: exampleLink,
      lang: 'nl',
    },
    {
      label: 'polski',
      path: exampleLink,
      lang: 'pl',
    },
    {
      label: 'português',
      path: exampleLink,
      lang: 'pt',
    },
    {
      label: 'română',
      path: exampleLink,
      lang: 'ro',
    },
    {
      label: 'slovenčina',
      path: exampleLink,
      lang: 'sk',
    },
    {
      label: 'slovenščina',
      path: exampleLink,
      lang: 'sl',
    },
    {
      label: 'suomi',
      path: exampleLink,
      lang: 'fi',
    },
    {
      label: 'svenska',
      path: exampleLink,
      lang: 'sv',
    },
  ],
  non_eu_items: [
    {
      label: 'عَرَبِيّ',
      path: exampleLink,
      lang: 'ar',
    },
    {
      label: 'Català',
      path: exampleLink,
      lang: 'ca',
    },
    {
      label: 'Íslenska',
      path: exampleLink,
      lang: 'is',
    },
    {
      label: 'Lëtzebuergesch',
      path: exampleLink,
      lang: 'lb',
    },
    {
      label: '日本語',
      path: exampleLink,
      lang: 'ja',
    },
    {
      label: 'Norsk bokmål',
      path: exampleLink,
      lang: 'nb',
    },
    {
      label: 'русский язык',
      path: exampleLink,
      lang: 'ru',
    },
    {
      label: 'Türkçe',
      path: exampleLink,
      lang: 'tr',
    },
    {
      label: 'українська мова',
      path: exampleLink,
      lang: 'uk',
    },
    {
      label: '中文',
      path: exampleLink,
      lang: 'zh',
    },
  ],
};
