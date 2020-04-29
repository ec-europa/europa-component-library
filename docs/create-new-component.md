# Adding a component to the stack

## Vanilla

These components serve as the base for the implementation of other components. This is the starting point of the development of new components.

### Components

This is the vanilla version of a given component which is not bound to any library or framework implementation. The npm package consists of a SCSS file defining styles and a JavaScript file defining interactions whenever SCSS styles do not suffice. Each package exports the component's SCSS mixin and the related JavaScript as a module.

The name of the component is prefixed by _{system}-component_

- **path**: src/systems/{system}/implementations/vanilla/packages/
- **base_name**: {system}-component-{component_name}
- **package_name**: {system}-component-{component_name}
- **files**:
  - {system}-component-{component_name}.scss
  - {system}-component-{component_name}.js
  - package.json
  - README.md

Concerning dependencies in the `package.json` file, the following rule should be applied:

- {system}-base should be put in `dependencies`
- specs should not be put in `devDependencies`

### Utilities

There is a set of utilities which can be handy for ECL users for applying atomic styling changes gluing components together in actual implementations. Utilities are not meant to be used in component definitions.

Their names are prefixed by _{system}-utility_

- **path**: src/systems/{system}/implementations/vanilla/packages/
- **base_name**: {system}-utility-{utility_name}
- **package_name**: {system}-utility-{utility_name}
- **files**:
  - {system}-utility-{utility_name}.scss
  - package.json
  - README.md

By convention, utility classes have the following namespace: _ecl-u-\*_.

### Presets

Presets are collections of packages combined for a specific purpose. Do not develop or update components through the presets as they are only a manifest of exports for a selected list of elements.

Further details are presented in a [dedicated presets section](./presets.md).

## Specs

These are package containing data for demos. They can contain several data files, depending on the complexity and variants of the component.

- **path**: src/systems/{system}/specs/\*/
- **base_name**: {system}-specs-{component_name}
- **package_name**: {system}-specs-{component_name}
- **files**:
  - demo/data--{variant}.js
  - package.json

## React

### Components

After having the vanilla version of a component ready in terms of SCSS, the next step of a component implementation is the React version. React components are private packages used only internally for demonstrating components on the ECL website.

- **path**: src/systems/{system}/implementations/react/packages/
- **base_name**: {component_name}
- **package_name**: {system}-react-component-{component_name}
- **files**:
  - src/{component_name}.jsx
  - package.json

Concerning dependencies in the `package.json` file, the following rule should be applied:

- packages directly used by the component (via import or require) should be put in `dependencies`
- all other packages (vanilla, specs,...) should be put in `devDependencies`

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
