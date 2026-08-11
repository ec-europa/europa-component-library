# ECL EDS Button web component

npm package: `@ecl/eds-button-webc`

```shell
npm install --save @ecl/eds-button-webc
```

Approach #3 of the EDS component-integration comparison: a light
(non-Shadow-DOM) custom element, `<eds-button-webc>`, that renders a real
`<button>` from attributes - no Twig, no Shadow DOM, no new CSS. It
reuses `@ecl/eds-button`'s markup contract and compiled styles as-is
(`.eds-button`/`.eds-button--<variant>`), so it looks identical to
approach #1 (the real `@ecl/button` themed via
`src/themes/eds/variables/_button.scss`, see its `eds-button.story.js`)
and approach #2 (`@ecl/eds-button`) - the comparison here is about the
delivery mechanism (a JS-defined custom element vs a Twig include), not
the visual result.

Built with [Lit](https://lit.dev) (`LitElement` + a declarative `html`
template) rather than hand-rolled DOM patching - the "tier 1" rewrite
from the cost analysis in [`docs/eds-integration-poc.md`](../../../docs/eds-integration-poc.md).
`display: contents` is set on the custom element itself so it never adds
an extra box to the layout or accessibility tree - only the real
`<button>` it renders is visible to CSS and assistive tech (mirrors what
`ecl-webcomponents`' Stencil-based `:host { display: contents }` does,
without needing Shadow DOM to get there).

## Usage

```html
<eds-button-webc variant="primary" type="button">Button label</eds-button-webc>
<script type="module" src="@ecl/eds-button-webc/eds-button-webc.js"></script>
```

If the element already contains a server-rendered
`<button class="eds-button ...">`, its label is captured once on connect
and carried into the Lit-rendered button - a plain-HTML fallback still
shows the right content without JS, though (unlike the original
hand-rolled version) the pre-existing button node itself isn't reused in
place, since Lit owns whatever it renders into.

## Attributes

- **"variant"** (default: `'primary'`): `'primary'`, `'secondary'` or `'tertiary'`
- **"type"** (default: `'button'`): same as the native `<button type>` - `'button'`, `'submit'`, `'reset'`
- **"disabled"** (boolean attribute, default: absent)

The element's text content is used as the button's label.
