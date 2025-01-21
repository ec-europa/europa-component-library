# Components conventions

It's important to know the concept of systems in ECL before developing components. If you are not familiar with the concept yet, read [systems' documentation](../ec-eu-systems.md) first.

Each component in ECL is an npm package. Each package represents an isolated set of source code and assets related to the given component: SCSS, JavaScript, etc. Packages interact with each other based on native npm means: `dependencies`, `devDependencies` and other relevant attributes in the `package.json` manifest.

The following sections touch upon the important aspects of maintaining a component package.

## Manifest file package.json

As mentioned earlier in the introduction, the `package.json` is the first and most important element to attend to when working with components' packages.

Please ensure the presence of the following attributes:

- `name`: name of the package. Follow naming conventions presented in the following section
- `style`: path to a CSS file. This is the main bundled stylesheet (dist/[name].css)
- `main`: path to a JavaScript file. Used by non ES6-aware tools (UMD) (dist/[name].js)
- `module`: path to a JavaScript file file. Used by ES6-aware tools like webpack
- `dependencies`: list of other packages' code which is required for the given package

## Naming

- `@ecl/` namespace should be used consistently throughout all packages in order to be published correctly on [ECL npm organisation](https://www.npmjs.com/org/ecl).

Examples:

- `@ecl/menu` - Menu component

## SCSS

Please refer to the [dedicated conventions section regarding SCSS](./scss.md).

## JavaScript

Please refer to the [dedicated conventions section regarding JavaScript](./javascript.md).

Links inside specifications should always lead to an internal example page instead of blank link (`#`) or external links: `../../example.html#{component_name}`

## Binary

If a component relies on assets such as images which are not source code, they should also be placed in a folder inside the component.

However, respect existing resource packages for favicons, icons, logos and social icons at `src/resources`
