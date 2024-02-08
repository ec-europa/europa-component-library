# Presets

A preset is a set of components from a specific system (EC or EU) bundled together for distribution. Each system has a set of ready-to-use presets:

Main preset:

- [@ecl/preset-ec](https://www.npmjs.com/package/@ecl/preset-ec)
- [@ecl/preset-eu](https://www.npmjs.com/package/@ecl/preset-eu)

Additional preset (included in the main preset):

- [@ecl/preset-reset](https://www.npmjs.com/package/@ecl/preset-reset)
- [@ecl/preset-rtl](https://www.npmjs.com/package/@ecl/preset-rtl)

The main preset contain:

- the main css for screen and print, in the `styles` folder
- the main js, in the `script` folder
- optional css files that can be separately loaded in the `styles/optional` folder:
  - `ecl-{ec|eu}-reset.css`: simple css reset, based on normalize.css
  - `ecl-{ec|eu}-utilities.css`: contain the definition of all ECL utilities, to manually alter some styles or spacing on your site
  - `ecl-{ec|eu}-rtl.css`: some css modification to render content right-to-left
  - `ecl-{ec|eu}-default.css` and `ecl-{ec|eu}-default-print.css`: to style some basic html tag to make them look like ECL components or elements. Mostly used in wysiwyg.

Using presets is a highly-recommended approach of implementing ECL.
