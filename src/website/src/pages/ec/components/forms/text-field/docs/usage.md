---
title: Usage
order: 1
---
Keep the Text Field for cases where no more specific component applies. The Text Field is the baseline form input for situations where a user must supply a discrete, limited piece of information that cannot be selected from a predefined list (e.g. names, email addresses, reference numbers, ages, and similar data). Its single-line format sets a clear expectation that a brief response is expected and keeps forms compact and scannable. It is the most general-purpose input in the form component library.

### **Do's**

- arrange text inputs vertically, consistent with the overall form layout
- group related fields and order them logically - in the sequence a user would naturally complete them
- always provide a short, descriptive label placed above the input
- indicate clearly whether the field is optional or mandatory
- include helper text specifying any requirements visibly before the input, rather than only in error messages, after a user tries to submit
- use helper text to set expectations about the kind or format of response required (i.e. specific input needed)
- write specific, descriptive error messages that explain clearly how to resolve a validation issue
- where a character limit applies, display a character counter below the input
- display in a vertical/horizontal stacking
- use size of input to reflect anticipated response length, so users can see their full entry at a glance

### **Don'ts**

- do not restrict special or uncommon characters - in case users may need them for names, technical terms, or multilingual content

### **When to use**

- use for short, discrete data entry where the anticipated response is brief and conforms to a known set of options (e.g. first/last name, email address, postcode, telephone number, etc.)
- use for forms and sign-in flows where the text field is the default input, where the required data is open-ended but short

### **When not to use**

- do not use when the expected input is long or open-ended - opt instead for a [Text area](https://ec.europa.eu/component-library/ec/components/forms/text-area/code/) input, to signal that a more comprehensive answer is welcome
- do not use when the answer must come from a known set of options, to be validated. Use instead a structured selection component such as [Radio](https://ec.europa.eu/component-library/ec/components/forms/radio/code/) for small mutually exclusive sets, [Checkbox](https://ec.europa.eu/component-library/ec/components/forms/checkbox/code/) for multi-select, [Select](https://ec.europa.eu/component-library/ec/components/forms/select/code/) for longer lists
