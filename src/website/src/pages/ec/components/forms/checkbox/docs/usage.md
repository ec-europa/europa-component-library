---
title: Usage
order: 1
---
The Checkbox enables users to make independent, non-exclusive selections from a predefined set of options. Unlike the [Radio](https://ec.europa.eu/component-library/ec/components/forms/radio/code/) component that enforces a single selection, the Checkbox is designed for situations where multiple answers may simultaneously be valid or correct.

It is particularly well suited to forms where the available options are known in advance and the user's choices do not conflict with one another. Its binary states (checked or unchecked) also make it appropriate for toggling individual settings or confirming consent.

### **Do's**

- always make sure each checkbox has a short, distinct and clear label
- use checkbox labels as click targets (clicking the label selects that option)
- arrange them vertically, in a single column layout
- group related fields and order logically
- indicate whether the input group is optional or mandatory
- write specific and clear error messages, so users understand how to properly address and recover from the error

### **Don'ts**

- do not add them without grouping first, in a logical order
- do not limit the number of checkboxes that can be ticked at any time
- do not nest content or sub-options beneath a checkbox; keep all options at the same hierarchy level - to avoid confusion and/or accessibility issues

### **When to use**

- use for multi-select forms where predefined options require a clear, scannable input pattern, and users may need to select more than one option
- use for search and filtering interfaces where users refine results by applying multiple, non-exclusive criteria
- use for opt-in or confirmation fields, where a standalone checkbox is appropriate for confirming agreement, consent, or acknowledgement (e.g. accepting terms of service or opting into communications)

### **When not to use**

- do not use for mutually exclusive items (i.e. only one option can be correct or active at a time), use the [Radio](https://ec.europa.eu/component-library/ec/components/forms/radio/code/) component instead
- do not use for long or dynamic option lists (i.e. large number or varied input, based on context) - a [Multiple Select](https://ec.europa.eu/component-library/ec/components/forms/select/code/) dropdown is more space-efficient and easier to navigate, particularly on smaller screens
