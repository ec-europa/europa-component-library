# ECL File component

npm package: `@ecl/file`

```shell
npm install --save @ecl/file
```

### Parameters

- **"id"** (string) (default: random) Unique id for the file component
- **"icon"** (object) (default: {}): Object of type Icon; indicates the file type
- **"title"** (string|object) (default: '') Plain text title, or link object following ECL Link structure
- **"description"** (string) (default: '') Description text
- **"language"** (string) (default: '') Language label for the file
- **"meta"** (string) (default: '') File metadata (size, format, etc.)
- **"primary_meta"** (array) (default: []) Primary meta of the file
- **"download"** (object) (default: {}): Download link, following ECL Link structure
- **"download_attribute"** (boolean) (default: false) Add the HTML download attribute to the download link
- **"picture"** (associative array) (default: {}): Thumbnail image, following ECL Picture structure
- **"label"** (array) (default: []) Array of ECL Label objects (also supported as a single label object)
- **"lists"** (array) (default: []) Array of ECL Description list objects
- **"translation"** (array) (default: []) Translation panel for multiple language versions:
  - "sr_toggle" (string) (default: ''): Additional toggle label; for screen readers
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

### Deprecated

- **"variant"** (string) (default: 'default') Display variant; can be 'default' or 'thumbnail'; not used anmore
- **"detail_meta"** (array) (default: []) Additional metadata for the thumbnail variant; replaced by 'primary_meta'
- **"translation.toggle"** (object) (default: {}): Toggle button, following ECL Button structure; now set in the template directly

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
    sr_toggle: 'Other languages',
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
