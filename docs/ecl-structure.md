# ECL structure

- [Components](#components)
- [Compositions](#compositions)
- [Utilities](#utilities)
- [Presets](#presets)
- [Resources](#resources)
- [Themes](#themes)
- [Mixins](#mixins)
- [Tools](#tools)
- [Playground](#playground)
- [Website](#website)

## Components

Components are the building blocks of ECL. Each component includes:

- **SCSS files**: Component styles (vanilla implementation)
- **JavaScript**: Interactive behavior (when needed)
- **Twig templates**: Markup generation (optional - HTML can be used directly)
- **Storybook stories**: Interactive demos
- **Tests**: Jest unit and snapshot tests
- **Documentation**: Usage guidelines and API reference

The npm package exports the component's SCSS and JavaScript as modules.

- **path**: src/components/
- **base_name**: {component_name}
- **package_name**: @ecl/{component_name}
- **files**:
  - {component_name}.scss - Component styles
  - {component_name}-print.scss - Print-specific styles (optional)
  - {component_name}.html.twig - Twig template
  - {component_name}.js - JavaScript behavior (optional)
  - {component_name}.story.js - Storybook stories
  - {component_name}.test.js - Jest tests
  - demo/data.js - Demo data for Storybook
  - package.json - Package manifest
  - README.md - Component documentation
  - \_\_snapshots\_\_/ - Jest snapshot files

Concerning dependencies in the `package.json` file, the following rule should be applied:

- packages directly used by the component (via import or require) should be put in `dependencies`
- all other packages should be put in `devDependencies`

### Component Documentation

Component documentation is displayed on the ECL website with 4 tabs:

- **path**: src/website/src/pages/{system}/components/{component_name}
- **files**:
  - index.md - Component metadata and frontmatter
  - docs/usage.md - Usage guidelines (tab 1)
  - docs/code.mdx - Code showcase with examples (tab 2)
  - docs/api.mdx - JavaScript API documentation (tab 3)
  - docs/accessibility.md - Accessibility notes (tab 4)
  - {thumbnail_icon}.svg - Component thumbnail

## Compositions

Compositions are examples of markup generated using ECL utilities and components to achieve specific layout or design goals:

- **path**: src/compositions/
- **examples**: file-upload-status, etrans
- **purpose**: Demonstrate how to combine ECL utilities and components for common patterns

## Utilities

Utility classes for applying atomic styling changes. Utilities are not meant to be used in component definitions.

By convention, utility classes have the namespace: `ecl-u-*`

- **path**: src/utilities/
- **base_name**: {utility_name}
- **package_name**: @ecl/utility-{utility_name}
- **files**:
  - {utility_name}.scss
  - package.json
  - README.md
- **examples**: spacing, typography, display, flex, border, shadow, etc.

## Presets

Presets are collections of packages combined for a specific purpose. Do not develop or update components through the presets as they are only a manifest of exports for a selected list of elements.

- **path**: src/presets/
- **base_name**: {preset_name}

Further details are presented in a [dedicated presets section](./presets.md).

## Resources

Resources include all static assets provided by ECL:

- **path**: src/resources/
- **base_name**: {resource_name}
- **types**:
  - logo/ - EC and EU logos
  - favicons/ - Favicon sets for EC and EU
  - favicons-ec/ - EC-specific favicons

## Themes

Theme definitions for EC and EU systems containing design tokens and variables:

- **path**: src/themes/
- **systems**: ec/, eu/, color-modes/
- **structure**:
  - theme.scss - Main theme export
  - \_index.scss - Theme map builder
  - \_variables.scss - Variable aggregation
  - \_custom-properties.scss - CSS custom properties
  - maps/ - Token categories (color, typography, spacing, etc.)
  - variables/ - Component-specific tokens

## Mixins

SCSS mixins shared across components:

- **path**: src/mixins/
- **examples**:
  - typography/ - Typography mixins and helpers
  - color/ - Color manipulation utilities

## Tools

Build tools and utilities:

- **path**: src/tools/
- **packages**:
  - builder/ - Custom ECL builder (Rollup + Sass + Babel)
  - dom-utils/ - DOM manipulation and autoInit utilities
  - event-manager/ - Event system for components
  - test-utils/ - Testing helpers for Jest

## Playground

Storybook development environments:

- **path**: src/playground/
- **systems**:
  - ec/ - EC system Storybook (port 9001)
  - eu/ - EU system Storybook (port 9002)
- **includes**: Custom Storybook addons for code display, notes, styles, etc.

## Website

Documentation website built with Vite + React + MDX:

- **path**: src/website/
- **structure**:
  - src/pages/ - Documentation content (MDX/MD files)
  - src/components/ - Website React components
  - public/ - Static assets and generated API docs
  - prebuild/ - Metadata generation scripts
