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
    label: 'EN',
    aria_label: 'Change language, current language is English',
    code: 'en',
    overlay: {
      title: 'Select your language',
      close: {
        label: 'Close',
        icon: {
          path: '/icons.svg',
          name: 'close',
          size: 'm',
        },
        hide_label: true,
      },
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
    },
    eu_category: 'Official EU languages:',
    non_eu_category: 'Other languages:',
  },
  search_toggle: {
    label: 'Search',
    href: exampleLink,
  },
  search_form: {
    label: 'Search',
    text_input: {
      id: 'search-input-id',
      label: 'Search',
      placeholder: 'Placeholder text',
    },
    button: {
      variant: 'ghost',
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
  icon_path: '/icons.svg',
  banner_top: {
    link: {
      label: 'Class name',
      path: exampleLink,
    },
  },
  notification: {
    variant: 'info',
    icon: {
      path: '/icons.svg',
      name: 'information',
      size: 'l',
    },
    title: 'Information notification',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.',
    close: {
      variant: 'ghost',
      label: 'Close',
      icon: {
        path: '/icons.svg',
        name: 'close-filled',
        size: 'xs',
      },
    },
  },
};
