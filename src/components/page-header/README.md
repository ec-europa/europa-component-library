# ECL Page Header component

npm package: `@ecl/page-header`

```shell
npm install --save @ecl/page-header
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"has_background"** (boolean) (default: false) Use a colored background
- **"title"** (string) (default: '') Page header title (h1)
- **"hide_title"** (boolean) (default: false) Hide the h1 title visually (screen reader only)
- **"description"** (string) (default: '') Page header description text
- **"description_position"** (string) (default: 'top') Description position; can be 'top', 'bottom'
- **"expandable"** (object) (default: {}) Page header expandable section:
  - "toggle_label" (string) (default: '') Label for the expandable toggle
  - "toggle_extra_attributes" (array) (default: []) Extra attributes for the toggle
  - "header_content" (string) (default: '') Content always visible in the expandable
  - "panel_content" (string) (default: '') Content shown when expanded
- **"picture_thumbnail"** (object) (default: {}) Thumbnail image following ECL Picture structure
- **"picture_background"** (object) (default: {}) Background image following ECL Picture structure
- **"picture_position"** (string) (default: 'top') Picture position; can be 'top', 'beside', 'bottom'
- **"meta"** (array) (default: []) Header meta items; array of strings or objects with `label` and `icon`
- **"breadcrumb"** (object) (default: {}) Breadcrumb following ECL Breadcrumb structure
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/page-header/page-header.html.twig' with {  
  title: 'Page title',  
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',  
  meta: [
    '10 March 2025', 
    { 
      label: 'Brussels', 
      icon: {
        name: 'location',
      },
    }
  ],
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
