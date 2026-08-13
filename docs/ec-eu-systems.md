# Europa family and ECL systems

**Please be aware that the work around EC/EU has been ongoing for years and is still in progress. Read the following documentation pages with the clear understanding that this information can be deprecated or irrelevant. The information has been presented with the best intention to share existing knowledge which has been a moving target for a very long time.**

ECL (Europa Component Library) consists of 2 separate sets of components:

- Components for EC (European Commission) web applications.
- Components for EU (European Union) web applications.

EU components are a result of "Europa family" project.

## Design concept

Europa needs a recognisable online presence. Recognisable, but not completely identical and not so visually similar to the EC web presence so that users do not get confused.

To create this coherence, ECL components are re-used, together with a range of colour palettes based on the Europa site.

The EU inter components (i.e. EU system/family of ECL) are to be integrated on the Europa Component Library with demos and documentation.

The colour palette will be the same as used on Europa.eu, but with enlarged set of colours to offer customisation and to meet the Web Content Accessibility Guidelines that ensure that content is accessible by everyone, regardless of disability or user device. To meet these standards, text and interactive elements should have a colour contrast ratio of at least WCAG 2 AA Compliant (18pt+).

In the end, users and stakeholders will benefit from this. By using the same set of components (tested for accessibility and usability) we will improve efficiency, support DGs in their online communication and increase the quality of the whole «Europa Web Family».

## Key Differences Between EC and EU Systems

### Visual & Branding

**EC System:**

- European Commission branding and color scheme
- EC flag logo
- Supports color modes (light and dark themes)

**EU System:**

- European Union branding and color scheme
- EU flag logo (circle of stars)
- Light mode only (no dark mode support)

### Technical Differences

**EC System specific features:**

- Color mode CSS file: `ecl-ec-color-modes.css`
- Additional color mode variables and theme switching capabilities
- EC-specific component variants

**EU System specific features:**

- Simpler color system without mode switching
- EU-specific branding elements
- Shared component base with EC but different theming

### Package Names

- EC preset: `@ecl/preset-ec`
- EU preset: `@ecl/preset-eu`
- Component packages are shared: `@ecl/button`, `@ecl/accordion`, etc.
- Styling differs based on which preset/theme is loaded

## When to Use Which System

### Use EC System when:

- Building European Commission websites and applications
- Official EC communications and portals
- Projects explicitly commissioned by the European Commission

### Use EU System when:

- Building European Union institutional websites
- Europa.eu family sites
- Projects that represent the broader EU institutional family

**Important**: If you're unsure which system to use, consult with your project stakeholders or the ECL team before starting development.

### Final notes

As the topic is a moving target and details can change greatly in time, the information shared above is succinct. Please synchronise with team members regarding latest developments before taking on system-specific tasks.

In terms of development rules, there is 1 rule which should be followed on 100% and does not have a changing requirement: same component from 2 systems cannot be used together at the same time in a single page of an application. **Don't mix systems**

Example: EC-system logo and EU-system logo should never be used together in the same page.
