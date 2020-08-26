# ECL-Twig File component

npm package: `@ecl-twig/ec-component-file`

```shell
npm install --save @ecl-twig/ec-component-file
```

### Parameters

- **"icon"** (object) (default: {}): object of type Icon; file type
- **"variant"** (string) (default: '') Thumbnail
- **"title"** (string) (default: '')
- **"description"** (string) (default: '')
- **"language"** (string) (default: '')
- **"meta"** (string) (default: '')
- **"detail_meta"** (array) (default: []) Meta element for the thumbnail variant
- **"download"** (object) (default: {}): object of type Link
- **"translation"** (array) (default: []):
  - "toggle" (object) (default: {}): object of type Button
  - "items" (array) (default: []):
    - "title" (string) (default: '')
    - "meta" (string) (default: '')
    - "lang" (string) (default: '')
    - "download" (object) (default to the parent download property) object of type Link
  - "description (string) (default:'')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (boolean) (default: false) Activates debug

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-file/ecl-file.html.twig' with { 
  title: 'State of the Union 2018 brochure', 
  language: 'English', 
  meta: '(16.2 MB - PDF)', 
  icon_path: 'path/to/icons.svg', 
  icon: { 
    type: 'general', 
    name: 'copy', 
    size: '2xl', 
    path: 'path/to/icons.svg', 
  }, 
  download: { 
    label: 'Download', 
    path: '/example', 
    icon: { 
      type: 'ui', 
      name: 'download', 
      size: 'fluid', 
      path: 'path/to/icons.svg', 
    }, 
  }, 
  translation: { 
    toggle: { 
      label: 'Other languages (3)', 
      icon: { 
        type: 'ui', 
        name: 'corner-arrow', 
        size: 'fluid', 
        transform: 'rotate-180', 
      }, 
    }, 
    description: 'Looking for another language which is not on the list? Find out why.', 
    items: [ 
      { 
        title: 'български', 
        meta: '(15.7 MB - PDF)', 
        lang: 'bg', 
      }, 
      ... 
    ], 
  }, 
} %}
```
