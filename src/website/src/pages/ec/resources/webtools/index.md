---
order: 3
title: Webtools
---

## Webtools embeddable components

The following corporate components are available for sites in europa.eu and its sub domains:

1.  charts based on the HighCharts library
2.  maps based on Leaflet
3.  share buttons
4.  Twitter feeds
5.  language coverage service

The main principles of Webtools components are:

- straightforward embed code
- standard labels available in 24 languages.
- responsive design
- free of consent-requiring cookies
- features tailored to corporate needs

### Unified Embed Code

Webtools components are embeddable with Unified Embed Code (UEC). It is a specific JSON format that simplifies the configuration and embedding of components.
The UEC is rendered by the Webtools smartloader. A reference to `//europa.eu/webtools/load.js` is the sole dependency for the components to work.

```html
<!DOCTYPE ...>
<html>
  <head>
    ...
    <!-- To be IE compliant -->
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
    ...
    <script src="//europa.eu/webtools/load.js" type="text/javascript" />
  </head>
  <body>
    <script type="application/json">
      {
          "service" : "[SERVICE_NAME]", // define the component that you want to use
          [PARAMETERS] // define the component's specific parameters for customizing.
        }
    </script>
  </body>
</html>
```

### Interactive charts (HighCharts)

Most interactive charts can be accomplished by using the wizard (see below). In case the business you need to introduce into the chart goes beyond the configuration possibilities of the wizard, the chart can be driven by business-specific javascript.

- wizard: https://europa.eu/webtools/mgmt/wizard/components/charts/
- examples: https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Charts+-+Technical+details#Charts-Technicaldetails-Moreexamples
- technical documentation: https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Charts+-+Technical+details
- styling rules: https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Corporate+colour+palettes+for+charts+and+maps

### All-purpose interactive maps based on Leaflet

The Basic Map Wizard enables you to build a map that contains such features as:

- a wide choice of corporately approved background maps.
- feeding the map with geographical information in geojson and KML format.
- search-as-you-type location services.
- routing
- choropleth maps in which countries and/or regions are coloured in proportion to certain values such as population density or per-capita income.

In case the business you need to introduce into the map goes beyond the configuration possibilities of the wizard, the map can be driven by business-specific javascript.

- wizard: https://europa.eu/webtools/mgmt/wizard/ui.php?uec=bmap#
- examples: https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/MAP+-+Proof+of+concepts
- technical documentation: https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Map+-+Technical+details
- styling rules: https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Corporate+colour+palettes+for+charts+and+maps

### Contact maps

These are a specific version of the all-purpose maps. They display a map with a marker positioned by the coordinates of a geocoded physical address on the page.

- technical documentation: https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Contact+map

### Story maps

Create a map that tells a story. The story is built by sequential scenes. The map will automatically pan and zoom in to the area that is explained in each scene.

- wizard: https://europa.eu/webtools/mgmt/wizard/ui.php?uec=smap

### Share buttons

Embed social bookmarking and networking buttons aka Share Buttons helps webmasters share their content with a wide range of social networks. The service also provides additional features such as print, email or send by sms.

- documentation: https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Social+bookmarking+and+networking
- wizard: https://europa.eu/webtools/mgmt/wizard/ui.php?uec=sbkm

### Twitter feeds

Embed a series of specific tweets, free of cookies. Choose between tweets from a certain user, list, search result, a collection or embed a single tweet.

- wizard: http://europa.eu/webtools/mgmt/wizard/ui.php?uec=smk
- documentation: https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Social+Media+Kit+-+Technical+details
