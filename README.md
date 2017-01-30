# WIP

Component library based on [Fractal](http://fractal.build/) using lerna and other fancy tools.

Requirements:
-   Node.js >= 6
-   lerna 2.0.0-beta.34
-   yarn

## Setup

```
yarn
npm run bootstrap
npm install -g selenium-standalone
selenium-standalone install
```

## Develop

```
yarn start
```

## Test (visual regression)

You'll need 3 terminal windows:

- Start the server:

```
yarn start
```

- Start selenium:

```
selenium-standalone start
```

- Run the tests:

```
npm run gemini:test
```

If you want to update the reference screeshots:

```
npm run gemini:update
```

## Test (accessibility)

Build the project and run accessibility testing:

```
npm run dist
npm run test:a11y
```
