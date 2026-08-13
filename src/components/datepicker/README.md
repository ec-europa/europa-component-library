# ECL Datepicker

npm package: `@ecl/datepicker`

```shell
npm install --save @ecl/datepicker
```

### Parameters

- **"autoinit"** (boolean) (default: false) Initialize the JS datepicker automatically
- **"id"** (string) (default: random) Unique id for the input
- **"name"** (string) (default: same as id) Name attribute for the input
- **"default_value"** (string) (default: '') Pre-filled value in YYYY-MM-DD format
- **"required"** (boolean) (default: false) Makes the field required
- **"invalid"** (boolean) (default: false) Displays the field in invalid state
- **"disabled"** (boolean) (default: false) Disables the input field
- **"width"** (string) (default: 'm') Width size of the input; can be 's', 'm', 'l'
- **"min"** (string) (default: '') Minimum selectable date in YYYY-MM-DD format
- **"max"** (string) (default: '') Maximum selectable date in YYYY-MM-DD format
- **"first_day_of_week"** (integer) (default: 1) First day of the week (0=Sunday, 1=Monday, etc.)
- **"placeholder"** (string) (default: 'DD-MM-YYYY') Placeholder text for the input
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes for the datepicker
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig 
{% include '@ecl/datepicker/datepicker.html.twig' with { 
  id: 'an-id-for-the-input', 
  placeholder: 'DD-MM-YYYY'
  required: true, 
} %} 
```
