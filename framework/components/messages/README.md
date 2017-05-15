# Messages (error, warning, information, success)

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. This includes errors, warnings, and general updates. For each kind of warning we use an icon and has a special colour.

Generally a message appears right below the page header.

## Implementation

http://ecfpfisdev.devcloud.acquia-sites.com/sites/all/themes/europa/styleguide/assets/section-messages.html

## When should this be used?

- Error: in forms, when input is missing
- Warning: when certain information is crucial and should not be missed by users. For example when an event is cancelled.
- Information: to communicate information that is not essential for user task completion.
- Success: in forms, when information has been sent by the user.

---

## Why and how to use this component

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
This includes errors, warnings, and general updates. For each kind of warning we use an icon and has a special colour.

## When to use this component
| Status | Colour | Usage |
|---|---|---|
| Success	| EC Green N | Forms / Page notification (bellow the page header) |
| Informative	| EC Blue N	| Forms / Page notification (bellow the page header) |
| Warning	| EC Orange N	| Forms / Page notification (bellow the page header) |
| Error | EC Red N | Forms / Page notification (bellow the page header) |

## When not to use this component
- Don’t include notifications that aren’t related to the user’s current goal.
- But don’t overdo it — too many notifications will either overwhelm or annoy the user and are likely to be ignored.

---
Messages is a component that is used for displaying different types of messages
like:
* info (by default)
* status
* warning
* error
* live

The component messages is defined "info" by default, the "info" type doesn't
exist as class. The "live" type is meant to be used in cases like live streaming
for events.
