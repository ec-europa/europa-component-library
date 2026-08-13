# ECL page information component

npm package: `@ecl/page-information`

### Parameters:

- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- **"content"**: free block to put any content in the page information

```shell
npm install --save @ecl/page-information
```

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/page-information/page-information.html.twig' with {
  content: 'This page was last updated on 00 Month 0000',
} %}
```
