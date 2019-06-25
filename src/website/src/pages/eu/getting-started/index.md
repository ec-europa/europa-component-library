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
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/eu-preset-website/styles/ecl-eu-preset-website.css"
      integrity="sha384-asoRnwYT9FveHUGuoUps23kDZrl3YE+dIs6B513hfvsV49eM7pMXwcTphUNXusvS sha512-7VNPz9Yx0QlAEuM5VSFFFdMiNMp/gzYGhetcFL/sN6pdOwD9NyPXSMr5VA5KYN6749QeuwNKGdsR/3LhqG+kEQ=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="screen"
    />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/eu-preset-website/styles/ecl-eu-preset-website-print.css"
      integrity="sha384-k1soyNmC9rbxhOR2D9oC5P/hC6hEyP07DWgeQDu3Dr/RV1nqCeNILQmc362LFVj1 sha512-OF9pNOdh0AedGQhx8OWXnQRPFs6C6sXSNBPk5hIX9Gu/7wd9ibxdJQcDL6jFtEZ/0uyH29mnswtumpdpl+fmTA=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/eu-preset-website/scripts/ecl-eu-preset-website.js"
      integrity="sha384-mW4dXT6h3roi2CDnY9gopHwJKYK8q2MrnkxPxTvfDIKwBckhXfmtG6OA/qEoObms sha512-VbuGwP+7APy/eSh69IcIdFxL6pkX8cHGc+mC3kggY642TtkhSd50zNE6ysCtXKliv4qvgfz0DAfUKhSvoISIPg=="
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
- Ensure that you are correctly loading the icons and the logo by using the right paths. You will usually find these assets under the `https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/eu-preset-website/images` folder.

Note: if you want to use another ECL preset or another version, you will find all the useful information on https://github.com/ec-europa/europa-component-library/releases.
