# Icon picker control

Icons are Phosphor. Build the select from the generated list rather than hardcoding
names, and add a `'none'` option so the icon can be removed:

```js
import iconsAll from '@ecl/resources-icons/list-phosphor.json';

// Copy, don't `unshift` — the JSON module is shared across stories
const iconOptions = ['none', ...iconsAll];

// getArgs
args.icon_name = 'none';
args.icon_title = '';

// getArgTypes
argTypes.icon_name = {
  name: 'icon name',
  type: { name: 'select' },
  description: 'Name of the icon',
  options: iconOptions,
  table: { type: { summary: 'string' }, category: 'Icon' },
};
argTypes.icon_title = {
  name: 'icon title',
  type: 'string',
  description: 'Textual information for the icon, mostly for screen readers',
  table: { type: { summary: 'string' }, category: 'Icon' },
  if: { arg: 'icon_name', neq: 'none' },
};

// prepareData — build the icon object, or delete it so the template falls back
if (args.icon_name && args.icon_name !== 'none') {
  clone.icon = {
    family: 'phosphor',
    name: args.icon_name,
    title: args.icon_title,
  };
} else {
  delete clone.icon;
}
```

- Hide every icon-related control (`icon_title`, size, position…) with
  `if: { arg: 'icon_name', neq: 'none' }`.
- Keep the icon object's other fields (`size`, `transform`) in `prepareData` rather than
  as controls unless the user asks for them.
- To also offer flags, add a `mapping` that resolves each option to
  `{ name, family }` (`family: 'flags'` for entries from `list-flag-eu-member.json`) —
  see `tag.story.js`. Social/brand icons use `family: 'networks'`; never offer those
  through a Phosphor picker.
