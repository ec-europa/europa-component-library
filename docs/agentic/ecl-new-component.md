# Skill: create a new ECL component

**This skill is self-contained. Do NOT read other files for templates or reference.**
**All templates are below. Use only the bash commands listed to collect missing context.**

---

## Placeholders

| Placeholder               | Example for `highlight-box` |
| ------------------------- | --------------------------- |
| `<name>`                  | `highlight-box`             |
| `<Name>`                  | `Highlight box`             |
| `<name_underscored>`      | `highlight_box`             |
| `<NamePascal>`            | `HighlightBox`              |
| `<NAME_PASCAL_SCREAMING>` | `HIGHLIGHT_BOX`             |
| `<VERSION>`               | from command in Step 0      |

---

## Step 0 — collect context (run once, before creating any file)

```bash
node -p "require('./src/components/label/package.json').version"
```

That single output is `<VERSION>`. Use it in every file below.

---

## Step 1 — create `src/components/<name>/`

### `package.json`

For a **CSS-only** component (no JS):

```json
{
  "name": "@ecl/<name>",
  "author": "European Commission",
  "license": "EUPL-1.2",
  "version": "<VERSION>",
  "description": "ECL <Name>",
  "publishConfig": { "access": "public" },
  "style": "<name>.scss",
  "dependencies": {},
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ec-europa/europa-component-library.git"
  },
  "bugs": {
    "url": "https://github.com/ec-europa/europa-component-library/issues"
  },
  "homepage": "https://github.com/ec-europa/europa-component-library",
  "keywords": ["ecl", "europa-component-library", "design-system"]
}
```

For a component **with JS**, add `"main"` / `"module"` and the two JS deps:

```json
{
  "name": "@ecl/<name>",
  "author": "European Commission",
  "license": "EUPL-1.2",
  "version": "<VERSION>",
  "description": "ECL <Name>",
  "publishConfig": { "access": "public" },
  "main": "<name>.js",
  "module": "<name>.js",
  "style": "<name>.scss",
  "dependencies": {
    "@ecl/dom-utils": "<VERSION>",
    "@ecl/event-manager": "<VERSION>"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ec-europa/europa-component-library.git"
  },
  "bugs": {
    "url": "https://github.com/ec-europa/europa-component-library/issues"
  },
  "homepage": "https://github.com/ec-europa/europa-component-library",
  "keywords": ["ecl", "europa-component-library", "design-system"]
}
```

Adjust `dependencies` to what the component actually uses.

### `.npmignore`

```
__snapshots__
*story.js
*test.js
demo
```

### `<name>.html.twig`

```twig
{% apply spaceless %}

{#
  Parameters:
    - "extra_classes" (string) (default: '')
    - "extra_attributes" (optional) (array) (default: [])
      - "name" (string) Attribute name, eg. 'data-test'
      - "value" (optional) (string) Attribute value, eg: 'data-test-1'
#}

{# Internal properties #}

{% set _css_class = 'ecl-<name>' %}
{% set _extra_attributes = '' %}

{# Internal logic - Process properties #}

{% if extra_classes is defined and extra_classes is not empty %}
  {% set _css_class = _css_class ~ ' ' ~ extra_classes %}
{% endif %}

{% if extra_attributes is defined and extra_attributes is not empty and extra_attributes is iterable %}
  {% for attr in extra_attributes %}
    {% if attr.value is defined %}
      {% set _extra_attributes = _extra_attributes ~ ' ' ~ attr.name|e('html_attr') ~ '="' ~ attr.value|e('html_attr') ~ '"' %}
    {% else %}
      {% set _extra_attributes = _extra_attributes ~ ' ' ~ attr.name|e('html_attr') %}
    {% endif %}
  {% endfor %}
{% endif %}

{# Print the result #}

<div
  class="{{ _css_class }}"
  {{ _extra_attributes|raw }}
>
  <Name>
</div>

{% endapply %}
```

