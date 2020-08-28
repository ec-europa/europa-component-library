# ECL-Twig Contextual Navigation Component

npm package: `@ecl-twig/ec-component-contextual-navigation`

```shell
npm install --save @ecl-twig/ec-component-contextual-navigation
```

### Parameters

- **"label"** (string) (default: '')
- **"items"** (iterable of predefined structure) (default: []): format: see `@ecl-twig/ec-component-link` component
- **"item_more"** (predefined structure) (default: {}): format: see `@ecl-twig/ec-component-button` component
- **"items_limit"** (number) (default: 3) Number of items to show by default. The rest of the "items" are hidden and a "More" button is shown.
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-contextual-navigation/ecl-contextual-navigation.html.twig' with {  
  label: 'Label for contextual navigation',  
  items_limit: 3,     
  items: [  
    {  
      label: 'Item 1',  
      path: '/example',  
      type: 'standalone',  
    },  
    ...  
  ],  
  item_more: {  
    label: 'More',  
    variant: 'ghost',  
    icon: {  
      type: 'ui',  
      name: 'corner-arrow',  
      transform: 'rotate-90',  
      size: 'fluid',  
    },  
  },  
} %}  
```
