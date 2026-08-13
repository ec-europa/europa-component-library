# ECL Expandable component

npm package: `@ecl/expandable`

```shell
npm install --save @ecl/expandable
```

### Parameters:

- **"id"** (string) (default: random) Unique id for accessibility bindings
- **"label_expanded"** (string) (default: '') Button label when the content is expanded
- **"label_collapsed"** (string) (default: '') Button label when the content is collapsed
- **"button"** (object) Button properties, following ECL Button structure
- **"extra_dropdown_classes"** (string) (default: '') Extra classes for the expandable content panel
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "content"

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/expandable/expandable.html.twig' with { 
  id: 'expandable-example', 
  button: { 
    label: 'Collapsed button', 
    variant: 'secondary', 
    icon: { 
      name: 'corner-arrow', 
      transform: 'rotate-180', 
      size: 'fluid', 
    }, 
  }, 
  label_expanded: 'Expanded button', 
  label_collapsed: 'Collapsed button', 
  content: 
    '<p class="ecl-u-type-paragraph-m">The EU is building an energy union that ensures Europe’s energy supply is safe, viable and accessible to all. In doing so, it can boost the economy and attract investments that can create new jobs opportunities.</p>', 
} %}
```
