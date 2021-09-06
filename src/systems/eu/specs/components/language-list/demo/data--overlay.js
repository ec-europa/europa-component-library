// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  closeLabel: 'Close',
  title: 'Select your language',
  categoryEu: 'EU official languages',
  items: [
    { lang: 'bg', label: 'български', href: `${exampleLink}#language_bg` },
    { lang: 'es', label: 'español', href: `${exampleLink}#language_es` },
    { lang: 'cs', label: 'čeština', href: `${exampleLink}#language_cs` },
    { lang: 'da', label: 'dansk', href: `${exampleLink}#language_da` },
    { lang: 'de', label: 'Deutsch', href: `${exampleLink}#language_de` },
    { lang: 'et', label: 'eesti', href: `${exampleLink}#language_et` },
    { lang: 'el', label: 'ελληνικά', href: `${exampleLink}#language_el` },
    {
      lang: 'en',
      label: 'English',
      href: `${exampleLink}#language_en`,
      isActive: true,
    },
    { lang: 'fr', label: 'français', href: `${exampleLink}#language_fr` },
    { lang: 'ga', label: 'Gaeilge', href: `${exampleLink}#language_ga` },
    { lang: 'hr', label: 'hrvatski', href: `${exampleLink}#language_hr` },
    { lang: 'it', label: 'italiano', href: `${exampleLink}#language_it` },
    { lang: 'lv', label: 'latviešu', href: `${exampleLink}#language_lv` },
    { lang: 'lt', label: 'lietuvių', href: `${exampleLink}#language_lt` },
    { lang: 'hu', label: 'magyar', href: `${exampleLink}#language_hu` },
    { lang: 'mt', label: 'Malti', href: `${exampleLink}#language_mt` },
    { lang: 'nl', label: 'Nederlands', href: `${exampleLink}#language_nl` },
    { lang: 'pl', label: 'polski', href: `${exampleLink}#language_pl` },
    { lang: 'pt', label: 'português', href: `${exampleLink}#language_pt` },
    { lang: 'ro', label: 'română', href: `${exampleLink}#language_ro` },
    { lang: 'sk', label: 'slovenčina', href: `${exampleLink}#language_sk` },
    { lang: 'sl', label: 'slovenščina', href: `${exampleLink}#language_sl` },
    { lang: 'fi', label: 'suomi', href: `${exampleLink}#language_fi` },
    { lang: 'sv', label: 'svenska', href: `${exampleLink}#language_sv` },
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
