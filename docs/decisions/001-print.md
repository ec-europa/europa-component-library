# Handle `print` CSS rules in ECL

| Status        | accepted                                    |
| ------------- | ------------------------------------------- |
| **Proposed**  | 08/04/2019                                  |
| **Accepted**  | 29/04/2019                                  |
| **Driver**    | @emeryro                                    |
| **Approver**  | @yhuard                                     |
| **Consulted** | @yhuard, @degliwe, @kalinchernev, @planctus |
| **Informed**  |                                             |

## Decisions

- We generate `screen` and `print` styles in 2 separated files.
- We don't create any global reset for `print`.
- We apply `print` CSS per component, using the component's classes.
- We aim to keep the `print` CSS as small as possible.
- We create design tokens for `print` display.

```html
<head>
  ...
  <link
    rel="stylesheet"
    type="text/css"
    href="ecl-<preset>.css"
    media="screen"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="ecl-<preset>-print.css"
    media="print"
  />
</head>
```

```css
/* media: screen, ecl-<preset>.css */
.my-component {
  background-color: <yellow>;
  color: <grey>;
  display: flex;
  font: <font-m>;
  width: 100%;
}
```

```css
/* media: print, ecl-<preset>-print.css */
.my-component {
  color: black;
  font: <font-print-m>;
  width: 100%;
}
```

## Context

- There is currently no `print` stylesheets on ECL.
- `print` display is the same as `screen` display, i.e. the CSS is applied for both media.
- Users should be able to print ECL components — and pages built with ECL — if needed. `print` display should only contain relevant content with the minimum styling, in order to facilitate a better printing.

## Consequences

- A dedicated stylesheet has to be created. Each component (or at least most of them) will have a dedicated SCSS file or mixin used to generate the `print` styles.
- The existing ECL stylesheets should only be loaded for the `screen` media; the `print` stylesheets should only be loaded for the `print` media. The way the stylesheets are loaded on the ECL website needs to be updated.

## Alternatives Considered

### File structure

Should we group all the CSS rules in one file or split them into several files?

#### Option 1: one stylesheet for everything

It means that `screen` and `print` CSS rules would be in a single CSS file. The `print` CSS rules would be put in a `@media print` section. All the SCSS files are merged in the `ecl-<preset>.css` file.

Example:

```css
/* (my-component.scss) */
.my-component {
  <component-css-rules>
}

@media print {
  .my-component {
    <component-print-css-rules>
  }
}
```

```html
<link rel="stylesheet" type="text/css" href="ecl-<preset>.css" />
```

#### Option 2: two separated stylesheets

It means generating an extra CSS file for `print` only. Each component would have 2 SCSS files, or 2 SCSS mixin: one for `screen`, one for `print`. `screen` files are merged into the `ecl-<preset>.css` file; `print` files are merged into `ecl-<preset>-print.css`.

Example:

```css
/* (my-component.scss) */
.my-component {
  <component-css-rules>
}
```

```css
/* (my-component-print.scss) */
.my-component {
  <component-print-css-rules>
}
```

```html
<link rel="stylesheet" type="text/css" href="ecl-<preset>.css" media="screen" />
<link
  rel="stylesheet"
  type="text/css"
  href="ecl-<preset>-print.css"
  media="print"
/>
```

### CSS structure

Independently from the file structure, the goal here is to discuss how we write CSS rules for `print`.

#### Option 1: separate `screen` and `print`

It means having all the CSS rules related to `screen` display grouped together, and all the `print` rules grouped together somewhere else.

Example:

```css
/* media: screen */
.my-component {
  color: <grey>;
  display: flex;
  font: <font-m>;
  width: 100%;
}
```

```css
/* media: print */
.my-component {
  color: black;
  display: flex;
  font: <font-print-m>;
  width: 100%;
}
```

Pros:

- Clear separation of styles

Cons:

- Need to define the CSS rules for each component (or most of them), as there will be no styling applied by default on `print` media

#### Option 2: define common rules and override for `print`

It means having CSS rules without specific media target, and override what we need for `print`.

Example:

```css
/* media: all */
.my-component {
  color: <grey>;
  display: flex;
  font: <font-m>;
  width: 100%;
}
```

```css
/* media: print */
.my-component {
  color: black;
  font: <font-print-m>;
}
```

Pros:

- Less duplication: only write the rules needed for `print`

Cons:

- Need to override CSS rules

#### Option 3: separate all the styles

It means having first the common rules for `screen` and `print`, and then specific rules.

Example:

```css
/* media: all */
.my-component {
  display: flex;
  width: 100%;
}
```

```css
/* media: screen */
.my-component {
  color: <grey>;
  font: <font-m>;
}
```

```css
/* media: print */
.my-component {
  color: black;
  font: <font-print-m>;
}
```

Pros:

- Clear separation of styles
- No duplication

Cons:

- Slightly harder to read and maintain
- Need to update the existing CSS for all components

#### Option 4: start without CSS

It means that the component's CSS will be loaded for `screen` only. The `print` display would be based on the default display (i.e. without custom per-component CSS). We can then add per-component custom rules if needed. It also implies to have global CSS rules for `print`, based on the HTML markup.

Example:

```css
/* media: screen */
.my-component {
  color: <grey>;
  display: flex;
  font: <font-m>;
  width: 100%;
}
```

```css
/* media: print */
p {
  color: black;
  font: <font-print-m>;
}

.my-component {
  width: 100%;
}
```

## Resources

- https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/
- https://uxdesign.cc/i-totally-forgot-about-print-style-sheets-f1e6604cfd6
- https://csswizardry.com/2018/11/css-and-network-performance/
- https://codepen.io/tigt/post/async-css-without-javascript
