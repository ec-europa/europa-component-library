---
title: Components coding conventions
label: Components
---

# Components

## General rules

In most cases, components are firstly done as generic components, then specialized for one or more systems.

All components should follow the same file structure and naming conventions.

## SCSS

Apart from [rules that should be applied to all scss files](scss.md), there are some specifications for components:

### Generic component

All css rules should be put in mixins

It could be split in several small mixins, but in any case we should have a main mixin calling the small ones.
This main mixin should be named following the component's main class.

Example:
```
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
```
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
It should always include generic component's mixin, with customs parameters.

If needed, some extra css rules could be added to specialize the component.

Example:
```
// Import and call generic mixin
@import '@ecl/generic-component-navigation-menu/generic-component-navigation-menu';

@include ecl-navigation-menu(
  $bar-bg-mobile: map-get($ecl-colors, 'grey-15'),
  $bar-bg-desktop: map-get($ecl-colors, 'grey-10'),
  $toggle-btn-color: map-get($ecl-colors, 'blue-100'),
  $group-bg: map-get($ecl-colors, 'grey-5'),
  $separator-mobile: map-get($ecl-colors, 'grey-15'),
  $link-color: map-get($ecl-colors, 'blue-100'),
  $active-color: map-get($ecl-colors, 'blue-100'),
  $active-bg: map-get($ecl-colors, 'grey-10')
)

// Add custom rules

.ecl-navigation-menu__item--active {
  [...]
}
.ecl-navigation-menu__group::before {
  [...]
}
```

## Twig

Apart from [rules that should be applied to all twig files](twig.md), there are some specifications for components:

### Generic component

Generic component twig file defines all the markup for the component. It should contains all the logic required to use the component, as it is intended to be used by systems components.

This twig file consists in different sections (see above link for more details):
* Parameters/Blocks: list of exposed parameters and blocks
* Internal properties: definition of custom variables
* Internal logic: preprocess and other custom logic
* Print: html markup

Example:
```
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
```
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

Apart from [rules that should be applied to all js files](javascript.md), there are some specifications for components:

### Generic component

TBD

### Systems component

TBD

## Config javascript file

Config files are not shared between generic and system components, so they should be duplicated (and possibly altered).

A config.js file should be present in generic and all specific components.

## package.json

TBD

## Other assets

TBD

## Exception: components existing in only one system

If a component exists only in one system, it can be defined in the system only. This means that there is no need to create a generic component, and files in system component should contain all the code/logic needed for the component.

As soon as the component should be available in another system, a generic component has to be created, and the logic deported as explained ahead.
