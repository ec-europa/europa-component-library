# ECL Ordered list component

npm package: `@ecl/twig-component-ordered-list`

```shell
npm install --save @ecl/twig-component-ordered-list
```

### Parameters

- **"items"** (array) (default: [])
  - "label" (string)
  - "nested" (optional) Object of type Ordered List
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (boolean) (default: false) Activates debug.

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/ordered-list/ordered-list.html.twig' with { 
  items: [ 
    { 
      label: 'Jobs, growth and investment', 
      nested: [ 
        { 
          label: 'Investment Plan for Europe: the Juncker Plan', 
        }, 
        { 
          label: 'European Semester', 
        } 
      ] 
    }, 
    { 
      label: 'Digital single market', 
    }, 
    { 
      label: 'Energy union and climate', 
      nested: [ 
        { 
          label: 'Security, solidarity and trust', 
        }, 
        { 
          label: 'A fully-integrated internal energy market', 
        }, 
        { 
          label: 'Energy efficiency', 
        } 
      ] 
    } 
  ]  
} %}
```
