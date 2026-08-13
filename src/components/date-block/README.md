# ECL Date block

npm package: `@ecl/date-block`

```shell
npm install --save @ecl/date-block
```

### Parameters

- **"day"** (string) (default: '') Day of the month
- **"month"** (string) (default: '') Abbreviated name of the month
- **"year"** (string) (default: '') Year in four digits
- **"month_full"** (string) (default: '') Full month name
- **"date_time"** (string) (default: '') Machine-readable date in standard format (YYYY-MM-DD)
- **"variant"** (string) (default: '') Visual variant of the component; can be 'ongoing', 'past', 'canceled'
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/date-block/date-block.html.twig' with { 
  day: '26', 
  month: 'Dec', 
  year: '2018', 
  month_full: 'December', 
  date_time: '2018-12-26',
  variant: 'ongoing', 
  extra_classes: 'extra_class_1 extra_class-2', 
  extra_attributes: [ 
    { 
      name: 'extra_attribute_1', 
      value: 'extra_attribute_value_1' 
    }, 
    { 
      name: 'extra_attribute_2', 
      value: 'extra_attribute_value_2' 
    } 
  ], 
} %}
```
