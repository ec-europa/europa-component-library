---
title: Usage
order: 1
---
The Select component is a dropdown form input that presents users with a list of options from which to choose.

The Select component exists in two variants: **single select** (one choice only) and **multi-select** (one or more choices). The single select variant enforces exclusivity and is functionally equivalent to a [Radio](https://ec.europa.eu/component-library/ec/components/forms/radio/code/) group but is better suited to longer option lists. The multi-select variant permits accumulation and thus mirrors [Checkbox](https://ec.europa.eu/component-library/ec/components/forms/checkbox/code/) behaviour, in a space-efficient container. Both variants reduce visual noise when a wide range of options is available.

### **Do's**

- use placeholder text to indicate the type of input (single vs multiple select options) expected before the user opens the dropdown
- choose an appropriate size (small, medium, large) to match the surrounding form layout
- make the label a click target that opens the dropdown
- ensure the clickable area is large enough to be comfortably usable with a cursor and with a finger on touch devices
- group options into logical categories, where applicable, and provide a clear label for each group (option order follows HTML structure, so grouping should be planned)

### **Don'ts**

- don't use the Select component for large items or data that requires complex analysis
- don’t use the multi-select component to limit the number of choices that the user can make - use default instead

### **When to use**

- use **single select** to reduce the excessive vertical space when you have five or more **mutually exclusive options**
- use **multi-select** to reduce the excessive vertical space when you have five or more **non-exclusive options**

### **When not to use**

- do not use for short lists of mutually exclusive options, where a [Radio](https://ec.europa.eu/component-library/ec/components/forms/radio/code/) group is superior by exposing available options without requiring interaction
- do not use for short lists of non-exclusive options, where a [Checkbox](https://ec.europa.eu/component-library/ec/components/forms/radio/code/3) group is superior by exposing available options without requiring interaction
