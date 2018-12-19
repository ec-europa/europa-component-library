/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demo from '@ecl/ec-specs-checkbox/demo/data';

import Checkbox from '../Checkbox';

storiesOf('Forms/Checkbox', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const { label } = demo.unchecked;

    return (
      <Checkbox
        id="checkbox-id"
        label={label}
        checked={boolean('checked', false)}
        helperText={text('helperText', 'This is an help text')}
      />
    );
  })
  .add('checked', () => {
    const { label } = demo.checked;

    return (
      <Checkbox
        id="checkbox-id-1"
        label={label}
        checked={boolean('checked', true)}
        helperText={text('helperText', 'This is an help text')}
      />
    );
  })
  .add('disabled', () => {
    const { label } = demo.disabled;

    return (
      <Checkbox
        id="checkbox-id-2"
        label={label}
        checked={boolean('checked', false)}
        helperText={text('helperText', 'This is an help text')}
        disabled={boolean('disabled', true)}
      />
    );
  })
  .add('invalid', () => {
    const { label } = demo.invalid;

    return (
      <Checkbox
        id="checkbox-id-3"
        label={label}
        invalid={boolean('Invalid', true)}
        invalidText={text('invalidText', 'There is an error')}
        helperText={text('helperText', 'This is an help text')}
      />
    );
  });
