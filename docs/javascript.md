---
title: JavaScript
label: JavaScript
---

Europa Component Library (ECL) provides a maximally un-opinionated set of
components' behaviors. In rare occasions, some components such as the date
picker might use external libraries which integrate typical behaviors.
Components are jQuery-free and provide consistent APIs.

## How to use

First, you need to include the JavaScript file of `ECL.js` provided in the
[latest release package](https://github.com/ec-europa/europa-component-library/releases).
This file contains a JavaScript module called `ECL` which is an
[IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) built by the
[`ecl-builder` utility](https://www.npmjs.com/package/@ecl/builder).

This means that when you include the `ECL` library in your pages, you will have
a namespaced global called `ECL` which contains the components' factory
functions.

![ECL library in your browser's console]({{ path '/assets/ECLjs.png' }})

### Instantiation

For a component to work on your pages, instantiate similarly to other popular
JavaScript libraries. For example, here's how to use the dialog component:

```js
document.addEventListener('DOMContentLoaded', function() {
  ECL.dialogs();
});
```

When you invoke the factory without any parameters, the dialog library will
automatically create an overlay for the background and assume that you have a
dialog window element on the page with an id `ecl-dialog` which will be
displayed on click of a trigger element with `data-ecl-dialog` data attribute.

In other occasions, when you want to apply the dialog effect on existing
elements which have different attributes, you can use the component as:

```js
document.addEventListener('DOMContentLoaded', function() {
  ECL.dialogs({
    dialogWindowId: 'ecl-carousel',
  });
});
```

In this example, the dialog will again create the overlay for the background
automatically, but this time it will pop up a carousel gallery as the body of
the dialog when open.

### Components' settings

At the moment, components' JavaScript behaviors are documented in the code of
the components themselves. When you want to see a demo of a component's
instantiation and settings you can also view the "Context" tab in demos provided
in the library.
