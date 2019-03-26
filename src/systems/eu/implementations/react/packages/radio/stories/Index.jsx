/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/eu-specs-radio/demo/data--default';
import demoContentBinary from '@ecl/eu-specs-radio/demo/data--binary';

import RadioGroup from '../src/RadioGroup';

storiesOf('Forms/Radio', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <RadioGroup
      {...demoContentDefault}
      label={text('Label', demoContentDefault.label)}
      helperText={text('Helper text', demoContentDefault.helperText)}
      invalid={boolean('Invalid', false)}
    />
  ))
  .add('binary', () => (
    <RadioGroup
      {...demoContentBinary}
      label={text('Label', demoContentBinary.label)}
      helperText={text('Helper text', demoContentBinary.helperText)}
      invalid={boolean('Invalid', false)}
      binary="true"
    />
  ));
