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
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <title>Page title</title>
    <link
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.0/ec-preset-website/styles/ecl-ec-preset-website.css"
      integrity="sha256-D76hr+ETQxRcQFuqMRDLhDziqoVkZtGrtpDkJGuuZrs= sha384-KNbbHQwTg/fpxcZNsj70gNGdbzJU26aL/A2APQRur4iWZGkSXyzIjCLUMvCBC/85 sha512-/BQBSyJqRqUuBEQMISO7dtFq7mg331BLG/DZ7XoyYSRqpgAD3n1s8lRYRb6mRdvMoSH4db/XEjghDUZ45hKPPg=="
      crossorigin="anonymous"
      media="screen"
    />
    <link
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
      integrity="sha256-ooOQ+NF+4jyFKTbs0W1QXsmJJnyIPn/kw0OBPoaIjXs= sha384-xYvg6+aj/NkdBHD8ofY0ZQpBi03Aq93ERmmq9uD1vLxy1Hp5ys8JMc2M3f3CtaiI sha512-3vNM8kDmUoHXeYxl4wvYefMlcYT07XZxOWBO19iSibjpaS52i1ZrBqV4oGpZT1hkzlZNvfwZecnsHx6hKHF+lg=="
      crossorigin="anonymous"
      media="print"
    />
  </head>
  <body>
    <!-- paste the markup from the template here -->
    <script
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
      integrity="sha256-5TAbV5Zc4vkWUldTK8bQupMClLaRM8hi7R/G2x2fdRE= sha384-TgYSZsc0xwB7IbQNY+hGCA7BjdPHDP58gnYNusfug9obUk1LzCodPa5Ce5T1nakJ sha512-rGdnHIlveDhhY+5j/OEb9MnGGr6R4QoHvj2xEWGmZM8O20ExTKg2YdtaN+NCcC5z6U/YTTlEkhwNQ744YaOR3Q=="
      crossorigin="anonymous"
    ></script>
    <script>
      ECL.autoInit();
    </script>
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
  <body>
    ...
    <script>
      ECL.autoInit();
    </script>
  </body>
</html>
```

And that's it!
