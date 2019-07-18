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
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.8.0/eu-preset-website/styles/ecl-eu-preset-website.css"
      integrity="sha256-vN+9VIZ4CORThSio1SaABLCLVnMrnpbpZ377T+mLryQ= sha384-oRXRz1rbQ+Oqs5eHy+uCjJTwQdObWCn8qzJ5jnlbB8+CKullQFn4xBdujMymDgbV sha512-8crfdn00IoN/38FIR8gsswLwtV3mYEmQ6OMUwteLUa/DWF2c6hHMI6f2L0N6gRDhK3tkC98jmvrujF16TZI4tg=="
      crossorigin="anonymous"
      media="screen"
    />
    <link
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.8.0/eu-preset-website/styles/ecl-eu-preset-website-print.css"
      integrity="sha256-IXqDCSwEwLf3yZQM24fGy45HWeXCrrww5g0c+GVpw00= sha384-6FLMaZv+8aly0KbEssOlP+Dke7U8L+wGO6NXqBserED+YhnqsK18LXJDn/LCnHP8 sha512-6Mb0YivV0moG2DK07dUgcVbGTt3GdhYmdzgPQ4pMnrs1w4dOzdKu7eusmXzyNBv7WxvoDIRWBv36dQXXqPmDMQ=="
      crossorigin="anonymous"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.8.0/eu-preset-website/scripts/ecl-eu-preset-website.js"
      integrity="sha256-cA8NDpprWjEdbTb2g18p2FJFWaAK65q10a7viq4M/r4= sha384-s17b7rOaXbcJGP6TPlTu7Q7nM5olWCeCL2aJj7jkBEYFMawnDQU8+hQrUGArTk1e sha512-R6vFpHHEBcNvOrTP+l3LcmIfRRK4mQKXJch20rUdLZicqj5kqbG8q1qPYD5AEFTjU9ZTHh5n67frCri3QnVDBw=="
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

Note: if you want to use another ECL preset or another version, you will find all the useful information on https://github.com/ec-europa/europa-component-library/releases.
