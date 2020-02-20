---
order: 1
title: 'FAQ'
section: 'Help'
---

## What is ECL?

ECL stands for "Europa Component Library".

The purpose of the ECL is to ensure, in a cost-effective manner, one coherent ‘Europa’ environment and reinforce visitors' confidence in the information provided.

The ECL ensures this coherence by providing a comprehensive, modular design system describing and showcasing the design elements and visual standards that make up all EU and EC branded websites and web information systems.

## ECL styleguide: what and where is it?

ECL is a design system combining several types of resources for various target groups. [ECL website](https://ec.europa.eu/component-library) is a styleguide with a wide target audience covering design, technical, and generally, non-technical users.

Users of ECL styleguide (website) are able to access both generic and concrete information guidelines on how to implement EC/EU design language.

## What is contained in ECL?

ECL contains design guidelines and source code to help users create consistent and accessible government web presence.

Elements within ECL website are accompanied by:

- documentation on intented usage of a given component, or a combination of components
- demonstration communicating intended visual representation as well as functional behavior
- HTML and CSS source code for implementation

## What are the core principles of ECL?

ECL is based on a few core principles encapsulated in its architecture and resulting release workflows:

- **Support EC/EU web rules and guidelines**: by being an etalon in terms of implementation and a gathering point of guidelines and design language patterns.
- **Be framework-agnostic**: the core outcome of ECL design system is vanilla CSS and JavaScript.
- **Be framework-friendly**: the vanilla CSS and JavaScript resources from ECL are organized within namespaces in order to allow for easy integration with any web framework, not causing conflicts with existing applications and websites.
- **Be publicly-accessible**: releases are well-documented steps of incremental improvements and are published on several places at the same time in order to allow implementers to choose their preferred way of consuming ECL.
- **Modularity**: each element of the system is a self-contained package (module) which can be used outside the context of ECL.
- **Adaptability**: each color use within the raw source code of ECL CSS resources is based on variables. This allow for straight-forward and uniform change of colors, sizes, font-size, etc.
- **Scalability**: building blocks (components) of ECL are self-contained, independendly-tested and maintained pieces of code.
- **Semantic versioning**: each release follows the [semver conventions](https://semver.org/). Users of ECL can optionally update/upgrade to newer versions whenever they are ready or in need to. Using a specific version means being sure there won't be suprising changes without opting for such.

## Where is the source code of ECL?

All the library's resources are contained within a publicly-accessible [Github repository](https://github.com/ec-europa/europa-component-library).

## How can I download ECL?

There are several ways to get ECL resources:

- [Github releases' page](https://github.com/ec-europa/europa-component-library/releases)
- [npm @ecl](https://www.npmjs.com/org/ecl) for ECL v2
- [Latest version CDN](https://github.com/ec-europa/europa-component-library#quick-start) for ECL v2
- [npm @ec-europa](https://www.npmjs.com/org/ec-europa) for ECL v1

## What is ECL preset? Should I use one?

A preset is a set of components from a specific system (EC or EU) bundled together for distribution. Each system has a set of ready-to-use presets:

- `[@ecl/ec-preset-dev](https://www.npmjs.com/package/@ecl/ec-preset-dev)`
- `[@ecl/ec-preset-editor](https://www.npmjs.com/package/@ecl/ec-preset-editor)`
- `[@ecl/ec-preset-website](https://www.npmjs.com/package/@ecl/ec-preset-website)`
- `[@ecl/ec-preset-full](https://www.npmjs.com/package/@ecl/ec-preset-full)`
- `[@ecl/ec-preset-legacy](https://www.npmjs.com/package/@ecl/ec-preset-legacy)`
- `[@ecl/ec-preset-legacy-website](https://www.npmjs.com/package/@ecl/ec-preset-legacy-website)`

To access EU system presets, please use the same links as above and change `ec-` to `eu-`.

When trying to decide which preset is the most appropriate for your project needs, have in mind the following:

- `preset-website` is the most popular start. This preset ships all components with normalize.css and some styles applied to the document body.
- `preset-full` is the same as `preset-website` but does not contain normalise.css and does not apply any global styles. If you are not starting the ECL implementation from scratch, but on an existing website, then this could be more appropriate preset.
- `preset-editor` provides styles for paragraphs, lists and other generic content-related HTML elements which cannot have the necessary ECL classes applied programatically. Most frequently used in CMS or frameworks which manage content through WYSIWYG editors rather than view templates.

In terms of how ECL-based websites follow up with the library's evolution when components get deprecated:

- `preset-legacy-website` is an easy upgrade path to websites which have started off `preset-website` and have experienced less frequent upgrades. If any component used in `preset-website` has been deprecated and has become unavailable to a higher version, the deprecated will remain available in `preset-website-legacy` for backwards compatibility.
- `preset-legacy` contains what has been deprecated in time.

Using presets is a highly-recommended approach of implementing ECL.

## Can I build/use a customised version of ECL?

Short answer: yes, you can.

Long answer: probably you should not. The main reason of using ECL in first place is to get all the benefits of ready-made CSS and JavaScript rules which comply with strict web governance rules.

Yet, there are cases when you need to both get the compliance, but also make small tweaks or overrides.

If this is the case, the heaviest approach would be to clone the above-mentioned Github repository and build the project manually. The process is heavy in terms of resource needs (the project has big history) and time to grasp project organization's sets of tools and dependencies.

There's a smaller step you can make in the process of building customized version of ECL. You can make use of [`@ecl/builder`](https://www.npmjs.com/package/@ecl/builder) CLI utility which can facilitate your bundling and optimisation tasks. With `@ecl/builder` many choices have already been made for you: choice of bundler, optimisation strategies, etc.

Please note that there is no support for customized versions of ECL and the practice is not recommended.

## What is the browser support coverage of ECL?

ECL is making use of [browserlist](https://github.com/browserslist/browserslist) [set of configurations](https://github.com/ec-europa/europa-component-library/blob/v2-dev/.browserslistrc). Each release might have a different coverage depending on changes in the CSS rules. Please refer to the [latest release](https://github.com/ec-europa/europa-component-library/releases) to get the most concrete figures.

Here's an example for an older version 2.23:

```
---- Browsers stats ----
Supported browsers: and_chr 78 chrome 78 chrome 77 chrome 76 chrome 75 chrome 74 chrome 73 chrome 72 chrome 71 chrome 70 chrome 69 chrome 68 chrome 67 chrome 66 chrome 65 chrome 64 chrome 63 chrome 62 chrome 49 edge 18 edge 17 edge 16 firefox 70 firefox 69 firefox 68 firefox 67 firefox 66 firefox 65 firefox 64 firefox 63 firefox 62 firefox 61 firefox 60 firefox 59 firefox 58 firefox 57 firefox 56 firefox 55 firefox 54 firefox 53 firefox 52 firefox 51 firefox 50 ie 11 ios_saf 13.0-13.1 ios_saf 12.2-12.4 opera 64 opera 63 opera 62 opera 60 opera 58 opera 57 opera 56 opera 55 opera 54 opera 53 opera 52 safari 13 safari 12.1 safari 12 safari 11.1 safari 11 safari 10.1 safari 10 samsung 10.1
These browsers account for 93.29015157876893% of all users in Europe
------------------------
```

## Is ECL accessible?

ECL components and website have been developed with accessibility in mind on many levels. Here is a non-exhaustive list of items taken into considerations.

### HTML

- it's structured with as-simple-as-possible architecture
- it's semantic using native elements as much as possible
- content has been described with all possible attributes (dates, abbreviations, etc.)
- text labels are also as descriptive as possible
- tables include additional attributes for accessibility
- SVG images are used instead of font icons
- ARIA roles have been utilized at all possible cases

### CSS

- focus states are styled distinctively
- visibility rules using `visibility: hidden` and `display: none` have been used with careful considerations of actual implications
- color contrast have been taken into account and continuously tested in components visualisation testing

### JavaScript

- it's used as an enhancement rather than content management approach
- keyboard navigation has been ensured both automatically and manually

### Automations

Although with lesser value in comparison to our conscient efforts to achieve maximum accessibility, these are a few tools used in our development tool-chain to automate accessibility checks of our source code:

- `axe-core` is used in component testing interfaces to ensure WCAG rules coverage
- `eslint-plugin-jsx-a11y` is used to validate ECL website's source code

Components and combinations of components (compositions) provide demonstration of HTML representation combined with CSS rules (classes) and sometimes JavaScript behaviors. These aim to make implementation of existing best practices as simple and straight-forward as possible.

With the provision of such guidelines ECL hopes to facilitate its consumers and implementers and empower them to develop and maintain accessible websites and applications.
