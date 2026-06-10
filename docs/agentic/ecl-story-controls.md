# Skill: ECL Storybook stories and controls

ECL stories follow a specific three-function pattern. Understanding it is required before
adding or modifying any story controls.

## The three functions

```js
// 1. getArgs — extracts flat values from demo data for Storybook controls
const getArgs = (data) => ({
  label: data.label,
  variant: data.variant,
  disabled: data.disabled || false,
});

// 2. getArgTypes — defines control UI and constraints
const getArgTypes = () => ({
  label: { type: { name: 'string' } },
  variant: {
    type: { name: 'select' },
    options: ['primary', 'secondary', 'ghost'],
  },
  disabled: { type: { name: 'boolean' } },
});

// 3. prepareData — merges Storybook args back into a deep clone of the data
const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));
  return Object.assign(clone, args);
};
```

`getArgs` and `getArgTypes` must be aligned — every key in `getArgs` should have a
corresponding entry in `getArgTypes`, and vice versa.

## Story export pattern

```js
export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const rendered = await ComponentTemplate(prepareData(defaultData, args));
  return rendered;
};
Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes();
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
WithIcon.argTypes = getArgTypes();
WithIcon.storyName = 'with icon';
```

## Adding a new control

1. Add the property to `demo/data.js` with a sensible default.
2. Add it to `getArgs`, reading from `data`.
3. Add it to `getArgTypes` with the correct control type.
4. Handle it in `prepareData` if it needs transformation before reaching the template.
5. Use it in the Twig template.

## Control types reference

| Type string | Storybook control rendered                           |
| ----------- | ---------------------------------------------------- |
| `'string'`  | Text input                                           |
| `'boolean'` | Toggle                                               |
| `'number'`  | Number input                                         |
| `'range'`   | Slider (requires `min`, `max`, `step` in `argTypes`) |
| `'select'`  | Dropdown (requires `options` array)                  |
| `'object'`  | JSON editor (for nested data — use sparingly)        |
