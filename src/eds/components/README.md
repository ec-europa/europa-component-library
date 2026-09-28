# eds-components

Reserved location for EDS Twig components, each its own package
(`src/eds/components/{name}/`), following the same layout as
`src/components/{name}/` (`{name}.html.twig`, `{name}.scss`,
`{name}.story.js`, `demo/data.js`, ...).

This directory needs to exist even while empty — `src/eds/playground`'s
Storybook config globs it directly (`../../components/*/*.story.js`
in `.storybook/main.js`), and the underlying webpack resolver errors if the
directory is missing rather than just empty.
