---
order: 1
title: Getting started
hidden: true
---

The Europa Component Library is a design system for the European Commission and European Union websites.

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
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.0/eu-preset-website/styles/ecl-eu-preset-website.css"
      integrity="sha256-13elwqCQRB0s4DrLqOMy28R4p7TEcU1kWzHGawR28yk= sha384-AVbyaUuApejq1h+UaE4dSMT1/TMDzSZGhq9IJwZrgTlknLOwVE9lsPi7JrGkfBg/ sha512-sceAKzPXQkf3kTVlNZSldlpgaFysawA15v499xGA8hjEfDvlytFYj2xEx8PwNPV1sTzj4fFSkNpKOMHqGqy7kw=="
      crossorigin="anonymous"
      media="screen"
    />
    <link
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.0/eu-preset-website/styles/ecl-eu-preset-website-print.css"
      integrity="sha256-UKSjv+TySHRpiyecjd6GcYATrFp44K5P8e/LQtZ2gkg= sha384-bUKrFDLIvI6cPbX3v3iQ79WdUBqnVwYK5h/N0OEEOqNXR8V6pcfHzN9AKlSxDKIh sha512-VsP5rNFDx251Rw/EDgcWEQgFmFaN5Tuw5AcRkRGG+ZjLDi4GVysPNoAvl9vewXjqrePdibSfwpBI5sBORQRoXg=="
      crossorigin="anonymous"
      media="print"
    />
  </head>
  <body>
    <!-- paste the markup from the template here -->
    <script
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.0/eu-preset-website/scripts/ecl-eu-preset-website.js"
      integrity="sha256-9syjclxSnLOwp9XRRRw5Y17j41uzadoZETIHYinfY1U= sha384-rWLu8e218Ca2sGXdm4587/faS0QmBG7rPbbqvoJOfBm1cgwbrFdMEs8/WFzteFhW sha512-rlvdB+pwz3/Fca11VDMiT8ueQ6jNaeqqf7IRszcYEnl5mnCSjfjYbULHO3Q/0S6kDpjnQyLjcmaySTnEYZonVA=="
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
