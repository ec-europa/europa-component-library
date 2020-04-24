# SCSS coding conventions

In order to enforce consistent conventions and avoid errors in our stylesheets, ECL project integrates with [stylelint](https://stylelint.io/) linter.

## Rules

On a high level, ECL follows BEM conventions and contains its CSS rules within `ecl-` namespace in order to allow for gradual and selective integration in existing web applications.

### Presets

ECL stylelint rules are based on:

- [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines), a config based on [Sass Guidelines](https://sass-guidelin.es/)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard), a standard config derived from the common rules found within a handful of CSS styleguides, including: [The Idiomatic CSS Principles](https://github.com/necolas/idiomatic-css), [GitHub's PrimerCSS Guidelines](http://primercss.io/guidelines/#scss), [Google's CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules), [Airbnb's Styleguide](https://github.com/airbnb/css#css), and [@mdo's Code Guide](http://codeguide.co/#css)

### Plugins

In addition to the preset mentioned in the previous section, the [stylelint-selector-bem-pattern](https://github.com/davidtheclark/stylelint-selector-bem-pattern) plugin is also included. It checks the validity of selectors against our BEM-style conventions. All classes within ECL should follow the `.ecl-block__element--modifier` pattern.

In order to enable the BEM-style validation, it's necessary to define a component with a comment.

```scss
/** @define label */

.ecl-label {
}

.ecl-label--primary {
}
```

More information can be found on [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter#defining-a-component-and-utilities)'s project.

### Configuration

All the rules are made availble through [.stylelintrc.js](../../.stylelintrc.js) config.

## Automatic formatting

ECL repository uses [prettier](https://prettier.io) formatter for SCSS.

## Components conventions

The following sections present details regarding how SCSS is organized in ECL components.

### Vanilla components

All CSS rules should be organized in mixins in order to allow for theming and composition. It is acceptable to have rules break-down into several smaller mixins. However the component's main SCSS file should contain one main mixin calling those smaller mixins.

The main mixin should be named based the component's main class.

Rules in vanilla components should not contain EC/EU system specificity such as colours, sizes, etc.

If a given component should be themed differently based on EC/EU system specificity then each difference should be defined as an input parameters of the main mixin.

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
