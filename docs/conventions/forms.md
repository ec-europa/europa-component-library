# Forms

This document present how forms are managed on ECL 2.x

## Form control

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

## Form group

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
