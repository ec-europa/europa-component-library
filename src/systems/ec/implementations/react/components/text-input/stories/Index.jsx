/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-text-input/demo/data--default';

import TextInput from '../src/TextInput';

storiesOf('Components|Forms/TextInput', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextInput
      id="example"
      hideLabel={boolean('Hide label', false)}
      label={text('Label', demoContentDefault.label)}
      placeholder={text('Placeholder', demoContentDefault.placeholder)}
      helperText={text('Helper text', 'Help message')}
      invalid={boolean('Invalid', false)}
      invalidText={text('Invalid text', 'Error')}
      disabled={boolean('Disabled', false)}
    />
  ));
