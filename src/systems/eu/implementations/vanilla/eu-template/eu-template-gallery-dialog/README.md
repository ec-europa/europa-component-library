# Gallery dialog

## Notes on technical implementation

In order to make this template work, you will need to combine:

* Template of `@ecl/ec-component-carousel`
* Javascript behaviors of `@ecl/ec-component-dialog`

As long as you have HTML representation matching the output of carousel
component on the page (which is treated as a gallery component) you just need to
integrate this markup with the Javascript behaviors of the dialog framework by:

* including ECL.js object
* instantiating both the carousel and dialog libraries

```js
document.addEventListener('DOMContentLoaded', function() {
  ECL.dialogs({
    dialogWindowId: 'ecl-carousel',
  });
  ECL.carousels();
});
```

For further configuration options of both carousel and dialog components, you
can read their corresponding JavaScript files, which expose clear APIs.
