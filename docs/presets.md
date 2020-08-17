# Presets

A preset is a set of components from a specific system (EC or EU) bundled together for distribution. Each system has a set of ready-to-use presets:

- [@ecl/ec-preset-editor](https://www.npmjs.com/package/@ecl/ec-preset-editor)
- [@ecl/ec-preset-website](https://www.npmjs.com/package/@ecl/ec-preset-website)
- [@ecl/ec-preset-full](https://www.npmjs.com/package/@ecl/ec-preset-full)
- [@ecl/ec-preset-legacy](https://www.npmjs.com/package/@ecl/ec-preset-legacy)
- [@ecl/ec-preset-legacy-website](https://www.npmjs.com/package/@ecl/ec-preset-legacy-website)

To access EU system presets, please use the same links as above and change `ec-` to `eu-`.

When trying to decide which preset is the most appropriate for your project needs, have in mind the following:

- `preset-website` is the most popular start. This preset ships all components with normalize.css and some styles applied to the document body.
- `preset-full` is the same as `preset-website` but does not contain normalise.css and does not apply any global styles. If you are not starting the ECL implementation from scratch, but on an existing website, then this could be more appropriate preset.
- `preset-editor` provides styles for paragraphs, lists and other generic content-related HTML elements which cannot have the necessary ECL classes applied programatically. Most frequently used in CMS or frameworks which manage content through WYSIWYG editors rather than view templates.

In terms of how ECL-based websites follow up with the library's evolution when components get deprecated:

- `preset-legacy-website` is an easy upgrade path to websites which have started off `preset-website` and have experienced less frequent upgrades. If any component used in `preset-website` has been deprecated and has become unavailable to a higher version, the deprecated will remain available in `preset-website-legacy` for backwards compatibility.
- `preset-legacy` contains what has been deprecated in time.

Using presets is a highly-recommended approach of implementing ECL.
