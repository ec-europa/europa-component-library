import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-text-input/demo/data--default';

import TextInput from '../src/TextInput';

export default {
  title: 'Components/Forms/Text field',
  decorators: [withKnobs],
};

export const Default = () => (
  <TextInput
    id="example"
    label={text('Label', demoContentDefault.label)}
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
      demoContentDefault.width
    )}
  />
);

Default.storyName = 'default';

Default.parameters = {
  knobs: {
    escapeHTML: false,
  },
};
