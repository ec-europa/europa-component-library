# ECL Source component

npm package: `@ecl/source`

```shell
npm install --save @ecl/source
```

Sub-component displaying a list of source references (links or plain text), used inside other components (Fact and figures, Animated numbers, ...).

Parent components should pass their own element classes (`label_extra_classes`, `list_extra_classes`, `item_extra_classes`, `source_extra_classes`) so the rendered markup keeps a semantic reference to them.

## Parameters

- **"tag"** (string) (default: 'div') HTML tag of the wrapper element (eg. footer)
- **"label"** (string) (default: '') Label displayed before the sources
- **"sources"** (array) (default: []) Array of source references:
  - "link" (object) ECL link object:
    - "label" (string) (default: '') Link label
    - "path" (string) (default: '') Link URL
      or
  - "name" (string) (default: '') Plain text source
- **"inverted"** (boolean) (default: false) Display on a dark background
- **"branded"** (boolean) (default: false) Use the brand variant for the links
- **"label_extra_classes"** (string) (default: '') Extra classes for the label (space separated)
- **"list_extra_classes"** (string) (default: '') Extra classes for the list (space separated)
- **"item_extra_classes"** (string) (default: '') Extra classes for each list item (space separated)
- **"source_extra_classes"** (string) (default: '') Extra classes for each source link or text (space separated)
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/source/source.html.twig' with {
  label: 'Sources:',
  sources: [
    {
      link: {
        label: 'Eurostat',
        path: '/example',
      },
    },
    {
      name: 'European Commission',
    },
  ],
  label_extra_classes: 'ecl-fact-figures__sources-label',
  list_extra_classes: 'ecl-fact-figures__sources-list',
  item_extra_classes: 'ecl-fact-figures__sources-item',
  source_extra_classes: 'ecl-fact-figures__source',
} %}
```
