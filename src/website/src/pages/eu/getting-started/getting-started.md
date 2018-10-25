The Europa Component Library is a design system for the European Commission and European Union websites.

We provides design guidelines and code to help users create consistent and accessible government web presence.

All library elements are accompanied by:

- documentation explaining what the component is intended for and how it should be used
- a visual demonstration of the component
- HTML/CSS code for implementation

New components are continuously being added to the library. The team is also constantly updating visual guidelines for designers in the Guidelines section, where we provide detailed information about design principles and resources.


## How to use templates
1. Get the framework
- Go to https://github.com/ec-europa/europa-component-library/releases
- Pick the latest release
- In the "useful links" section, download the @ecl/eu-full package tarball
- uncompress the package
2. Create a template page
- in the uncompressed package go to /dist
- create a "index.html" file
```html
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1" name="viewport">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<link href="favicon.ico?v=1" rel="shortcut icon">
<link type="text/css" rel="stylesheet" href="styles/ecl-eu-preset-full.css" media="all">
<script type="text/javascript" defer src="scripts/ecl-eu-preset-full.js"></script>
</head>
<body>
<!-- paste the markup from the template here -->
</body>
</html>
```
- ensure that you are using proper path to icons, logo etc... (usually /images/logo /images/icons...)
