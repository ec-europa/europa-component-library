# Components coding conventions

## General rules

Building components in a project with several systems means that first step in the construction of the component is the base of the component, i.e. the generic component containing common rules.

In a high-level way of thinking, the base should serve as an interface and systems' components as specific implementations. Inheritance, though, should be achieved by composition and not by polymorphism.

That's why the base should also be thought of, and managed as, a common layer of re-usable set of rules and guidelines.

All components should follow the same file structure and naming conventions.

If you are not familiar with the concept of systems in ECL, first have a look at [the system documentation](../05-systems.md).

### Naming of components

- Throughout the whole project, in `package.json` files, the namespace should always be `@ecl/`, regardless whether work is to be done on a generic or system component. One reason is that `@ecl` namespace should be preserved for correct organization on [npmjs](https://www.npmjs.com/).
- Flavored components should be prefixed with the name of their corresponding system and type (component, style, template): `[generic|ec|eu]-[component|style|template|utility]`.

Example:

```
// Some full component name (in package.json)
@ecl/ec-component-logo
@ecl/generic-component-navigation-menu
@ecl/eu-utility-flex

// Corresponding component name (used for file name later)
ec-component-logo
generic-component-navigation-menu
eu-utility-flex
```

### Structure of components

Here are some examples of overall structure for components.
The different files will be detailed below.

Generic component `generic-component-navigation-menu`:

```text
.
+-- data
|   +-- demo.js
+-- generic-component-navigation-menu.js
+-- generic-component-navigation-menu.scss
+-- generic-component-navigation-menu.twig
+-- package.json
+-- README.md
+--
```

System component `ec-component-navigation-menu`:

```text
.
+-- .npmignore
+-- ec-component-navigation-menu.config.js
+-- ec-component-navigation-menu.js
+-- ec-component-navigation-menu.scss
+-- ec-component-navigation-menu.twig
+-- package.json
+-- README.md
+-- test
|   +-- spec
    |   +-- test-ec-component-navigation-menu.js
+--
```

## SCSS

Apart from the [rules that should be applied to all SCSS files](scss.md), there are some specifications for components:

### Generic component

All CSS rules should be organized in mixins in order to make CSS rules easier to compose.

It could be split in several small mixins, but in any case we should have a main mixin calling the small ones.
This main mixin should be named following the component's main class.

Example:
_(File name: generic-component-navigation-menu.scss)_

```scss
@mixin ecl-navigation-menu-common() {
  // Some CSS rules or mixin include
}
@mixin ecl-navigation-menu-responsive() {
  // Some CSS rules
}
@mixin ecl-navigation-menu() {
  @include ecl-navigation-menu-common();
  @include ecl-navigation-menu-responsive();
}
```

The CSS rules in generic components should not define any rules specific to a system (like color, background, ...).

If the display is different in several systems, these differences should be put as parameters in the mixin. The goal here is to be able to call the same generic code, and just pass some parameters to alter display. There is no need to repeat the component's name for these parameters, as they are limited to this mixin.

Example:
_(File name: generic-component-navigation-menu.scss)_

```scss
@mixin ecl-navigation-menu(
  $bar-bg-mobile,
  $bar-bg-desktop,
  $toggle-btn-color,
  $group-bg,
  $separator-mobile,
  $link-color,
  $active-color,
  $active-bg
) {
  // Some CSS rules or mixin include
}
```

### Systems component

The SCSS file in system-specific components relies on SCSS file defined in the corresponding generic component.

The flow of best practices in a system-specific SCSS file would look like the following:

#### Import base and generic mixins

The file should import generic rules located in `@ecl/{system}-base`, and the ones of the generic component.

#### Check dependencies calls

If the component override some other components (like links, buttons, ...), it should ensure that these dependencies have been loaded beforehand.
This is done by using the mixin `check-imports`.

#### Generic mixin use

Call the mixin defined in the generic component with custom parameters.

#### Additional CSS rules

If needed, some extra CSS rules could be added after to customize the component.

Example:
_(File name: ec-component-navigation-menu.scss)_

```scss
// Import base and generic
@import '@ecl/ec-base/ec-base';
@import '@ecl/generic-component-navigation-menu/generic-component-navigation-menu';

// Check if overridden dependencies are already loaded, if needed
@include check-imports(('ec-component-link', 'ec-component-button'));

// Use generic mixin
@include exports('ec-component-navigation-menu') {
  @include ecl-navigation-menu(
    $bar-bg-mobile: map-get($ecl-colors, 'grey-15'),
    $bar-bg-desktop: map-get($ecl-colors, 'grey-10'),
    $toggle-btn-color: map-get($ecl-colors, 'blue-100'),
    $group-bg: map-get($ecl-colors, 'grey-5'),
    $separator-mobile: map-get($ecl-colors, 'grey-15'),
    $link-color: map-get($ecl-colors, 'blue-100'),
    $active-color: map-get($ecl-colors, 'blue-100'),
    $active-bg: map-get($ecl-colors, 'grey-10')
  );

  // Add custom rules
  .ecl-navigation-menu__item--active {
    [...]
  }
  .ecl-navigation-menu__group::before {
    [...]
  }
}
```

### Generic component

A generic component Twig file defines all the markup for the component. It should contain all the logic required to use the component, as it is intended to be used by systems components (or anything based on Twig).

This Twig file consists of different sections (see link above for more details):

- Parameters/Blocks: list of exposed parameters and blocks
- Internal properties: definition of custom variables
- Internal logic: preprocess and other custom logic
- Print: HTML markup

Example:
_(File name: generic-component-blockquote.twig)_

```twig
{#
  Parameters:
    - "body" (string) (default: '')
    - "author" (string) (default: '')
    - "extra_classes" (string) (default: '')
    - "extra_attributes" (array) (default: []): format: [{ 'name': 'name_of_the_attribute', 'value': 'value_of_the_attribute'}])
#}

{# Internal properties #}

{% set _body = body|default('') %}
{% set _author = author|default('') %}
{% set _css_class = 'ecl-blockquote' %}
{% set _extra_attributes = '' %}

{# Internal logic - Process properties #}

{% if extra_classes is defined %}
  {% set _css_class = _css_class ~ ' ' ~ extra_classes %}
{% endif %}

{% if extra_attributes is defined %}
  {% for attr in extra_attributes %}
    {% set _extra_attributes = _extra_attributes ~ ' ' ~ attr.name ~ '="' ~ attr.value ~'"' %}
  {% endfor %}
{% endif %}

{# Print the result  #}

<blockquote class="{\{ _css_class }}"{\{ _extra_attributes|raw }}>
  <p class="ecl-paragraph ecl-blockquote__body">{{ _body }}</p>
  {% if _author is not empty %}
  <footer class="ecl-blockquote__author">―&thinsp;<cite>{{ _author }}</cite></footer>
  {% endif %}
</blockquote>
```

### Systems component

There are 2 possibilities for system-specific components: they use the exact same markup as their corresponding generic/base component, or they alter it.

In both cases, **Twig files should always start with the available parameters**.

#### Same markup

This is the easy case: the system component just has to include the generic Twig file.

Example:
_(File name: ec-component-blockquote.twig)_

```twig
{#
  Parameters:
    - "body" (string) (default: '')
    - "author" (string) (default: '')
    - "extra_classes" (string) (default: '')
    - "extra_attributes" (array) (default: ''): format: [{ 'name': 'name_of_the_attribute', 'value': 'value_of_the_attribute'}])
#}

{% include '@ecl/generic-component-blockquote' %}
```

#### Different markup

As soon as there is a difference in markup (even a small one), the specific component has to provide the whole markup (instead of using generic one).
The structure is the same as for the generic Twig file.

As we lose the advantage of generic components here, it is recommended, when possible, to keep the exact same markup for different systems.

## JavaScript

Not all components require a dedicated JavaScript file. Most of them have a simple enough behavior that could be handled with HTML/CSS only. The following rules only apply to components with more complex (JS) behavior.

Apart from [rules that should be applied to all JS files](javascript.md), there are some specifications for components:

### Generic component

Generic components should export a function, so that the complex JavaScript behavior is available in the system components.
This function should have an explicit name, based on component name, and an action verb (generally "Init"). It should also use camel case.

Example:
_(File name: generic-component-navigation-menu.js)_

```
export const initNavigationMenu = ({ [...] } = {}) => {
  [...]
}

export default initNavigationMenu;
```

### Systems component

As for Twig files, there are 2 cases here: the system component has the same behavior as the corresponding generic component, or behaviors are different.

#### Same behavior

In this case, system components should use exported function from corresponding generic component.

Example:
_(File name: ec-component-navigation-menu.js)_

```
export * from '@ecl/generic-component-navigation-menu';
```

#### Different behavior

If we can't reuse the behavior from the generic component as is, the specific component has to provide the whole javascript (instead of using generic one).
This is the same structure as in the generic Twig file.

As we lose the advantage of generic components here, it is recommended, when possible, to keep the exact same behavior for different systems.

## Context

All dynamic data of component should be put in context, and not hardcoded in Twig or JS files.
This will allow easy customization of components.

In most cases, the context is defined in the generic component and used in corresponding system component.

Generic context files should be placed in a `data` folder, inside component's folder.

- If there is only one variant for the component, the file should be named following component's name.
- If there are multiple variants, a file should be created for each variant, using the component's name and the variant.

Example - single variant:
_(File name: data/demo.js)_

```js
module.exports = {
  menu_label: 'Menu',
  menu_aria_label: 'Main Navigation',
  links: [
    { [...] },
    { [...] }
  ],
  _demo: {
    scripts: [...],
  },
};
```

Example - multiple variants:
_(File name: data/demo--hero.js)_

```js
module.exports = {
  type: 'hero',
  image: 'picture.jpg',
  title: 'Lorem ipsum ...',
  description: 'Lorem ipsum ...',
};
```

_(File name: data/demo--video.js)_

```js
module.exports = {
  type: 'video',
  video: {
    src: 'https://ec.europa.eu/avservices/play.cfm?ref=I101631',
    is_iframe: true,
    ratio: '16-9',
    caption: 'Lorem ipsum ...',
  },
  description: Lorem ipsum ...,
};
```

### Specific case: links

If the component contains links, they should always lead to an internal example page instead of blank link (`#`) or external links.

Example:

```
../../example.html#{component_name}
```

## Fractal config file

A Fractal config file should be created for every system-specific component (not for generic components). These files should use the generic context files and add missing information.
If the context is different for a specific system, it may be altered or overriden.

The filename should follow the component's name

Example:
_(File name: ec-component-banner.config.js)_

```js
// Load context from the generic component
const hero = require('@ecl/generic-component-banner/data/demo--hero');
const video = require('@ecl/generic-component-banner/data/demo--video');

module.exports = {
  title: 'Banners',
  label: 'Banners',
  status: 'ready',
  tags: ['molecule'],
  variants: [
    {
      name: 'hero',
      context: hero,
    },
    {
      name: 'video',
      context: video,
    },
  ],
  default: 'hero',
};
```

## package.json

`package.json` files are needed for both generic and system components, and should include dependencies related to the component.

All components have to specify a dependency to the corresponding base (`generic-base`, `ec-base`, ...).

The only extra rule for system components' package.json is that it should have the generic component as a dependency.

SCSS and JS files (if any) should be set in corresponding attributes:

- `sass` (SCSS): the path to SCSS file. Higher priority than 'style'
- `style` (CSS): the path to the main bundled stylesheet (dist/[name].css)
- `main` (JS): the path to JS file. Used by non ES6-aware tools (UMD) (dist/[name].js)
- `module` (JS): the path to JS file. Used by ES6-aware tools like webpack

Example (generic):

```
{
  "name": "@ecl/generic-component-navigation-menu",
  "author": "European Commission",
  "license": "EUPL-1.1",
  "version": "0.0.1",
  "description": "ECL Navigation Menu",
  "main": "generic-component-navigation-menu.js",
  "module": "generic-component-navigation-menu.js",
  "style": "generic-component-navigation-menu.scss",
  "sass": "generic-component-navigation-menu.scss",
  "dependencies": {
    "@ecl/generic-base": "^0.0.1",
    [...]
  },
  "publishConfig": { "access": "public" },
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

Example (system):

```
{
  "name": "@ecl/eu-component-navigation-menu",
  "author": "European Commission",
  "license": "EUPL-1.1",
  "version": "0.0.1",
  "description": "ECL Navigation Menu",
  "main": "eu-component-navigation-menu.js",
  "module": "eu-component-navigation-menu.js",
  "style": "eu-component-navigation-menu.scss",
  "sass": "eu-component-navigation-menu.scss",
  "dependencies": {
    "@ecl/eu-base": "^0.0.1",
    [...]
    "@ecl/generic-component-navigation-menu": "^0.0.1"
  },
  "publishConfig": { "access": "public" },
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

## Tests

We rely on automated tests to ensure non regression and accessibility compliance of components.
Full explanation concerning test files can be found in the [dedicated documentation](../testing/visual.md)

**All system components have to provide test.**
Generic components should not contain test (as they are not intended to be used as is).

## Other assets

If a component rely on other assets (images, fonts, ...), they should be placed in a folder inside the component.

## Exception: components existing in only one system

If a component exists only in one system, it can be defined in the system only. This means that there is no need to create a generic component, and files in system component should contain all the code/logic needed for the component.

As soon as the component should be available in another system, a generic component has to be created, and the logic refactored as explained ahead.
