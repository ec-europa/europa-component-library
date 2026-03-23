# ECL Tooltip component

npm package: `@ecl/tooltip`

```shell
npm install --save @ecl/tooltip
```

### Attributes:

Tooltip need one of these:

- **"data-ecl-tooltip"** (string) (default: ''): Enables the tooltip and provide its content
- **"data-ecl-tooltip-inverted"** (string) (default: ''): Enable the inverted tooltip, to be visible on dark bakground, and provide its content

Optional attribute:

- **"title"** (string) (default: ''): If provided, will be copied into data-ecl-tooltip or data-ecl-tooltip-inverted

### Example:

<!-- prettier-ignore -->
```html
<a
  href="#"
  class="ecl-link"
  data-ecl-tooltip="Tooltip content"
>
  Link with tooltip
</a>

<a
  href="#"
  class="ecl-link"
  data-ecl-tooltip-inverted="Tooltip content"
>
  Link with tooltip inverted
</a>

<button
  class="ecl-button ecl-button--primary"
  data-ecl-tooltip
  title="Tooltip content"
>
  Button with tooltip (using title)
</button>

<button
  class="ecl-button ecl-button--primary"
  data-ecl-tooltip-inverted
  title="Tooltip content"
>
  Button with tooltip inverted (using title)
</button>


```
