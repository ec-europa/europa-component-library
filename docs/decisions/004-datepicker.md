# Datepicker component

| Status        | proposed                                             |
| ------------- | ---------------------------------------------------- |
| **Proposed**  | 25/11/2019                                           |
| **Accepted**  | (the date the proposal was accepted/rejected)        |
| **Driver**    | @emeryro                                             |
| **Approver**  | (who will make the decision and merge the PR)        |
| **Consulted** | (who you worked with on this decision)               |
| **Informed**  | (who should be informed if the proposal is accepted) |

## Decision

(Describe the decision that you propose, ideally in a single sentence)

## Context

A datepicker component has been requested for ECL2.  
This component was available on ECL1 but has not been ported yet.  
We have to find a good way to provide such feature.

The component has to:

- respect the styling provided [in the specifications](https://webgate.ec.europa.eu/CITnet/confluence/x/fqvBN)
- be translatable
- offer a no-js behavior (still to be defined)
- propose different date format
- be as accessible as possible

## Consequences

(Describe the pros and cons of the proposed decision. Think about the people in the **Informed** line of the DACI table above. How will this decision affect them?)

## Alternatives Considered

### External library with custom style

#### Pikaday

On ECL1 we used [Pikaday](https://github.com/Pikaday/Pikaday) to handle datepicker.  
We could rely on it again, as it seems to follow most of the requirements.

**Pros**

- quick to implement
- similar to ECL1
- code maintained by the library owner

**Cons**

- less control over the styling and behavior. Some specs may not be applied fully
- not updated for more than a year
- extra dependency for ECL2

### Home made script and style

We could write a script from sctrach to handle datepicker.

**Pros**

- full control over the behavior, styling and accessibility

**Cons**

- will require far more time to implement
- code has to be maintained on our side
