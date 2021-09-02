// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  logoAlt: 'European Commission logo',
  categoryEu: 'EU official languages',
  items: [
    { lang: 'bg', label: 'български', href: exampleLink },
    { lang: 'es', label: 'español', href: exampleLink },
    { lang: 'cs', label: 'čeština', href: exampleLink },
    { lang: 'da', label: 'dansk', href: exampleLink },
    { lang: 'de', label: 'Deutsch', href: exampleLink },
    { lang: 'et', label: 'eesti', href: exampleLink },
    { lang: 'el', label: 'ελληνικά', href: exampleLink },
    { lang: 'en', label: 'English', href: exampleLink, isActive: true },
    { lang: 'fr', label: 'français', href: exampleLink },
    { lang: 'ga', label: 'Gaeilge', href: exampleLink },
    { lang: 'hr', label: 'hrvatski', href: exampleLink },
    { lang: 'it', label: 'italiano', href: exampleLink },
    { lang: 'lv', label: 'latviešu', href: exampleLink },
    { lang: 'lt', label: 'lietuvių', href: exampleLink },
    { lang: 'hu', label: 'magyar', href: exampleLink },
    { lang: 'mt', label: 'Malti', href: exampleLink },
    { lang: 'nl', label: 'Nederlands', href: exampleLink },
    { lang: 'pl', label: 'polski', href: exampleLink },
    { lang: 'pt', label: 'português', href: exampleLink },
    { lang: 'ro', label: 'română', href: exampleLink },
    { lang: 'sk', label: 'slovenčina', href: exampleLink },
    { lang: 'sl', label: 'slovenščina', href: exampleLink },
    { lang: 'fi', label: 'suomi', href: exampleLink },
    { lang: 'sv', label: 'svenska', href: exampleLink },
  ],
  categoryNonEu: 'Non-EU languages',
  itemsNonEu: [
    { lang: 'zh', label: '中文', href: exampleLink },
    { lang: 'tr', label: 'Türk', href: exampleLink },
    { lang: 'ru', label: 'pусский', href: exampleLink },
    { lang: 'ca', label: 'Català', href: exampleLink },
    { lang: 'ar', label: 'عَرَبِيّ', href: exampleLink },
  ],
};
