# ECL EDS Button component

npm package: `@ecl/eds-button`

```shell
npm install --save @ecl/eds-button
```

EDS integration approach #2: dedicated markup (`eds-button.html.twig`)
and dedicated css (`eds-button.scss`) that reference the eds theme's
`--eds-*` CSS custom properties directly - no `$theme`/`$eds-button` Sass
map, no `with (...)` config wired through a preset, unlike the rest of
ECL's ec/eu components. See
[`docs/eds-integration-poc.md`](../../../docs/eds-integration-poc.md)
for the full comparison against the other approaches.

## Parameters

- **"label"** (string) (default: '')
- **"variant"** (string) (default: 'primary'): can be 'primary', 'secondary', 'tertiary'
- **"type"** (string) (default: 'button'): can be the same type as HTML button - 'submit', 'reset', 'button'
- **"disabled"** (bool) (default: false)
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/eds-button/eds-button.html.twig' with {
  label: 'Button label',
  variant: 'primary',
} %}
```
