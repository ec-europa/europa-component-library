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
  notes: { markdown: notes, json: defaultData },
};
```

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

**Do not run snapshot tests** after story-only changes. Jest snapshots render the raw
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
