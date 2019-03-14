/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import { configureA11y } from '@storybook/addon-a11y';

import demoContentDefault from '@ecl/eu-specs-text-area/demo/data--default';

import TextArea from '../src/TextArea';

// Disable label check
configureA11y({
  rules: [{ id: 'label', enabled: false }],
});

storiesOf('Forms/TextArea', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextArea
      id="example"
      hideLabel={boolean('Hide label', false)}
      label={text('Label', demoContentDefault.label)}
      rows={number('Rows', demoContentDefault.rows)}
      placeholder={text('Placeholder', demoContentDefault.placeholder)}
      helperText={text('Helper text', 'Help message')}
      invalid={boolean('Invalid', false)}
      invalidText={text('Invalid text', 'Error')}
      disabled={boolean('Disabled', false)}
    />
  ));
