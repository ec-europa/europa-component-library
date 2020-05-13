# Core principles

ECL is based on a few core principles manifested in various elements of the project.

The following information is useful for anyone interested in the ECL fundamentals which have been leading to certain technical approaches and solutions with comparison to others.

- **Support corporate guidelines**: ECL is a design system and a style guide for EC and EU implementations, design guidelines and language patterns.
- **Be framework-agnostic**: ECL's raw source code is open-source and releases are distributed in such a way that the design system does not target any particular web framework regardless of its programming language.
- **Be framework-friendly**: ECL releases provide optimised vanilla source code which is contained within namespaces in order to allow for gradual/incremental integration with any web framework. ECL does not provide global styles which does not cause conflicts with existing applications' styles and scripts.
- **Be publicly-accessible**: releases are well-documented steps of incremental improvements and are published on several respositories at the same time in order to allow implementers to choose their preferred way of consuming ECL.
- **Modularity**: each element of the system is a self-contained package (module) which can be used outside the context of ECL.
- **Adaptability**: colours, spacing, font styles and sizes are variables managed in few formats which allow for uniform theming.
- **Scalability**: building blocks (components) of ECL are self-contained, independendly-tested and maintained pieces of code.
- **Semantic versioning**: each release follows the [semver conventions](https://semver.org/). Users of ECL decide when and whether to apply a given update and there are no automatic (silent) changes in applications based on ECL releases.
