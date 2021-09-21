# SCSS coding conventions

CSS (SCSS) source code conventions within ECL repository are enforced through [stylelint](https://stylelint.io/) linter.

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

Please refer to [.stylelintrc.js](../../.stylelintrc.js) config file.

## Automatic formatting

ECL repository uses [prettier](https://prettier.io) formatter for SCSS.

## Components conventions

The following sections present details regarding how SCSS is organized in ECL components.

All components' CSS rules should be organized in such a way that each component should support theming through the definition of a `theme` package is `src/themes`.
These themes are based on common elements, mainly scss maps, defined in the `dev` theme which they `@forward` to the presets applying the needed customisation.
The scss organisation in the different components depends on the specific requirements of each component, there are three different approaches currently used:

1. a main scss file defining a default style for the component (its file name starts with a `_`) and one file for each system with an `ec or eu` suffix that `@use` the main scss file passing different values for the parameters defined by that and potentially applying even different, independent, styles to the component.
   This the standard approach and should normally be preferred when there are differences in terms of style between the two systems but most of the implementation is consistent or just the same.

2. Two different scss files for the two systems with no shared main file. To be used only in case the requirements for the two systems do not share much and it would not then be convenient basing them on a common style.

3. One single file used by both systems. This is only possible when the requirements specify differences in the two systems that can be handled at a theme level or no difference at all.

Same approach concerns the print version of the component's style, also in this case there could be differences that would require the definition of two different styles based on a common one, but in most cases this is not needed and a single scss file is usually enough to fulfill the requirements.
