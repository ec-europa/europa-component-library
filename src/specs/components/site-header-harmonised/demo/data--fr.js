const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  site_name: 'Nom du site',
  logo: {
    title: 'Union Européenne',
    alt: 'Logo Union Européenne',
    href: exampleLink,
    language: 'fr',
    src_mobile: 'static/media/fr.c897b011.svg',
    src_desktop: 'static/media/logo-ec--fr.ef2ee614.svg',
  },
  menu: {
    title: 'Menu',
    close: 'Fermer',
    back: 'Retour',
    items: [
      {
        label: 'Accueil',
        path: exampleLink,
      },
      {
        label: 'Item 2',
        path: exampleLink,
        submenu_label: 'has submenu',
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
        submenu_label: 'has submenu',
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
        submenu_label: 'has submenu',
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
            label: 'Item 4.3 avec un long titre sur plusieurs lignes',
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
        submenu_label: 'has submenu',
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
        submenu_label: 'has submenu',
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
            label: 'Item 6.9 avec un long titre',
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
        label: 'Item 7 avec un long titre',
        path: exampleLink,
        submenu_label: 'has submenu',
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
    icon_path: '/icons.svg',
    site_name: 'Nom du site',
    menu_link: exampleLink,
  },
  login_toggle: {
    label_not_logged: 'Connexion',
    href_not_logged: exampleLink,
    label_logged: 'Connecté',
    href_logged: exampleLink,
  },
  login_box: {
    id: 'login-box-id',
    description: 'Connecté en temps que <last name>, <first name>',
    label: 'Déconnexion',
    href: exampleLink,
  },
  language_selector: {
    href: exampleLink,
    label: 'Français',
    aria_label: 'Changer de langue',
    code: 'fr',
    overlay: {
      title: 'Choisissez votre langue',
      items: [
        {
          label: 'български',
          path: exampleLink,
          aria_label: '',
          lang: 'bg',
        },
        {
          label: 'español',
          path: exampleLink,
          aria_label: '',
          lang: 'es',
        },
        {
          label: 'čeština',
          path: exampleLink,
          aria_label: '',
          lang: 'cs',
        },
        {
          label: 'dansk',
          path: exampleLink,
          aria_label: '',
          lang: 'da',
        },
        {
          label: 'Deutsch',
          path: exampleLink,
          aria_label: '',
          lang: 'de',
        },
        {
          label: 'eesti',
          path: exampleLink,
          aria_label: '',
          lang: 'et',
        },
        {
          label: 'ελληνικά',
          path: exampleLink,
          aria_label: '',
          lang: 'el',
        },
        {
          label: 'English',
          path: exampleLink,
          aria_label: '',
          lang: 'en',
        },
        {
          label: 'français',
          path: exampleLink,
          aria_label: '',
          active: true,
          lang: 'fr',
        },
        {
          label: 'Gaeilge',
          path: exampleLink,
          aria_label: '',
          lang: 'ga',
        },
        {
          label: 'hrvatski',
          path: exampleLink,
          aria_label: '',
          lang: 'hr',
        },
        {
          label: 'italiano',
          path: exampleLink,
          aria_label: '',
          lang: 'it',
        },
        {
          label: 'latviešu',
          path: exampleLink,
          aria_label: '',
          lang: 'lv',
        },
        {
          label: 'lietuvių',
          path: exampleLink,
          aria_label: '',
          lang: 'lt',
        },
        {
          label: 'magyar',
          path: exampleLink,
          aria_label: '',
          lang: 'hu',
        },
        {
          label: 'Malti',
          path: exampleLink,
          aria_label: '',
          lang: 'mt',
        },
        {
          label: 'Nederlands',
          path: exampleLink,
          aria_label: '',
          lang: 'nl',
        },
        {
          label: 'polski',
          path: exampleLink,
          aria_label: '',
          lang: 'pl',
        },
        {
          label: 'português',
          path: exampleLink,
          aria_label: '',
          lang: 'pt',
        },
        {
          label: 'română',
          path: exampleLink,
          aria_label: '',
          lang: 'ro',
        },
        {
          label: 'slovenčina',
          path: exampleLink,
          aria_label: '',
          lang: 'sk',
        },
        {
          label: 'slovenščina',
          path: exampleLink,
          aria_label: '',
          lang: 'sl',
        },
        {
          label: 'suomi',
          path: exampleLink,
          aria_label: '',
          lang: 'fi',
        },
        {
          label: 'svenska',
          path: exampleLink,
          aria_label: '',
          lang: 'sv',
        },
      ],
      close_label: 'Fermer',
      non_eu_items: [
        {
          label: '中文',
          path: exampleLink,
          aria_label: '',
          lang: 'zh',
        },
        {
          label: 'Türk',
          path: exampleLink,
          aria_label: '',
          lang: 'tr',
        },
        {
          label: 'pусский',
          path: exampleLink,
          aria_label: '',
          lang: 'ru',
        },
        {
          label: 'Català',
          path: exampleLink,
          aria_label: '',
          lang: 'ca',
        },
        {
          label: 'عَرَبِيّ',
          path: exampleLink,
          aria_label: '',
          lang: 'ar',
        },
      ],
    },
    eu_category: 'Langues officielles de l&#39;UE',
    non_eu_category: 'Langues hors de l&#39;UE',
  },
  search_toggle: {
    label: 'Recherche',
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
      name: 'Recherche',
      label: 'Recherche',
    },
    button: {
      label: 'Recherche',
    },
  },
  icon_file_path: 'static/media/icons.3cf410f9.svg',
};
