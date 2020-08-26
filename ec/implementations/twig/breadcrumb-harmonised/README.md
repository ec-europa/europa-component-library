# ECL-Twig Breadcrumb Harmonised component

npm package: `@ecl-twig/ec-component-breadcrumb-harmonised`

```shell
npm install --save @ecl-twig/ec-component-breadcrumb-harmonised
```

### Parameters

- **"links"** (array) (default: []): format:
  - "label" (string) (default: '') Label of link
  - "path" (string) (default: '') Url of link
- **"navigation_text"** (string) (default: ''): Text of navigation in breadcrumb
- **"ellipsis_label"** (string) (default: ''): Label of the ellipsis, e.g. "Click to expand"
- **"icon_file_path"** (string) (default: ''): URL to icons file
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (optional) (boolean) (default: false) Activates debug
- **"_compliance_inner_check_"** (optional) (boolean) (default: false) Inline compliance report

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-breadcrumb-harmonised/ecl-breadcrumb-harmonised.html.twig' with { 
  links: [ 
    { 
      label: 'Link 1', 
      path: '/example' 
    }, 
    { 
      label: 'Link 2', 
      path: '/example' 
    }, 
    { 
      label: 'Link 3', 
      path: '/example' 
    }, 
    { 
      label: 'Link 4', 
      path: '/example' 
    }, 
    { 
      label: 'Link 5', 
      path: '/example' 
    }, 
    { 
      label: 'Link 6', 
      path: '/example' 
    }, 
  ], 
  icon_file_path: '/path-to-the-icons-file', 
  navigation_text: 'You are here:',  
  ellipsis_label: 'Click to expand' 
} %}  
```
