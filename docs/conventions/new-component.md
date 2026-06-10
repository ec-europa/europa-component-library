# Adding a new component

This guide walks through every file that must be created or modified when adding a new component to ECL. All insertions maintain **alphabetical order** within their respective files.

The placeholders used below:

| Placeholder          | Example                                                |
| -------------------- | ------------------------------------------------------ |
| `<name>`             | `highlight-box`                                        |
| `<Name>`             | `Highlight box`                                        |
| `<name_underscored>` | `highlight_box`                                        |
| `<NamePascal>`       | `HighlightBox`                                         |
| `<VERSION>`          | `5.0.0-RC5` (match the version in existing components) |

---

## 1. Component package

Create the directory `src/components/<name>/` with the following files.

### `package.json`

```json
{
  "name": "@ecl/<name>",
  "author": "European Commission",
  "license": "EUPL-1.2",
  "version": "<VERSION>",
  "description": "ECL <Name>",
  "publishConfig": {
    "access": "public"
  },
  "style": "<name>.scss",
  "dependencies": {
    "@ecl/icon": "<VERSION>"
  },
  "devDependencies": {
    "@ecl/grid": "<VERSION>",
    "@ecl/mixins-typography": "<VERSION>"
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

Adjust `dependencies` and `devDependencies` to what the component actually uses. Remove entries that are not needed.

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
</div>

{% endapply %}
```

### `<name>.scss`

```scss
/**
 * <Name>
 * @define <name>
 */

@use 'sass:map';
@use '@ecl/mixins-typography/mixins';

// Exposed variables
$theme: null !default;
$<name>: null !default;
```

### `<name>-print.scss`

```scss
/**
 * <Name> print
 * @define <name>
 */

@use 'sass:map';
@use '@ecl/mixins-typography/mixins';

// Exposed variables
$theme: null !default;
$<name>: null !default;
```

### `demo/data.js`

```js
// Simple content for demo
module.exports = {};
```

### `<name>.story.js`

```js
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from './demo/data';
import <NamePascal> from './<name>.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};

  return args;
};

const getArgTypes = () => ({

});

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  return Object.assign(clone, args);
};

export default {
  title: 'Components/<Name>',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const rendered<NamePascal> = await <NamePascal>(prepareData(defaultData, args));
  return rendered<NamePascal>;
};
Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: defaultData },
};
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

data.id = '<name>';

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

      const optionsWithExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
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
````

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

---

## 2. Theme variables (EC and EU)

### Create `src/themes/ec/variables/_<name>.scss`

```scss
@use 'sass:map';
@use '../index' as *;

$<name>: ();
```

### Create `src/themes/eu/variables/_<name>.scss`

Same content as the EC file above (both files are identical when starting).

### Register in `src/themes/ec/_variables.scss`

Add alphabetically in the list of `@forward` statements:

```scss
@forward 'variables/<name>';
```

### Register in `src/themes/eu/_variables.scss`

Same insertion as EC.

---

## 3. Presets

### `src/presets/ec/package.json` and `src/presets/eu/package.json`

Add alphabetically to `dependencies`:

```json
"@ecl/<name>": "<VERSION>",
```

### `src/twig-templates/package.json`

Add alphabetically to `dependencies`:

```json
"@ecl/<name>": "<VERSION>",
```

### `src/presets/ec/src/ec.scss` and `src/presets/eu/src/eu.scss`

Add alphabetically (by component name) in the component imports section:

```scss
@use '@ecl/<name>/<name>' with (
  $theme: theme.$theme,
  $<name>: var.$<name>
);
```

### `src/presets/ec/src/ec-print.scss` and `src/presets/eu/src/eu-print.scss`

Same insertion in the print stylesheet:

```scss
@use '@ecl/<name>/<name>-print' with (
  $theme: theme.$theme,
  $<name>: var.$<name>
);
```

---

## 4. Website pages

Create the following files for **both** `ec` and `eu` under `src/website/src/pages/{system}/components/<name>/`.

### `index.md` (EC)

```markdown
---
title: <Name>
defaultTab: usage
status: ready
playground:
  system: ec
  path: /story/components-<name>--default
---
```

### `index.md` (EU)

```markdown
---
title: <Name>
defaultTab: usage
status: ready
playground:
  system: eu
  path: /story/components-<name>--default
---
```

### `docs/usage.md`

```markdown
---
title: Usage
order: 1
---
```

### `docs/accessibility.md`

```markdown
---
title: Accessibility
order: 3
---
```

### `docs/code.mdx` (EC version)

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

### `docs/code.mdx` (EU version)

Same as EC but with `system="eu"`:

```mdx
---
title: Showcase
order: 2
---

import { Playground } from '@ecl/website-components';

<Playground
  system="eu"
  selectedKind="components-<name>"
  selectedStory="default"
