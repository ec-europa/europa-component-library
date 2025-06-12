# ECL highlight component

npm package: `@ecl/highlight`

### Parameters:

- **"color_mode"** (string) The color mode name
- **"content"** (string) (default: '') Text of the highlight
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

```shell
npm install --save @ecl/highlight
```

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/highlight/highlight.html.twig' with { 
  content: 'Highlighted text', 
} %}
```
