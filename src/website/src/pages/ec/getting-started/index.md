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
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.4.0/ec-preset-website/styles/ecl-ec-preset-website.css"
      integrity="sha384-nb57pSNZ8SdoCJfR0kd7cRDU/q/H1gKBBZj9iR6096td39nw0BWHEcsb4m/ogSYz sha512-khqgwYc2DeT8mj7cxAiG7/SRMk5Zx+cW+tYrSuWCbCg5DeUEO1b6YJ1fiGQsx7Q7w7Uq9sOyUwx0L4lyRA1J7w=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="screen"
    />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.4.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
      integrity="sha384-t8XVOKmAEnpPmAhZebBvPkaixFgGLH8vfA3MQJwdb0di3dRAEnxRqoaeBkXeKcV5 sha512-aVqrEANxMFU8kViGrMZW3ALvERbe5BNg/nFp7ANPDfZKkEdBzE6F1DBTKy8w/kE7OFdO24SDTvu/UX+VY8E1Hg=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.4.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
      integrity="sha384-5CuwKi5h/sBH+kpOJEzbNk/rB/hwv8myHtDL2XPm4Nx70NjMw0WlyInUh1mkRBcm sha512-V+e05PY3JSOMNSBSjtRH655Pq2QI806KzkIhaMLVTMs6ya920IZCRT7lxCmXMJNZK1lUeNcdH6ExRMF8EICCjQ=="
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
- Ensure that you are correctly loading the icons and the logo by using the right paths. You will usually find these assets under the `https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.4.0/ec-preset-website/images` folder.

Note: if you want to use another ECL preset or another version, you will find all the useful information on https://github.com/ec-europa/europa-component-library/releases.
