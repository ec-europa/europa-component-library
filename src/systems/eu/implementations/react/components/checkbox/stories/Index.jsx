/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import demoContentDefault from '@ecl/eu-specs-checkbox/demo/data--default';

import CheckboxGroup from '../src/CheckboxGroup';

storiesOf('Components|Forms/Checkbox', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <CheckboxGroup
      {...demoContentDefault}
      helperText={text('Helper text', demoContentDefault.helperText)}
      invalid={boolean('Invalid', false)}
      invalidText={text('Error message', demoContentDefault.invalidText)}
      legend={text('Legend', demoContentDefault.legend)}
      optionalText={text('Optional text', ' (optional)')}
      required={boolean('Required', false)}
      requiredText={text('Required text', '*')}
    />
  ));
