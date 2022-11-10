import { html } from 'lit-html';
import { withNotes } from '@ecl/storybook-addon-notes';
import iconPathEc from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import iconPathEu from '@ecl/resources-eu-icons/dist/sprites/icons.svg';
import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';
import iconsAllEu from '@ecl/resources-eu-icons/dist/lists/all.json';

import demoData from '@ecl/specs-component-button/demo/data--primary';
import button from './src/scripts/ecl-button';
import notes from './README.md';

iconsAllEc.unshift('none');
iconsAllEu.unshift('none');

const getArgs = (data) => ({
  system: 'ec',
  variant: 'primary',
  label: data.label,
  iconPath: data.system === 'eu' ? iconPathEu : iconPathEc,
  disabled: false,
  iconName: '',
  iconPosition: 'after',
  iconTransform: '',
});

const getArgTypes = (args) => ({
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
  variant: {
    name: 'data-variant',
    type: { name: 'select' },
    options: ['primary', 'secondary', 'call', 'ghost'],
    description: 'Button variant',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Style',
    },
  },
  label: {
    name: 'data-label',
    type: { name: 'string' },
    description: 'Label for the button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  disabled: {
    name: 'data-disabled',
    type: { name: 'boolean' },
    description: 'required attribute for the button',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
      category: 'States',
    },
  },
  iconName: {
    name: 'data-icon-name',
    type: { name: 'select' },
    description: 'Name of the icon',
    options: args.system === 'ec' ? iconsAllEc : iconsAllEu,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
  },
  iconPath: {
    name: 'data-icon-path',
    type: { name: 'string' },
    description: 'Path to the icon sprite',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
  },
  iconPosition: {
    name: 'data-icon-position',
    type: { name: 'select' },
    options: ['after', 'before'],
    description: 'Position of the icon (before or after)',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'after' },
      category: 'Icon',
    },
  },
  iconTransform: {
    name: 'icon transformation',
    type: { name: 'select' },
    description: 'A transformation applied to the icon',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    options: [
      'none',
      'rotate-90',
      'rotate-180',
      'rotate-270',
      'flip-horizontal',
      'flip-vertical',
    ],
    control: {
      labels: {
        none: 'none',
        'rotate-90': '90° rotation',
        'rotate-180': '180° rotation',
        'rotate-270': '270° rotation',
        'flip-horizontal': 'horizontal flip',
        'flip-vertical': 'vertical flip',
      },
    },
  },
});

const checkIconPath = (args) => {
  if (args.system === 'eu') {
    return iconPathEu;
  }

  return iconPathEc;
};

export default {
  title: 'Components/Button',
  decorators: [withNotes],
};

export const Default = (args) => html`<ecl-button
  data-system="${args.system}"
  ?data-disabled=${args.disabled}
  data-icon-path="${checkIconPath(args)}"
  data-icon-transform="${args.iconTransform}"
  data-icon-position="${args.iconPosition}"
  data-label="${args.label}"
  data-icon-name="${args.iconName}"
  data-variant="${args.variant}"
  data-icon-path="${args.iconPath}"
>
</ecl-button>`;

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
