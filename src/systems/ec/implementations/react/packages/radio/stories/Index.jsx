/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-radio/demo/data--default';

import RadioButton from '../src/RadioButton';

storiesOf('Forms/Radio', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <RadioButton
      id="example"
      label={text('Label', demoContentDefault.label)}
      helperText={text('Helper text', 'Help message')}
      disabled={boolean('Disabled', false)}
    />
  ));
