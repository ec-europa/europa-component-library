# ECL page information component

npm package: `@ecl/page-information`

### Parameters:

- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

```shell
npm install --save @ecl/page-information
```

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/page-information/page-information.html.twig'  %}
```
