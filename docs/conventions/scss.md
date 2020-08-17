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

All components' CSS rules should be organized in such a way that each component should support theming and composition on a high level through `ec-base` and `eu-base` packages. They contain the core variables and mixins on which all other components build upon.

Inside each component there is a main SCSS file which should contain a main mixin which allows for the theming and potential compositions. It is acceptable to have rules break-down into several smaller mixins. However, the component's main SCSS file should contain one main mixin calling those smaller mixins.

The main mixin should be named based the component's main CSS class. Theming parameters should be defined as input parameters of the main mixin.

There are 2 very important rules to follow while developing the SCSS of a component in order to ensure its consistency in the global design system.

1. Main SCSS file should always start with an import of base variables and mixins for respecting global theming parameters `@import '@ecl/(ec|eu)-base/(ec|eu)-base';`.

2. Use `check-imports()` mixin to ensure dependencies in stylesheets. If a component depends on or overrides another component's styles, it should ensure that its dependent code is loaded beforehand.
