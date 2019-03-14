/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { configureA11y } from '@storybook/addon-a11y';

import demoContentDefault from '@ecl/ec-specs-text-input/demo/data--default';

import TextInput from '../src/TextInput';

// Disable label check
configureA11y({
  rules: [{ id: 'label', enabled: false }],
});

storiesOf('Forms/TextInput', module)
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
