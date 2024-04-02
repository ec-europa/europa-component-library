# ECL File component

npm package: `@ecl/twig-component-file`

```shell
npm install --save @ecl/twig-component-file
```

### Parameters

- **"id"** (string) (default: random string)
- **"icon"** (object) (default: {}): object of type Icon; file type
- **"variant"** (string) (default: '') Thumbnail
- **"title"** (string|object) (default: '') Title as plain text or link object
- **"description"** (string) (default: '')
- **"language"** (string) (default: '')
- **"meta"** (string) (default: '')
- **"detail_meta"** (array) (default: []) Meta element for the thumbnail variant
- **"download"** (object) (default: {}): object of type Link
- **"picture"** (associative array) (default: {}): Image, following ECL Picture structure
- **"label"** (array of objects of type Label) (default: []) labels
  ** also supported as an object with a single label **
- **"lists"** (array) (default: []) Array of objects of type "description list"
  - "variant" (optional) (taxonomy or horizontal)
  - "items" (array)
    - term (string)
- **"translation"** (array) (default: []):
  - "toggle" (object) (default: {}): object of type Button
  - "items" (array) (default: []):
    - "title" (string) (default: '')
    - "meta" (string) (default: '')
    - "lang" (string) (default: '')
    - "download" (object) (default to the parent download property) object of type Link
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/file/file.html.twig' with {
  title: 'State of the Union 2018 brochure',
  language: 'English',
  meta: '(16.2 MB - PDF)',
  icon_path: 'path/to/icons.svg',
  icon: {
    name: 'copy',
    size: '2xl',
    path: 'path/to/icons.svg',
  },
  download: {
    label: 'Download',
    path: '/example',
    icon: {
      name: 'download',
      size: 'fluid',
      path: 'path/to/icons.svg',
    },
  },
  translation: {
    toggle: {
      label: 'Other languages (3)',
      icon: {
        name: 'corner-arrow',
        size: 'fluid',
        transform: 'rotate-180',
      },
    },
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
