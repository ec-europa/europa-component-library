module.exports = {
  title: 'Language Selector Dialog',
  label: 'Language Selector Dialog',
  preview: '@preview-center-transparent',
  status: 'ready',
  tags: ['molecule'],
  context: {
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () {
          // This is only for demo purposes to facilitate end-users.

          // Create a link.
          var link = document.createElement('a');
          var text = document.createTextNode('Open the language selector');

          // Include textual content.
          link.appendChild(text);
          link.title = "Click to test the dialog";

          // Add necessary demo attributes.
          link.setAttribute('href', '#dialog');
          link.setAttribute('class', 'ecl-link');
          link.setAttribute('data-ecl-dialog', 'ecl-dialog');

          // Show the link
          document.body.appendChild(link);

          ECL.dialogs();
        });
      `,
    },
    dialog_description: {
      value: 'Example description',
    },
    dismiss: {
      label: 'Dismiss this dialog window',
    },
    languages: [
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
    ],
  },
};
