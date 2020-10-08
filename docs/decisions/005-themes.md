# Handle `themes` in ECL v3

| Status        | work in progress                                      |
| ------------- | ----------------------------------------------------- |
| **Proposed**  | 07/10/2020                                            |
| **Accepted**  | --/--/---                                             |
| **Driver**    | @kalinchernev                                         |
| **Approver**  |                                                       |
| **Consulted** | @emeryro                                              |
| **Informed**  | [@team](https://github.com/orgs/ec-europa/teams/inno) |

## Decisions

## Context

- ECL v2 is based on the concept of `systems` such as EC and EU
- ECL v3 needs to accommodate the concept of `themes`.
- The number of themes to accommodate is not set as of the time of the document writing, thus the magnitude could vary between 2 (previous systems) to 20+.

## Prerequisite notes

The term "code duplication" used in this document follows the [conventional definition](https://en.wikipedia.org/wiki/Duplicate_code). Duplicate code example in ECL v2 can be illustrated with source code for EC and EU which is completely identical and exists in several occassions. However, splitting a module file of hundreds of lines of code into multiple files containing portions of the same code is not considered code duplication but code separation or code splitting.

## Consequences

- There are continous internal discussions for the definition of a "theme" and whether it's overlapping with the concept of presets of ECL v2.
- The CSS source code needs an improved organization. It must scale with time and reduce complexity and code duplication.
- Release packages will require changes. The question on publishing "themes" is unclear.
- Storybook application(s) (ECL Playground website) will most probably also need changes accordingly. It is unclear whether a single instance of a Storybook application can accommodate the new themes architecture or there will be multiple instances.
- There is an strong uncertainty on how to consistently manage all other assets such as JavaScript, markdown files, icon and logo resources, templates, etc. Environment variables have been considered as a global contextual information but above-mentioned ambiguous topics are unclear at this stage.

## Scopes

The topics below are categorized with focus on separation of subjects rather than specific type of code.

### Package organization

Although the concept of "presets" was put under question during the analysis of v3, they are still used throughout this document in terms of code organization, not ECL release packages. This means that regardless of the usage of presets below, they may not be part of the resulting release of ECL v3.

#### Option 1: ECL v2 is preserved

This option has been discarded from the very beginning because it cannot achieve the goal without increased complexity and code duplication.

#### Option 2: "themes" is single package, single preset generates multiple themes output

This option has been discarded as too complex for the worth of the result. The complexity comes from SASS language limitations as dynamic imports are not supported. Every dynamic theme generation approach with SASS involves workarounds which were not acceptable for the team.

#### Option 3: "themes" is single package, multiple presets generate multiple themes output

- `@ecl/ecl-base` - common variables
- `@ecl/ecl-theme` - set of variables related to the themes (global parameters), one set per theme
- `@ecl/ecl-preset-{ec-core}` - base + theme ec core + components
- `@ecl/ecl-preset-{eu-core}` - base + theme eu core + components
- `@ecl/ecl-preset-{ec-standardised}` - base + theme ec standardised + components
- `@ecl/ecl-preset-{eu-standardised}` - base + theme eu standardised + components
- `@ecl/ecl-preset-{custom}` - template for theme generation

#### Option 4: "themes" are multiple packages, multiple presets generate multiple themes output

Same as option 3 with the following difference in theme-related packages which are multiple:

- `@ecl/ecl-theme-{ec-core}` - set of variables
- `@ecl/ecl-theme-{eu-core}` - set of variables
- `@ecl/ecl-theme-{ec-standardised}` - set of variables
- `@ecl/ecl-theme-{eu-standardised}` - set of variables

In this version, each target bundle is composed of a pair of a theme + preset.

### Resource organization

Resources are: logo, favicons, icons and other similar types of assets which are not SCSS or JavaScript and are used by consumers of ECL.

#### Option 1: separate package per system or per theme

Current organization of v2.

- `@ecl/ec-resources-logo`
- `@ecl/eu-resources-logo`

#### Option 2: single package

- `@ecl/resources`

#### Option 3: include resources in themes

This option does imply that each theme comes in a dedicates package (see ahead).
Resources useful to display a theme are stored directly in it.
To limit duplication, some global resources may still be put in dedicated packages.
