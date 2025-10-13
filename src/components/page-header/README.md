# ECL Page Header component

npm package: `@ecl/page-header`

```shell
npm install --save @ecl/page-header
```

### Parameters

- **"title"** (string) (default: '') Title of header
- **"hide_title"** (boolean) (default: false) Hide the h1 title, for screen reader only
- **"description"** (string) (default: '') Description of header
- **"picture_thumbnail"** (associative array) (default: {}): Image for thumbnail, following ECL Picture structure
- **"picture_background"** (associative array) (default: {}): Image for background, following ECL Picture structure
- **"meta"** (array) (default: []) Meta of header
- **"breadcrumb"** (associative array) (default: '') Predefined structure for the ECL Breadcrumb
- **"expandable"** (associative array) Page header expandable
  - "title" (default: '')
  - "description" (default: '')
  - "more" (default: '')
  - "lists" (default: [])
  - "more_link" (default: {})
  - "toggle_label" (default: '')
  - "toggle_extra_attributes" (default: '')
  - "separator" (default: '')
  - "header_content" (default: '') if a link is provided the attribute data-ecl-page-header-expandable-header-link needs to be added to it.
  - "panel_content" (default: '')
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
    navigation_text: 'You are here:',  
  },  
} %}  
```
