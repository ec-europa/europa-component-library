---
title: Usage
order: 1
---
The modal is an overlay component that temporarily suspends access to the underlying page in order to focus the user's attention on a discrete, time-sensitive next action or piece of information that is necessary. It exists to support flows where a decision, input, or acknowledgement must occur before the user can continue.

As it deliberately interrupts the user, its purpose is necessity, not convenience. A modal should only appear when the task cannot or should not be completed in the main page flow.

### **Do's**

- use modals to capture input that is strictly required to complete a specific step in a workflow
- use modals to surface critical alerts or urgent information that demands immediate acknowledgement
- keep modal content focused and minimal, covering only what is relevant to the immediate task
- provide a clear and accessible way to dismiss the modal, such as a close button and, where appropriate, clicking the overlay
- ensure the modal's purpose is immediately apparent from its title or opening content

### **Don'ts**

- do not use modals as a default pattern for displaying secondary or supplementary content
- do not place information that is essential to ongoing use exclusively inside a modal - that way, users don't risk losing access to something critical upon closing the modal
- do not overload modals with excessive content, multiple decisions, or complex forms - if needed, they belong in a dedicated page
- do not use modals for tasks users are likely to perform repeatedly - repeated interruption can create friction and erode trust
- avoid triggering modals automatically without a user action - this is disorienting and can create accessibility issues

### **When to use**

- use when confirming a consequential action where a mistake would be difficult to reverse, such as deleting a record or submitting a final form. The modal creates a deliberate pause that reduces errors
- use when collecting a small, focused input required to complete a task already in progress (e.g.  choosing a language, confirming a selection, or entering a short reference value). The modal keeps this input in context without navigating the user away
- use to present a critical alert that requires the user to read and respond before continuing (e.g. session timeout warning or a high-priority system notification) and where the interruption is proportionate to the importance and urgency
- use when displaying contextual options or settings directly related to the user's current action, where navigating to a separate page would break continuity

### **When not to use**

- do not use in instances where the content is lengthy or complex (e.g. multi-step forms, long descriptions, or reference material) and where information might be better displayed in a dedicated page or a structured content section
- do not use when the task is non-essential/optional or the user does not need to act immediately and the task could reasonably be deferred or placed in the main page flow
- do not use when the task is repeated frequently. Recurring modals on every interaction cycle erode the user's sense of control and create unnecessary friction. Consider embedding frequently performed actions directly into the page
- do not use when the information could be surfaced without requiring user action or blocking the page - instead, consider using a [Notification](https://ec.europa.eu/component-library/ec/components/notification/code/) or [Tooltip](http://citnet.tech.ec.europa.eu/) which may be more appropriate, less disruptive
