# ECL Spash Page component

npm package: `@ecl/twig-component-splash-page`

```shell
npm install --save @ecl/twig-component-splash-page
```

### Parameters

- **"logo"** (associative array) (default: predefined structure): Logo image settings. format:
  - "title" (string) (default: ''): Logo title attribute.
  - "alt" (string) (default: ''): Logo alt attribute.
  - "href" (string) (default: ''): Logo URL.
  - "src_desktop" (string) (default: ''): Desktop logo image file path
  - "src_mobile" (string) (default: ''): Mobile logo image file path for EU only
- **"title"** (string) (default: ''): Page title, eg. 'Select your language'
- **"eu_category"** (string) (default: ''): Label for EU languages
- **"non_eu_category"** (string) (default: ''): Label for non-EU languages
- **"items"** (array) (default: []): (array) (default: []): format: [
  {
  "lang" (string) (default: '') Item language code, eg. 'en', 'fr', etc.
  "label" (string) (default: '') Item language label, eg. 'English', 'Français', etc.
  "path" (string) (default: '') Item language URL eg. '/example#language_en'.
  "active" (boolean) (default: false) define if item is the active language.
  },
  ],
- **"non_eu_items"** (array) (default: []): (array) (default: []): format: [
  {
  "lang" (string) (default: '') Item language code, eg. 'en', 'fr', etc.
  "label" (string) (default: '') Item language label, eg. 'English', 'Français', etc.
  "path" (string) (default: '') Item language URL eg. '/example#language_en'.
  "active" (boolean) (default: false) define if item is the active language.
  },
  ],
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/splash-page/splash-page.html.twig' with { 
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
    { label: 'български', path: /example#language_bg, lang: 'bg' },
    { label: 'español', path: /example#language_es, lang: 'es' },
    ...
  ],
  non_eu_items: [
    { label: 'عَرَبِيّ', path: /example#language_ar, lang: 'ar' },
    ...
  ],
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    ... 
  ], 
} %} 
```
