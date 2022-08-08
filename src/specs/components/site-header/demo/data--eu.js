const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  logo: {
    title: 'European Union',
    alt: 'European Union flag',
    path: exampleLink,
    language: 'en',
    src_desktop: '/standard-version/positive/logo-eu--en.svg',
    src_mobile: '/condensed-version/positive/logo-eu--en.svg',
  },
  login_toggle: {
    label_not_logged: 'Log in',
    href_not_logged: exampleLink,
    label_logged: 'Logged in',
    href_logged: exampleLink,
  },
  login_box: {
    id: 'login-box-id',
    description: 'Logged in as "last name" "first name"',
    label: 'Log out',
    href: exampleLink,
  },
  language_selector: {
    href: exampleLink,
    label: 'English',
    aria_label: 'Change language',
    code: 'en',
    overlay: {
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
      close_label: 'Close',
      non_eu_items: [
        {
          label: '中文',
          path: exampleLink,
          lang: 'zh',
        },
        {
          label: 'Türk',
          path: exampleLink,
          lang: 'tr',
        },
        {
          label: 'pусский',
          path: exampleLink,
          lang: 'ru',
        },
        {
          label: 'Català',
          path: exampleLink,
          lang: 'ca',
        },
        {
          label: 'عَرَبِيّ',
          path: exampleLink,
          lang: 'ar',
        },
      ],
    },
    eu_category: 'EU official languages',
    non_eu_category: 'Non-EU languages',
  },
  search_toggle: {
    label: 'Search',
    href: exampleLink,
  },
  search_form: {
    text_input: {
      id: 'search-input-id',
      label: 'Search',
      placeholder: 'Placeholder text',
    },
    button: {
      label: 'Search',
    },
    extra_attributes: [
      {
        name: 'id',
        value: 'search-form-id',
      },
    ],
  },
  site_name: 'Site name',
  cta_link: {
    link: {
      label: 'CTA link',
      href: exampleLink,
    },
    icon: {
      path: '/icons.svg',
      name: 'corner-arrow',
      size: 'fluid',
      transform: 'rotate-90',
    },
  },
  icon_file_path: '/icons.svg',
};
