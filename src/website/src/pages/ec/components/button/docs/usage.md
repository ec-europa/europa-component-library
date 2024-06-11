---
title: Usage
order: 1
---
Buttons trigger an action in a web page. There are 4 variants of the button component with different levels of importance and usages.

# Primary Button

Primary button is designed for users to perform the most important task in a web page. The visual design is more distinguishable from the secondary button.

## Do's

- make sure the button‘s microcopy represents the action such as “Submit“ or “Register“
- use an icon only when it is necessary
- when adding an icon to the text button, ensure the label is descriptive enough when used standalone (icon is not described by screen readers)

## Don'ts

- don't assign an action that should be assigned for a CTA or other variations of buttons
- don't use an icon when it is not relevant or necessary to the action

## When to use

- as a form button such as submit, or save
- perform a new task
- move to the next step
- as a primary action

## When not to use

- do not use for navigation
- do not use for downloads
- do not use when the primary action is negative - use secondary button
- do not use when the action can't be undone, such as delete

# Secondary Button

It is used to represent the secondary action in a web page. It is paired with a primary button. The secondary button serves as the negative action of the pair, such as “Delete,” "Cancel" or “Remove”.

## Do's

- ensure the button functions a negative action, such as "Cancel", "Delete," "Remove" or "Replace" as the secondary action next to the primary button
- follow the order of the button group; right to the primary button
- use an icon only when it is necessary
- when adding an icon to the text button, ensure the label is descriptive enough when used standalone (icon is not described by screen readers)

## Don'ts

- do not use for primary positive actions - Submit, Send, Accept, Apply
- do not use on its own
- don't use an icon when it is not relevant or necessary to the action

## When to use

- to indicate a negative action, to pair it with a primary button
- as a secondary action next to the primary button - such as Cancel, Reject
- next to the primary button if it is a yes and no scenario

## When not to use

- do not use for navigation
- do not place it to the left side of the button group

# Text Button

Text button is used in a web page with less prominent action. It can be grouped with other buttons or placed independently.

## Do's

- make sure the button represents a less important action, such as "Show more", "Expand" or "See details"

## Don'ts

- use it when the action has high importance in the hierarchy

## When to use

- use with low emphasis in a button group
- use on pages/cards when the main focus should be the content and not the button
- when there is a single action intended
- when adding an icon to the text button, ensure the label is descriptive enough when used standalone (icon is not described by screen readers)

## When not to use

- do not use for navigation purpose

# Call to action (CTA) button

Call to action button (CTA) captures users' attention in a web page. To perform an action or to visit another page for more information. The visual style has bright background colour and a high contrast label to indicate the importance of the action.

## Do's

- ensure the button directs to a pre-defined goal, such as 'Search by priority'
- when adding an icon to the text button, ensure the label is descriptive enough when used standalone (icon is not described by screen readers)

## Don'ts

- do not use more than once per page (except where the main action or user goal is repeated on the same page)

## When to use

- for promoting a message, or highly important content you want to draw users' attention

## When not to use

- do not use for site navigation purpose

# B﻿utton with icon only

All buttons can have their label hidden by using button variant ecl-button--icon-only.

- label requires to be filled nonetheless, in order to provide context to screen readers
- Ensure you adapt the label (e.g. "Secondary button") in < span class="ecl-button\_\_label" data-ecl-label="true">Secondary button</span> to the selected icon, to provide the right context to screen readers
