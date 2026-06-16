---
title: Usage
order: 1
---
Use the Radio component where the choices presented are mutually exclusive. Selecting one option deselects any previously chosen value. The Radio component is appropriate when the available answers are known in advance, the options are relatively few, and only a single answer is required. Its persistent visibility (all options remain on screen at once) helps users compare choices before committing, supporting more confident, considered decision-making.

### **Do's**

- make the label itself a click target, so users can select an option by clicking either the radio control or its associated text
- group related radio buttons and order them logically (e.g. by age range, frequency, or natural sequence)
- clearly indicate whether the group is optional or mandatory
- include helper text placed visibly before the input, not only in error messages after the submission
- write specific, actionable error messages so users can clearly understand what is expected

### **Don'ts**

- do not present radio buttons outside a logical group - ungrouped options lose the mutual exclusivity that is the component's core function
- do not nest content or sub-options beneath individual radio buttons - keep all options at the same hierarchy level to preserve clarity and accessibility

### **When to use**

- use when mutually exclusive selections with a small option set exist (i.e. 4 groups of up to around ten options where only one answer is valid)
- use in settings and preference toggles when users need to choose one active state from a discrete set (e.g. either binary such as on/off, yes/no, or a tier selection) as radio buttons make the constraint explicit and visible
- use in search filters with single-select constraints - where applying more than one value in a category would be contradictory, radio buttons correctly signal that the selection is exclusive (e.g. Local vs Global search)

### **When not to use**

- do not use if the option list is long, instead opt for [Select](https://ec.europa.eu/component-library/ec/components/forms/select/code/) to keep the form manageable
- do not use if users can choose more than one option, instead opt for [Checkbox](https://ec.europa.eu/component-library/ec/components/forms/checkbox/code/) in the case of short lists, or [Multi-select](https://ec.europa.eu/component-library/ec/components/forms/select/code/) for longer ones
