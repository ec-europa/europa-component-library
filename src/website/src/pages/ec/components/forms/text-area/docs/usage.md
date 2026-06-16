---
title: Usage
order: 1
---

The Text Area component places no artificial constraint on the form of an answer - in contrast to all other ECL form inputs. Use the Text Area to solicit inputs when you cannot anticipate the structure or length of responses (e.g. description, explanation, comment, or any free-text feedback). the component's expanded canvas signals to users that a fuller response is expected and welcome, setting expectations before they begin typing.

### **Do's**

- arrange text areas vertically, consistent with the overall form layout
- group related fields and order them logically in the sequence in which a user would naturally complete them
- always provide a short, descriptive label placed above the input
- indicate clearly whether the field is optional or mandatory
- include helper text specifying any requirements before they input, rather than only in error messages after they submit
- use helper text to set expectations about the kind or format of response required (e.g. minimum content, specific detail to include)
- write specific, descriptive error messages that explain clearly how to resolve a validation issue
- display a character counter below the input, where there is a character limit
- size the input area to reflect the expected length of the response, so users can see their full entry at a glance

### **Don'ts**

- do not restrict special or uncommon characters - in case users need them for names, technical terms, or multilingual content

### **When to use**

- use the Text Area whenever the user is expected to provide open-ended or variable-length responses (e.g. descriptions, explanations, messages, feedback, and comments)

### **When not to use**

- do not use when the anticipated input is short and predictable (e.g. name, email address, or a number) - use a [Text field](https://ec.europa.eu/component-library/ec/components/forms/text-field/code/) instead, as it sets the right expectation about response length and is easier to scan in a form layout
- do not use when the answer must come from a known set of options, that is validated. Use instead a structured selection component such as [Radio](https://ec.europa.eu/component-library/ec/components/forms/radio/code/) for small mutually exclusive sets - [Checkbox](https://ec.europa.eu/component-library/ec/components/forms/checkbox/code/) for multi-select, or [Select](https://ec.europa.eu/component-library/ec/components/forms/select/code/) for longer lists
