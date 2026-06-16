# ECL File component

npm package: `@ecl/file`

```shell
npm install --save @ecl/file
```

### Parameters

- **"id"** (string) (default: random) Unique id for the file component
- **"variant"** (string) (default: 'default') Display variant; can be 'default' or 'thumbnail'
- **"icon"** (object) (default: {}): Object of type Icon; indicates the file type
- **"title"** (string|object) (default: '') Plain text title, or link object following ECL Link structure
- **"description"** (string) (default: '') Description text (thumbnail variant only)
- **"language"** (string) (default: '') Language label for the file
- **"meta"** (string) (default: '') File metadata (size, format, etc.)
- **"detail_meta"** (array) (default: []) Additional metadata elements for the thumbnail variant
- **"download"** (object) (default: {}): Download link, following ECL Link structure
- **"download_attribute"** (boolean) (default: false) Add the HTML download attribute to the download link
- **"picture"** (associative array) (default: {}): Thumbnail image, following ECL Picture structure
- **"label"** (array) (default: []) Array of ECL Label objects (also supported as a single label object)
- **"lists"** (array) (default: []) Array of description list objects:
  - "variant" (string) Description list variant; can be 'taxonomy' or 'horizontal'
  - "items" (array) Description list items:
    - "term" (string) Term label
- **"translation"** (array) (default: []) Translation panel for multiple language versions:
  - "toggle" (object) (default: {}): Toggle button, following ECL Button structure
  - "download_attribute" (boolean) (default: false) Add download attribute to all translation links
  - "items" (array) (default: []) Translation items:
    - "title" (string) (default: '') Language label
    - "meta" (string) (default: '') File metadata for this language version
    - "lang" (string) (default: '') Language code (ISO 639-1)
    - "download" (object) Download link override for this language (falls back to parent download)
    - "download_attribute" (boolean) Download attribute override for this language
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/file/file.html.twig' with {
  title: 'State of the Union 2018 brochure',
  language: 'English',
  meta: '(16.2 MB - PDF)',
  icon: {
    name: 'copy',
    size: '2xl',
  },
  download: {
    link: {
      label: 'Download',
      path: '/example',
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
