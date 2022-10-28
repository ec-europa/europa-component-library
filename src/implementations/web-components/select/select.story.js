import { html } from 'lit-html';
import { withNotes } from '@ecl/storybook-addon-notes';
import iconPathEc from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import iconPathEu from '@ecl/resources-eu-icons/dist/sprites/icons.svg';

import dataDemo from '@ecl/specs-component-select/demo/data-single';
import dataMultiple from '@ecl/specs-component-select/demo/data-multiple';
import select from './src/scripts/ecl-select';
import notes from './README.md';

const getArgs = (data) => ({
  system: 'ec',
  label: data.label,
  id: data.id,
  required: data.required,
  iconPath: data.system === 'eu' ? iconPathEu : iconPathEc,
  attributes: {},
  requiredText: data.required_text,
  optionalText: data.optional_text,
  helperText: data.helper_text,
  disabled: false,
});

const getArgTypes = () => ({
  system: {
    name: 'data-system',
    type: { name: 'select' },
    options: ['ec', 'eu'],
    description: 'EC or EU',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Style',
    },
  },
  label: {
    name: 'label',
    type: { name: 'string' },
    description: 'Label for the form group',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  helperText: {
    name: 'helper text',
    type: { name: 'string' },
    description: 'Text of the help block',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  requiredText: {
    name: 'required string',
    type: { name: 'string' },
    description: 'Text in red eg: *',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  optionalText: {
    name: 'text',
    type: { name: 'string' },
    description: 'text for optional selects',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  required: {
    name: 'required',
    type: { name: 'boolean' },
    description: 'required attribute for the select',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
      category: 'States',
    },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean' },
    description: 'required attribute for the select',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
      category: 'States',
    },
  },
  iconPath: {
    name: 'data-icon-path',
    type: { name: 'string' },
    description: 'Path to the icon sprite',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  attributes: {
    name: 'attributes',
    type: { name: 'object' },
    description: 'attributes for the root element',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

export default {
  title: 'Components/Select',
  decorators: [withNotes],
};

export const Default = (args) => html`<ecl-select
  data-options="${JSON.stringify(dataDemo.options)}"
  data-system="${args.system}"
  ?required=${args.required}
  ?disabled=${args.disabled}
  data-icon-path="${args.iconPath}"
  data-label="${args.label}"
  data-helper-text="${args.helperText}"
  data-required-text="${args.requiredText}"
  data-optional-text="${args.optionalText}"
>
</ecl-select>`;

Default.args = getArgs(dataDemo);
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes },
};

export const Multiple = (args) => html`<ecl-select
  data-options="${JSON.stringify(dataDemo.options)}"
  data-system="${args.system}"
  ?required=${args.required}
  ?disabled=${args.disabled}
  multiple
  data-icon-path="${args.iconPath}"
  data-label="${args.label}"
  data-helper-text="${args.helperText}"
  data-ecl-auto-init
  data-ecl-select-multiple
  data-ecl-select-all="${dataMultiple.multiple_all_text}"
  data-ecl-multiple-placeholder="${dataMultiple.multiple_placeholder}"
  data-ecl-select-close="${dataMultiple.multiple_close_text}"
  data-ecl-select-no-results="${dataMultiple.multiple_search_no_results_text}"
  data-ecl-select-search="${dataMultiple.multiple_search_text}"
  data-ecl-select-clear-all="${dataMultiple.multiple_clear_all_text}"
  data-ecl-script
  data-required-text="${args.requiredText}"
  data-optional-text="${args.optionalText}"
>
</ecl-select>`;

Multiple.args = getArgs(dataDemo);
Multiple.argTypes = getArgTypes();
Multiple.storyName = 'multiple';
Multiple.parameters = {
  notes: { markdown: notes },
};
