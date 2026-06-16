---
title: a11y
order: 3
---

### Accessible names

Designers can use both text and icons on buttons.\
\
If a button's function is clear without the icon (e.g., a decorative arrow on a call-to-action), the icon doesn't need a description for blind users; the text is sufficient.\
Conversely, if an icon provides complementary information to the textual label, it must be described.

Icons can be used standalone on buttons, such as in mobile interfaces, social media lists, or search fields showing only a magnifying glass. When used alone, they require a description for screen reader users.

There is no standard description for ECL icons, as their meaning can vary by context. For icons on buttons, describe the icon's function (e.g., 'download') rather than its visual appearance (e.g., 'blue arrow down in a square').

Avoid adding 'click to' to button descriptions, as users may interact via tap, voice, or keyboard. For example, use 'Download' instead of 'Click to download'.

If an indicator with a small pin is shown, its meaning must be explained to blind users, who will not see the superscript number or have context. Complete the number with what it refers to (e.g., 'items not read', 'new items', 'draft documents') so the screen reader pronounces it clearly. The screen reader of blind users will pronounce for instance '2 items not read'.

### Accessible icons

Icons can be used standalone (without visible text), especially in mobile interfaces with limited space or in narrow table cells. If an icon is used alone, it absolutely requires a short description for screen reader users.

For icons on push buttons, such as a table sorter, the icon's description must convey the action that will occur upon activation (the 'function'), not the current status. For instance, an upward arrow on an ascendingly sorted table column header should be described as 'Sort descending', as clicking it will reverse the order.

There is no standard short description for ECL icons, as their meaning can vary by context. As a best practice, describe the icon's function or meaning (e.g., "warning"), not its visual aspect (e.g., "filled orange exclamation mark").

Do not include "icon" in the description, as screen readers will already announce it as an image. For example, say "Warning" instead of "Warning icon".

Complex icons may exceptionally require a long description that would complement the short description. But the short description of its function will be enough in 99% of the cases; describing the visual aspect of the icon brings no value to blind users. Yet the ECL component does have the option to provide two levels of details:

- a short description (coded as a "title")
- a longer one (coded as a "desc")
