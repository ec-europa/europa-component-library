---
title: Usage
order: 1
---
The Search Form is a dedicated input component that allows users to submit a keyword query and receive matching results. It is designed for use within the ECL Site Header and features query auto-completion. Related components include [Text field](https://ec.europa.eu/component-library/ec/components/forms/text-field/code/) (for general single-line text input)

### **Do's**

- always include a clearly identifiable label or search indicator with the button triggering the query - users should never be left uncertain about how to submit their search

### **Don'ts**

- do not use placeholder text inside the search input field as it is not reliably accessible to screen readers, and visually disappears on focus, removing a potentially important cue at the moment the user most needs it

### **When to use**

- use for site-level search within the ECL Site Header. It should be present whenever a site needs to offer users the ability to query content across the entire (local) site or global ecosystem

### **When not to use**

- do not use for general text input within forms where the intent is simply to collect text input from a user as part of a form - consider opting for a [Text field](https://ec.europa.eu/component-library/ec/components/forms/text-field/code/) instead
- do not use for inline or page-level filtering (i.e. results filtering within a specific page or dataset) - use dedicated filter patterns instead (such as [Checkbox](https://ec.europa.eu/component-library/ec/components/forms/checkbox/code/) groups, [Select](https://ec.europa.eu/component-library/ec/components/forms/select/code/), or [Category filter](https://ec.europa.eu/component-library/ec/components/category-filter/code/))
