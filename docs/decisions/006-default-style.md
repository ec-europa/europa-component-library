# Apply ECL 3 styling to default HTML tags

| Status        | proposed                                              |
| ------------- | ----------------------------------------------------- |
| **Proposed**  | 12/10/2020                                            |
| **Accepted**  | --/--/----                                            |
| **Driver**    | @emeryro                                              |
| **Approver**  |                                                       |
| **Consulted** | @kalinchernev, @planctus                              |
| **Informed**  | [@team](https://github.com/orgs/ec-europa/teams/inno) |

## Decision

[To be added]

## Context

- Styling of default HTML tags (without CSS class) has been a redundant request from some ECL users
- In ECL 2, package `ecl-editor` was provided as a workaround. It worked quite well, but ended up raising some CSS conflict issues like [FRONT-1697](https://citnet.tech.ec.europa.eu/CITnet/jira/browse/FRONT-1697)
- In ECL 3 we shoud come with a more robust way to handle this, without disturbing the recommanded way to use ECL (by adding CSS classes)
- We have no control over the final markup of pages. So we can't rely on any markup based selectors (like `>`, `+`, ...)

## Requirements

- This default styling should be made available as an optional CSS, or in an optional preset
- The provided solution should be able to handle every HTML tag without having to update the code for each new component/utility

## Consequences

[To be added]

## Alternatives Considered

### Option 1: style elements directly

**example:**

- h1 { ... }
- button { ... }

**main pros:**

- easy to override for component (very low specificity)

**main cons:**

- no easy way to prevent css leak to other elements on the page (Drupal admin menu, webtools widget, ...)

This option is not robust enough and would surely ends up with unwanted side effects on the page.

### Option 2: global namespace

**example:**

- .ecl h1 { ... }
- .ecl button { ... }

**main pros:**

- no css leak

**main cons:**

- all components will also have to use .ecl or the specificity would be too low

Having to use yet another namespace for the components would break the BEM structure and would impact all ECL users.

### Option 3: global namespace excluding ecl components

**example:**

- .ecl h1:not([class*="ecl-"]) { ... }
- .ecl button:not([class*="ecl-"]) { ... }

**main pros:**

- no css leak
- no override of components

**main pros:**

- will also target elements using utilities

The use of utilites remains a requirement for ECL 3, so having a solution working with them too is mandatory.

### Option 4: global namespace excluding ecl components, but including utilities

**example:**

- .ecl h1:not([class*="ecl-"]), .ecl h1:is([class*="ecl-u-"]) { ... }
- .ecl button:not([class*="ecl-"]), .ecl button:is([class*="ecl-u-"]) { ... }

**main pros:**

- no css leak
- no override of components
- still working with utilties

**main cons:**

- ?
