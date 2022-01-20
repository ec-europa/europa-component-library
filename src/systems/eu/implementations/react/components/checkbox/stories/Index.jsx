import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import demoContentDefault from '@ecl/eu-specs-checkbox/demo/data--default';

import CheckboxGroup from '../src/CheckboxGroup';

export default {
  title: 'Components/Forms/Checkbox',
  decorators: [withKnobs],
};

export function Default() {
  return (
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
  );
}

Default.storyName = 'default';
