# ECL-Twig Datepicker

npm package: `@ecl-twig/ec-component-datepicker`

```shell
npm install --save @ecl-twig/ec-component-datepicker
```

### Parameters

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
- **"placeholder"**: (string) (default: 'dd/mm/yyyy')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (boolean) (default: false) Activates debug

### Example:

<!-- prettier-ignore -->
```twig 
{% include '@ecl-twig/ec-component-datepicker/ecl-datepicker.html.twig' with { 
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
