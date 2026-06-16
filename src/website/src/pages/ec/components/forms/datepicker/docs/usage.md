---
title: Usage
order: 1
---
The Datepicker exists to reduce input errors and ambiguity when a complete, specific date is required from the user. By combining a structured text field with a visual calendar, it supports both keyboard-proficient users who prefer to type directly and those who benefit from a spatial, visual selection method. It enforces a consistent date format, removing the guesswork that an unstructured text field would invite.

### **Do's**

- allow users to type the date directly into the input field, as well as use the picker interface
- include helper text specifying accepted date formats (e.g. DD-MM-YYYY), placed visibly before the input, not only in error messages after the submission takes place
- write specific and clear error messages, so users understand how to properly address and recover from the error
- implement two separate Datepicker instances with appropriate labels where a user needs to select a date range

### **Don'ts**

- do not restrict entry to the calendar alone

### **When to use**

- use when the date must be validated against a calendar (e.g. validity of the selected date matters and is accepted within a defined range)
- use when the Datepicker provides the necessary constraints that a plain text field cannot

### **When not to use**

- do not use the Datepicker when only a partial date is needed (e.g. year only, or month and year); consider a simpler input such as [Radio select ](https://ec.europa.eu/component-library/ec/components/forms/radio/code/)or [Text field](https://ec.europa.eu/component-library/ec/components/forms/text-field/code/) if it is more appropriate for partial selection or input
