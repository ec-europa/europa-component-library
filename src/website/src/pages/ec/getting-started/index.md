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
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.5.0/ec-preset-website/styles/ecl-ec-preset-website.css"
      integrity="sha384-aI9LBhsEAemPEN95iSyIwVc+zGI+azCdpEG7gvdvRM5TkJAV5nConFVuedV2Ncz3 sha512-z3f+M/Z5MA5LKsHDf5e5BVIzzcvletYZPdK3eCtCdX8TYuSR0g/zG8oyvPHbcPrNN5JkHUThtPiG0ieUljpemA=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="screen"
    />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.5.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
      integrity="sha384-LkT/cZ72vMzvyOhK8EoULLJS9F2FBwPRrIStmkdG8P9hDVvf4aJseT3gSRFw+fhL sha512-DvcIM+EPDoLtDkXdkJ/BGL8sTDYE5xgVo7uIhXO7BdppDvRJ00VsGmeaIbRqOpG9PxXrxPK9o7m87+gsZSo4Vw=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.5.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
      integrity="sha384-GfEXf1eN4i7ypKaMPbZPuJZe8zh5Y1Kw/ca45MTEfEf+L4wgqSPEh5ODdtuFllu7 sha512-rvqAl+AzdaZdBsHFdpi8UX7rgYZynprRLuxJRV+ZPe0ixvAvlTtpFRnaSoyNFB3NIkD3ly5n0bb9Qxvv7uBKsQ=="
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
