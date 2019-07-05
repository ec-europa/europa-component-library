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
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.8.0/ec-preset-website/styles/ecl-ec-preset-website.css"
      integrity="sha256-z6dOAjOJqqSZ+PIO37K+3Ayllx3xXxCqyR/8E9uRDPw= sha384-jo7jGBnWqwlT+VWjtSizGP6fGUspsK9tw7J4EipSCa2B+E3TUn7JG/DmWOnau+5/ sha512-hCpCgFHGoE4IOf4Kp40t1EwIdTQL5gMnCKP8+6fmD7Fd7woiJdbnyY9AMiSG7x/cDidTsbf4CzY/IQw8WbL0QQ=="
      crossorigin="anonymous"
      media="screen"
    />
    <link
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.8.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
      integrity="sha256-Zh83Gt9NTD0ubu/zxUlc7Bcfnt768p3wMKlLdsEZCEI= sha384-la5bewKH2QjykLDreUZ0lds6kItLcnybpiKJV3YYglDIyW2J9ZFE8tlZgeoOmYdz sha512-JpJ5jkM1mfpxnpt8ZBi1EoXI1J8yjuYwhs/K7vvcbRQb5AdAOMUG40CKWCANjkz4fwPF7ZbYB1vGW95sbwI7ZQ=="
      crossorigin="anonymous"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.8.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
      integrity="sha256-Y6lSKSg78QaMCJ0YzUZhq+/iq6siGuElj9nwjTvPASw= sha384-haktrNf1owx3JqtntwYppg4ji9P3fdNZYySnPhmBvjiHShUjWPC85APAPVnaMZlL sha512-SXyovSU/88gayWj0adbCZYrxfKO5Nua+5vRW4VMJA2RNGHKb+RDodYF5HV6dl2its4BsF2rADQLR7bcPZrv3Vg=="
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
- Ensure that you are correctly loading the icons and the logo by using the right paths. You will usually find these assets under the `https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.8.0/ec-preset-website/images` folder.
- Before going live, make sure to embed the [Cookie Consent Kit](https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Cookie%20Consent%20Kit%20-%20Technical%20details).

Note: if you want to use another ECL preset or another version, you will find all the useful information on https://github.com/ec-europa/europa-component-library/releases.
