# New component — website documentation

Every component gets documentation pages for EC and EU, a card in each component index,
and four entries in the CMS config. Use the same sibling component chosen for the presets.

## Pages for both systems

Create these files for **both** `ec` and `eu`:

**`src/website/src/pages/{ec|eu}/components/<name>/index.md`**

```markdown
title: <Name>
defaultTab: usage
status: ready
playground:
system: { ec|eu }
path: /story/components-<name>--default
```

**`src/website/src/pages/{ec|eu}/components/<name>/docs/usage.md`**

```markdown
title: Usage
order: 1
```

**`src/website/src/pages/{ec|eu}/components/<name>/docs/accessibility.md`**

```markdown
title: Accessibility
order: 3
```

**`src/website/src/pages/ec/components/<name>/docs/code.mdx`**

```mdx
title: Showcase
order: 2

import { Playground } from '@ecl/website-components';

<Playground
  system="ec"
  selectedKind="components-<name>"
  selectedStory="default"
></Playground>
```

**`src/website/src/pages/eu/components/<name>/docs/code.mdx`** — same with `system="eu"`.

**Thumbnail SVGs** — always create a placeholder so the website import doesn't break. The team will replace it with a real illustration later.

`src/website/src/pages/ec/components/<name>/ec_comp_<name_underscored>.svg`:

```svg
<?xml version="1.0" encoding="UTF-8" ?>
<svg
  width="460px"
  height="345px"
  viewBox="0 0 460 345"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="460" height="345" fill="#F3F5FB" />
</svg>
```

`src/website/src/pages/eu/components/<name>/eu_comp_<name_underscored>.svg` — identical content.

## Component index

**`src/website/src/pages/ec/components/index.mdx`** and the EU equivalent.

This file is **not** a flat alphabetical list. Imports are grouped into clusters that
mirror the `## <Section>` headings further down (e.g. a "Banners" cluster holds
`banner`, `spotlight`, `carousel`, `slogan-ticker` imports together; there are similar
clusters for `site-wide`, `forms`, `media`, `navigation`, etc.). Find the sibling
component you're most similar to (the same one used for the presets), then:

```bash
grep -n "Thumbnail\|^## " src/website/src/pages/ec/components/index.mdx | head -80
```

1. Add the import next to the sibling's import, inside the same cluster:

```js
import <NamePascal>Thumbnail from './<name>/ec_comp_<name_underscored>.svg';
```

2. Add the card next to the sibling's card, inside the same `## <Section>` / `<Row>` block
   (do not just append alphabetically to a different section):

```jsx
<Col col="12 s-6 m-4 l-3" spacing="pv-m">
  <Thumbnail image={<NamePascal>Thumbnail} link="./<name>/usage/" title="<Name>" />
</Col>
```

Apply the same for the EU index (swap `ec_comp` → `eu_comp`), next to the same sibling.

## CMS admin config

**`src/website/public/admin/config.yml`** — **four** insertions (EC usage, EC accessibility,
EU usage, EU accessibility — don't forget the EU accessibility section, it's easy to miss).
Within each section entries roughly follow the same category clustering as the component index rather
than strict global alphabetical order, so find your sibling component's entry and insert
next to it:

```bash
grep -n "name: 'ec_<sibling-name_underscored>'\|name: 'ec_<sibling-name_underscored>_a11y'\|name: 'eu_<sibling-name_underscored>'\|name: 'eu_<sibling-name_underscored>_a11y'" src/website/public/admin/config.yml
```

**EC usage section** — insert next to the sibling among `ec_` usage entries:

```yaml
- label: '<Name>'
  name: 'ec_<name_underscored>'
  file: 'src/website/src/pages/ec/components/<name>/docs/usage.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```

**EC accessibility section** — insert next to the sibling among `ec_` a11y entries:

```yaml
- label: '<Name>'
  name: 'ec_<name_underscored>_a11y'
  file: 'src/website/src/pages/ec/components/<name>/docs/accessibility.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```

**EU usage section** — insert next to the sibling among `eu_` usage entries:

```yaml
- label: '<Name>'
  name: 'eu_<name_underscored>'
  file: 'src/website/src/pages/eu/components/<name>/docs/usage.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```

**EU accessibility section** — insert next to the sibling among `eu_` a11y entries:

```yaml
- label: '<Name>'
  name: 'eu_<name_underscored>_a11y'
  file: 'src/website/src/pages/eu/components/<name>/docs/accessibility.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```
