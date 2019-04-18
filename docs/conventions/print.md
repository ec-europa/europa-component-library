# Handle print CSS rules in ECL

| Status            | proposed                                                       |
| ----------------- | -------------------------------------------------------------- |
| **Proposed**      | 08/04/2019                                                     |
| **Accepted**      |                                                                |
| **Driver**        | @emeryro                                                       |
| **Approver**      |                                                                |
| **Consulted**     | @yhuard, @degliwe, @kalinchernev, @planctus                    |
| **Informed**      |                                                                |

## Decision

- Print CSS and screen CSS are kept into separated files
    ```html
    <head>
      ...
      <link rel="stylesheet" type="text/css" href="ecl-<preset>.css"  media="screen">
      <link rel="stylesheet" type="text/css" href="ecl-<preset>-print.css" media="print">
    </head>
    ```

- No global reset CSS for print

- Print CSS is applied per component, using component's classes. Only needed rules are reported, to keep print CSS as small as possible.
    ```css
    (screen css)
    .my-component {
      background-color: <yellow>;
      color: <grey>;
      display: flex;
      font: <font-m>;
      width: 100%;
    }
    ```
    ```css
    (print css)
    .my-component {
      color: black;
      font: <font-print-m>;
      width: 100%;
    }
    ```
    
- Design tokens are added for print display (typography, spacing, ...)

## Context

- There is currently no print CSS on ECL
- Print display is the same as screen display (the CSS is applied for both media)

Users should be able to print ECL components (and so pages build with ECL) if needed. Print display should only content relevant content and minimum styling, to allow better printing.

## Consequences

- A dedicated CSS has to be created. Each component (or at least most of them) will have a dedicated scss file or mixin used to generate a print CSS.
- Current ECL CSS should be loaded only for screen media; print CSS should be loaded only for print media. So the way CSS are called on ECL website should be updated.

## Alternatives Considered

### File structure

Mainly anwser this question: should we group all CSS in one file or split it in several files?

**Option 1: One CSS for everything**

It means that screen and print CSS rules would be in a single CSS file.
Print CSS rules would be put in a `@media print` section.
All SCSS files are merged in a `ecl-<preset>.css` file.

Example:

```css
(my-component.scss)
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
<link rel="stylesheet" type="text/css" href="ecl-<preset>.css">
```

**Option 2: Two separated css**

It means adding an extra CSS file for print only
Each component would have 2 SCSS files, or 2 SCSS mixin (one for print one for screen)
Screen files are merged into a `ecl-<preset>.css` file; print files are merged into `ecl-<preset>-print.css`.

Example:

```css
(my-component.scss)
.my-component {
  <component-css-rules>
}
```

```
(my-component-print.scss)
.my-component {
  <component-print-css-rules>
}
```

```html
<link rel="stylesheet" type="text/css" href="ecl-<preset>.css" media="screen">
<link rel="stylesheet" type="text/css" href="ecl-<preset>-print.css" media="print">
```

### CSS structure

Independently to file structure, the goal here is to discuss how we write CSS rules for print.

**Option 1: Separate screen and print**

It means having all css rules related to screen display grouped together, and all print rules grouped together somewhere else.

Example:

```css
(media screen)
.my-component {
  color: <grey>;
  display: flex;
  font: <font-m>;
  width: 100%;
}

(media print)
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

- Have to add css rules for each component (or most of them), as there will be no styling applied by default on print media

**Option 2: Define common rules and override for print**

It means having css rules without specific media target (the way it is now), and override what we need for print.

Example:

```css
(no specific media, or media all)
.my-component {
  color: <grey>;
  display: flex;
  font: <font-m>;
  width: 100%;
}

(media print)
.my-component {
  color: black;
  font: <font-print-m>;
}
```

Pros:

- Less duplication (only write needed rules for print)

Cons:

- Have to override css rules

**Option 3: Separate all styles**

It means having first common rules for screen and print, then specific rules.

Example:

```css
(no specific media, or media all)
.my-component {
  display: flex;
  width: 100%;
}

(media screen)
.my-component {
  color: <grey>;
  font: <font-m>;
}

(media print)
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
- Need to update existing css for all components

**Option 4: Start without CSS**

It means that component's CSS will be loaded for screen only. Print would be based on default dipslay (without CSS), with some custom rules if needed.
It also implies to have global CSS rules for print, based on html markup.

Example:

```css
(media screen)
.my-component {
  color: <grey>;
  display: flex;
  font: <font-m>;
  width: 100%;
}

(media print - global)
p {
  color: black;
  font: <font-print-m>;
}

(media print - specific)
.my-component {
  width: 100%;
}
```

## Resources

- https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/
- https://uxdesign.cc/i-totally-forgot-about-print-style-sheets-f1e6604cfd6
- https://csswizardry.com/2018/11/css-and-network-performance/
- https://codepen.io/tigt/post/async-css-without-javascript
