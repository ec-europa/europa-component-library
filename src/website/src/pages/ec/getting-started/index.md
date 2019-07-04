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
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/ec-preset-website/styles/ecl-ec-preset-website.css"
      integrity="sha384-deafm1hslSavkYYA5FoWAGd5sXh47k0B1VQNJOUS/WzJ+xCiBD4cNmbZRdrhhJVn sha512-EF8gmTRyjZLZwAQizvmK8N7uII71zEdg2GPwBjmuVr3d4X43DnE1pQrVaGXCBJrK+e+8avSeJPnUhQ+N7Wshww=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="screen"
    />
    <link
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
      integrity="sha384-8tyQSQUuq+q6YBi7P1/Jx9YNU2esO+BIFIwofrZWdiuwoPmrUGG5BYWBKplLMMzA sha512-VIG2WMS4zT57BfLzp67M8bPnVqBwNX/DbhOLSSDRCpdfWkS1pi/JGmqWEo3uLh7qhxqkeFK3G/TihKmjF/uAng=="
      crossorigin="anonymous"
      rel="stylesheet"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
      integrity="sha384-d5+U7QftT2DojjbCbjMiAaZDpBFdMz+qKLInNkXLImJkB79od5L8zurPyRh8glol sha512-CN4Ry8RPUKuvKaw4lk+NPIQhMOHSalT2Upz7jGeCo+tukwq+oNfX8HDvpOLRmNQsmsSibJgfo58ETmnDoe1XYQ=="
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
- Ensure that you are correctly loading the icons and the logo by using the right paths. You will usually find these assets under the `https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.7.0/ec-preset-website/images` folder.
- Before going live, make sure to embed the [Cookie Consent Kit](https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Cookie%20Consent%20Kit%20-%20Technical%20details).

Note: if you want to use another ECL preset or another version, you will find all the useful information on https://github.com/ec-europa/europa-component-library/releases.
