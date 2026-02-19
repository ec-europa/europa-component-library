# ECL Tooltip component

npm package: `@ecl/tooltip`

```shell
npm install --save @ecl/tooltip
```

### Attributes:

- **"data-ecl-tooltip"** (string) (default: ''): Enables the tooltip. Can optionally contain the tooltip content
- **"title"** (recommended) (string) (default: ''): Tooltip content. Recommended for accessibility as it is exposed to assistive technologies

### Example:

<!-- prettier-ignore -->
```html
<button
  class="ecl-button ecl-button--primary"
  data-ecl-tooltip
  title="Tooltip content"
>
  Button with tooltip
</button>

<a
  href="#"
  class="ecl-link"
  data-ecl-tooltip="Tooltip content"
>
  Link with tooltip
</a>
```
