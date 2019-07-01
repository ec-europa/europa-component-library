/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-text-input/demo/data--default';

import TextInput from '../src/TextInput';

storiesOf('Components|Forms/Text field', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <TextInput
        id="example"
        hideLabel={boolean('Hide label', false)}
        label={text('Label', demoContentDefault.label)}
        placeholder={text('Placeholder', demoContentDefault.placeholder)}
        helperText={text('Helper text', "This is the input's helper text.")}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', 'This is the error message')}
        disabled={boolean('Disabled', false)}
        required={boolean('Required', true)}
        requiredText={text('Required text', '*')}
        optionalText={text('Optional text', ' (optional)')}
      />
    ),
    {
      knobs: {
        escapeHTML: false,
      },
    }
  );
