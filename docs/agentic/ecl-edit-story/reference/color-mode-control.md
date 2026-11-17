# Color mode control (EC only)

Components that support EC color modes accept a `color_mode` Twig param and add
`ecl-color-mode--{mode}` to the root class. Never hand-write the option list — use the
shared helper from `@ecl/story-utils`, which returns `{}` on EU so the control
disappears automatically:

```js
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// getArgs — gate on the system, or EU gets an arg with no matching argType
if (getSystem() === 'ec') {
  args.color_mode = 'default';
}

// getArgTypes — spread first so it sits at the top of the panel
const argTypes = { ...getColorModeControls() };
// or show it conditionally, same shape as `if:` below
const argTypes = { ...getColorModeControls({ arg: 'has_background' }) };
```

No `prepareData` handling is needed: the control's `mapping` turns `'default'` into `''`
and `'green dark'` into `'green-dark'`, and the value reaches the template through
`Object.assign(clone, args)`. If the template doesn't read `color_mode` yet, add it
there (see `blockquote.html.twig`).
