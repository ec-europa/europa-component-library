# JavaScript

ECL provides an un-opinionated set of components' behaviors. In rare occasions, some components such as the date picker might use external libraries which integrate typical behaviors.

Components do not depend on jQuery and provide consistent APIs which can be managed centrally through the global `ECL` JavaScript module.

## How to use

There are two export of ECL JavaScript: one in common js, the other in ESM.

In both cases those are meant to be used by the browser with a script tag (the only difference is that you have to use type="module" for the ESM script). Once loaded, an `ECL` object will be available in the window.

We recommend the use of the ESM one which is also the one we use in storybook.

## Version in use

You can get the ECL version you are using running `ECL.version` in the console of your devtools.

## Instantiation

Each component contains `.init()` and `.destroy()` methods.

### Auto-initialization (Recommended)

The simplest approach is to use the `.autoInit()` method which automatically initializes all components on the page:

### Manual initialization

You can also manually initialize individual components:

```js
const element = document.querySelector('[data-ecl-accordion]');
const accordion = new ECL.Accordion(element);
accordion.init();
```

If the component is manually initialized, make sure to also clean up component instances when they're no longer needed:

```javascript
instance.destroy();
instance.init(); // Re-initialize if needed
```

For more details regarding ECL's autoInit method, follow the [package's README.md file](https://github.com/ec-europa/europa-component-library/blob/v5-dev/src/tools/dom-utils/autoinit/README.md).

## Component Options

Most components accept options during initialization:

```javascript
const modal = new ECL.Modal(element, {
  // Custom options
  dismissOnClickOutside: true,
  dismissOnEscape: true,
});
modal.init();
```

## Event Handling

Components emit custom events that you can listen to:

```javascript
const accordion = new ECL.Accordion(element);
accordion.init();

// Listen to events
accordion.on('onOpen', (event) => {
  console.log('Accordion opened', event);
});

accordion.on('onClose', (event) => {
  console.log('Accordion closed', event);
});
```

## Component API Reference

Each component has detailed API documentation on ECL's website. For example:

- Accordion: https://ec.europa.eu/component-library/ec/components/accordion/api/
- Modal: https://ec.europa.eu/component-library/ec/components/modal/api/

The API documentation includes:

- Available options
- Methods
- Events
- Usage examples
