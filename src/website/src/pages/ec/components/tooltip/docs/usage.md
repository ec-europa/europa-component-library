---
title: Usage
order: 1
---
The Tooltip provides supplementary information about a UI element, surfaced when a user hovers over an element. Its purpose is to reduce visual clutter by making secondary, explanatory content available only when it is needed.

Tooltips exist to serve users who require context without interrupting the primary task. They are not a substitute for clear labeling - tooltips should only carry content that is secondary to the trigger element's label or function.

### **Do's**

- use tooltips on interactive elements (buttons, links, icons, etc.) that benefit from a brief clarification of their function or destination
- position the tooltip so it does not obscure adjacent interactive elements or critical content
- write tooltip text in plain language, consistent in tone with the surrounding interface
- ensure the trigger element is labelled in a relevant way, independent of the tooltip - it should not get in the way of users who never encounter the tooltip

### **Don'ts**

- do not place essential or required information inside a tooltip - content needed to complete a task must be visible by default
- do not use tooltips to compensate for ambiguous or missing labels on interactive elements - fix the label instead
- do not include interactive content such as links, buttons, or form inputs inside a tooltip
- do not use tooltips on non-interactive elements such as plain text, images, or static icons

### **When to use**

- use on icon-only buttons when there is no visible label - a tooltip provides the accessible name or a brief description of the action, helping users understand the button's function without cluttering the interface
- for abbreviated or truncated labels when the visible label is shortened due to space constraints - a tooltip can surface the full text
- use to add contextual clarification on links (i.e. link's destination or consequence is not obvious from its label alone), where a tooltip can offer a concise clarification that helps users make a more informed decision before clicking
- use to assist with supporting terminology (i.e. technical term or acronym that may not be universally understood) and other cases where a tooltip attached to that term can provide a brief definition without disrupting the reading flow

### **When not to use**

- do not rely on tooltips to convey information to mobile or touch-only users, as hover interactions are unavailable on those devices
- do not use when the trigger is disabled - tooltip content on a disabled control is inaccessible to keyboard and screen reader users. If there is an important reason for disabling an element, surface that explanation inline near the control
- do not use tooltips to display long-form content, instructions, or multiple items. If the content is substantive, consider a [Popover](https://ec.europa.eu/component-library/ec/components/popover/code/)
- do not use as the sole mechanism for conveying status, error or warning information. Consider instead a [Notification](https://ec.europa.eu/component-library/ec/components/notification/code/), so the information is reliably visible without requiring user interaction
