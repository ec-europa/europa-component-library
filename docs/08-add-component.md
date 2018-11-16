# Adding a component to the stack.

## Vanilla

---

This is the vanilla version of the component, therefore it's a node package made of a scss file defining the styles and a javascript file when needed, the package exports a mixin of the component and the related javascript as a module.
The name of the component is prefixed by _{system}-component_

**path:** src/systems/{system}/implementations/vanilla/packages/  
**base_name:** ec-component-{component_name}  
**files:** ec-component-{component_name}.scss, ec-component-{component_name}.js, package.json, README.md

### Utilities packages

There is a set of packages in the list of the vanilla ones which are providing utilities classes to be applied to the layouts when needed. Mind the fact that those utilities are not meant to be used in the component definition but only when defining layouts.  
Their names are prefixed by _{system}-utility_

**path:** src/systems/{system}/implementations/vanilla/packages/  
**base_name:** {system}-utility-{utility_name}
**files:** {system}-utility-{utility_name}.scss, package.json, README.md

There is also a convention adopted for utilities css classes, which is: _ecl-u-\*_ where the placeholder is replaced by the specific utility defined.

### Presets

These are the presets collecting the different components, assembling them together and exporting those in a single package.
At the moment the available presets are:

**{system}-preset-dev** _(it imports all the available components)_  
**{system}-preset-full** _(final css, js and images distributed in the dist folder with all the components included)_  
**{system}-preset-website** _(final css, js and images distributed in the dist folder, recommended for projects using ECL)_

## React

---

### React components

It's a react component defined as a node package, so it is made in its simplest form of a jsx file defining the component and a package.json describing the package. More complex component can use multiple .jsx files.

**path:** src/systems/{system}/implementations/react/packages/
**package_name:** {system}-react-component-{component_name}  
**base_name:** {component_name}  
**files:** {Component_name}.jsx, package.json

### React pages

Still in the same context of the react components for the different systems we also offer packages representing the overall lavout of a certain page or section.
Those pages are assembling existing components in the requested variants and demoing that as one or more storybook stories.
The package structure is the same as a standard react component but it has an additional subfolder with examples:

**Additional files:** examples/Default.jsx

### Storybook

To render the component in storybook you have to define stories for it in the "stories" folder.
Storybook renders also the "specs" for the component, this is another, separated package set as a dev dependency of the react package, when present.

**files:** stories/Index.jsx

## Specs

---

This is the node package containing the data for the component demo.

**path:** src/systems/{system}/specs/components/  
**base_name:** {component_name}  
**folders:** demo
**files:** demo/data.js, package.json

## Docs

Docs for the components are stored in the website folder.

**path:** src/website/src/pages/{system}/components/{component_name}
**files:** docs/code.mdx, docs/style.md, docs/usage.md, docs/index.md

### Styles:

---

Storybook will include the {system}-preset-dev package for the styles, in order for your new component to be styled when rendered you need to include its package in the list of included packages for the aforementioned preset:

**base_path:** src/systems/{system}vanilla/{system}-preset-dev/  
**files:** base_path/package.json, base_path/src/ec-preset-dev.scss
