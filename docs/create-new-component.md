# Adding a component to the stack

## Vanilla

These components serve as the base for the implementation of other components. This is the starting point of the development of new components.

### Components

This is the vanilla version of a given component which is not bound to any library or framework implementation. The npm package consists of one or more SCSS file defining styles and a JavaScript file defining interactions whenever SCSS styles do not suffice. Each package exports the component's SCSS and the related JavaScript as a module.

- **path**: src/implementations/vanilla/components/
- **base_name**: {component_name}
- **package_name**: vanilla-component-{component_name}
- **files**:

  - \_{component_name}.scss and {component_name}-ec.scss / {component_name}-eu.scss
    OR
  - {component_name}-ec.scss / {component_name}-eu.scss
    OR
  - {component_name}.scss

  - {component_name}.js
  - package.json
  - README.md

Concerning dependencies in the `package.json` file, the following rule should be applied:

- theme-dev should be put in `dependencies`
- specs should not be put in `devDependencies`

### Utilities

There is a set of utilities which can be handy for ECL users for applying atomic styling changes gluing components together in actual implementations. Utilities are not meant to be used in component definitions.

Their names are prefixed by _{system}-utility_

- **path**: src/implementations/vanilla/utilities/
- **base_name**: vanilla-utility-{utility_name}
- **package_name**: vanilla-utility-{utility_name}
- **files**:
  - {utility_name}.scss
  - package.json
  - README.md

By convention, utility classes have the following namespace: _ecl-u-\*_.

### Presets

Presets are collections of packages combined for a specific purpose. Do not develop or update components through the presets as they are only a manifest of exports for a selected list of elements.

Further details are presented in a [dedicated presets section](./presets.md).

## Specs

These are package containing data for demos. They can contain several data files, depending on the complexity and variants of the component.

- **path**: src/specs/\*/
- **base_name**: specs-{component_name}
- **package_name**: specs-{component_name}
- **files**:

  - demo/data-{variant}
    OR
  - demo/data-{variant}--{system}.js

  - package.json

## Twig

### Components

After having the vanilla version of a component ready in terms of SCSS, the next step of a component implementation is the Twig version.

- **path**: src/implementations/twig/components/
- **base_name**: {component_name}
- **package_name**: twig-component-{component_name}
- **files**:
  - {component_name}.html.twig
  - package.json

Concerning dependencies in the `package.json` file, the following rule should be applied:

- packages directly used by the component (via import or require) should be put in `dependencies`
- all other packages (vanilla, specs,...) should be put in `devDependencies`

#### Storybook

To render the component in Storybook, you have to define stories for it in a specific file. The story should import the demo data from the specs of the component.

- **files**:
  - {component_name}.story.js

## Docs

Docs are the components demo displayed on the website. They may be slightly different from the Storybook stories, depending on the needs.

They are located in the website folder.

- **path**: src/website/src/pages/{system}/components/{component_name}
- **files**:
  - docs/code.mdx
  - docs/style.md
  - docs/usage.md
  - index.md
