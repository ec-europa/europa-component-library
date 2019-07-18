/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import demoContentDefault from '@ecl/ec-specs-checkbox/demo/data--default';
import demoContentOptInOut from '@ecl/ec-specs-checkbox/demo/data--opt-in-out';

import CheckboxGroup from '../src/CheckboxGroup';

storiesOf('Components|Forms/Checkbox', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <CheckboxGroup
      {...demoContentDefault}
      label={text('Label', demoContentDefault.label)}
      helperText={text('Helper text', demoContentDefault.helperText)}
      invalid={boolean('Invalid', false)}
    />
  ))
  .add('opt-in-out', () => (
    <CheckboxGroup
      {...demoContentOptInOut}
      label={text('Label', demoContentOptInOut.label)}
      helperText={text('Helper text', demoContentOptInOut.helperText)}
      invalid={boolean('Invalid', false)}
    />
  ));
