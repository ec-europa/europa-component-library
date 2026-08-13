# Developers - Getting started

**Recommended versions of required software:**

- Node.js = 22.12.0
- pnpm >= 10.9.0

We recommend you to use [Node Version Manager](https://github.com/creationix/nvm) and to run `nvm install` in the root followed by `nvm use` to get the right Node.js version, the `.nvmrc` file in the root of your project is selecting for you the latest available node lts release.

## Setup

```bash
pnpm install
```

This will install all the external dependencies and then links the local dependencies together after running the prepublish script if available.

## Develop

**EC system:**

```bash
pnpm start:ec
```

**EU system:**

```bash
pnpm start:eu
```

Both `start:(ec|eu)` commands will spawn instances of Storybook development environments. These environments watch for changes in components of preview pane as well as changes in SCSS/CSS and/or JavaScript assets part of "vanilla" packages, rebuilding the relevant resources and reloading the browser when done.

**Website:**

```bash
pnpm start:website
```

## Test

Run all component tests:

```bash
pnpm test:components
```

Test a specific component:

```bash
pnpm test:components -- button
```

Update test snapshots:

```bash
pnpm test:components -- -u
```

## Build

Build everything (presets, components, resources):

```bash
pnpm dist
```

Build only presets:

```bash
pnpm build:presets
```

Build a specific component:

```bash
pnpm --filter '@ecl/button' run dist
```

## Lint

Lint everything (JavaScript and SCSS):

```bash
pnpm lint
```

Lint only JavaScript:

```bash
pnpm lint:js
```

Lint only SCSS:

```bash
pnpm lint:css
```

Format code with Prettier:

```bash
pnpm prettier:write
```
