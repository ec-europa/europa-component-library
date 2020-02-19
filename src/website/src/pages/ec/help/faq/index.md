---
order: 1
title: 'FAQ'
section: 'Help'
---

## What is ECL

ECL stands for "Europa Component Library".

The purpose of the ECL is to ensure, in a cost-effective manner, one coherent ‘Europa’ environment and reinforce visitors' confidence in the information provided.

The ECL ensures this coherence by providing a comprehensive, modular design system describing and showcasing the design elements and visual standards that make up all EU and EC branded websites and web information systems.

## ECL styleguide: what and where

ECL is a design system combining several types of resources for various target groups. [ECL website](https://ec.europa.eu/component-library) is a styleguide with a wide target audience covering design, technical, and generally, non-technical users.

Users of ECL styleguide (website) are able to access both generic and concrete information guidelines on how to implement EC/EU design language.

## What is contained in ECL

ECL contains design guidelines and source code to help users create consistent and accessible government web presence.

Elements within ECL website are accompanied by:

- documentation on intented usage of a given component, or a combination of components
- demonstration communicating intended visual representation as well as functional behavior
- HTML and CSS source code for implementation

## What are the core principles of ECL

ECL is based on a few core principles encapsulated in its architecture and resulting release workflows:

- **Support EC/EU web rules and guidelines**: by being an etalon in terms of implementation and a gathering point of guidelines and design language patterns.
- **Be framework-agnostic**: the core outcome of ECL design system is vanilla CSS and JavaScript.
- **Be framework-friendly**: the vanilla CSS and JavaScript resources from ECL are organized within namespaces in order to allow for easy integration with any web framework, not causing conflicts with existing applications and websites.
- **Be publicly-accessible**: releases are well-documented steps of incremental improvements and are published on several places at the same time in order to allow implementers to choose their preferred way of consuming ECL.
- **Modularity**: each element of the system is a self-contained package (module) which can be used outside the context of ECL.
- **Adaptability**: each color use within the raw source code of ECL CSS resources is based on variables. This allow for straight-forward and uniform change of colors, sizes, font-size, etc.
- **Scalability**: building blocks (components) of ECL are self-contained, independendly-tested and maintained pieces of code.

## Where is the source code of ECL

All the library's resources are contained within a publicly-accessible [Github repository](https://github.com/ec-europa/europa-component-library).

## How can I download ECL

There are several ways to get ECL resources:

- [Github releases' page](https://github.com/ec-europa/europa-component-library/releases)
- [npm @ecl](https://www.npmjs.com/org/ecl) for ECL v2
- [Latest version CDN](https://github.com/ec-europa/europa-component-library#quick-start) for ECL v2
- [npm @ec-europa](https://www.npmjs.com/org/ec-europa) for ECL v1
