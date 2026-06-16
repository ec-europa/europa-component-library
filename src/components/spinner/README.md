# ECL Spinner component

npm package: `@ecl/spinner`

```shell
npm install --save @ecl/spinner
```

### Parameters:

- **"variant"** (string) (default: 'primary') Spinner variant; can be 'primary', 'inverted'
- **"size"** (string) (default: 'm') Spinner size; can be 's', 'm', 'l'
- **"text"** (string) (default: '') Screen reader text for the spinner
- **"centered"** (boolean) (default: false) Center the spinner horizontally
- **"visible"** (boolean) (default: false) Make the spinner visible
- **"overlay"** (boolean) (default: false) Show the spinner with an overlay backdrop
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/spinner/spinner.html.twig' with {
    variant: 'inverted',
    centered: false,
    size: 'small',
    visible: true,
} %}
```
