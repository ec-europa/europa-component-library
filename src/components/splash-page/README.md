# ECL Spash Page component

npm package: `@ecl/splash-page`

```shell
npm install --save @ecl/splash-page
```

### Parameters

- **"logo"** (object) (default: {}) Logo image settings:
  - "title" (string) (default: '') Logo title attribute
  - "alt" (string) (default: '') Logo alt attribute
  - "path" (string) (default: '') Logo link URL
  - "src_desktop" (string) (default: '') Desktop logo image path
  - "src_mobile" (string) (default: '') Mobile logo image path (EU only)
- **"title"** (string) (default: '') Page title, eg. 'Select your language'
- **"eu_category"** (string) (default: '') Label for EU languages group
- **"non_eu_category"** (string) (default: '') Label for non-EU languages group
- **"items"** (array) (default: []) EU language items; format:
  - "lang" (string) (default: '') Language code, eg. 'en', 'fr'
  - "label" (string) (default: '') Language label, eg. 'English', 'Français'
  - "path" (string) (default: '') Language URL, eg. '/example#language_en'
  - "active" (boolean) (default: false) Whether this is the currently active language
- **"non_eu_items"** (array) (default: []) Non-EU language items (same structure as items)
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/splash-page/splash-page.html.twig' with { 
  logo: {
    alt: 'European Commission',
    path: exampleLink,
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
