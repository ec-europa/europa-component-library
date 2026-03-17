# ECL Layout wrapper

npm package: `@ecl/layout-wrapper`

```shell
npm install --save @ecl/layout-wrapper
```

### Parameters

- **"configuration"** (string) (default: 'col-3'): Layout configuration. Possible options:
  - col-2
  - col-3
  - col-4
  - highlight-col-2
  - highlight-col-3
- **"items"** (array) (default: []): Items to be displayed in the wrapper.
  Each item can be either:
  - a string (rendered as-is)
  - an object with a defining component key, e.g. { card: { ... } }, { heading: { level: 2, content: 'my heading' } }
    Supported component keys: heading, card, navigation_list, content_item, file, list_illustration
- **"direction"** (string) (default: "horizontal"): Flow of items; can be "horizontal" or "vertical"
- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (array) (default: []): format: [
  {
  "name" (string) (default: ''),
  "value" (optional) (string)
  },
  ...
  ],

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/layout-wrapper/layout-wrapper.html.twig' with { 
  items: [
    heading: { level: 2, content: 'My heading' }',
    card: {
      // Card content, following the component structure 
      ... 
    },
    navigation_list: { 
      // Navigation list content, following the component structure 
      ... 
    },
  ]
} %}
```

### How it works

The layout wrapper uses **CSS container queries** to adapt its column count based on its own available width, not the viewport. This means it responds correctly whether placed full-width or inside a narrower context (e.g. a sidebar layout).

The outer `.ecl-layout-wrapper` element establishes the container context (`container-type: inline-size`). An inner `.ecl-layout-wrapper__grid` element holds the actual CSS grid and is styled by the container queries.

**Column breakpoints** (`col-x` variants):

| Container width | `col-2` | `col-3` | `col-4` |
| --------------- | ------- | ------- | ------- |
| default         | 1 col   | 1 col   | 1 col   |
| `> m`           | 2 cols  | 2 cols  | 2 cols  |
| `> l`           | —       | 3 cols  | 3 cols  |
| `> xl`          | —       | —       | 4 cols  |

**Highlight variants** (`highlight-col-x`) place a first item (typically a heading) to the left of a sub-grid of remaining items. At smaller sizes both sections stack vertically.

| Container width | `highlight-col-2`          | `highlight-col-3`          |
| --------------- | -------------------------- | -------------------------- |
| default         | stacked                    | stacked                    |
| `> m`           | stacked, content 2 cols    | stacked, content 2 cols    |
| `> l`           | highlight \| 2-col content | stacked, content 3 cols    |
| `> xl`          | —                          | highlight \| 3-col content |

**Vertical flow** (`direction="vertical"`) fills items top-to-bottom within each column before moving to the next, instead of the default left-to-right order:

```
horizontal (default)     vertical
[ 1 ][ 2 ][ 3 ]          [ 1 ][ 3 ][ 5 ]
[ 4 ][ 5 ][ 6 ]          [ 2 ][ 4 ][ 6 ]
```

This is implemented with `grid-auto-flow: column` and an explicit `grid-template-rows`, which tells the browser how many rows to fill before wrapping to the next column. Below `> m` (single column), vertical flow has no effect and items stack normally.

Because the column count changes at each breakpoint, the required row count changes too — e.g. 6 items in 2 cols needs 3 rows, but in 3 cols needs 2 rows. CSS cannot compute this dynamically, so the template pre-calculates all needed values and outputs them as separate custom properties (`--ecl-layout-rows-2`, `--ecl-layout-rows-3`, `--ecl-layout-rows-4`). Each container query breakpoint then references the variable that matches its active column count.
