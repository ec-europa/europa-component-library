---
title: a11y
order: 3
---
The Rating field is an interactive component that allows users to submit an easily quantifiable rating or feedback item from on their experience with a process (e.g. waiting time, form completion, etc.). It can also, potentially, be used for content - e.g. media, translation quality, etc. Multiple sizes and/or icons are being investigated.

### **Do's**

- provide a short, distinct label that clearly describes what is being rated (e.g. 'Rate your experience with this form' or 'Translation quality')
- ensure the rating context is properly specified
- indicate whether the field is optional or mandatory
- use helper text to add context where the rating criteria may not be self-evident
- write specific error messages if validation is applied (e.g. when the field is mandatory and the user attempts to submit without rating)

### **Don'ts**

- avoid using the Rating Field without a label or helper text, unless embedded within another component where the context is already fully established

### **When to use**

- use when collecting feedback on processes or experiences (e.g. form completion, a waiting experience, a service transaction) where a simple numeric score captures the relevant signal
- use when evaluating page or content quality (e.g. rating translation quality or the usefulness of a page), where a structured score is more actionable than a free-text response

### **When not to use**

- do not use in cases where qualitative inputs are more useful - use a [Text field](https://ec.europa.eu/component-library/ec/components/forms/text-field/code/) or [Text area](https://ec.europa.eu/component-library/ec/components/forms/text-area/code/) instead
