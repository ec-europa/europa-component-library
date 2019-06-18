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
<html>
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.6.0/eu-preset-website/styles/ecl-eu-preset-website.css"
      integrity="sha384-LwZ0F8AkRfbdw4MAu0gqeGY8XknCIlBUInZZiP6uIlRN/I7iQWLlrSK32rfl5R3V sha512-moJhR9A85mxhlbzXHdoUmxzr9IazYy12Zc4X0SrrGzEQvk5Tn0qYZh9vdWPex1qC/cUA32jcliD/Ihr5fbL97Q=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="screen"
    />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.6.0/eu-preset-website/styles/ecl-eu-preset-website-print.css"
      integrity="sha384-aK8OZOKZ4xHsYm0z5rPNhtBIwnIuuW3O0yhWh7boVAhhmycuX1jpu0gF49Dt7xoq sha512-zEVlLU+POJgnN/gozhWXHlpcGrGy0Io/zIgbNjm4QVnA49c4x2rjOeJZYoQ4WgGRDrgIgr26YFqedjmIJP5nnw=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.6.0/eu-preset-website/scripts/ecl-eu-preset-website.js"
      integrity="sha384-0fdAQL88s+qtuw8jyJUHRSIaz13ylEyGwWCWgFbWniCnq3vPLChwomD/aV7N5Iv+ sha512-WKNLH4Sl3tnsBQXR1/MSl6YBGb9SLleKN+4m2FA8Oa3dkYiDZLkNItgJLi8Sv2v1goOCD9zhSGzy5Wga2SHDDg=="
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
- Ensure that you are correctly loading the icons and the logo by using the right paths. You will usually find these assets under the `https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.5.0/eu-preset-website/images` folder.

Note: if you want to use another ECL preset or another version, you will find all the useful information on https://github.com/ec-europa/europa-component-library/releases.
