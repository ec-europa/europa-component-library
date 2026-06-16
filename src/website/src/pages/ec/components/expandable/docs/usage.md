---
title: Usage
order: 1
---
The expandable component is part of the progressive disclosure solutions, designed to reduce visual complexity on a page by deferring secondary or supplementary content until the user actively requests it. They help keep the interface clean and reduce scrolling by saving vertical space, while indicating additional content the user can select.

### **Do's**

- use a button label for each item with a short, distinct title that reflects the hidden content. The label should make clear to a user what to expect if they expand
- make sure to include a toggle label that reflects the current state (i.e. collapsed 'Show details' vs expanded 'Hide details') to help users understand where they are, and the required interaction

### **Don'ts**

- do not hide important information that should be present at all times, or is needed for users to complete their task
- do not nest Expandables within one another - this would compound cognitive load and make it difficult for users to track their position within the content

### **When to use**

- when there is optional technical or legal information relevant to some users that would increase page length unnecessarily for others
- when you can make extensive and complex content easier to digest through descriptive labels
- when you want to offer a complementary text version to an infographic (used through [Media Container](https://ec.europa.eu/component-library/ec/components/media/media-container/code/))

### **When not to use**

- do not use the Expandable as a substitute for page navigation or sectioning

  - if the content is substantial enough to warrant its own structure, consider a dedicated page

- do not use consecutively to hide multiple related sections, use [Accordions](https://ec.europa.eu/component-library/ec/components/accordion/code/) instead
- don't use if the page already has limited content (i.e. reading time: under 3 minutes). It adds unnecessary interaction cost - simply displaying the content is more appropriate
