# ECL structure

- [Components](#components)
- [Utilities](#utilities)
- [Presets](#presets)
- [Resources](#resources)

## Components

A single component is split into different elements: vanilla, twig, specs and doc

### Vanilla

This is the vanilla version of a given component which is not bound to any library or framework implementation.

The npm package consists of one or more SCSS file defining styles and a JavaScript file defining interactions whenever SCSS styles do not suffice. Each package exports the component's SCSS and the related JavaScript as a module.

- **path**: src/implementations/vanilla/components/
- **base_name**: {component_name}
- **package_name**: vanilla-component-{component_name}
- **files**:
  - {component_name}.scss
  - {component_name}-print.scss
  - {component_name}.js
  - package.json
  - README.md

Concerning dependencies in the `package.json` file, the following rule should be applied:

- all packages explictely used in the scss or js should be put in `dependencies`

### Twig

Twig is used to render the markup of the components. It is not mandatory to rely on it for ECL implementation, as the HTML output can be used as is.

- **path**: src/implementations/twig/components/
- **base_name**: {component_name}
- **package_name**: twig-component-{component_name}
- **files**:
  - {component_name}.html.twig
  - {component_name}.story.js
  - {component_name}.test.js
  - package.json
  - README.md

Concerning dependencies in the `package.json` file, the following rule should be applied:

- packages directly used by the component (via import or require) should be put in `dependencies`
- all other packages (vanilla, specs,...) should be put in `devDependencies`

### Specs

These are package containing data for demos. They can contain several data files, depending on the complexity and variants of the component.

- **path**: src/specs/components/
- **base_name**: {component_name}
- **package_name**: specs-component-{component_name}
- **files**:
  - demo/data-{variant}.js
  - package.json

### Docs

Docs are the components demo displayed on the website. They may be slightly different from the Storybook stories, depending on the needs.

They are located in the website folder.

- **path**: src/website/src/pages/{system}/components/{component_name}
- **files**:
  - demo/index.js
  - docs/code.mdx
  - docs/api.mdx
  - docs/usage.md
  - index.md
  - {thumbnail_icon}.svg

## Utilities

There is a set of utilities which can be handy for ECL users for applying atomic styling changes gluing components together in actual implementations. Utilities are not meant to be used in component definitions.

By convention, utility classes have the following namespace: _ecl-u-\*_.

They follow more or less the same structure as components

### Vanilla

- **path**: src/implementations/vanilla/utilities/
- **base_name**: {utility_name}
- **package_name**: vanilla-utility-{utility_name}
- **files**:
  - {utility_name}.scss
  - package.json
  - README.md

### Twig (story file only)

- **path**: src/implementations/twig/utilities/
- **base_name**: {utility_name}
- **files**:
  - index.story.js

## Presets

Presets are collections of packages combined for a specific purpose. Do not develop or update components through the presets as they are only a manifest of exports for a selected list of elements.

- **path**: src/presets/
- **base_name**: {preset_name}

Further details are presented in a [dedicated presets section](./presets.md).

## Resources

Resources consist in all the images or icons provided by ECL.
Depending of the resource, it may be a set of svg files (potentially grouped in a sprite sheet), some icon or png files, ...

- **path**: src/resources/
- **base_name**: {resource_name}
