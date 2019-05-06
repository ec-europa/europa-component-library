---
order: 1
title: Getting started
---

The Europa Component Library is a design system for the European Commission and websites managed by the Commission.

We provide design guidelines and code to help users create consistent and accessible government web presence.

All library elements are accompanied by:

- documentation explaining what the component is intended for and how it should be used
- a visual demonstration of the component
- HTML/CSS code for implementation

New components are continuously being added to the library. The team is also constantly updating visual guidelines for designers in the Guidelines section, where we provide detailed information about design principles and resources.

## How to use templates

### 1. Download the framework

- Go to https://github.com/ec-europa/europa-component-library/releases.
- Pick the latest v2 release.
- In the "useful links" section, download the `@ecl/ec-preset-full` package tarball.
- Uncompress the package.

### 2. Create a template page

- In the uncompressed package, go to `/dist`.
- Create an `index.html` file as follows:

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <link
      type="text/css"
      rel="stylesheet"
      href="styles/ecl-ec-preset-full.css"
      media="all"
    />
    <script
      type="text/javascript"
      defer
      src="scripts/ecl-ec-preset-full.js"
    ></script>
  </head>
  <body>
    <!-- paste the markup from the template here -->
  </body>
</html>
```

- Copy the markup from the template you want and paste it in the `<body>`.
- Ensure that you are using proper path to icons, logo (usually `/images/logo`, `/images/icons`).
