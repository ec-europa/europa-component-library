---
title: Usage
order: 1
---

import { Link, Paragraph } from '@ecl/website-components';

<Paragraph size="lead">
  Screen reader utilities let you let you add content visible only to screen
  reading devices.
</Paragraph>

To hide some element on screen, just use the `.ecl-u-sr-only` class.

By adding the extra class `.ecl-u-sr-only--focusable` on it, the element will remain hidden by default on screen, but it will be displayed if focused (with keyboard mostly). This class has to be used with element that can be focused by default (links, button), or with a `tabindex`
