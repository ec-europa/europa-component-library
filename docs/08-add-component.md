# Adding a component to the stack

## Vanilla

### Components

This is the vanilla version of the component, therefore it's a node package made of a scss file defining the styles and a javascript file when needed, the package exports a mixin of the component and the related javascript as a module.
The name of the component is prefixed by _{system}-component_

- **path**: src/systems/{system}/implementations/vanilla/packages/ 
- **base_name**: {system}-component-{component_name}
- **package_name**: {system}-component-{component_name}
- **files**:
  - {system}-component-{component_name}.scss
  - {system}-component-{component_name}.js
  - package.json
  - README.md

### Utilities

There is a set of packages in the list of the vanilla ones which are providing utilities classes to be applied to the layouts when needed. Mind the fact that those utilities are not meant to be used in the component definition but only when defining layouts.  
Their names are prefixed by _{system}-utility_

- **path**: src/systems/{system}/implementations/vanilla/packages/ 
- **base_name**: {system}-utility-{utility_name}
- **package_name**: {system}-utility-{utility_name}
- **files**:
   - {system}-utility-{utility_name}.scss
   - package.json
   - README.md

There is also a convention adopted for utilities css classes, which is: _ecl-u-\*_ where the placeholder is replaced by the specific utility defined.

### Presets

These are the presets collecting the different components, assembling them together and exporting those in a single package.
At the moment the available presets are:

- **{system}-preset-dev**: it imports all the available components
- **{system}-preset-full**: final css, js and images distributed in the dist folder with all the components included  
- **{system}-preset-website**: final css, js and images distributed in the dist folder, with extra global css rules; recommended for projects using ECL

## React

### Components

It's a react component defined as a node package, so it is made in its simplest form of a jsx file defining the component and a package.json describing the package. More complex component can use multiple .jsx files.

- **path**: src/systems/{system}/implementations/react/packages/
- **base_name**: {component_name}
- **package_name**: {system}-react-component-{component_name}
- **files**: 
   - {component_name}.jsx
   - package.json

### Storybook

To render the component in storybook you have to define stories for it in the "stories" folder, in each component/layout.
Storybook renders also the "specs" for the component, this is another, separated package set as a dev dependency of the react package, when present.

- **files**: 
   - stories/Index.jsx

### Templates

Still in the same context of the react components for the different systems we also offer packages representing the overall layout of a certain page or section.
Those templates are assembling existing components in the requested variants and demoing that as one or more storybook stories.
They generally consist only on one or several Storybook stories. As they are not real components, they don't have other jsx implementation, nor package.json file.

## Specs

This is the node package containing the data for the component, templates and utilities demo. They can content several data files, depending on the complexity and variants of the component.

- **path**: src/systems/{system}/specs/*/
- **base_name**: {system}-specs-{component_name}
- **package_name**: {system}-specs-{component_name}
- **files**: 
   - demo/data--{variant}.js
   - package.json

## Docs

Docs are the components demo displayed on the website. They may be slightly different from the storybook stories, depending on the needs.
They are located in the website folder.

- **path**: src/website/src/pages/{system}/components/{component_name}
- **files**:
   - docs/code.mdx
   - docs/style.md
   - docs/usage.md
   - index.md

## Extra modifications

### Presets

To be part of the released distributions of ECL, make sure to add your component to the {system}-preset-dev preset.
It consists in 3 files:

- src/systems/{system}/implementations/vanilla/packages/{system}-preset-dev/package.json
- src/systems/{system}/implementations/vanilla/packages/{system}-preset-dev/src/{system}-preset-dev.scss
- src/systems/{system}/implementations/vanilla/packages/{system}-preset-dev/src/{system}-preset-dev.js

Note that the js file modification is optional; it only concerns components with custom javascript.
