import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

// Import data for demos
import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';
import iconsAllEu from '@ecl/resources-eu-icons/dist/lists/all.json';
import dataPrimary from '@ecl/specs-component-button/demo/data--primary';
import dataSecondary from '@ecl/specs-component-button/demo/data--secondary';
import dataCall from '@ecl/specs-component-button/demo/data--call';
import dataGhost from '@ecl/specs-component-button/demo/data--ghost';

import button from './button.html.twig';
import notes from './README.md';

const system = getSystem();
const iconsAll = system === 'eu' ? iconsAllEu : iconsAllEc;

// Create 'none' option.
iconsAll.unshift('none');

const getArgs = () => ({
  icon_name: 'none',
  icon_position: 'after',
  disabled: false,
});

const getArgTypes = () => {
  const argTypes = {};
  argTypes.label = {
    name: 'label',
    type: { name: 'string', required: true },
    description: 'The main label of the button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };
  argTypes.icon_name = {
    name: 'icon name',
    description: 'Button icon',
    type: { name: 'select' },
    options: iconsAll,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
  };
  argTypes.icon_transform = {
    name: 'icon transform',
    type: { name: 'select' },
    description: 'Button icon transform',
    options: [
      'rotate-90',
      'rotate-180',
      'rotate-270',
      'flip-horizontal',
      'flip-vertical',
    ],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
  };
  argTypes.icon_position = {
    name: 'icon position',
    type: { name: 'inline-radio' },
    description: 'Icon position inside the button',
    options: ['before', 'after'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'after' },
      category: 'Icon',
    },
  };
  argTypes.disabled = {
    name: 'disabled',
    type: { name: 'boolean' },
    description: 'Disabled button',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
    control: {
      type: 'boolean',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.label = args.label;
  data.disabled = args.disabled;
  if (args.icon_name && args.icon_name !== 'none') {
    data.icon = {};
    data.icon.name = args.icon_name;
    data.icon.size = system === 'eu' ? 's' : 'xs';
    data.icon.path = 'icon.svg';
    data.icon.transform = args.icon_transform;
    data.icon_position = args.icon_position;
  }
  if (args.icon_name === 'none') {
    delete data.icon;
  }
  correctSvgPath(data);

  return data;
};

export default {
  title: 'Components/Button',
  argTypes: getArgTypes(),
  args: getArgs(),
  decorators: [withCode, withNotes],
};

export const Primary = (args) => button(prepareData(dataPrimary, args));

Primary.args = {
  label: dataPrimary.label,
};
Primary.storyName = 'primary';
Primary.parameters = {
  notes: { markdown: notes, json: dataPrimary },
};

export const Secondary = (args) => button(prepareData(dataSecondary, args));

Secondary.args = {
  label: dataSecondary.label,
};
Secondary.storyName = 'secondary';
Secondary.parameters = {
  notes: { markdown: notes, json: dataSecondary },
};

export const CallToAction = (args) => button(prepareData(dataCall, args));

CallToAction.args = {
  label: dataCall.label,
  icon_name: 'corner-arrow',
  icon_transform: 'rotate-90',
};
CallToAction.storyName = 'call to action';
CallToAction.parameters = {
  notes: { markdown: notes, json: dataCall },
};

export const Ghost = (args) => button(prepareData(dataGhost, args));

Ghost.args = {
  label: dataGhost.label,
};
Ghost.storyName = 'text';
Ghost.parameters = {
  notes: { markdown: notes, json: dataGhost },
};
