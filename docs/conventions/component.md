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

## Javascript

## Config javascript file

## package.json

## Other assets


## Exception: components existing in only one system
