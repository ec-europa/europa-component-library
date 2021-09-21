const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  logo: {
    title: 'Commmission Européenne',
    alt: 'Logo Commmission Européenne',
    path: exampleLink,
    language: 'fr',
    src_desktop: '/logo-ec--fr.svg',
  },
  login_toggle: {
    label_not_logged: 'Connexion',
    href_not_logged: exampleLink,
    label_logged: 'Connecté',
    href_logged: exampleLink,
  },
  login_box: {
    id: 'login-box-id',
    description: 'Connecté en temps que "last name" "first name"',
    label: 'Déconnexion',
    href: exampleLink,
  },
  language_selector: {
    href: exampleLink,
    label: 'Français',
    code: 'fr',
    overlay: {
      title: 'Choisissez votre langue',
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
        },
        {
          label: 'français',
          path: exampleLink,
          active: true,
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
      close_label: 'Fermer',
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
    eu_category: 'Langues officielles de l&#39;UE',
    non_eu_category: 'Langues hors de l&#39;UE',
  },
  search_toggle: {
    label: 'Recherche',
    href: exampleLink,
  },
  search_form: {
    text_input: {
      id: 'search-input-id',
      label: 'Recherche',
      placeholder: 'Placeholder text',
    },
    button: {
      label: 'Recherche',
    },
    extra_attributes: [
      {
        name: 'id',
        value: 'search-form-id',
      },
    ],
  },
  site_name: 'Nom du site',
  cta_link: {
    link: {
      label: 'Lien CTA',
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
  banner_top: {
    link: {
      label: 'Classe',
      path: exampleLink,
    },
  },
};
