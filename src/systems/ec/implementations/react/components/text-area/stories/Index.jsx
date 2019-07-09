/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-text-area/demo/data--default';

import TextArea from '../src/TextArea';

storiesOf('Components|Forms/TextArea', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <TextArea
        id="example"
        label={text('Label', demoContentDefault.label)}
        rows={number('Rows', demoContentDefault.rows)}
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
