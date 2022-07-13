const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  title: 'Select your language',
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
      active: true,
      lang: 'en',
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
  overlay: true,
  non_eu_items: [
    {
      label: 'العربية',
      path: exampleLink,
      lang: 'ar',
    },
    {
      label: 'català',
      path: exampleLink,
      lang: 'ca',
    },
    {
      label: 'íslenska',
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
      label: 'norsk',
      path: exampleLink,
      lang: 'nb',
    },
    {
      label: 'pусский',
      path: exampleLink,
      lang: 'ru',
    },
    {
      label: 'türkçe',
      path: exampleLink,
      lang: 'tr',
    },
    {
      label: 'украї́нська',
      path: exampleLink,
      lang: 'uk',
    },
    {
      label: '中文',
      path: exampleLink,
      lang: 'zh',
    },
  ],
  eu_category: 'Official EU languages',
  non_eu_category: 'Other languages',
  icon_path: '/icons.svg',
  close_label: 'Close',
};
