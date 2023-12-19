# ECL Datepicker

npm package: `@ecl/twig-component-datepicker`

```shell
npm install --save @ecl/twig-component-datepicker
```

### Parameters

- **"autoinit"** (boolean) (default: false)
- **"default_value"** (string) (default: '')
- **"required"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"disabled"** (boolean) (default: false)
- **"id"** (string) (default: '')
- **"type"**: (string) (default: 'text')
- **"name"** (string) (default: '')
- **"icon_path"**: (string) (default: '')
- **"placeholder"**: (string) (default: 'DD-MM-YYYY')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes for the datepicker
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig 
{% include '@ecl/datepicker/datepicker.html.twig' with { 
  id: 'an-id-for-the-input', 
  name: 'a-name-for-the-input', 
  required: true, 
  type: 'text', 
  icon_path: '/icons.svg', 
} %} 
```
