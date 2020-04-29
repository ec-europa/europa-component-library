# JavaScript

ECL provides an un-opinionated set of components' behaviors. In rare occasions, some components such as the date picker might use external libraries which integrate typical behaviors.

Components do not depend on jQuery and provide consistent APIs which can be managed centrally through the global `ECL` JavaScript module.

## How to use

First, you need to include the JavaScript file of `ECL.js` provided in the [latest release package](https://github.com/ec-europa/europa-component-library/releases). This file contains a JavaScript module called `ECL` which is an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) built by the [`ecl-builder` utility](https://www.npmjs.com/package/@ecl/builder).

This means that when you include the `ECL` library in your pages, you will have a global called `ECL` which contains the components' factory functions.

![ECL library in your browser's console](./assets/ECLjs.png)

## Instantiation

Each component contains `.init()` and `.destroy()` methods.

Recommended approach for instantiation is to use main `.autoInit()` method:

```js
document.addEventListener('DOMContentLoaded', function() {
  ECL.autoInit();
});
```

For more details regarding ECL's autoInit method, follow the [package's README.md file](https://github.com/ec-europa/europa-component-library/blob/v2-dev/src/systems/ec/implementations/vanilla/packages/ec-auto-init/README.md).

## Settings

Components with JavaScript provide information for their APIs on their corresponding pages on ECL's website.

For an example, if you are looking `Accordion`'s settings, refer to https://ec.europa.eu/component-library/ec/components/accordion/api/
