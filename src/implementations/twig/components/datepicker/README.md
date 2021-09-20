# ECL Datepicker

npm package: `@ecl/twig-component-datepicker`

```shell
npm install --save @ecl/twig-component-datepicker
```

### Parameters

- **"autoinit"** (boolean) (default: false)
- **"default_value"** (string) (default: '')
- **"helper_text"** (string) ) (default: '')
- **"invalid_text"** (string) (default: '')
- **"optional_text"** (string) (default: '')
- **"required_text"** (string) (default: '')
- **"required"** (boolean) (default: false)
- **"invalid"** (boolean) (default: false)
- **"disabled"** (boolean) (default: false)
- **"id"** (string) (default: '')
- **"type"**: (string) (default: 'text')
- **"name"** (string) (default: '')
- **"icons_path"**: (string) (default: '')
- **"invalid_icon"** (object of type "icon") (default: {})
- **"placeholder"**: (string) (default: 'dd/mm/yyyy')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig 
{% include '@ecl/datepicker/datepicker.html.twig' with { 
  helper_text: 'an helper text', 
  invalid_text: 'an invalid text', 
  optional_text: 'the text shown when not optional' 
  id: 'an-id-for-the-input', 
  name: 'a-name-for-the-input', 
  required: true, 
  type: 'text', 
  icons_path: '/icons.svg', 
} %} 
```
