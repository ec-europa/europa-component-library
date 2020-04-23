# SCSS coding conventions

In order to enforce consistent conventions and avoid errors in our stylesheets, we use the mighty [stylelint](https://stylelint.io/) linter.

## Rules

### Presets

We use the following presets:

- [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines), a config based on [Sass Guidelines](https://sass-guidelin.es/)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard), a standard config derived from the common rules found within a handful of CSS styleguides, including: [The Idiomatic CSS Principles](https://github.com/necolas/idiomatic-css), [GitHub's PrimerCSS Guidelines](http://primercss.io/guidelines/#scss), [Google's CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules), [Airbnb's Styleguide](https://github.com/airbnb/css#css), and [@mdo's Code Guide](http://codeguide.co/#css)

### Plugins

Furthermore, we added the [stylelint-selector-bem-pattern](https://github.com/davidtheclark/stylelint-selector-bem-pattern) plugin to check the validity of selectors against our BEM-style conventions. All the classes we provide should follow the `.ecl-block__element--modifier` pattern.

In order to enable the BEM-style validation, you have to define a component with a comment.

```scss
/** @define label */

.ecl-label {
}

.ecl-label--primary {
}
```

More information can be found on [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter#defining-a-component-and-utilities)'s project.

### Configuration

All the rules are made availble through our [stylelint-config-ecl](https://github.com/ec-europa/ecl-toolkit/tree/master/packages/stylelint-config-ecl) config. You are not supposed to override this configuration.

## Automatically formats stylesheets

You can try to use [stylefmt](https://github.com/morishitter/stylefmt) to format your stylesheets automatically. It can save you a lot of time but it can also introduce new errors.

For this reason, we don't officially support it. Use it at your own risk.

## IDE integration

Plugins for both stylelint and stylefmt are available for major editors like Atom and Sublime Text.

### MIGRATED BUT NOT PROCESSED

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
