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

- Create an `index.html` file as follows:

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.6.0/ec-preset-website/styles/ecl-ec-preset-website.css"
      integrity="sha384-TCdeftr8JZJ6U2OPrVasWqqxr1+IHRhDWfyNz5NdVsWsDBIsrrilyEeaqvwIzURE sha512-MneBXv2Moi1N3NTUjCL4Jdc7VLjv3Eg6f6Se9Qh9J05IEn5xGquULy/S9Jg9ttdwwvCtu80rxilnyF0u8yLfAQ=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="screen"
    />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.6.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
      integrity="sha384-0wiHCN5l3vO+CQnypH72KzRfbTbVoQ/k2aIcjDOiSINeWL8hpMt7yP1pb60tWqqq sha512-oTclNxvBg8RF5HqewlSHFeAzBRyTt5Kp/iSY3azY3RTHnSyKl3rNONk6yAtsP0WlS1xaBoc+p1GzFgl8AAwJEA=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.6.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
      integrity="sha384-Jw0ict9Muw7wg/taf3NS0tR4pITlMDZ8w0PiHvO5LgjNEUMLZ4LImwP11Pe6hI3X sha512-v7qN+34OMSCHLw/X3dNSZc84axtsfq6jNHsANHUbD/0mMQJaWgla3sdWCE5wG9K2BlgrKi0YV5anQuzCEPsKsA=="
      crossorigin="anonymous"
      defer
    ></script>
  </head>
  <body>
    <!-- paste the markup from the template here -->
  </body>
</html>
```

- Copy the markup from the template you want and paste it in the `<body>`.
- Ensure that you are correctly loading the icons and the logo by using the right paths. You will usually find these assets under the `https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.5.0/ec-preset-website/images` folder.

Note: if you want to use another ECL preset or another version, you will find all the useful information on https://github.com/ec-europa/europa-component-library/releases.
