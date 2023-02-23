# ECL Modal component

npm package: `@ecl/twig-component-modal`

```shell
npm install --save @ecl/twig-component-modal
```

### Parameters:

- **"id"** (string) (default: '')
- **"icon_path"** (string) (default: '') Path to the icon sprite
- **"close_label"** (string) (default: '') Label of the close button (for screen reader only)
- **"buttons"** (array) (default: {}) Array of ECL Button, displayed in the modal footer. The first button is the primary action.
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- **"header"**: free block to put any content in the modal header
- **"body"**: free block to put any content in the modal body
- **"footer"**: free block to put any content in the modal footer

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/modal/modal.html.twig' with { 
  id: 'modal-example',
  icon_path: '/icons.svg',
  close_label: 'Close',
  header: 'Lorem ipsum dolor sit amet',
  body: 'Sed quam augue, volutpat sed dapibus in, accumsan a arcu. Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui. Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet.',
  buttons: [
    {
      label: 'Primary action',
      type: 'submit',
    },
    {
      label: 'Secondary action',
      type: 'button',
      extra_attributes: [{name: 'data-ecl-modal-close'}],
    },
  ],
} %}
```
