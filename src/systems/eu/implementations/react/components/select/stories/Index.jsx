/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-select/demo/data';

import Select from '../src/Select';

storiesOf('Components/Forms/Select', module)
  // Example of how to disable an axe-core rule
  /*
  .addParameters({
    a11y: {
      options: {
        rules: { label: { enabled: false } },
      },
    },
  })
  */
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <Select
        id="select-id"
        options={demoContent.options}
        label={text('Label', demoContent.label)}
        helperText={text('Helper text', "This is the input's helper text.")}
        invalid={boolean('Invalid', false)}
        invalidText={text('Invalid text', 'This is the error message')}
        disabled={boolean('Disabled', false)}
        required={boolean('Required', true)}
        requiredText={text('Required text', '*')}
        optionalText={text('Optional text', ' (optional)')}
        width={select(
          'Width',
          {
            small: 's',
            medium: 'm',
            large: 'l',
          },
          demoContent.width
        )}
      />
    ),
    {
      knobs: {
        escapeHTML: false,
      },
    }
  );
