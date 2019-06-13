---
order: 1
title: Getting started
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
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.5.0/eu-preset-website/styles/ecl-eu-preset-website.css"
      integrity="sha384-5eG3fcyfTG1g/bNaAfmCoyJbtzvRSFHeAyvtFjjSjB/pvZkT1duaqnBdksooA8fv sha512-Mk+sBsaqgRUGY/8ds6bez3zXOK4LMPpXdG3XWZuSqQnJhGPEBiGSHsCJ69E0ENb803cXv79LBOv9yJJmz7og2g=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="screen"
    />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.5.0/eu-preset-website/styles/ecl-eu-preset-website-print.css"
      integrity="sha384-IFkjltDSeLi1OhtnagDiQxYJojWU19+0xKGMFzjNCZKsJHa5COLLI9vM1t5fbyps sha512-uvrzymDatIyROD61FysWgZuda3eWgOTnlaV0HTRuYnR5SYGv/XmSnH6NsSO8HOvwp2yPoC3JZ6bsN1aKhAkEzw=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.5.0/eu-preset-website/scripts/ecl-eu-preset-website.js"
      integrity="sha384-M+/Fkk3nDJVoNjI934pCctmDoenscImOD3VHiYUq21mWDaUHVW0+PgnDnbpGX7v0 sha512-Anb2qTNGQ/Cvz+8hlsKWNVx9SjrB1+47R6UQ9/Cm9tkUpn/FQNngehGXu+4Sn27LzOAzU2tWLgV823KDGUD76Q=="
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
