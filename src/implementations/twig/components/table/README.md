# ECL Table component

npm package: `@ecl/twig-component-table`

```shell
npm install --save @ecl/twig-component-table
```

### Parameters:

- **"simple"** (boolean) (default: false)
- **"zebra"** (boolean) (default: false))
- **"sortable"** (boolean) (default: false)
- **"headers"** (array) (default: [])
  - "label" (string or array of string)
  - "colspan" (string) (default: ''),
  - "rowspan" (string) (default: ''),
  - "data-ecl-table-header-group" (string) (default: ''),
- **"rows"** (array) (default: [])
  [
  - "extra_attributes": (string) (default: ''),
  - "extra_classes": (string) (default: '') Extra classes for the table row (space separated)
    { - "label" (string or array of string) - "data-ecl-table-header" (string) (default: ''), - "data-ecl-table-header-group" (string) (default: '') - "group" (bool) (default: false),
    }
    ],
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/table/table.html.twig' with { 
  zebra: true, 
  headers: [ 
  [ 
    { label: 'Name' }, 
    { label: 'Registration date' }, 
    { label: 'Languages', colspan: '3' }, 
  ], 
  [ 
    { label: '' }, 
    { label: '' }, 
    { label: 'English' }, 
    { label: 'French' }, 
    { label: 'German' }, 
  ], 
  ], 
  rows: [ 
  [ 
    extra_classes: 'an-extra-class', 
    { label: 'John', 'data-ecl-table-header': 'Name' }, 
    { 
      label: 'September 14, 2013', 
      'data-ecl-table-header': 'Registration date', 
    }, 
    { 
      label: 'Yes', 
      'data-ecl-table-header': 'English', 
      'data-ecl-table-header-group': 'Language', 
      group: true, 
    }, 
    {
      label: 'No', 
      'data-ecl-table-header': 'French', 
      group: true, 
    }, 
    { 
      label: 'Yes', 
      'data-ecl-table-header': 'German', 
      group: true, 
    }, 
  ], 
  [ 
    extra_classes: 'an-extra-class', 
    extra_attributes: 'an-extra-attribute', 
    { label: 'Ron', 'data-ecl-table-header': 'Name' }, 
    { 
      label: 'October 23, 2014', 
      'data-ecl-table-header': 'Registration date', 
    },
    {
      label: 'Yes', 
      'data-ecl-table-header': 'English',
      'data-ecl-table-header-group': 'Language', 
      group: true, 
    }, 
    { 
      label: 'Yes', 
      'data-ecl-table-header': 'French', 
      group: true, 
    },
    {
      label: 'Yes',
      'data-ecl-table-header': 'German', 
      group: true, 
    }, 
  ], 
  [ 
    { label: 'Albert', 'data-ecl-table-header': 'Name' }, 
    {
      label: 'December 13, 2014', 
      'data-ecl-table-header': 'Registration date', 
    }, 
    { 
      label: 'No', 
      'data-ecl-table-header': 'English', 
      'data-ecl-table-header-group': 'Language', 
      group: true, 
    }, 
    { 
      label: 'No', 
      'data-ecl-table-header': 'French', 
      group: true, 
    }, 
    { 
      label: 'Yes', 
      'data-ecl-table-header': 'German', 
      group: true, 
    }, 
  ], 
  [ 
    { label: 'Marcel', 'data-ecl-table-header': 'Name' }, 
    { 
      label: 'January 12, 1995', 
      'data-ecl-table-header': 'Registration date', 
    }, 
    { 
      label: 'Yes', 
      'data-ecl-table-header': 'English', 
      'data-ecl-table-header-group': 'Language', 
      group: true, 
    }, 
    { 
      label: 'Yes', 
      'data-ecl-table-header': 'French', 
      group: true, 
    }, 
    { 
      label: 'Yes', 
      'data-ecl-table-header': 'German', 
      group: true, 
    }, 
  ], 
  ], 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %} 
```
