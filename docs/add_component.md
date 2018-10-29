# Adding a component to the stack.

## Vanilla is on top

---

it is vanilla, so it's just a node package exporting a mixin of the overall component styles.
(No clue about vanilla javascript, yet)

**path:** _src/systems/{system}/implementations/vanilla/packages/_
**base_name:** _ec-component-{component_name}_
**files:** [ec-component-{component_name}.scss](./templates/vanilla/vanilla_template.md), [package.json](./templates/vanilla/vanilla_json.md), [README.md](./templates/vanilla/readme.md)

## React and storybook

---

it's a react component and a node package, so basically a jsx file defining the component and a package.json describing the package.

**path:** src/systems/{system}/implementations/react/packages/
**base_name:** {component*name}
**files:** *{Component*name}.jsx, package.json*

### Storybook

To render the component in storybook you have to define stories for it in the "stories" folder.
Storybook renders also the "specs" for the component, this is another, separated package set as a dev dependency of the react package, when present.

**files:** _Index.jsx_

## Specs

---

It's a node package containing the specifications for the component and providing the data for rendering the component in storybook.

**path:** _src/systems/{system}/specs/components/_
**base_name:** _{component_name}_
**folders:** _demo, docs_
**files:** _docs/code.mdx, docs/usage.md, demo/\*.js, config.js, package.json_

### Styles:

---

The storybook will only include the {system}-preset-dev package for the styles, in order for your new component to be styled you need to include its package in the list of included packages:

**base_path:** _src/systems/{system}vanilla/{system}-preset-dev/_
**files:** _base_path/package.json, base_path/src/ec-preset-dev.scss_