></Playground>
```

### Thumbnail SVG

Add a thumbnail SVG for the component index page:

- `src/website/src/pages/ec/components/<name>/ec_comp_<name_underscored>.svg`
- `src/website/src/pages/eu/components/<name>/eu_comp_<name_underscored>.svg`

Look at existing thumbnails in other component directories for the expected dimensions and style.

---

## 5. Website component index

### `src/website/src/pages/ec/components/index.mdx`

Add the thumbnail import alphabetically at the top with the other imports:

```js
import <NamePascal>Thumbnail from './<name>/ec_comp_<name_underscored>.svg';
```

Add the component card alphabetically in the grid below:

```jsx
<Col col="12 s-6 m-4 l-3" spacing="pv-m">
  <Thumbnail image={<NamePascal>Thumbnail} link="./<name>/usage/" title="<Name>" />
</Col>
```

### `src/website/src/pages/eu/components/index.mdx`

Same as EC but using the EU thumbnail:

```js
import <NamePascal>Thumbnail from './<name>/eu_comp_<name_underscored>.svg';
```

---

## 6. CMS admin config

In `src/website/public/admin/config.yml`, add entries in **three** places (all alphabetically ordered within their section).

### EC usage section (search for `ec_` usage entries)

```yaml
- label: '<Name>'
  name: 'ec_<name_underscored>'
  file: 'src/website/src/pages/ec/components/<name>/docs/usage.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```

### EC accessibility section (search for `ec_` a11y entries)

```yaml
- label: '<Name>'
  name: 'ec_<name_underscored>_a11y'
  file: 'src/website/src/pages/ec/components/<name>/docs/accessibility.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```

### EU usage section (search for `eu_` usage entries)

```yaml
- label: '<Name>'
  name: 'eu_<name_underscored>'
  file: 'src/website/src/pages/eu/components/<name>/docs/usage.md'
  fields:
    - { label: Body, name: body, widget: markdown }
```

> EU accessibility is not added to this config.

---

## 7. Run pnpm install

After all files are in place, run `pnpm install` from the root to update the lock file and link the new package.

---

## Summary checklist

| #   | File(s)                                                                     | Action                                      |
| --- | --------------------------------------------------------------------------- | ------------------------------------------- |
| 1   | `src/components/<name>/package.json`                                        | Create                                      |
| 2   | `src/components/<name>/.npmignore`                                          | Create                                      |
| 3   | `src/components/<name>/<name>.html.twig`                                    | Create                                      |
| 4   | `src/components/<name>/<name>.scss`                                         | Create                                      |
| 5   | `src/components/<name>/<name>-print.scss`                                   | Create                                      |
| 6   | `src/components/<name>/demo/data.js`                                        | Create                                      |
| 7   | `src/components/<name>/<name>.story.js`                                     | Create                                      |
| 8   | `src/components/<name>/<name>.test.js`                                      | Create                                      |
| 9   | `src/components/<name>/README.md`                                           | Create                                      |
| 10  | `src/themes/ec/variables/_<name>.scss`                                      | Create                                      |
| 11  | `src/themes/eu/variables/_<name>.scss`                                      | Create                                      |
| 12  | `src/themes/ec/_variables.scss`                                             | Add `@forward` (alphabetical)               |
| 13  | `src/themes/eu/_variables.scss`                                             | Add `@forward` (alphabetical)               |
| 14  | `src/presets/ec/package.json`                                               | Add dependency (alphabetical)               |
| 15  | `src/presets/eu/package.json`                                               | Add dependency (alphabetical)               |
| 16  | `src/twig-templates/package.json`                                           | Add dependency (alphabetical)               |
| 17  | `src/presets/ec/src/ec.scss`                                                | Add `@use` import (alphabetical)            |
| 18  | `src/presets/ec/src/ec-print.scss`                                          | Add `@use` import (alphabetical)            |
| 19  | `src/presets/eu/src/eu.scss`                                                | Add `@use` import (alphabetical)            |
| 20  | `src/presets/eu/src/eu-print.scss`                                          | Add `@use` import (alphabetical)            |
| 21  | `src/website/src/pages/ec/components/<name>/index.md`                       | Create                                      |
| 22  | `src/website/src/pages/ec/components/<name>/docs/usage.md`                  | Create                                      |
| 23  | `src/website/src/pages/ec/components/<name>/docs/accessibility.md`          | Create                                      |
| 24  | `src/website/src/pages/ec/components/<name>/docs/code.mdx`                  | Create                                      |
| 25  | `src/website/src/pages/ec/components/<name>/ec_comp_<name_underscored>.svg` | Add                                         |
| 26  | `src/website/src/pages/eu/components/<name>/index.md`                       | Create                                      |
| 27  | `src/website/src/pages/eu/components/<name>/docs/usage.md`                  | Create                                      |
| 28  | `src/website/src/pages/eu/components/<name>/docs/accessibility.md`          | Create                                      |
| 29  | `src/website/src/pages/eu/components/<name>/docs/code.mdx`                  | Create                                      |
| 30  | `src/website/src/pages/eu/components/<name>/eu_comp_<name_underscored>.svg` | Add                                         |
| 31  | `src/website/src/pages/ec/components/index.mdx`                             | Add thumbnail import + card (alphabetical)  |
| 32  | `src/website/src/pages/eu/components/index.mdx`                             | Add thumbnail import + card (alphabetical)  |
| 33  | `src/website/public/admin/config.yml`                                       | Add 3 entries (EC usage, EC a11y, EU usage) |
| 34  | root                                                                        | Run `pnpm install`                          |
