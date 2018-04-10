---
title: Components coding conventions
label: Components
---

## General rules

In most cases, components are firstly done as generic components, then specialized for one or more systems.

All components should follow the same file structure and naming conventions.

If you are not familiar with the concept of systems in ECL, first have a look at [the system documentation](../systems).

### Naming of components

* Throughout the whole project, in `package.json` files, namespace should always be `@ecl/`, regardless whether work is to be done on a generic or system component. One reason is that `@ecl` namespace should be preserved for correct organization on [npmjs](https://www.npmjs.com/).
* Flavored components should be prefixed with the name of their corresponding system and type (component, style, template): `[generic|ec|eu]-[component|style|template|utility]`.

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

## SCSS

Apart from [rules that should be applied to all scss files](scss), there are some specifications for components:

### File name

SCSS file name should be the same as component's name.

Example:
```
generic-component-navigation-menu.scss
```

### Generic component

All css rules should be put in mixins.

It could be split in several small mixins, but in any cases we should have a main mixin calling the small ones.
This main mixin should be named following the component's main class.

Example:
```scss
@mixin ecl-navigation-menu-common() {
  // Some css rules or mixin include
}
@mixin ecl-navigation-menu-responsive() {
  // Some css rules
}
@mixin ecl-navigation-menu() {
  @include ecl-navigation-menu-common();
  @include ecl-navigation-menu-responsive();
}
```

The css rules in generic components should not define specific display elements (like color, background, and more globally everything specific to a system).

If display is different in several systems, these differences should be put as parameters in the mixin. The goal here is to be able to call the same generic code, and just pass some parameters to alter display. There is no need to repeat component's name for these parameters, as they are limited to this mixin.

Example:
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
  // Some css rules or mixin include
}
```

### Systems component

SCSS files in system-specific components rely on generic SCSS file.
It contains 4 main parts

#### Import base and generic mixins

The file should import generic rules located in `@ecl/{system}-base`, and the ones of the generic component.

#### Check dependencies calls

If the component override some other components (like links, buttons, ...), it should ensure that these dependencies are loaded ahead.
This is done by using the mixin `check-imports`.

#### Generic mixin use

Call of the mixin defined in generic component, with custom parameters.

#### Additional css rules

If needed, some extra css rules could be added after to specialize the component.

Example:
```scss
// Import base and generic
@import '@ecl/ec-base';
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

### Specific case: editor preset

If the component alters a default html tag display (like links, blockquotes, ...), it should also provide css rules for editing.

**Please note that this is a specific case, most components don't have to create editor rules**

To add editor rules, there should be some extra rules (prefixed by `.ecl-editor`), which override default html tag.
This rules should be put in a mixin called `ecl-editor-{component name}`, in a separated file called `{component name}--editor.scss`.

Example:
```scss
/* File path: generic-component-link--editor.scss */

@mixin ecl-editor-generic-component-link() {
  .ecl-editor a {
    box-sizing: border-box;
    color: $ecl-color-primary;
    margin: 0;
    text-decoration: underline;
    [...]
  }
}
```

## Twig

Every component should have a directly usable twig file. The goal is to be able to include the component in other molecules/organisms (by putting most of the content in context).

Apart from [rules that should be applied to all twig files](twig), there are some specifications for components:

### File name

Twig file name should be the same as component's name.

Example:
```
generic-component-navigation-menu.twig
```

### Generic component

Generic component twig file defines all the markup for the component. It should contains all the logic required to use the component, as it is intended to be used by systems components.

This twig file consists in different sections (see link above for more details):
* Parameters/Blocks: list of exposed parameters and blocks
* Internal properties: definition of custom variables
* Internal logic: preprocess and other custom logic
* Print: html markup

Example:
```twig
{#
  Parameters:
  [...]

  Blocks:
  [...]
#}

{# Internal properties #}
[...]

{# Internal logic - Process properties #}
[...]

{# Print the result  #}
[...]
```

### Systems component

There are 2 possibilities for system based components: they use the exact same markup as generic component, or they alter it.

In both cases, **twig file should always start with available parameters**.

#### Same markup

This is the easy case: system component just has to include generic twig file.

Example:
```twig
{#
  Parameters:
  [...]

  Blocks:
  [...]
#}

{% include '@ecl/generic-component-navigation-menu' %}
```

#### Different markup

As soon as there is a difference in markup (even a small one), specific component has to re-write the whole markup (instead of using generic one).
This is the same structure as generic twig file.

As we lose the advantage of generic components here, it is recommended, when possible, to keep the exact same markup for different systems.

## Javascript

Not all components require a dedicated javascript file. Most of them have simple enough behavior, that could be handled with html/css only. The following rules only concern component with more complex (js) behavior.

Apart from [rules that should be applied to all js files](javascript), there are some specifications for components:

### File name

Javascript file name should be the same as component's name.

Example:
```
generic-component-navigation-menu.js
```

### Generic component

Generic component should export a function to handle specific behavior.
This function should have an explicit name, based on component name (similar to css class).

Example:
```
export const ecl-navigation-menu = ({ [...] } = {}) => {
  [...]
}

export default ecl-navigation-menu;
```

### Systems component

System components should use exported function from generic.

Example:
```
export * from '@ecl/generic-component-navigation-menu';
```

## Config javascript file

### File name

Config file name should be the same as component's name.

Example:
```
generic-component-navigation-menu.config.js
```

### Generic component

There is no real config file for generic components, as they are not meant to be used directly.
However, context should be put in generic component, to be imported in specific ones.

Generic context files should be placed in a `context` folder, inside component's folder.
* If there is only one variant for the component, the file should be named following component's name.
* If there are multiple variants, a file should be created for each variant, using the component's name and the variant.

Example (single variant):
```
/* File path: context/generic-component-navigation-menu.config.js */

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

Example (multiple variants):
```
/* File path: context/generic-component-banner--hero.config.js */

module.exports = {
  type: 'hero',
  image: 'picture.jpg',
  title: 'Lorem ipsum ...',
  description: 'Lorem ipsum ...',
};

/* File path: context/generic-component-banner--video.config.js */

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

### Systems component

System config file should use generic context files, and add missing information.
If the context is different for a specific system, it may be altered or overriden.

File name should follow component's name

Example:
```
/* File path: ec-component-banner.config.js */

// Load context from generic component
const hero = require('@ecl/generic-component-banner/context/generic-component-banner--hero.config');
const video = require('@ecl/generic-component-banner/context/generic-component-banner--video.config');

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

### Specific case: links

If the component contains links, they should always lead to an internal example page instead of blank link (`#`) or external links.

Example:
```
<realtive_path>/example.html#<component_name>
```

## package.json

package.json files are needed for both generic and system components, and should include dependencies related to the system.

All components have to set a dependency to corresponding base (`generic-base`, `ec-base`, ...).

The only extra rule for system component's package.json is that is should have the generic component as dependency.

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

## Other assets

TBD

## Exception: components existing in only one system

If a component exists only in one system, it can be defined in the system only. This means that there is no need to create a generic component, and files in system component should contain all the code/logic needed for the component.

As soon as the component should be available in another system, a generic component has to be created, and the logic deported as explained ahead.
