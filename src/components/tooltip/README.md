# ECL Tooltip component

npm package: `@ecl/tooltip`

```shell
npm install --save @ecl/tooltip
```

### Attributes:

- **"title"** (recommended) (string) (default: ''): Tooltip content. Recommended for accessibility as it is exposed to assistive technologies
- **"data-ecl-tooltip"** (string) (default: ''): Enables the tooltip. Can optionally contain the tooltip content
- **"data-ecl-tooltip-inverted"** (string) (default: ''): Enable the inverted tooltip, to be visible on dark bakground. Can optionally contain the tooltip content

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

<button
  class="ecl-button ecl-button--primary"
  data-ecl-tooltip-inverted
  title="Tooltip content"
>
  Button with tooltip inverted
</button>

<a
  href="#"
  class="ecl-link"
  data-ecl-tooltip="Tooltip content"
>
  Link with tooltip (no title)
</a>

<a
  href="#"
  class="ecl-link"
  data-ecl-tooltip-inverted="Tooltip content"
>
  Link with tooltip inverted (no title)
</a>
```
