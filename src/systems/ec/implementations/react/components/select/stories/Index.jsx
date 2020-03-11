/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-select/demo/data';

import Select from '../src/Select';

export default {
  title: 'Components/Forms/Select',
  decorators: [withKnobs],
};

export const Default = () => (
  <Select
    id="select-id"
    options={demoContent.options}
    label={text('Label', demoContent.label)}
    helperText={text('Helper text', "This is the input's helper text.")}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', 'This is the error message')}
    disabled={boolean('Disabled', false)}
    required={boolean('Required', true)}
    requiredText={text('Required text', '*')}
    optionalText={text('Optional text', ' (optional)')}
    width={select(
      'Width',
      {
        small: 's',
        medium: 'm',
        large: 'l',
      },
      demoContent.width
    )}
  />
);

Default.story = {
  name: 'default',

  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
