import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/eu-specs-radio/demo/data--default';
import demoContentBinary from '@ecl/eu-specs-radio/demo/data--binary';

import RadioGroup from '../src/RadioGroup';

export default {
  title: 'Components/Forms/Radio',
  decorators: [withKnobs],
};

export const Default = () => (
  <RadioGroup
    {...demoContentDefault}
    name="radio-group-1"
    helperId="helper-id-1"
    legend={text('Label', demoContentDefault.legend)}
    helperText={text('Helper text', demoContentDefault.helperText)}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', demoContentDefault.invalidText)}
    required={boolean('Required', true)}
    requiredText={text('Required text', '*')}
    optionalText={text('Optional text', ' (optional)')}
  />
);

Default.storyName = 'default';

Default.parameters = {
  knobs: {
    escapeHTML: false,
  },
};

export const Binary = () => (
  <RadioGroup
    {...demoContentBinary}
    name="radio-group-1"
    helperId="helper-id-1"
    legend={text('Label', demoContentBinary.legend)}
    helperText={text('Helper text', demoContentBinary.helperText)}
    invalid={boolean('Invalid', false)}
    invalidText={text('Invalid text', demoContentBinary.invalidText)}
    required={boolean('Required', true)}
    requiredText={text('Required text', '*')}
    optionalText={text('Optional text', ' (optional)')}
  />
);

Binary.storyName = 'binary';

Binary.parameters = {
  knobs: {
    escapeHTML: false,
  },
};
