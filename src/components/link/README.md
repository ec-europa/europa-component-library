# ECL Link component

npm package: `@ecl/link`

```shell
npm install --save @ecl/link
```

### Parameters

- **"link"** (object) (default: {}):
  - "type" (string) (default: '') Link type; can be '', 'standalone', 'primary', 'primary-highlight', 'primary-neutral', 'secondary', 'secondary-neutral', 'secondary-inverted'
  - "inverted" (boolean) (default: false) Is the link inverted (displayed on dark background)?
  - "branded" (boolean) (default: false) Is the link using brand color (usually dark)?
  - "label" (string) (default: '') Link text content
  - "path" (string) (default: '') Link href attribute
  - "external" (boolean) (default: false) Activates the external link icon
  - "sr_external" (string) (default: '') Additional screen reader label for external icon
  - "aria_label" (string) (default: '') Aria label attribute value
  - "icon_position" (string) (default: 'after') Position of link icon; can be 'before' or 'after'
  - "hide_label" (boolean) (default: false) Hide link label visually (screen reader only); requires an icon
  - "indicator" (object) (default: {}) Indicator component object; only shown when there is an icon and no label
- **"icon"** (object) OR (array) of objects ECL Icon structure; extra_classes is used internally for positioning
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

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