For a component **with JS**, add the auto-init attributes to `_extra_attributes`:

```twig
{% set _extra_attributes = 'data-ecl-<name>="true" data-ecl-auto-init="<NamePascal>"' %}
```

### `<name>.scss`

```scss
/**
 * <Name>
 * @define <name>
 */

@use 'sass:map';

// Exposed variables
$theme: null !default;
$<name>: null !default;
```

Do not add an empty `.ecl-<name> {}` block — an empty rule triggers the linter.

### `<name>-print.scss`

```scss
/**
 * <Name> print
 * @define <name>
 */

@use 'sass:map';

// Exposed variables
$theme: null !default;
$<name>: null !default;
```

### `<name>.js` (only when JS is required)

```js
import { queryOne } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 */
export class <NamePascal> {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {<NamePascal>} An instance of <NamePascal>.
   */
  static autoInit(root, { <NAME_PASCAL_SCREAMING>: defaultOptions = {} } = {}) {
    const component = new <NamePascal>(root, defaultOptions);
    component.init();
    root.ECL<NamePascal> = component;
    return component;
  }

  /**
   * An array of supported events for this component.
   * @type {Array<string>}
   */
  supportedEvents = [];

  constructor(element, {} = {}) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }
    this.element = element;
    this.eventManager = new EventManager();
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   */
  on(eventName, callback) {
    this.eventManager.on(eventName, callback);
  }

  /**
   * Trigger a component event.
   *
   * @param {string} eventName - The name of the event to trigger.
   * @param {any} eventData - Data associated with the event.
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }
}

export default <NamePascal>;
```

Replace `<NAME_PASCAL_SCREAMING>` with the SCREAMING_SNAKE_CASE key used in `ECL.autoInit` options (e.g. `SLIDER`, `EXPANDABLE`).

### `demo/data.js`

```js
module.exports = {};
```

Use `module.exports` (not ES module syntax).

### `<name>.story.js`

```js
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import defaultData from './demo/data';
import <NamePascal> from './<name>.html.twig';
import notes from './README.md';

const getArgs = (data) => ({});

const getArgTypes = () => ({});

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  return Object.assign(clone, args);
};

export default {
  title: 'Components/<Name>',
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const rendered = await <NamePascal>(prepareData(defaultData, args));
  return rendered;
};
Default.storyName = 'default';
Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: defaultData } };
Default.decorators = [withCode, withNotes];
```

### `<name>.test.js`

```js
import {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from '@ecl/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import data from './demo/data';

expect.extend(toHaveNoViolations);

describe('<Name>', () => {
  const template = '@ecl/<name>/<name>.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);
      return expect(
        render(
          merge(data, { extra_classes: 'custom-class custom-class--test' }),
        ),
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);
      return expect(
        render(
          merge(data, {
            extra_attributes: [
              { name: 'data-test', value: 'data-test-value' },
              { name: 'data-test-1', value: 'data-test-value-1' },
            ],
          }),
        ),
      ).resolves.toMatchSnapshot();
    });

    test('passes the accessibility tests', async () => {
      expect(
        await axe(await renderTwigFileAsHtml(template, data, true)),
      ).toHaveNoViolations();
    });
  });
});
```

### `README.md`

````markdown
# ECL <Name> component

npm package: `@ecl/<name>`

```shell
npm install --save @ecl/<name>
```

## Parameters

- **"extra_classes"** (string) (default: '')
- **"extra_attributes"** (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/<name>/<name>.html.twig' with {

} %}
```
````

---

## Step 2 — theme variables

Create `src/themes/ec/variables/_<name>.scss`:

```scss
@use 'sass:map';
@use '../index' as *;

