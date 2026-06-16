---
title: a11y
order: 3
---
### Accessible names

Icons can be used standalone (without visible text), especially in mobile interfaces with limited space or in narrow table cells. If an icon is used alone, it absolutely requires a short description for screen reader users.

There is no standard short description for ECL icons, as their meaning can vary by context. As a best practice, describe the icon's function or meaning (e.g., "warning"), not its visual aspect (e.g., "filled orange exclamation mark").

Do not include "icon" in the description, as screen readers will already announce it as an image. For example, say "Warning" instead of "Warning icon".

Complex icons may exceptionally require a long description that would complement the short description. But the short description of its function will be enough in 99% of the cases; describing the visual aspect of the icon bring no value to blind users. Yet the ECL component does have the option to provide two levels of details:

- a short description (coded as a "title")
- a longer one (coded as a "desc")
