# Presets

A preset is a set of components from a specific system (EC or EU) bundled together for distribution. Each system has a set of ready-to-use presets:

- [@ecl/preset-ec](https://www.npmjs.com/package/@ecl/preset-ec)
- [@ecl/preset-eu](https://www.npmjs.com/package/@ecl/preset-eu)
- [@ecl/preset-reset](https://www.npmjs.com/package/@ecl/preset-reset)

The _preset-ec preset-eu_ packages contain the main css and js, respectively in the `styles` and `script` folder within the `dist` folder, and an optional css file that can be separately loaded in the `styles/optional` folder: `ecl-{ec or eu}-default.css` which replaces the `ecl-editor` preset in v2 and it is meant to style some basic html tag to make them look like ECL components or elements.

The reset preset uses `normalize.css` to minimize the differences in the different browsers.

Using presets is a highly-recommended approach of implementing ECL.
