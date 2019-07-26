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
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/eu-preset-website/styles/ecl-eu-preset-website.css"
      integrity="sha256-KOUBuqhZx3VR2HdfSsoKrabjocV96MIMxwsnC7EmKsM= sha384-7CTyLAVWbN3adl9swStpvFgItMlD2NOtbueJFahb4eur0c+wlkwQOb1RXBzrbujg sha512-4V033MXLuUeQQ8AftpYKD2hbkwQx8stLZjQKYAqvEb8zF9c3fZod+rTwjwy+9FrLnzNrM2n64VyAyIztVypWew=="
      crossorigin="anonymous"
      media="screen"
    />
    <link
      rel="stylesheet"
      href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/eu-preset-website/styles/ecl-eu-preset-website-print.css"
      integrity="sha256-395P14HYpW//jaIgZWz8nU8ap7Z7/HsW6KYDBOZf9j0= sha384-G50p+WMx8tFroBMs6Q1J0SblhQ72Asg+DhmeD3ZqHxaNBRBvL16aNi/eeMDfgj2w sha512-tXVVnre4rBoMQIo9tumADgsAm4WLocypHoEg19EYumhirmwEjLmcW8n817SzhMv8fYZLLLiV/DPtA4Z0XA5wfQ=="
      crossorigin="anonymous"
      media="print"
    />
    <script
      type="text/javascript"
      src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.9.0/eu-preset-website/scripts/ecl-eu-preset-website.js"
      integrity="sha256-Uw2EYX8wgEV/Ip0C8UvmIGYWyBY7oDJCYn9lR6wI5ro= sha384-krMMP0Kf2rSf47NOSAUzPEfa/G9YI7zF3ZEwULkvuxzSZ+NYOpzA3mh3KPFzc26B sha512-dpmNZFCYQrQZBEwyO/A5Uwy2mW6wVHkd+onZrQ9qq85/P2sCTu0l3l0ngYqIWVvT6vTiOnHwZkQ3sHiTPKMWbw=="
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
