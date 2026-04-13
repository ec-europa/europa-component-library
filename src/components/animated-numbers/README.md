# ECL animated numbers component

npm package: `@ecl/animated-numbers`

```shell
npm install --save @ecl/animated-numbers
```

### Parameters

- **"items"** (array) (default: []): format:
  - "id" (string) (default: '') Used for binding of togglable elements
  - "toggle" (predefined structure): see Button component
    - "label" (string) (default: '')
  - "content" (string) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/animated-numbers/animated-numbers.html.twig' with { 

} %} 
```
