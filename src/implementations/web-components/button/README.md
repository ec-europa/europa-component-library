# ECL Button web-component

npm package: `@ecl/web-component-button`

```shell
npm install --save @ecl/web-component-button
```

## Attributes

- **"data-label"** (string) Button label
- **"data-variant"** (string) Button variant (primary, secondary, ghost, call)
- **"data-icon-name"** (string) Icon name
- **"data-icon-path"** (string) Path to the icon sprite
- **"data-icon-position"** (string) Icon position (before, after)
- **"data-icon-transform"** (string) Apply transformation (rotate-90, roteate-180, rotate-270, filp-horizontal, flip-vertical)

## Html source example:

<!-- prettier-ignore -->
```twig
  <ecl-button
    data-variant="primary"
    data-label="Button label"
    data-icon-path="/icons.svg"
    data-system="ec"
    data-icon-name="corner-arrow"
    data-icon-transform="rotate-90"
    data-icon-position="after"
  >
  </ecl-button>`;
```
