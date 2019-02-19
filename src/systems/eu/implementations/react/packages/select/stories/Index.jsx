/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { configureA11y } from '@storybook/addon-a11y';

import demoContent from '@ecl/eu-specs-select/demo/data';

import Select from '../src/Select';

// Disable label check
configureA11y({
  rules: [{ id: 'label', enabled: false }],
});

storiesOf('Forms/Select', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Select
      id="select-id"
      options={demoContent.options}
      label={text('Label', demoContent.label)}
      invalid={boolean('Invalid', false)}
      invalidText={text('invalidText', 'Error')}
      helperText={text('helperText', 'Help message')}
      disabled={boolean('Disabled', false)}
    />
  ));
