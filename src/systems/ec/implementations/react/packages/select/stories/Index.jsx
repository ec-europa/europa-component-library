/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { configureA11y } from '@storybook/addon-a11y';

import demoContent from '@ecl/ec-specs-select/demo/data';

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
      hideLabel={boolean('Hide label', false)}
      label={text('Label', demoContent.label)}
      helperText={text('Helper text', 'Help message')}
      invalid={boolean('Invalid', false)}
      invalidText={text('Invalid text', 'Error')}
      disabled={boolean('Disabled', false)}
    />
  ));
