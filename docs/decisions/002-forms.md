# Handle forms in ECL 2

| Status        | proposed                          |
| ------------- | --------------------------------- |
| **Proposed**  | 10/04/2019                        |
| **Accepted**  |                                   |
| **Driver**    | @emeryro                          |
| **Approver**  |                                   |
| **Consulted** | @kalinchernev, @planctus, @yhuard |
| **Informed**  |                                   |

## Decision

(Describe the decision that you propose, ideally in a single sentence)

## Context

(Provide all the context needed to understand the decision and why it was needed. This should be at least a paragraph but can be as long as necessary.)

## Consequences

(Describe the pros and cons of the proposed decision. Think about the people in the **Informed** line of the DACI table above. How will this decision affect them?)

## Alternatives Considered

(Describe the research you did and the alternatives you considered when making this decision. In some cases it may be useful to include subsections for each of the alternatives.)

### Form control

Form controls are elementary form elements (text input, checkbox, select, etc.) plus some wrapper to display label, help message and error message.

They all have the same common properties (see below), plus some extra properties depending on the control (isChecked, placeholder, etc.)

Properties:

- label (mandatory, can be visually hidden)
- input (mandatory)
- helper text (optional)
- error message (optional)
- extra class (optional)

Structure:

```
<div class="ecl-{control} + extra-class">
  <label class="ecl-{control}__label">Label</label>
  <input />
  <p class="ecl-{control}__help">Help text</p>
  <p class="ecl-{control}__invalid">Error message</p>
</div>
```

Depending on the control we may need an additional container (select for instance), but that won't change the global structure.

### Form group

Form groups are used to group several form control together. They all have the same properties.

Form groups can be nested if needed, and are optional (a form may only contain form controls)

Properties:

- form controls and/or other form groups (mandatory)
- legend (optional)
- helper text (optional)
- error message (optional)
- extra class (optional)

Structure:

```
<fieldset class="ecl-form-group + extra-class">
  <legend class="ecl-form-group__legend">Legend</legend>
  <p class="ecl-form-group__help">Help text</p>
  <p class="ecl-form-group__invalid">Error message</p>
  <formControl class="ecl-form-group__control" />
  <formControl class="ecl-form-group__control" />
   ...
</fieldset >
```

Note: `<fieldset>` may cause issues for styling, so we may have to use `<div>` and aria-attributes instead

## Resources

- [Discussion on this topic](https://github.com/ec-europa/europa-component-library/issues/1057)
