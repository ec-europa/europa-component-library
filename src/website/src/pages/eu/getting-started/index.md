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
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.4.0/eu-preset-website/styles/ecl-eu-preset-website.css"
      integrity="sha384-5zLAMjEkFlOHIx4+RvoX6z5DnYMviB0e7SJ2ysyCRoDHp+31JiC49uneWIkvP+xy sha512-7nWfVraZ2g5uiqlvaam1UJAul/gwldt5CW3gVusnfmWuVzf/4stX0BtTuj2IeYEJytns5NwuCOGTGQdIXBzz3g=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="screen"
    />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.4.0/eu-preset-website/styles/ecl-eu-preset-website-print.css"
      integrity="sha384-9G6H0T2iDaC1GZQID9JXw+Iey0f8oedLEOChnYVSQiG11JD7PCWKgemSRup+emOC sha512-RFB0KGsxcB10Fq3+jkDqMyBtCF+FSgQJf7xXQMuVy2+dRoSwyKbDbBN+aLdPMiOUcdscEJtNMMjVJ66R+s3IYQ=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.4.0/eu-preset-website/scripts/ecl-eu-preset-website.js"
      integrity="sha384-68ApS7gwaSDa4QPvdJUquUwJQWSTs6AqEI9K0SO0PygvHI8TY6TqiXjOsxlHDwCl sha512-+YRGTwXMX/7Z/leJkulGQawIq4k3iyCImN9E0x2jwAXxBrDNjw3da5SmwS0IV8ewc3D7bmu2P6h1pooJlcJghA=="
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
- Ensure that you are correctly loading the icons and the logo by using the right paths. You will usually find these assets under the `https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.4.0/eu-preset-website/images` folder.

Note: if you want to use another ECL preset or another version, you will find all the useful information on https://github.com/ec-europa/europa-component-library/releases.
