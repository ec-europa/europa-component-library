# Components conventions

It's important to know the concept of systems in ECL before developing components. If you are not familiar with the concept yet, read [systems' documentation](../ec-eu-systems.md) first.

Each component in ECL is an npm package. Each package represents an isolated set of source code and assets related to the given component: SCSS, JavaScript, etc. Packages interact with each other based on native npm means: `dependencies`, `devDependencies` and other relevant attributes in the `package.json` manifest.

The following sections touch upon the important aspects of maintaining a component package.

## Manifest file package.json

As mentioned earlier in the introduction, the `package.json` is the first and most important element to attend to when working with components' packages.

Please ensure the presence of the following attributes:

- `name`: name of the package. Follow naming conventions presented in the following section
- `style`: path to a CSS file. This is the main bundled stylesheet (dist/[name].css)
- `main`: path to a JavaScript file. Used by non ES6-aware tools (UMD) (dist/[name].js)
- `module`: path to a JavaScript file. Used by ES6-aware tools like webpack
- `dependencies`: list of other packages' code which is required for the given package

## Naming

- `@ecl/` namespace should be used consistently throughout all packages in order to be published correctly on [ECL npm organisation](https://www.npmjs.com/org/ecl).

Examples:

- `@ecl/menu` - Menu component

## SCSS

Please refer to the [dedicated conventions section regarding SCSS](./scss.md).

## JavaScript

Please refer to the [dedicated conventions section regarding JavaScript](./javascript.md).

## Storybook Stories

Each component should have a `.story.js` file following these conventions:

- Use named exports for each story variant
- Story names should be descriptive: `Default`, `WithIcon`, `Disabled`, etc.
- Include a `demo/data.js` file with sample data for stories
- Use Storybook controls/args for interactive demos

Example structure:

```javascript
import { Demo } from './demo/data.js';

export default {
  title: 'Components/Button',
};

export const Default = () => Demo;
export const Primary = () => /* ... */;
```

## Tests

Each component should have a `.test.js` file with:

- **Snapshot tests**: Ensure HTML output remains consistent
- **Accessibility tests**: Basic axe-core checks (automatically included)

Run tests with:

```bash
pnpm test:components -- button
```

Update snapshots after intentional changes:

```bash
pnpm test:components -- button -u
```

## Assets

If a component requires specific assets (images, icons, etc.):

- **Component-specific assets**: Place in a folder inside the component directory
- **Shared resources**: Use existing resource packages at `src/resources/`:
  - `src/resources/icons/` - Shared icon set
  - `src/resources/logo/` - EC/EU logos
  - `src/resources/favicons/` - Favicon sets

Avoid duplicating assets that already exist in resource packages.

## Documentation

Each component should have documentation on the ECL website at:
`src/website/src/pages/{system}/components/{component_name}/`

Required documentation files:

- `index.md` - Component metadata and frontmatter
- `docs/usage.md` - Usage guidelines
- `docs/code.mdx` - Code examples
- `docs/api.mdx` - JavaScript API (if component has JS)
- `docs/accessibility.md` - Accessibility notes
- `{icon}.svg` - Component thumbnail for the website

## Dependencies

When adding dependencies to `package.json`:

- **dependencies**: Packages directly used by the component (imported in SCSS or JS)
- **devDependencies**: Build tools, testing utilities, development-only packages

Example:

```json
{
  "dependencies": {
    "@ecl/icon": "^5.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0"
  }
}
```