$<name>: ();
```

Create `src/themes/eu/variables/_<name>.scss` with identical content.

**Register in both `src/themes/ec/_variables.scss` and `src/themes/eu/_variables.scss`.**

Run to find the insertion point (do this for both files):

```bash
grep -n "@forward 'variables/" src/themes/ec/_variables.scss
```

Insert `@forward 'variables/<name>';` alphabetically in the output list. One Edit call per file.

---

## Step 3 — presets

**`src/presets/ec/package.json`, `src/presets/eu/package.json`, `src/twig-templates/package.json`**

Run to find the insertion point:

```bash
grep -n '"@ecl/' src/presets/ec/package.json
```

Insert `"@ecl/<name>": "<VERSION>",` alphabetically. Apply the same insertion to the eu and twig-templates files (they have the same list structure).

**`src/presets/ec/src/ec.scss` and `src/presets/eu/src/eu.scss`**

Run to find the insertion point:

```bash
grep -n "@use '@ecl/" src/presets/ec/src/ec.scss
```

Insert alphabetically:

```scss
@use '@ecl/<name>/<name>' with (
  $theme: theme.$theme,
  $<name>: var.$<name>
);
```

**`src/presets/ec/src/ec-print.scss` and `src/presets/eu/src/eu-print.scss`**

```bash
grep -n "@use '@ecl/" src/presets/ec/src/ec-print.scss
```

Insert alphabetically:

```scss
@use '@ecl/<name>/<name>-print' with (
  $theme: theme.$theme,
  $<name>: var.$<name>
);
```

---

## Step 4 — website pages

Create these files for **both** `ec` and `eu`:

**`src/website/src/pages/{ec|eu}/components/<name>/index.md`**

```markdown
---
title: <Name>
defaultTab: usage
status: ready
playground:
  system: { ec|eu }
  path: /story/components-<name>--default
---
```

**`src/website/src/pages/{ec|eu}/components/<name>/docs/usage.md`**

```markdown
---
title: Usage
order: 1
---
```

**`src/website/src/pages/{ec|eu}/components/<name>/docs/accessibility.md`**

```markdown
---
title: Accessibility
order: 3
---
```

**`src/website/src/pages/ec/components/<name>/docs/code.mdx`**

```mdx
---
title: Showcase
order: 2
---

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

---

## Step 5 — website component index

**`src/website/src/pages/ec/components/index.mdx`** and the EU equivalent.

Run to find insertion point:

```bash
grep -n "Thumbnail" src/website/src/pages/ec/components/index.mdx | head -50
```

Add the import alphabetically in the import block:

```js
import <NamePascal>Thumbnail from './<name>/ec_comp_<name_underscored>.svg';
```

Add the card alphabetically in the `<Row>` grid:

```jsx
<Col col="12 s-6 m-4 l-3" spacing="pv-m">
  <Thumbnail image={<NamePascal>Thumbnail} link="./<name>/usage/" title="<Name>" />
</Col>
```

Apply the same for the EU index (swap `ec_comp` → `eu_comp`).

---

## Step 6 — CMS admin config

**`src/website/public/admin/config.yml`** — three insertions, all alphabetical.

Run to find all three insertion points at once:

```bash
grep -n "name: 'ec_s\|name: 'eu_s\|name: 'ec_s.*a11y" src/website/public/admin/config.yml
```

**EC usage section** — insert alphabetically among `ec_` usage entries:

```yaml
- label: '<Name>'
  name: 'ec_<name_underscored>'
  file: 'src/website/src/pages/ec/components/<name>/docs/usage.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```

**EC accessibility section** — insert alphabetically among `ec_` a11y entries:

```yaml
- label: '<Name>'
  name: 'ec_<name_underscored>_a11y'
  file: 'src/website/src/pages/ec/components/<name>/docs/accessibility.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```

**EU usage section** — insert alphabetically among `eu_` usage entries:

```yaml
- label: '<Name>'
  name: 'eu_<name_underscored>'
  file: 'src/website/src/pages/eu/components/<name>/docs/usage.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```

---

## Step 7 — finish

```bash
pnpm install
pnpm test:components -- <name>
```

Tests should pass on first run. If snapshots are missing they will be created automatically.
