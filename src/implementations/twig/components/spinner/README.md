# ECL Spinner component

npm package: `@ecl/twig-component-spinner`

```shell
npm install --save @ecl/twig-component-spinner
```

### Parameters:

- **"variant"** (string) (default: 'primary')
  options: [ primary, negative ]
- **"size"** (string) (default: 'medium')
  options: [ small, medium, large ]
- **"text"** (string) (default: '')
- **"visible"** (boolean) (default: false)
- **"centered"** (boolean) (default: true))
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/spinner/spinner.html.twig' with {
    variant: 'negative',
    centered: false,
    size: 'small',
    visible: true,
} %}
```
