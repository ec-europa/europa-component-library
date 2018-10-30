# Adding a component to the stack.

## Vanilla

---

The vanilla version of the component, so it's a node package made of a style file and a javascript when needed, which exports a mixin of the component styles and the related javascript as a module.

**path:** src/systems/{system}/implementations/vanilla/packages/  
**base_name:** ec-component-{component_name}  
**files:** ec-component-{component_name}.scss, ec-component-{component_name}.js, package.json, README.md

## React and storybook

---

It's a react component defined as a node package, so it is made of a jsx file defining the component and a package.json describing the package.

**path:** src/systems/{system}/implementations/react/packages/  
**base_name:** {component_name}  
**files:** {Component_name}.jsx, package.json

### Storybook

To render the component in storybook you have to define stories for it in the "stories" folder.
Storybook renders also the "specs" for the component, this is another, separated package set as a dev dependency of the react package, when present.

**files:** Index.jsx

## Specs

---

This is the node package containing the specifications for the component and providing the data for rendering the component in storybook.

**path:** src/systems/{system}/specs/components/  
**base_name:** {component_name}  
**folders:** demo, docs  
**files:** docs/code.mdx, docs/usage.md, demo/\*.js, config.js, package.json

### Styles:

---

Storybook will include the {system}-preset-dev package for the styles, in order for your new component to be styled when rendered you need to include its package in the list of included packages for the aforementioned preset:

**base_path:** src/systems/{system}vanilla/{system}-preset-dev/  
**files:** base_path/package.json, base_path/src/ec-preset-dev.scss
