# JavaScript

ECL provides an un-opinionated set of components' behaviors. In rare occasions, some components such as the date picker might use external libraries which integrate typical behaviors.

Components do not depend on jQuery and provide consistent APIs which can be managed centrally through the global `ECL` JavaScript module.

## How to use

First, you need to include the JavaScript file of `ecl-ec.js` or `ecl-eu.js` provided in the [latest release package](https://github.com/ec-europa/europa-component-library/releases). This file contains a JavaScript module called `ECL` which is an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) built by the [`ecl-builder` utility](https://www.npmjs.com/package/@ecl/builder).

This means that when you include the `ECL` library in your pages, you will have a global called `ECL` which contains the components' factory functions.

![ECL library in your browser's console](./assets/ECLjs.png)

## Instantiation

Each component contains `.init()` and `.destroy()` methods.

Recommended approach for instantiation is to use main `.autoInit()` method:

```js
document.addEventListener('DOMContentLoaded', function () {
  ECL.autoInit();
});
```

Alternatively components can be manually initialised this way:

```js
var elt = document.querySelector('yourSelector');
var accordion = new ECL.Accordion(elt);
accordion.init();
```

In both cases the instance will be available in the main ECL object, in the components Map, from here an existing instance can be retrieved to further update it, for instance running `destroy()` and `init()` again.

```js
var instance = ECL.components.get('yourElement');
instance.destroy();
instance.init();
```

For more details regarding ECL's autoInit method, follow the [package's README.md file](https://github.com/ec-europa/europa-component-library/blob/v4-dev/src/tools/dom-utils/autoinit/README.md).

## Settings

Components with JavaScript provide information for their APIs on their corresponding pages on ECL's website.

For an example, if you are looking `Accordion`'s settings, refer to https://ec.europa.eu/component-library/ec/components/accordion/api/
