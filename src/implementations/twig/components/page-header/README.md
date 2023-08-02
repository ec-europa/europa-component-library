# ECL Page Header component

npm package: `@ecl/twig-component-page-header`

```shell
npm install --save @ecl/twig-component-page-header
```

### Parameters

- **"title"** (string) (default: '') Title of header
- **"hide_title"** (boolean) (default: false) Hide the h1 title, for screen reader only
- **"description"** (string) (default: '') Description of header
- **"picture_thumbnail"** (associative array) (default: {}): Image for thumbnail, following ECL Picture structure
- **"picture_background"** (associative array) (default: {}): Image for background, following ECL Picture structure
- **"meta"** (array) (default: []) Meta of header
- **"breadcrumb"** (associative array) (default: '') Predefined structure for the ECL Breadcrumb
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/page-header/page-header.html.twig' with {  
  title: 'Page title',  
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',  
  meta: 'News article | 17 October 2015',  
  breadcrumb: {  
    links: [  
      {  
        label: 'Link 1',  
        path: '/example'  
      },  
    ],  
    icon_file_path: '/path-to-the-icons-file',  
    navigation_text: 'You are here:',  
  },  
} %}  
```
