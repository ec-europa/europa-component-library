/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-select/demo/data';

import Select from '../src/Select';

storiesOf('Components|Forms/Select', module)
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
