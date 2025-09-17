# ECL Link component

npm package: `@ecl/link`

```shell
npm install --save @ecl/link
```

### Parameters

- **"link"** (associative array) (default: 'predefined structure below')
  - "type" (string) (default: '') - type of link. Available types are '', 'standalone', 'primary', 'primary-highlight', 'secondary'
  - "inverted" (boolean) (default: false) - Is the link inverted (displayed on dark background) or not
  - "no_visited" (boolean) (default: false) - Prevent color change for visited links
  - "label" (string) (default: '') - Content of link
  - "path" (string) (default: '') - Link url (href attribute)
  - "external" (boolean) (default: false) Activates the external link icon
  - "sr_external" (string) (default: '') Additional label for external icon
  - "aria_label" (string) (default: '') Aria label attribute value
  - "icon_position" (string) (default: 'after') - Position of link icon (can be 'before' or 'after') if icon is available
  - "hide_label" (boolean) (default: false) hide link label, for screen reader only. Note: requires to have an icon defined
  - "indicator" (object) (default: {}) object of type Indicator. To be displayed it should be defined and not empty (should contain at least an empty value), and only if there is an icon and no label
- **"icon"** (optional) (associative array) OR (array) of associate arrays - Default structure of the icon component, but extra_classes is an internal key.
  The name has to be non empty for the icon to be printed.
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1',

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/link/link.html.twig' with { 
  link: { 
    type: 'standalone', 
    label: 'Standalone link', 
    path: 'http://google.com', 
    icon_position: 'after' 
    aria_label: 'An aria label' 
  }, 
  icon: {  
    name: 'external', 
    extra_classes: 'my-extra-class-1 my-extra-class-2' 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
