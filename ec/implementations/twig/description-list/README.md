# ECL-Twig Description list component

npm package: `@ecl-twig/ec-component-description-list`

```shell
npm install --save @ecl-twig/ec-component-description-list
```

### Parameters

- **"items"** (array) (default: [])
  - "term" (string or array of string)
  - "definition" (string or array of string)
- **"variant"** (optional) (string) (default: '') Modifier of the component
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (boolean) (default: 'false') Activates debug

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-description-list/ecl-description-list.html.twig' with { 
  variant: 'horizontal',
  items: [
    { 
      term: 'European Commission', 
      definition: 
        'The executive body of the European Union formed in 1967, which initiates action in the EU and mediates between member governments. Former name (until 1993): Commission of the European Communities' 
    }, 
    { 
      term: ['European Union', 'EU'], 
      definition: 
        'An association of European nations formed in 1993 for the purpose of achieving political and economic integration.' 
    }, 
    { 
      term: 'Citizen', 
      definition: [ 
        'A native or naturalized member of a state or nation who owes allegiance to its government and is entitled to its protection', 
        'An inhabitant of a city or town, especially one entitled to its privileges or franchises.' 
      ] 
    } 
  ] 
} %}
```
