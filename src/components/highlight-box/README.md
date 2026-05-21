# ECL Highlight box component

npm package: `@ecl/highlight-box`

```shell
npm install --save @ecl/highlight-box
```

## Parameters

- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/highlight-box/highlight-box.html.twig' with { 

} %}
```
