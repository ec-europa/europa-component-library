# Europa family and ECL systems

ECL (Europa Component Library) consists of 2 separate sets of components:

* Components for EC (European Commission) web applications.
* Components for EU (European Union) web applications.

EU components are a result of "Europa family" project.

## Design concept

Europa needs a recognisable online presence. Recognisable, but not completely identical and not so visually similar to the EC web presence so that users do not get confused.

To create this coherence, ECL components are re-used, together with a range of colour palettes based on the Europa site.

The EU inter components (i.e. EU system/family of ECL) are to be integrated on the Europa Component Library with demos and documentation.

The colour palette will be the same as used on Europa.eu, but with enlarged set of colours to offer customisation and to meet the Web Content Accessibility Guidelines that ensure that content is accessible by everyone, regardless of disability or user device. To meet these standards, text and interactive elements should have a colour contrast ratio of at least WCAG 2 AA Compliant (18pt+).

In the end, users and stakeholders will benefit from this. By using the same set of components (tested for accessibility and usability) we will improve efficiency, support DGs in their online communication and increase the quality of the whole «Europa Web Family».

### High-level changes in ECL with regards to components' systems/families

Here's a brief list of changes done in the ECL's repository in order to accommodate the new EU-system components:

* The single [fractal configuration](https://fractal.build/guide/core-concepts/configuration-files) rendering a style guide for ECL compnents has been split into 2 different configuration files. All 2 sub-projects are managed under `./tools` folder.
* Existing ECL components are moved as-is from `./framework` folder in a sub-folder `./src/generic`.
* EC-system components are placed into `./src/systems/ec`.
* EU-system components are placed into `./src/systems/eu`.
* Visual regression testing tools are now automatically calculating test suits per-system.

In order to minimize breaking changes an to be as backwards compatible as possible after the changes mentioned above, the following decisions were made in terms of development in order to deliver a working version of a single style guide application hosting several systems/families of components:

* The majority of components in `ec` and `eu` are same.
* Each component residing in a system should have a system suffix throughout. (see **Naming** section for details)
* Components in `generic` should not contain test scripts, only re-usable code.

In short summary, the project has been split into per-system/per-family manner, each one being handled as a separate project under a single repository. Re-usable code should be hoisted into generic layer on top of systems/families.

### Important notes

Same component from 2 systems cannot be used together at the same time in a single page of an application.
In short: **Don't mix systems**

Example: EC-system logo and EU-system logo should never be used together in the same page.

### Developer notes

The fact that ECL is to accommodate 2 separate sets of style guides, for each system, means that each system-specific style guide needs to be a separate fractal instance. Being a separate fractal instance bring these benefits:

* Concrete modifications in one system-specific style guide visualization will not affect the other style guide.
* Build process is straight-forward, an [default build capabilities of fractal](https://fractal.build/guide/project-settings) are used.
* Work on components from a given system is independent from the work on components of the other system.

In short, this means that each system will have an independent set of:

* Project configurations for title, statuses, etc. - anything defined in `fractal.js`.
* Components' templates.
* `ecl-builder.config.js` configurations about how CSS, JS and other assets are managed.
* Each project lives and progresses independently from the other.

### Maintenance notes

The split of the project introduces several important rules which should be followed in order to keep ECL project repository maintainable for contributors, and also easy to integrate by consumers of ECL builds and resources.

#### Naming

Each system should be named in a distinguishable manner:

* Existing components are preserved as-is in `generic`. This is a temporary measure to minimize the amount of breaking changes and stay backwards compatible for sufficient amount of time to organize future developments with consumers of ECL.
* Twig templates should be prefixed with `@ecl/` in order to be consistently consumable by [Europa Component Library Twig loader](https://github.com/openeuropa/ecl-twig-loader).

In terms of release/dist assets, all should remain the same for compatibility reasons. Few examples would be:

* Keep the ECL JavaScript module in a file `ecl-{system}-preset-{preset_name}.js`.
* Keep the CSS bundle file `ecl-{system}-preset-{preset_name}.css`

This holds true for each system.
