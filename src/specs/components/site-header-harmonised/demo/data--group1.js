const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  site_name: 'Site name',
  logo: {
    title: 'European Commission',
    alt: 'European Commission logo',
    href: exampleLink,
    language: 'en',
    src_desktop: '/logo-ec--en.svg',
  },
  group: 'group1',
  menu: {
    title: 'Menu',
    close: 'Close',
    back: 'Back',
    items: [
      {
        label: 'Home',
        path: exampleLink,
      },
      {
        label: 'Item 2',
        path: exampleLink,
        is_current: true,
        children: [
          {
            label: 'Item 2.1',
            path: exampleLink,
          },
          {
            label: 'Item 2.2',
            path: exampleLink,
          },
          {
            label: 'Item 2.3',
            path: exampleLink,
            is_current: true,
          },
          {
            label: 'Item 2.4',
            path: exampleLink,
          },
          {
            label: 'Item 2.5',
            path: exampleLink,
          },
          {
            label: 'Item 2.6',
            path: exampleLink,
          },
          {
            label: 'Item 2.7',
            path: exampleLink,
          },
          {
            label: 'Item 2.8',
            path: exampleLink,
          },
          {
            label: 'Item 2.9',
            path: exampleLink,
          },
          {
            label: 'Item 2.10',
            path: exampleLink,
          },
          {
            label: 'Item 2.11',
            path: exampleLink,
          },
          {
            label: 'Item 2.12',
            path: exampleLink,
          },
          {
            label: 'Item 2.13',
            path: exampleLink,
          },
          {
            label: 'Item 2.14',
            path: exampleLink,
          },
          {
            label: 'Item 2.15',
            path: exampleLink,
          },
          {
            label: 'Item 2.16',
            path: exampleLink,
          },
        ],
      },
      {
        label: 'Item 3',
        path: exampleLink,
        children: [
          {
            label: 'Item 3.1',
            path: exampleLink,
          },
          {
            label: 'Item 3.2',
            path: exampleLink,
          },
          {
            label: 'Item 3.3',
            path: exampleLink,
          },
        ],
      },
      {
        label: 'Item 4',
        path: exampleLink,
        children: [
          {
            label: 'Item 4.1',
            path: exampleLink,
          },
          {
            label: 'Item 4.2',
            path: exampleLink,
          },
          {
            label: 'Item 4.3 with a very long label going on 2 lines',
            path: exampleLink,
          },
          {
            label: 'Item 4.4',
            path: exampleLink,
          },
          {
            label: 'Item 4.5',
            path: exampleLink,
          },
          {
            label: 'Item 4.6',
            path: exampleLink,
          },
          {
            label: 'Item 4.7',
            path: exampleLink,
          },
          {
            label: 'Item 4.8',
            path: exampleLink,
          },
          {
            label: 'Item 4.9',
            path: exampleLink,
          },
          {
            label: 'Item 4.10',
            path: exampleLink,
          },
          {
            label: 'Item 4.11',
            path: exampleLink,
          },
          {
            label: 'Item 4.12',
            path: exampleLink,
          },
          {
            label: 'Item 4.13',
            path: exampleLink,
          },
          {
            label: 'Item 4.14',
            path: exampleLink,
          },
        ],
      },
      {
        label: 'Item 5',
        path: exampleLink,
        children: [
          {
            label: 'Item 5.1',
            path: exampleLink,
          },
          {
            label: 'Item 5.2',
            path: exampleLink,
          },
          {
            label: 'Item 5.3',
            path: exampleLink,
          },
          {
            label: 'Item 5.4',
            path: exampleLink,
          },
          {
            label: 'Item 5.5',
            path: exampleLink,
          },
          {
            label: 'Item 5.6',
            path: exampleLink,
          },
          {
            label: 'Item 5.7',
            path: exampleLink,
          },
        ],
      },
      {
        label: 'Item 6',
        path: exampleLink,
        children: [
          {
            label: 'Item 6.1',
            path: exampleLink,
          },
          {
            label: 'Item 6.2',
            path: exampleLink,
          },
          {
            label: 'Item 6.3',
            path: exampleLink,
          },
          {
            label: 'Item 6.4',
            path: exampleLink,
          },
          {
            label: 'Item 6.5',
            path: exampleLink,
          },
          {
            label: 'Item 6.6',
            path: exampleLink,
          },
          {
            label: 'Item 6.7',
            path: exampleLink,
          },
          {
            label: 'Item 6.8',
            path: exampleLink,
          },
          {
            label: 'Item 6.9 with a very long label',
            path: exampleLink,
          },
          {
            label: 'Item 6.10',
            path: exampleLink,
          },
          {
            label: 'Item 6.11',
            path: exampleLink,
          },
          {
            label: 'Item 6.12',
            path: exampleLink,
          },
          {
            label: 'Item 6.13',
            path: exampleLink,
          },
          {
            label: 'Item 6.14',
            path: exampleLink,
          },
          {
            label: 'Item 6.15',
            path: exampleLink,
          },
          {
            label: 'Item 6.16',
            path: exampleLink,
          },
        ],
      },
      {
        label: 'Item 7 with a long label',
        path: exampleLink,
        children: [
          {
            label: 'Item 7.1',
            path: exampleLink,
          },
          {
            label: 'Item 7.2',
            path: exampleLink,
          },
          {
            label: 'Item 7.3',
            path: exampleLink,
          },
          {
            label: 'Item 7.4',
            path: exampleLink,
          },
          {
            label: 'Item 7.5',
            path: exampleLink,
          },
          {
            label: 'Item 7.6',
            path: exampleLink,
          },
          {
            label: 'Item 7.7',
            path: exampleLink,
          },
          {
            label: 'Item 7.8',
            path: exampleLink,
          },
          {
            label: 'Item 7.9',
            path: exampleLink,
          },
          {
            label: 'Item 7.10',
            path: exampleLink,
          },
        ],
      },
    ],
    group1: true,
    icon_path: '/icons.svg',
    menu_link: exampleLink,
  },
  logged: true,
  banner_top: {
    link: {
      label: 'Class name',
      path: exampleLink,
    },
  },
  login_toggle: {
    label_not_logged: 'Log in',
    href_not_logged: exampleLink,
    label_logged: 'Logged in',
    href_logged: exampleLink,
  },
  login_box: {
    id: 'login-box-id',
    description: 'Logged in as &lt;last name&gt;, &lt;first name&gt;',
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
    extra_attributes: [
      {
        name: 'id',
        value: 'search-form-id',
      },
    ],
    text_input: {
      id: 'search-input-id',
      name: 'Search',
      label: 'Search',
    },
    button: {
      label: 'Search',
    },
  },
  icon_file_path: '/icons.svg',
};
