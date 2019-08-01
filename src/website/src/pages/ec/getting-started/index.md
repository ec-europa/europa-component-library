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
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/ec-preset-website/styles/ecl-ec-preset-website.css"
      integrity="sha256-PZ5+c4UP0uOBkXqLAQScFux6OT39C6+HcZLVTp8aFzg= sha384-9CL/eYE6ak5OVytCErP+3mafQsspQ6Er4UsWqR9DUeP8/wvH5DlwpsqcdyVHv2yu sha512-YEAIPoM2cLEMVbNhvAzoKQvEjfUOT0nS754YoQxAwMUFlnBIp7avhW/hSGpCkWnhHlnfSe2VpASjw6ve5DLsTA=="
      crossorigin="anonymous"
      media="screen"
    />
    <link
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
      integrity="sha256-llPEkY4oKLeDhxivfxufesB8jr8vdQyh07h9LT87VIU= sha384-1Z9xMO8YqgB+n2crzqEdRmXl5aQGeIAcNyr23yEj5darNuKnxwXPejmdpF1d6imv sha512-w1oWuPaGmxFLqv3wLYAkPXAMTdmvYDKdvCmdTVgv4rAwZx4q62wJzsazT84feQdzEqFW8FXBOgJg0l6lKW9sWg=="
      crossorigin="anonymous"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
      integrity="sha256-BBXmGxAdealzbrTp5MJFR5fciRheFYvU9EL8bM2XHts= sha384-EBdFW8aEUzE3lvFgt46Me+uQwOQpuJG/YsPIQU4f/9YxPhEPycn12COKOzQBzu26 sha512-PIJHSh4/sNI+ZiZEjxaVdHh/GHC/sEOCcaGVUFoxS8YDoD4hjrvB78QY5EIyG1/eA1xqRRSDMMvVttuuj2IlwQ=="
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
- Ensure that you are correctly loading the icons and the logo by using the right paths. You will usually find these assets under the `/images` folder of the preset you're using. We advise you to host the SVG sprites on the same domain as your website in order to avoid the `Unsafe attempt to load URL` kind of errors. If you still want to use the SVG sprite from the CDN, you can use [svg4everybody](https://github.com/jonathantneal/svg4everybody) and itinitialize it with: `svg4everybody({ polyfill: true });`.
- Before going live, make sure to embed the [Cookie Consent Kit](https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Cookie%20Consent%20Kit%20-%20Technical%20details).

Note: if you want to use another ECL preset or another version, you will find all the useful information on https://github.com/ec-europa/europa-component-library/releases.

## JavaScript

You can either initalise JS components manually or automatically. Here, we will focus on the automatic initialisation. If you want to know more about the manual initialisation, please check the component's documentation.

In order to automatically initialize a component, add `data-ecl-auto-init="[component class]"` to the root element of the component, `[component class]` being the name of the JS class related to the component.

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

Then, in the footer of the document (or whenever the document is ready), call `ECL.autoInit()`. For example:

```html
    ...
    <!-- paste the markup from the template here -->
    <script>
      ECL.autoInit();
    </script>
  </body>
</html>
```

And that's it!
