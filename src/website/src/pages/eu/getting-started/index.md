---
order: 1
title: Getting started
---

import { Link } from '@ecl/website-components';

The Europa Component Library is a design system for the European Commission and websites managed by the Commission.

We provide design guidelines and code to help users create consistent and accessible government web presence.

All library elements are accompanied by:

- documentation explaining what the component is intended for and how it should be used
- a visual demonstration of the component
- HTML/CSS code for implementation

New components are continuously being added to the library. The team is also constantly updating visual guidelines for designers in the Guidelines section, where we provide detailed information about design principles and resources.

## How to use ECL

Here is an example of default HTML file using ECL:

```html
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8" />
    <title>Page title</title>
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <script>
      var cl = document.querySelector('html').classList;
      cl.remove('no-js');
      cl.add('has-js');
    </script>
    <link
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/[ECL_VERSION]/ec/styles/ecl-ec.css"
      integrity="[sri hash of ecl-ec.css]"
      crossorigin="anonymous"
      media="screen"
    />
    <link
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/[ECL_VERSION]/ec/styles/ecl-ec-print.css"
      integrity="[sri hash of ecl-ec-print.css]"
      crossorigin="anonymous"
      media="print"
    />
  </head>
  <body>

    <!-- content of your page here -->

    <script
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/[ECL_VERSION]/ec/scripts/ecl-ec.js"
      integrity="[sri hash of ecl-ec.js]"
      crossorigin="anonymous"
    ></script>
    <script>
      ECL.autoInit();
    </script>
  </body>
</html>
```
### moment.js

As explained in a more technical language in the [datepicker api page](/eu/components/forms/datepicker/api/) ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) which requires [moment.js](https://momentjs.com/) and this library is not bundled by ECL.
Therefore **moment.js needs to be loaded or bundled by the application or website using ECL**, depending on the needs.

### Update file path and name

- If you wish to use ECL EC instead of ECL EU, you can find information here <Link to="/ec/getting-started/" label="Getting started EC" />
- Replace <code>[ECL_VERSION]</code> by <code>v{process.env.ECL_VERSION}</code> to use the latest version
- For more security, use the SRI hashes corresponding to the files. They all can be found in the [release page](https://github.com/ec-europa/europa-component-library/releases), in a json file, but here are the most common ones:

<details>
  <summary>SRI hashes (click to expand)</summary>
  
  <ul>
    <li>for `ecl-eu.css`: <code>{process.env.ECL_EU_CSS}</code></li>
    <li>for `ecl-eu-print.css`: <code>{process.env.ECL_EU_PRINT_CSS}</code></li>
    <li> for `ecl-eu.js`: <code>{process.env.ECL_EU_JS}</code></li>
  </ul>
</details>

### Optional styles

There are several optional CSS files, located in `eu/styles/optional`, which can be included in your site on not, depending on the needs.  
**These optional CSS have to be called before the main ECL CSS**

- `ecl-reset.css`: contains some css reset rules, mostly based on normalize.css, with a few custom additions
- `ecl-eu-default.css`: apply ECL styling to some default HTML tags (links, buttons, table, ...). Note that this file is meant to be used in specific cases, the recommanded way to use ECL is still to add corresponding classes to HTML elements

<details>
  <summary>SRI hashes for optional files (click to expand)</summary>
  
  <ul>
    <li>for `ecl-reset.css`: <code>{process.env.ECL_RESET_CSS}</code></li>
    <li>for `ecl-eu-default.css`: <code>{process.env.ECL_EU_DEFAULT_CSS}</code></li>
  </ul>
</details>

### Additional information

- to integrate ECL components, copy the markup from the component you want and paste it in the `<body>`. This markup can be found on this website and on <Link to="/playground/eu/" label="the playground" />.
TWIG templates are also [provided on npm](https://www.npmjs.com/org/ecl) for easy integration.
- make sure that you are correctly loading the icons and the logo by using the right paths. You will usually find these assets under the `/images` folder of the preset you're using. We advise you to host the SVG sprites on the same domain as your website in order to avoid the `Unsafe attempt to load URL` kind of errors. If you still want to use the SVG sprite from the CDN, you can use [svg4everybody](https://github.com/jonathantneal/svg4everybody) and itinitialize it with: `svg4everybody({ polyfill: true });`.
- before going live, make sure to embed the [Cookie Consent Kit](https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Cookie%20Consent%20Kit%20-%20Technical%20details).
- all useful information concerning releases content can be found on the [release page](https://github.com/ec-europa/europa-component-library/releases)

## JavaScript

You can either initalise JS components manually or automatically. Here, we will focus on the automatic initialisation. If you want to know more about the manual initialisation, please check the component's documentation.

In order to automatically initialize a component, add `data-ecl-auto-init="[component class]"` to the root element of the component, `[component class]` being the name of the JS class related to the component.

For example, if you want to auto initialize a `Message`:

```html
<div
  role="alert"
  class="ecl-message ecl-message--info"
  data-ecl-message
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

## Guidelines

Additional ready-to-use resources:

- <Link to="/eu/guidelines/typography/" label="Typography" />
- <Link to="/eu/guidelines/colours/" label="Colours" />
- <Link to="/eu/guidelines/images/" label="Images" />
- <Link to="/eu/guidelines/iconography/" label="Iconography" />
- <Link to="/eu/guidelines/spacing/" label="Spacing" />
