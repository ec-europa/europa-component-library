# Adding a component to the stack

## Vanilla

### Components

This is the vanilla version of the component, therefore it's a npm package made of a scss file defining the styles and a JavaScript file when needed. The package exports a mixin of the component and the related JavaScript as a module.

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

There is a set of packages in the list of the vanilla ones which provides utility classes to be applied to the layouts when needed. Mind the fact that those utilities are not meant to be used in the component definition but only when defining layouts.

Their names are prefixed by _{system}-utility_

- **path**: src/systems/{system}/implementations/vanilla/packages/
- **base_name**: {system}-utility-{utility_name}
- **package_name**: {system}-utility-{utility_name}
- **files**:
   - {system}-utility-{utility_name}.scss
   - package.json
   - README.md

There is also a convention adopted for utility CSS classes, which is: _ecl-u-\*_ where the placeholder is replaced by the specific utility.

### Presets

These are the presets collecting the different components, assembling them together and exporting those in a single package.

At the moment, the available presets are:

- **{system}-preset-dev**: it imports all the available components.
- **{system}-preset-full**: final CSS, JS and images distributed in the `dist` folder with all the components included.
- **{system}-preset-website**: final CSS, JS and images distributed in the `dist` folder, with extra global CSS rules ; recommended for projects using ECL.

## React

## Specs

This is the npm package containing the data for the component, templates and utilities demo. They can contain several data files, depending on the complexity and variants of the component.

- **path**: src/systems/{system}/specs/*/
- **base_name**: {system}-specs-{component_name}
- **package_name**: {system}-specs-{component_name}
- **files**:
   - demo/data--{variant}.js
   - package.json

### Components

It's a React component defined as a npm package, so it is made in its simplest form of a JSX file defining the component and a package.json describing the package. More complex component can use multiple `.jsx` files.

- **path**: src/systems/{system}/implementations/react/packages/
- **base_name**: {component_name}
- **package_name**: {system}-react-component-{component_name}
- **files**:
   - {component_name}.jsx
   - package.json

#### Storybook

To render the component in Storybook, you have to define stories for it in the "stories" folder, in each component/layout. The story should import the demo data from the specs of the component.

- **files**:
   - stories/Index.jsx

### Templates

Still in the same context of the React components for the different systems, we also offer packages representing the overall layout of a certain page or section.

Those templates are assembling existing components in the requested variants and demoing that as one or more Storybook stories.

They generally consist only of one or several Storybook stories. As they are not real components, they don't have other JSX implementation, nor package.json file.

## Docs

Docs are the components demo displayed on the website. They may be slightly different from the Storybook stories, depending on the needs.

They are located in the website folder.

- **path**: src/website/src/pages/{system}/components/{component_name}
- **files**:
   - docs/code.mdx
   - docs/style.md
   - docs/usage.md
   - index.md

## Extra modifications

### Presets

To be part of the released distributions of ECL, make sure to add your component to the `{system}-preset-dev` preset.

It consists of 3 files:

- src/systems/{system}/implementations/vanilla/packages/{system}-preset-dev/package.json
- src/systems/{system}/implementations/vanilla/packages/{system}-preset-dev/src/{system}-preset-dev.scss
- src/systems/{system}/implementations/vanilla/packages/{system}-preset-dev/src/{system}-preset-dev.js

Note that the JS file modification is optional ; it only concerns components with custom JavaScript.
