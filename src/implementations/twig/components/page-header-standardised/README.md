# ECL Page Header Standardised component

npm package: `@ecl/twig-component-page-header-standardised`

```shell
npm install --save @ecl/twig-component-page-header-standardised
```

### Parameters

- **"title"** (string) (default: '') Title of header
- **"description"** (string) (default: '') Description of header
- **"meta"** (string) (default: '') Meta of header
- **"breadcrumb"** (associative array) (default: '') Predefined structure compatible with EC Breadcrumb
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"\_compliance**"\_ (boolean) (default: false) Activates debug

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/page-header-standardised/page-header-standardised.html.twig' with {  
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
  }  
} %}  
```
