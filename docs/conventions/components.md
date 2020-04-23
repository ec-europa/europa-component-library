# Components coding conventions

## Introduction

Building components in a project with several systems means that first step in the construction of the component is the base of the component, i.e. the generic component containing common rules.

On a high-level, the base should serve as an interface and systems' components as specific implementations. Inheritance, though, should be achieved by composition and not by polymorphism.

That's why the base should also be thought of, and managed as, a common layer of re-usable set of rules and guidelines.

All components should follow the same file structure and naming conventions.

If you are not familiar with the concept of systems in ECL, first have a look at [the system documentation](../ec-eu-systems.md).

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

## Other assets

If a component rely on other assets (images, fonts, ...), they should be placed in a folder inside the component.

## Exception: components existing in only one system

If a component exists only in one system, it can be defined in the system only. This means that there is no need to create a generic component, and files in system component should contain all the code/logic needed for the component.

As soon as the component should be available in another system, a generic component has to be created, and the logic refactored as explained ahead.
