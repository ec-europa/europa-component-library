/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/eu-specs-radio/demo/data--default';
import demoContentBinary from '@ecl/eu-specs-radio/demo/data--binary';

import RadioGroup from '../src/RadioGroup';

storiesOf('Components|Forms/Radio', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <RadioGroup
        {...demoContentDefault}
        name="radio-group-1"
        legendId="legend-id-1"
        helperId="helper-id-1"
        legend={text('Label', demoContentDefault.legend)}
        helperText={text('Helper text', demoContentDefault.helperText)}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', demoContentDefault.invalidText)}
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
  )
  .add(
    'binary',
    () => (
      <RadioGroup
        {...demoContentBinary}
        name="radio-group-1"
        legendId="legend-id-1"
        helperId="helper-id-1"
        legend={text('Label', demoContentBinary.legend)}
        helperText={text('Helper text', demoContentBinary.helperText)}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', demoContentBinary.invalidText)}
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
