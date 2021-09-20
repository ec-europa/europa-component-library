# Components conventions

It's important to know the concept of systems in ECL before developing components. If you are not familiar with the concept yet, read [systems' documentation](../ec-eu-systems.md) first.

Each component in ECL is an npm package. Each package represents an isolated set of source code and assets related to the given component: SCSS, JavaScript, etc. Packages interact with each other based on native npm means: `dependencies`, `devDependencies` and other relevant attributes in the `package.json` manifest.

The following sections touch upon the important aspects of maintaining a component package.

## Manifest file package.json

As mentioned earlier in the introduction, the `package.json` is the first and most important element to attend to when working with components' packages.

Please ensure the presence of the following attributes:

- `name`: name of the package. Follow naming conventions presented in the following section
- `style`: path to a CSS file. This is the main bundled stylesheet (dist/[name].css)
- `sass`: path to a SCSS file. Higher priority than `style`
- `main`: path to a JavaScript file. Used by non ES6-aware tools (UMD) (dist/[name].js)
- `module`: path to a JavaScript file file. Used by ES6-aware tools like webpack
- `dependencies`: list of other packages' code which is required for the given package

## Naming

- `@ecl/` namespace should be used consistently throughout all packages in order to be published correctly on [ECL v3 npm organisation](https://www.npmjs.com/org/ecl).

Examples:

- `@ecl/vanilla-component-menu` - vanilla (base) component
- `@ecl/twig-component-menu` react implementation for website

## Implementations

Please follow along existing packages in `src/implementations/vanilla/components` and `src/implementations/twig/components`.

If you have difficulties figuring out what should be where, here are a few rules of thumb:

- Vanilla code which does not target any particular framework or platform goes into `src/implementations/vanilla/components`. This is the first-level implementation.
- The main ECL implementations is done in `src/implementations/twig/components` where `twig` is the template language currently used for rendering components on the ECL website developed in `src/website`.
- There should be no "leaking" of rules between components, each component comes with its own set of rules and logic in isolation.

## SCSS

Please refer to the [dedicated conventions section regarding SCSS](./scss.md).

## JavaScript

Please refer to the [dedicated conventions section regarding JavaScript](./javascript.md).

## Specs

Each component has a so called specification file which contains demo data for how information is fed into the component. Specifications are stored in `src/specs` and are published on npm in order to be shared by all ECL implementations.

Links inside specifications should always lead to an internal example page instead of blank link (`#`) or external links: `../../example.html#{component_name}`

Please note that if a given implementation requires that the demo data structure from a given specification to be different, data structure should be modified on implementation level through adapters rather than the specification.

## Binary

If a component relies on assets such as images which are not source code, they should also be placed in a folder inside the component.

However, respect existing resource packages for favicons, icons, logos and social icons at `src/resources`
