# ECL separator component

npm package: `@ecl/twig-component-separator`

### Parameters:

- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

```shell
npm install --save @ecl/twig-component-separator
```

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/separator/separator.html.twig'  %}
```
