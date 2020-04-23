# Components conventions

## Introduction

It's important to know the concept of systems in ECL before developing components. If you are not familiar with the concept yet, read this first [systems' documentation](../ec-eu-systems.md).

Each component in ECL is an npm package. Each package represents an isolated set of source code and assets related to the given component: SCSS, JavaScript, etc. Packages interact with each other based on native npm means: `dependencies`, `devDependencies` and other relevant attributes in the `package.json` manifest.

The following sections touch upon the important aspects of maintaining a component package.

## Manifest file package.json

As mentioned earlier in the introduction, the `package.json` is the first and most important element to attend to when working with components packages.

Please ensure the presence of the following attributes:

- `name`: name of the package. Follow naming conventions presented in the next section
- `sass`: path to a SCSS file. Higher priority than 'style'
- `style`: path to a CSS file. This is the main bundled stylesheet (dist/[name].css)
- `main`: path to a JavaScript file. Used by non ES6-aware tools (UMD) (dist/[name].js)
- `module`: path to a JavaScript file file. Used by ES6-aware tools like webpack
- `dependencies`: list of other packages' code which is required for the given package

It's important to have packages within `src/systems/ec/implementations/react` folder with `"private": true` flag because these are used only for internal purposes of demonstrating implementaiton of vanilla components on ECL website.

## Naming

- `@ecl/` namespace should be used consistently throughout all packages in order to be published correctly on [ECL v2 npm organisation](https://www.npmjs.com/org/ecl).
- The following pattern is to be followed in order to take into account systems specificity: `[ec|eu]-[implementation]-[component|layout|utility]-element`.

Examples:

- `@ecl/ec-component-menu` - vanilla (base) component
- `@ecl/ec-react-component-menu` react implementation for website

## Implementations

Please follow along existing packages in `src/systems/ec/implementations/vanilla/packages` and `src/systems/ec/implementations/react/components`.

If you have difficulties figuring out what should be where, here are a few rules of thumb:

- Vanilla code which does not target any particular framework or platform goes into `vanilla/packages`. This is the first-level implementation.
- Other implementations are done in a folder up `src/systems/ec/implementations` and `react` is currently used for facilitating components demonstration on ECL website developed in `src/website`.
- There should be no "leaking" of rules between components, each component comes with its own set of rules and logic in isolation.

## SCSS

Please refer to the [dedicated conventions section regarding SCSS](./scss.md).

## JavaScript

Please refer to the [dedicated conventions section regarding JavaScript](./javascript.md).

## Links

If a component contains links, they should always lead to an internal example page instead of blank link (`#`) or external links: `../../example.html#{component_name}`

## Binary resources

If a component relies on binary assets such as images which are not source code, they should also be placed in a folder inside the component.

However, respect existing resource packages for favicons, icons, logos and social icons at `src/systems/(ec|eu)/resources`
