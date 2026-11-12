# Skill: ECL Storybook stories and controls

ECL stories follow a specific three-function pattern. Understanding it is required before
adding or modifying any story controls.

## Before making any changes

Read these two files first — their actual content determines what you can and cannot do:

1. **`{name}.story.js`** — understand the existing `getArgs` / `getArgTypes` / `prepareData`
   signatures. In more complex components they accept `data` as an argument and conditionally
   add controls based on what the data contains (e.g. `if (data.picture) { ... }`).
2. **`demo/`** — list the directory. There may be multiple data files (`data--default.js`,
   `data--image.js`, …). Read the specific one relevant to your task.

## The three functions

```js
// 1. getArgs — extracts flat values from demo data for Storybook controls
//    Only accepts `data` when it actually reads from it.
const getArgs = (data) => ({
  label: data.label,
  variant: data.variant,
  disabled: data.disabled || false,
});

// 2. getArgTypes — defines control UI and constraints
//    Only accepts `data` when it uses it to gate controls conditionally.
const getArgTypes = (data) => {
  const argTypes = {};
  if (data.picture) {
    argTypes.show_picture = { type: 'boolean', ... };
  }
  return argTypes;
};

// 3. prepareData — merges Storybook args back into a deep clone of the data
const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));
  return Object.assign(clone, args);
};
```

`getArgs` and `getArgTypes` must be aligned — every key in `getArgs` should have a
corresponding entry in `getArgTypes`, and vice versa.

**`data` parameter:** only add it to `getArgs` / `getArgTypes` when the function body
actually reads from it. If neither function needs `data`, leave both as `()` and call
them without arguments. Definition and call site must always match.

## Story export pattern

```js
export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const rendered = await ComponentTemplate(prepareData(defaultData, args));
  return rendered;
};
Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes(defaultData);
Default.storyName = 'default';
Default.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(defaultData, args),
  },
};
```

**`parameters.notes.json` must be a function, never a static data reference.** The
notes/code addon uses this value to render the Twig include example shown alongside
the story. If a story has any controls (`getArgTypes` returns anything beyond a bare
`{}`), pass `({ args }) => prepareData(data, args)` so the example updates live as
controls change. A static reference (`json: defaultData`) freezes the example at the
initial data and silently goes stale the moment a control is touched — this is a
regression of FRONT-5377, watch for it when adding new stories or copying an older
one as a template. A static reference is only acceptable when the story truly has no
controls that affect the rendered data (e.g. `controls: { disable: true }`, or an arg
like a JS-only focus toggle that never flows into `prepareData`).

## Multiple stories (variants)

Import additional data files and repeat the export pattern:

```js
import dataWithIcon from './demo/data--with-icon';

export const WithIcon = (_, { loaded: { component } }) => component;
WithIcon.render = async (args) => {
  const rendered = await ComponentTemplate(prepareData(dataWithIcon, args));
  return rendered;
};
WithIcon.args = getArgs(dataWithIcon);
WithIcon.argTypes = getArgTypes(dataWithIcon);
WithIcon.storyName = 'with icon';
```

## Adding a new control

1. Read the story file and the relevant data file first (see above).
2. Add the property to the data file with a sensible default, if it doesn't exist.
3. Add it to `getArgs`, reading from `data` if needed. If `getArgs` gates on
   `data.something`, add your control inside the same gate.
4. Add it to `getArgTypes` with the correct control type. Use `if:` to hide it when
   irrelevant (e.g. when a parent toggle is off).
5. Handle it in `prepareData` — apply it to the clone so the template receives the
   updated value.
6. If it affects the Twig template, update the template too.

**Cloning is required for toggles that clear or delete fields.** Some existing stories
mutate `data` directly instead of cloning it. If you add a toggle that sets a field to
`''` or deletes it, the mutation will persist across re-renders, making the toggle
irreversible. In that case, refactor `prepareData` to use the clone pattern and move
`correctPaths` inside it:

```js
const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));
  if (!args.show_title) {
    clone.title = '';
  }
  // ... other args applied to clone ...
  return clone;
};
```

And update render calls from `prepareData(correctPaths(data), args)` to
`prepareData(data, args)`.

## Color mode control (EC only)

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

## Icon picker control

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

## Conditional visibility with `if:`

Controls can be shown/hidden based on another arg's value:

```js
// Show only when 'show_picture' is truthy
argTypes.picture_src = {
  ...
  if: { arg: 'show_picture' },
};

// Show only when 'picture_position' is NOT 'top'
argTypes.picture_size = {
  ...
  if: { arg: 'picture_position', neq: 'top' },
};
```

## After making changes

**Do not run snapshot tests** after story-only changes. Vitest snapshots render the raw
demo data directly — they are unaffected by `getArgs`, `getArgTypes`, or `prepareData`
changes. Running them is wasted effort unless you also changed the Twig template or
demo data.

## Control types reference

| Type string | Storybook control rendered                           |
| ----------- | ---------------------------------------------------- |
| `'string'`  | Text input                                           |
| `'boolean'` | Toggle                                               |
| `'number'`  | Number input                                         |
| `'range'`   | Slider (requires `min`, `max`, `step` in `argTypes`) |
| `'select'`  | Dropdown (requires `options` array)                  |
| `'object'`  | JSON editor (for nested data — use sparingly)        |
