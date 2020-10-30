# ECL Auto init

In order to automatically initialize a component, add `data-ecl-auto-init="[component class]"` to the root element of the component.

For example, if you want to auto initialize a `Message`:

```html
<div
  role="alert"
  class="ecl-message ecl-message--info"
  data-ecl-message="true"
  data-ecl-auto-init="Message"
>
  ... Message component ...
</div>
```

Then, in the footer of the document (or whenever the document is ready), call:

```js
ECL.autoInit();
```

`ECL.autoInit()` returns an object containing:

- list of initialized components
- update method
- destroy method

```html
<div
  role="alert"
  class="ecl-message ecl-message--info"
  data-ecl-message="true"
  data-ecl-auto-init="Message"
  data-ecl-auto-initialized="true"
>
  ... Message component ...
</div>
```

Once `ECL.autoInit()` is called, you can access the component instance via an `ECLMessage` property on that element.

```js
document.querySelector('[data-ecl-message]').ECLMessage.handleClickOnClose();
```

## Migration

Please note that the first iteration of `ECL.autoInit()` was returning only a list of initialized components and you had to call `destroy()` method of each component individually.

```jsx
 class MyComponent extends React.Component {
   constructor(props) {
     super(props);
-    this.components = null;
+    this.autoinit = null;
   }

   componentDidMount() {
     if (!window.ECL) return;
-    this.components = window.ECL.autoInit();
+    this.autoinit = window.ECL.autoInit();
   }

   componentDidUpdate() {
     if (!window.ECL) return;
-
-    if (this.components) {
-      this.components.forEach(c => c.destroy());
-    }
-
-    this.components = window.ECL.autoInit();
+    this.autoinit.update();
   }

   componentWillUnmount() {
     if (!window.ECL) return;
-
-    if (this.components) {
-      this.components.forEach(c => c.destroy());
-    }
+    this.autoinit.destroy();
   }

   render() {}
```
