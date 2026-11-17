# New component — file templates

Starter content for each file in `src/components/<name>/`. Placeholders are defined in
`../SKILL.md`.

These templates are a snapshot of the conventions at the time of writing. Component
structure evolves: if a template disagrees with a recently updated component (check
`git log -1 --format=%cs -- src/components/<sibling>/`), follow the component and
update this file.

## `package.json`

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

## `.npmignore`

```
__snapshots__
*story.js
*test.js
demo
```

## `<name>.html.twig`

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

## `<name>.scss`

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

## `<name>-print.scss`

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

## `<name>.js` (only when JS is required)

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

Add `getArgs(data)` / `getArgTypes(data)` parameters only once the functions actually
read from `data` (see `ecl-story-controls`).

## `demo/data.js`

```js
export default {};
```

Use ES module syntax (`export default`), like every other component's demo data.

## `<name>.story.js`

```js
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import defaultData from './demo/data';
import <NamePascal> from './<name>.html.twig';
import notes from './README.md?raw';

const getArgs = () => ({});

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
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: { markdown: notes, json: ({ args }) => prepareData(defaultData, args) },
};
Default.decorators = [withCode, withNotes];
```

## `<name>.test.js`

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

## `README.md`

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
